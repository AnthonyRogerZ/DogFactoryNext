import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Dog Factory - Toilettage et Soins pour Chiens à Annecy',
  description: 'Dog Factory, votre salon de toilettage professionnel à Annecy. Services de toilettage, soins et conseils pour le bien-être de votre chien.',
  keywords: 'toilettage chien, salon toilettage annecy, dog factory, soins chiens, toiletteur professionnel',
  openGraph: {
    title: 'Dog Factory - Toilettage Professionnel à Annecy',
    description: 'Salon de toilettage professionnel à Annecy. Services de qualité pour le bien-être de votre chien.',
    url: 'https://www.dogfactory.fr',
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
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
