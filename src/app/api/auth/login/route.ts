import { NextRequest, NextResponse } from 'next/server';
import { signToken } from '@/lib/auth';

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'password';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { username, password } = body;

    console.log('Tentative de connexion:', { username });

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      const token = await signToken({ username });
      
      const response = NextResponse.json({ 
        success: true,
        message: 'Connexion réussie'
      });

      // Définir le cookie avec les bons paramètres
      response.cookies.set('auth_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 3600 // 1 hour
      });

      console.log('Token généré et cookie défini');
      return response;
    }

    console.log('Identifiants invalides');
    return NextResponse.json(
      { success: false, error: 'Identifiants invalides' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}
