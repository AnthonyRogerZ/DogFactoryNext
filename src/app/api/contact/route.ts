import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialiser SendGrid avec votre clé API
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

if (!SENDGRID_API_KEY) {
  console.error('SENDGRID_API_KEY is not set in environment variables');
}
console.log('SendGrid API Key:', SENDGRID_API_KEY ? 'Present' : 'Missing');
sgMail.setApiKey(SENDGRID_API_KEY || '');

async function verifyCaptcha(token: string) {
  try {
    console.log('Verifying captcha token...');
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const data = await response.json();
    console.log('Captcha verification result:', data);
    return data.success;
  } catch (error) {
    console.error('Error verifying captcha:', error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    console.log('Received contact form submission');
    const body = await request.json();
    const { name, email, phone, message, captchaToken } = body;

    console.log('Form data:', { name, email, phone, message: message.substring(0, 50) + '...' });

    // Vérification des champs requis
    if (!name || !email || !message) {
      console.error('Missing required fields');
      return NextResponse.json(
        { error: 'Tous les champs requis doivent être remplis' },
        { status: 400 }
      );
    }

    // Vérification du captcha
    if (!captchaToken) {
      console.error('Missing captcha token');
      return NextResponse.json(
        { error: 'Veuillez valider le captcha' },
        { status: 400 }
      );
    }

    const isValidCaptcha = await verifyCaptcha(captchaToken);
    if (!isValidCaptcha) {
      console.error('Invalid captcha');
      return NextResponse.json(
        { error: 'Captcha invalide' },
        { status: 400 }
      );
    }

    console.log('Captcha verified successfully');

    // Configuration de l'email
    const msg = {
      to: 'contact@dogfactory.fr',
      from: {
        email: 'contact@dogfactory.fr',
        name: 'Dog Factory'
      },
      subject: `Nouveau message de ${name}`,
      text: `
        Nom: ${name}
        Email: ${email}
        Téléphone: ${phone || 'Non renseigné'}
        
        Message:
        ${message}
      `,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone || 'Non renseigné'}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    console.log('Email configuration:', {
      to: msg.to,
      from: msg.from,
      subject: msg.subject
    });

    try {
      console.log('Attempting to send email via SendGrid...');
      const [response] = await sgMail.send(msg);
      console.log('SendGrid Response:', {
        statusCode: response?.statusCode,
        headers: response?.headers,
        body: response?.body
      });
    } catch (error: any) {
      console.error('SendGrid detailed error:', {
        message: error.message,
        response: error.response?.body,
        code: error.code,
        stack: error.stack
      });
      throw error;
    }

    return NextResponse.json(
      { message: 'Email envoyé avec succès' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Detailed error:', error);
    console.error('Error response body:', error.response?.body);
    return NextResponse.json(
      { 
        error: 'Erreur lors de l\'envoi de l\'email',
        details: error.response?.body || error.message
      },
      { status: 500 }
    );
  }
}
