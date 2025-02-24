import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from '@/lib/auth';

// Liste des anciens chemins WordPress à rediriger
const wpRedirects = [
  { oldPath: '/index.php', newPath: '/' },
  { oldPath: '/wp-content/uploads', newPath: '/images' },
  { oldPath: '/category', newPath: '/categories' },
  { oldPath: '/tag', newPath: '/tags' },
  { oldPath: '/author', newPath: '/team' },
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log('Middleware - URL:', pathname);

  // Redirection HTTPS
  if (request.headers.get('x-forwarded-proto') !== 'https') {
    return NextResponse.redirect(new URL(request.url.replace('http://', 'https://')));
  }

  // Gestion des redirections WordPress
  for (const redirect of wpRedirects) {
    if (pathname.startsWith(redirect.oldPath)) {
      const newUrl = pathname.replace(redirect.oldPath, redirect.newPath);
      return NextResponse.redirect(new URL(newUrl, request.url), {
        status: 301
      });
    }
  }

  // Suppression des slashes trailing
  if (pathname !== '/' && pathname.endsWith('/')) {
    return NextResponse.redirect(
      new URL(pathname.slice(0, -1), request.url),
      { status: 301 }
    );
  }

  let response = NextResponse.next();

  // Headers de sécurité et SEO
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  response.headers.set('Content-Security-Policy', "default-src 'self'; img-src * data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.google.com https://*.gstatic.com https://*.googletagmanager.com https://*.google-analytics.com; style-src 'self' 'unsafe-inline'; frame-ancestors 'none'; connect-src 'self' https://*.google-analytics.com https://*.googletagmanager.com https://*.google.com");
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  // Retirer le header X-Powered-By pour la sécurité
  response.headers.delete('x-powered-by');

  // Skip auth check for login page and API routes
  if (request.nextUrl.pathname === '/admin/login' || request.nextUrl.pathname.startsWith('/api/')) {
    console.log('Skipping auth check for:', request.nextUrl.pathname);
    return response;
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
      return response;
    } catch (error) {
      console.log('Token verification failed:', error);
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ]
};
