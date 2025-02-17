import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'votre_secret_super_securise';

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get('cookie');
    const token = authHeader?.split(';').find(c => c.trim().startsWith('auth_token='))?.split('=')[1];

    console.log('Vérification du token:', token ? 'présent' : 'absent');

    if (!token) {
      console.log('Pas de token trouvé');
      return NextResponse.json(
        { success: false, error: 'Token non fourni' },
        { status: 401 }
      );
    }

    const decoded = verify(token, JWT_SECRET);
    console.log('Token vérifié avec succès:', decoded);
    
    return NextResponse.json({ 
      success: true, 
      user: decoded 
    });
  } catch (error) {
    console.error('Erreur de vérification du token:', error);
    return NextResponse.json(
      { success: false, error: 'Token invalide' },
      { status: 401 }
    );
  }
}
