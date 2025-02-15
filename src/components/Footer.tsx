// Enregistrement des modifications.
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { socialLinks } from '@/data/socialLinks';
import SocialLinks from './SocialLinks';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#D3CFCF] py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-row justify-between items-start mb-8 md:mb-12">
          {/* Contact Info */}
          <div className="text-left">
            <h4 className="font-bold text-lg md:text-xl mb-4">Infos de Contact</h4>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span className="text-lg">🏠</span>
                <span className="text-sm md:text-base">
                  79 rue de la Baste
                  <br className="md:hidden" />
                  <span className="hidden md:inline">, </span>
                  77000 Vaux-le-Pénil
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-lg">📞</span>
                <span className="text-sm md:text-base">06 58 16 61 05</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-lg">✉️</span>
                <span className="text-sm md:text-base">contact@dogfactory.fr</span>
              </p>
            </div>
          </div>

          {/* Logo et RS */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="flex justify-center">
              <img 
                src="/images/logo.png" 
                alt="Dog'Factory Logo" 
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
              />
            </div>
            <div className="hidden md:block">
              <div className="flex items-center justify-center space-x-6">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full transition-all duration-300 group relative hover:-translate-y-0.5"
                    aria-label={social.label}
                    style={{ color: social.color }}
                  >
                    <social.icon className="w-4 h-4 relative z-10 group-hover:animate-neon" />
                    <span className="absolute inset-0 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-20 blur-sm group-hover:animate-neon"
                          style={{ backgroundColor: social.color }}></span>
                    <span className="absolute inset-0 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-10"
                          style={{ backgroundColor: social.color }}></span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Social Media sur mobile uniquement */}
        <div className="md:hidden flex justify-center border-t border-gray-300 mt-6 pt-6">
          <div className="flex items-center justify-center space-x-6">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-all duration-300 group relative hover:-translate-y-0.5"
                aria-label={social.label}
                style={{ color: social.color }}
              >
                <social.icon className="w-4 h-4 relative z-10 group-hover:animate-neon" />
                <span className="absolute inset-0 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-20 blur-sm group-hover:animate-neon"
                      style={{ backgroundColor: social.color }}></span>
                <span className="absolute inset-0 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-10"
                      style={{ backgroundColor: social.color }}></span>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-600 mt-6">
          <div>
            <a href="/cgv" className="hover:text-gray-900 transition-colors">CGV</a>
            <span className="mx-2">|</span>
            <a href="/mentions-legales" className="hover:text-gray-900 transition-colors">Mentions Légales</a>
          </div>
          <p> {new Date().getFullYear()} Dog'Factory. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
