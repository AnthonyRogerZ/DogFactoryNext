import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

const GA_TRACKING_ID = "G-WXE1QZPF64"; // Remplace par ton propre ID GA

export const metadata: Metadata = {
  metadataBase: new URL('https://dogfactory.fr'),
  title: 'Dog Factory - Salon de toilettage à Vaux-le-Pénil',
  description:
    'Salon de toilettage professionnel à Vaux-le-Pénil. Prenez rendez-vous pour le bien-être de votre compagnon.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Dog Factory - Salon de toilettage à Vaux-le-Pénil',
    description:
      'Salon de toilettage professionnel à Vaux-le-Pénil. Prenez rendez-vous pour le bien-être de votre compagnon.',
    url: 'https://dogfactory.fr',
    siteName: 'Dog Factory',
    locale: 'fr_FR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: 'N8NtUQMv6mSrDHa0PDv8cefv9Bv6R2zoM2Yb-308vvM',
  },
  alternates: {
    canonical: 'https://www.dogfactory.fr',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
          nonce="ga-script"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          nonce="ga-inline"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col">
          <Header />
          <main className="flex-grow min-h-screen">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
