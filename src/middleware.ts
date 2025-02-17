import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from '@/lib/auth';

export async function middleware(request: NextRequest) {
  console.log('Middleware - URL:', request.nextUrl.pathname);

  // Skip auth check for login page and API routes
  if (request.nextUrl.pathname === '/admin/login' || request.nextUrl.pathname.startsWith('/api/')) {
    console.log('Skipping auth check for:', request.nextUrl.pathname);
    return NextResponse.next();
  }

  // Only check auth for admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    console.log('Checking auth for admin route');
    
    const token = request.cookies.get('auth_token');
    console.log('Token found:', token ? 'yes' : 'no');

    if (!token) {
      console.log('No token, redirecting to login');
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    try {
      const payload = await verifyToken(token.value);
      if (!payload) {
        throw new Error('Invalid token');
      }
      console.log('Token verified successfully');
      return NextResponse.next();
    } catch (error) {
      console.log('Token verification failed:', error);
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*']
}
