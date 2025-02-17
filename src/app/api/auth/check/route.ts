import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth';

const JWT_SECRET = process.env.JWT_SECRET || 'votre_secret_super_securise';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const token = cookies().get('auth_token');
    
    if (!token) {
      return NextResponse.json(
        { success: false, error: 'Token non fourni' },
        { status: 401 }
      );
    }

    const payload = await verifyToken(token.value);
    if (!payload) {
      return NextResponse.json(
        { success: false, error: 'Token invalide' },
        { status: 401 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      user: payload 
    });
  } catch (error) {
    console.error('Erreur de vérification du token:', error);
    return NextResponse.json(
      { success: false, error: 'Token invalide' },
      { status: 401 }
    );
  }
}
