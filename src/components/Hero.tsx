'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#F5F5F0] to-white mt-[64px]">
      {/* Cercles décoratifs en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-[#5B5F3D]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-56 sm:w-72 h-56 sm:h-72 bg-[#8B4513]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 pt-2 sm:pt-6 lg:pt-8">
        <div className="flex flex-col lg:flex-row items-center max-w-4xl mx-auto gap-2 md:gap-4">
          {/* Section texte */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left z-10 lg:pr-8"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
            >
              <span className="bg-gradient-to-r from-[#5B5F3D] to-[#8B4513] bg-clip-text text-transparent">
                Dog'Factory
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3"
            >
              Toilettage Canin à{' '}
              <span className="text-[#5B5F3D]">Vaux-le-Pénil</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block bg-white/50 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full mb-4"
            >
              <span className="text-[#5B5F3D] font-medium text-sm">✨ Un accueil chaleureux vous attend</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600 mb-6 max-w-lg mx-auto lg:mx-0"
            >
              Découvrez notre salon où chaque visite est une expérience unique. 
              Rencontrez Léon, notre mascotte, et laissez-nous prendre soin de votre compagnon.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link 
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#5B5F3D] hover:bg-[#5B5F3D]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5B5F3D] transition-all duration-300"
              >
                Prendre RDV
              </Link>
              <Link 
                href="/nos-prestations"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-[#5B5F3D] text-base font-medium rounded-md text-[#5B5F3D] hover:bg-[#5B5F3D]/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5B5F3D] transition-all duration-300"
              >
                Nos Prestations
              </Link>
            </motion.div>
          </motion.div>

          {/* Section image avec Léon */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative w-[240px] sm:w-[280px] md:w-[300px] lg:w-[320px] mt-0 lg:mt-0 lg:-mr-8"
          >
            {/* Cercle décoratif derrière Léon */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#5B5F3D]/20 to-[#8B4513]/20 
              rounded-full transform scale-95"></div>
            
            {/* Image de Léon */}
            <div className="relative aspect-[3/4]">
              <Image
                src="/images/leon.png"
                alt="Léon, notre mascotte avec son bandana orange"
                fill
                className="object-contain drop-shadow-2xl"
                priority
                sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, (max-width: 1024px) 300px, 320px"
              />
            </div>

            {/* Badge "Rencontrez Léon" */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-3 -right-3 bg-white p-2 sm:p-3 rounded-xl shadow-xl transform rotate-6"
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#5B5F3D]/10 rounded-full flex items-center justify-center">
                  <span className="text-base sm:text-lg">🐾</span>
                </div>
                <div>
                  <p className="font-medium text-[#5B5F3D] text-xs">Rencontrez Léon</p>
                  <p className="text-[10px] sm:text-xs text-gray-600">Notre mascotte adorée</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
