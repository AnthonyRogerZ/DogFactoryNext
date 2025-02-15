'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useMemo, useState, useEffect } from 'react'
import { FaClock, FaPhone } from 'react-icons/fa'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function Description() {
  const [currentDay, setCurrentDay] = useState('')

  const isOpen = useMemo(() => {
    const now = new Date()
    const day = now.getDay() // 0 = Dimanche, 1 = Lundi, etc.
    const hour = now.getHours()

    // Fermé le dimanche
    if (day === 0) return false

    // Samedi : 9h-16h
    if (day === 6) {
      return hour >= 9 && hour < 16
    }

    // Lundi-Vendredi : 9h-18h
    return hour >= 9 && hour < 18
  }, [])

  useEffect(() => {
    const now = new Date()
    const day = now.getDay()
    const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
    setCurrentDay(days[day])
  }, [])

  return (
    <section className="py-8 sm:py-12 bg-white w-full">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* En-tête de section */}
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-8 sm:mb-12 mt-8 sm:mt-12"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#5B5F3D]"
            >
              À chacun son toilettage
            </motion.h2>
            <motion.div 
              variants={fadeInUp}
              className="w-24 h-1 bg-[#5B5F3D]/20 mx-auto rounded-full mb-6"
            />
          </motion.div>

          {/* Cartes d'information */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 sm:mb-12"
          >
            {/* Carte 1 */}
            <motion.div
              variants={fadeInUp}
              className="bg-[#F5F5F0] rounded-2xl p-6 transform hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#5B5F3D]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💝</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#5B5F3D] mb-3">Notre passion</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Chez Dog'Factory, c'est la passion qui nous anime et qui nous donne envie chaque jour 
                    de prendre soin de vos chiens, tout comme nous le faisons avec Léon, notre mascotte.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Carte 2 */}
            <motion.div
              variants={fadeInUp}
              className="bg-[#F5F5F0] rounded-2xl p-6 transform hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#5B5F3D]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🐾</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#5B5F3D] mb-3">Votre première visite</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Pour certains, le toilettage est une habitude, pour d'autres, c'est nouveau. 
                    Nous vous accompagnons pas à pas pour une expérience sereine et agréable.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Section équipe */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-gradient-to-br from-[#5B5F3D]/5 to-[#8B4513]/5 rounded-3xl p-8 mb-8 sm:mb-12 text-center"
          >
            <motion.div variants={fadeInUp} className="text-center mb-8">
              <h3 className="text-2xl font-bold text-[#5B5F3D] mb-4">
                Christine & Aubane
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Notre équipe passionnée vous accueille dans une ambiance chaleureuse et 
                professionnelle. Chaque animal est unique, et nous adaptons nos soins en conséquence.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#5B5F3D]/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl">✨</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#5B5F3D]">Expertise</h4>
                    <p className="text-gray-600">Un savoir-faire unique</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#5B5F3D]/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl">💖</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#5B5F3D]">Bienveillance</h4>
                    <p className="text-gray-600">Une approche douce et attentionnée</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Section attention personnalisée et horaires */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-gradient-to-br from-[#5B5F3D]/5 to-[#8B4513]/5 rounded-3xl p-6 sm:p-8 mb-8 sm:mb-12"
          >
            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Colonne de gauche - Texte et CTA */}
              <div className="space-y-6">
                <div className="space-y-4 text-gray-600">
                  <h3 className="text-xl font-semibold text-[#5B5F3D]">
                    Dans notre salon, chaque chien profite d'une attention bienveillante et d'un soin personnalisé
                  </h3>
                  <p>
                    Conscientes que le toilettage peut être un moment stressant pour votre chien, nous mettons tout 
                    en œuvre pour le rassurer et lui offrir une expérience apaisante.
                  </p>
                  <p>
                    Des soins doux, respectant la peau et le pelage, seront utilisés pour votre compagnon.
                  </p>
                  <p>
                    Avec une approche douce et rassurante, votre loulou sera apaisé et réconforté.
                  </p>
                  <p className="text-xl font-semibold text-[#5B5F3D]">
                    Votre chien est notre priorité.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4 pt-4">
                  <Link href="/prestations" className="flex-1 sm:flex-initial">
                    <span className="flex items-center justify-center gap-2 px-6 py-3 bg-[#5B5F3D] text-white rounded-full 
                      hover:bg-[#4A4E2F] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl
                      w-full sm:w-auto">
                      <span>Découvrir nos prestations</span>
                      <span className="text-lg">→</span>
                    </span>
                  </Link>
                  <Link href="/contact" className="flex-1 sm:flex-initial">
                    <span className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#5B5F3D] rounded-full 
                      border-2 border-[#5B5F3D] hover:bg-[#5B5F3D] hover:text-white
                      transform hover:scale-105 transition-all duration-300
                      w-full sm:w-auto">
                      <span>Réserver une séance</span>
                      <span className="text-lg">→</span>
                    </span>
                  </Link>
                </div>
              </div>

              {/* Colonne de droite - Horaires */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h3 className="text-xl font-semibold text-[#5B5F3D] flex items-center gap-3">
                    <FaClock className="w-5 h-5" />
                    Nos horaires d'ouverture
                  </h3>
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
                    isOpen 
                      ? 'bg-green-50 text-green-700 border border-green-100' 
                      : 'bg-red-50 text-red-700 border border-red-100'
                  }`}>
                    <div className={`w-3 h-3 rounded-full ${
                      isOpen 
                        ? 'bg-green-500 animate-pulse' 
                        : 'bg-red-500'
                    }`} />
                    <span className="font-medium text-sm">
                      {isOpen ? 'Ouvert' : 'Fermé'}
                    </span>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="relative">
                    <div className={`flex flex-col md:flex-row md:items-center md:justify-between p-4 rounded-xl ${
                      currentDay !== 'Dimanche' && currentDay !== 'Samedi'
                        ? 'bg-gradient-to-r from-[#5B5F3D]/5 to-[#5B5F3D]/10 border border-[#5B5F3D]/10'
                        : 'bg-gray-50 border border-gray-100'
                    }`}>
                      <div className="flex items-center gap-3 mb-3 md:mb-0">
                        <h4 className="font-medium text-[#5B5F3D]">Lundi à Vendredi</h4>
                        {(currentDay !== 'Dimanche' && currentDay !== 'Samedi') && (
                          <span className="text-xs px-2 py-1 rounded-full bg-[#5B5F3D]/10 text-[#5B5F3D]">
                            Aujourd'hui
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-4 py-1.5 rounded-lg bg-white/80 backdrop-blur-sm font-medium text-[#5B5F3D] shadow-sm">
                          9h00 – 18h00
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className={`flex flex-col md:flex-row md:items-center md:justify-between p-4 rounded-xl ${
                      currentDay === 'Samedi'
                        ? 'bg-gradient-to-r from-[#5B5F3D]/5 to-[#5B5F3D]/10 border border-[#5B5F3D]/10'
                        : 'bg-gray-50 border border-gray-100'
                    }`}>
                      <div className="flex items-center gap-3 mb-3 md:mb-0">
                        <h4 className="font-medium text-[#5B5F3D]">Samedi</h4>
                        {currentDay === 'Samedi' && (
                          <span className="text-xs px-2 py-1 rounded-full bg-[#5B5F3D]/10 text-[#5B5F3D]">
                            Aujourd'hui
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-4 py-1.5 rounded-lg bg-white/80 backdrop-blur-sm font-medium text-[#5B5F3D] shadow-sm">
                          9h00 – 17h00
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className={`flex flex-col md:flex-row md:items-center md:justify-between p-4 rounded-xl ${
                      currentDay === 'Dimanche'
                        ? 'bg-gradient-to-r from-red-50 to-red-100/50 border border-red-100'
                        : 'bg-gray-50 border border-gray-100'
                    }`}>
                      <div className="flex items-center gap-3 mb-3 md:mb-0">
                        <h4 className="font-medium text-[#5B5F3D]">Dimanche</h4>
                        {currentDay === 'Dimanche' && (
                          <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-700">
                            Aujourd'hui
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-4 py-1.5 rounded-lg bg-white/80 backdrop-blur-sm font-medium text-red-500 shadow-sm">
                          Fermé
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row items-center gap-3 sm:justify-between">
                    <div className="text-gray-600 text-sm flex items-center gap-2">
                      <span className="text-[#5B5F3D]">•</span>
                      <span>Fermé les jours fériés</span>
                    </div>
                    <a 
                      href="tel:0658166105" 
                      className="flex items-center gap-2 text-[#5B5F3D] hover:text-[#8B4513] transition-colors"
                    >
                      <FaPhone className="text-sm" />
                      <span className="font-medium">06 58 16 61 05</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Section carte */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-8 sm:mb-12"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-2xl font-bold text-center text-[#5B5F3D] mb-6"
            >
              Où nous trouver
            </motion.h2>
            <motion.div 
              variants={fadeInUp}
              className="w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBulQMPxh7gKAK4oQONr1ellsYl3pIqyVM&q=Dog'Factory,+79+Rue+de+la+Baste,+77000+Vaux-le-Pénil"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
              />
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className="text-center mt-6"
            >
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=48.5199858,2.6742563" 
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#5B5F3D] text-white rounded-full font-medium 
                  hover:bg-[#4A4E2F] transform hover:scale-105 transition-all duration-300 
                  shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                <span>Obtenir l'itinéraire</span>
                <span className="text-lg">→</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
