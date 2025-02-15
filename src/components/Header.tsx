'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'
import { HiX } from 'react-icons/hi'
import { FaBone } from 'react-icons/fa'
import { socialLinks } from '@/data/socialLinks';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && 
        buttonRef.current && 
        !menuRef.current.contains(event.target as Node) && 
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const menuItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Nos Prestations', href: '/prestations' },
    { name: 'Galerie Photos', href: '/galerie' },
    { name: 'Contactez-Nous', href: '/contact' },
    { name: 'Où Nous Trouver', href: '/nous-trouver' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
        ? 'bg-white/80 backdrop-blur-xl shadow-md' 
        : 'bg-white/50 backdrop-blur-lg'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="relative flex items-center w-1/4 lg:w-auto">
            <div className="h-12 md:h-16 lg:h-20 flex items-center">
              <Image
                src="/images/logo.png"
                alt="Dog'Factory Logo"
                width={400}
                height={160}
                quality={100}
                className="h-full w-auto object-contain"
                priority
                unoptimized
              />
            </div>
          </Link>

          {/* RS sur mobile */}
          <div className="w-2/4 flex justify-center lg:hidden">
            <div className="grid grid-cols-3 gap-4 justify-items-center">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full transition-all duration-300 hover:-translate-y-0.5"
                  aria-label={social.label}
                  style={{ color: social.color }}
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Menu Hamburger sur mobile */}
          <div className="w-1/4 flex justify-end lg:hidden">
            <button
              ref={buttonRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <HiX className="w-6 h-6 text-gray-800" />
              ) : (
                <FaBone className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group
                  ${scrolled 
                    ? 'text-brand hover:text-brand' 
                    : 'text-brand/90 hover:text-brand'
                  } ${pathname === item.href ? 'text-brand font-medium' : ''}`
                }
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand transform origin-left transition-transform duration-300 ${
                  pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
            <div className="flex justify-center space-x-4 pl-4 border-l border-brand/20">
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

          {/* Mobile Menu */}
          <motion.div
            ref={menuRef}
            initial={false}
            animate={isMenuOpen ? "open" : "closed"}
            variants={{
              open: { opacity: 1, height: "auto", marginTop: 0 },
              closed: { opacity: 0, height: 0, marginTop: 0 }
            }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden absolute top-full left-0 right-0 bg-gradient-to-b from-white to-[#f8f9f7] shadow-lg z-50"
          >
            <div className="px-4 py-3">
              <nav className="space-y-3">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                      ${pathname === item.href 
                        ? 'bg-brand/10 text-brand' 
                        : 'text-gray-800 hover:bg-brand/5 hover:text-brand'
                      }`
                    }
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Barre verte en dehors du container pour prendre toute la largeur */}
      <div className="w-full h-px bg-gradient-to-r from-brand/40 via-brand to-brand/40 relative overflow-hidden">
        <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
      </div>

      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-slow-reverse {
          0%, 100% { transform: translateY(-10px); }
          50% { transform: translateY(0px); }
        }
        @keyframes float-medium-reverse {
          0%, 100% { transform: translateY(-15px); }
          50% { transform: translateY(0px); }
        }
        @keyframes float-fast-reverse {
          0%, 100% { transform: translateY(-8px); }
          50% { transform: translateY(0px); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 5s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
        .animate-float-slow-reverse {
          animation: float-slow-reverse 6s ease-in-out infinite;
        }
        .animate-float-medium-reverse {
          animation: float-medium-reverse 5s ease-in-out infinite;
        }
        .animate-float-fast-reverse {
          animation: float-fast-reverse 4s ease-in-out infinite;
        }
      `}</style>

    </header>
  )
}
