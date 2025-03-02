import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

const GA_TRACKING_ID = "G-WXE1QZPF64"; // Remplacez par votre propre ID GA

export const metadataGalerie: Metadata = {
  title: 'Galerie - Dog Factory | Salon de toilettage canin',
  description: 'Découvrez notre galerie de photos du salon Dog Factory, spécialisé dans le toilettage canin à Paris. Admirez les transformations de nos amis à quatre pattes.',
};

export const metadataPrestations: Metadata = {
  title: 'Nos Prestations | Dog Factory',
  description: 'Découvrez nos prestations de toilettage canin à Vaux-le-Pénil. Toilettage complet, bain, tonte et soins adaptés pour votre chien.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Création dynamique du JSON‑LD pour éviter les différences d'encodage
  const structuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Dog Factory",
    "image": ["https://dogfactory.fr/images/leon.png"],
    "telephone": "06 58 16 61 05",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "79 Rue de la Baste",
      "addressLocality": "Vaux-le-Pénil",
      "postalCode": "77000",
      "addressCountry": "FR"
    },
    "url": "https://dogfactory.fr",
    "priceRange": "$$",
    "description": "Salon de toilettage professionnel à Vaux-le-Pénil. Prenez rendez-vous pour le bien-être de votre compagnon."
  });

  const metadata = {
    metadataBase: new URL("https://dogfactory.fr"),
    title: "Dog Factory - Salon de toilettage à Vaux-le-Pénil",
    description:
      "Salon de toilettage professionnel à Vaux-le-Pénil. Prenez rendez-vous pour le bien-être de votre compagnon.",
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
      shortcut: "/favicon.ico",
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
    openGraph: {
      title: "Dog Factory - Salon de toilettage à Vaux-le-Pénil",
      description:
        "Salon de toilettage professionnel à Vaux-le-Pénil. Prenez rendez-vous pour le bien-être de votre compagnon.",
      url: "https://dogfactory.fr",
      siteName: "Dog Factory",
      locale: "fr_FR",
      type: "website",
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
      google: "N8NtUQMv6mSrDHa0PDv8cefv9Bv6R2zoM2Yb-308vvM",
    },
    alternates: {
      canonical: "https://www.dogfactory.fr",
    },
  };

  return (
    <html lang="fr">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Dog Factory" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('consent', 'default', {
                'analytics_storage': 'granted'
              });
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
                transport_type: 'beacon',
                send_page_view: true,
                cookie_domain: 'dogfactory.fr',
                cookie_flags: 'SameSite=None;Secure'
              });
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredData }}
          suppressHydrationWarning
        />
        <title>Nos Prestations | Dog Factory</title>
        <meta name="description" content="Découvrez nos prestations de toilettage canin à Vaux-le-Pénil. Toilettage complet, bain, tonte et soins adaptés pour votre chien." />
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
