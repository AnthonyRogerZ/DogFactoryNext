'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { FaFacebookF, FaInstagram, FaTiktok, FaBone } from 'react-icons/fa'
import { HiMenu, HiX } from 'react-icons/hi'
import { socialLinks } from '@/data/socialLinks';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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

  const menuItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Nos Prestations', href: '/prestations' },
    { name: 'Galerie Photos', href: '/galerie' },
    { name: 'Contactez-Nous', href: '/contact' },
    { name: 'Où Nous Trouver', href: '/nous-trouver' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-white/60 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="relative flex items-center">
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
          <div className="flex justify-center space-x-4 lg:hidden">
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
                  }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-brand hover:bg-brand/10 transition-colors"
          >
            {isMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <FaBone className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-white shadow-lg transition-all duration-300 ease-in-out lg:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ top: '80px' }}
        >
          <div className="container mx-auto px-4 py-6 bg-white">
            <div className="flex flex-col space-y-6">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="relative py-4 px-6 rounded-lg bg-gray-50 active:bg-brand/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-medium text-gray-800">
                      {item.name}
                    </span>
                    <svg 
                      className="w-5 h-5 text-brand" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-brand/40 via-brand to-brand/40 relative overflow-hidden">
        <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
      </div>
    </header>
  )
}
