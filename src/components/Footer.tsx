import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { socialLinks } from '@/data/socialLinks';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#D3CFCF] py-2">
      <div className="max-w-7xl mx-auto px-4">
        {/* TOP SECTION : 3 colonnes */}
        <div className="grid grid-cols-3 items-center">
          {/* Colonne GAUCHE : Contact Info */}
          <div className="text-[10px] md:text-sm space-y-1">
            <a
              href="tel:0658166105"
              className="block hover:text-brand transition-colors"
            >
              📞 06 58 16 61 05
            </a>
            <a
              href="https://maps.google.com/?q=79+rue+de+la+Baste+77000+Vaux-le-Pénil"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-brand transition-colors"
            >
              🏠 79 rue de la Baste,<br className="block md:hidden" />
              77000 Vaux-le-Pénil
            </a>
            <a
  href="mailto:contact@dogfactory.fr"
  className="inline-flex items-center gap-1 hover:text-brand transition-colors"
>
  <span>✉️</span>
  <span>contact@dogfactory.fr</span>
</a>
         
        </div>

          {/* Colonne CENTRE : Logo */}
          <div className="flex justify-center">
            <img
              src="/images/logo.png"
              alt="Dog'Factory Logo"
              className="w-14 h-14 md:w-16 md:h-16 object-contain"
            />
          </div>

          {/* Colonne DROITE : Réseaux sociaux */}
          <div className="flex justify-end items-center space-x-2 md:space-x-3">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
                aria-label={social.label}
                style={{ color: social.color }}
              >
                <social.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </Link>
            ))}
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-[8px] md:text-xs text-gray-600 mt-2 pt-2 border-t border-gray-400/20">
          <div className="flex items-center gap-2">
            <Link href="/cgv" className="hover:text-gray-900 transition-colors">
              CGV
            </Link>
            <span>|</span>
            <Link
              href="/mentions-legales"
              className="hover:text-gray-900 transition-colors"
            >
              Mentions Légales
            </Link>
          </div>
          <p>© {new Date().getFullYear()} Dog'Factory. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
