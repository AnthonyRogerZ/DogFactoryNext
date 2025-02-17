import { NextResponse } from 'next/server';
import { SignJWT } from 'jose';
import { cookies } from 'next/headers';

const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    console.log('Login attempt:', { username });

    // Vérifier les identifiants
    const isValidUsername = username === ADMIN_USERNAME;
    const isValidPassword = password === ADMIN_PASSWORD;

    console.log('Credentials check:', { 
      expectedUsername: ADMIN_USERNAME,
      expectedPassword: ADMIN_PASSWORD,
      isValidUsername,
      isValidPassword 
    });

    if (!isValidUsername || !isValidPassword) {
      console.log('Invalid credentials');
      return NextResponse.json(
        { success: false, error: 'Identifiants invalides' },
        { status: 401 }
      );
    }

    // Créer le token JWT
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new SignJWT({ username })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('24h')
      .sign(secret);

    // Définir le cookie
    cookies().set('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 // 24 heures
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la connexion' },
      { status: 500 }
    );
  }
}
