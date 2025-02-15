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
    <section className="py-4 sm:py-8 bg-white w-full">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* En-tête de section */}
          <motion.div
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-4 sm:mb-8"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 text-[#5B5F3D]"
            >
              À chacun son toilettage
            </motion.h2>
            <motion.div 
              variants={fadeInUp}
              className="w-20 h-1 bg-[#5B5F3D]/20 mx-auto rounded-full mb-2 sm:mb-4"
            />
          </motion.div>

          {/* Cartes d'information */}
          <motion.div
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 mb-4 sm:mb-8"
          >
            {/* Carte 1 */}
            <motion.div
              variants={fadeInUp}
              className="bg-[#F5F5F0] rounded-2xl p-3 sm:p-6 transform hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5B5F3D]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl">💝</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#5B5F3D] mb-2 sm:mb-3">Notre passion</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Chez Dog'Factory, c'est la passion qui nous anime et qui nous donne envie chaque jour 
                    de prendre soin de vos chiens, tout comme nous le faisons avec Léon, notre mascotte.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Carte 2 */}
            <motion.div
              variants={fadeInUp}
              className="bg-[#F5F5F0] rounded-2xl p-3 sm:p-6 transform hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5B5F3D]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl">🐾</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#5B5F3D] mb-2 sm:mb-3">Votre première visite</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Pour certains, le toilettage est une habitude, pour d'autres, c'est nouveau. 
                    Nous vous accompagnons pas à pas pour une expérience sereine et agréable.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Section équipe */}
          <motion.div
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-gradient-to-br from-[#5B5F3D]/5 to-[#8B4513]/5 rounded-3xl p-4 sm:p-6 mb-6 sm:mb-8"
          >
            {/* Équipe */}
            <motion.div variants={fadeInUp} className="text-center mb-6">
              <h3 className="text-xl font-bold text-[#5B5F3D] mb-3">Christine & Aubane</h3>
              <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Notre équipe passionnée vous accueille dans une ambiance chaleureuse et 
                professionnelle. Chaque animal est unique, et nous adaptons nos soins en conséquence.
              </p>
            </motion.div>

            {/* Cartes d'expertise */}
            <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#5B5F3D]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">✨</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#5B5F3D] mb-1">Expertise</h4>
                  <p className="text-sm text-gray-600">Un savoir-faire unique</p>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#5B5F3D]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💖</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#5B5F3D] mb-1">Bienveillance</h4>
                  <p className="text-sm text-gray-600">Une approche douce et attentionnée</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Section attention personnalisée et horaires */}
          <motion.div
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-gradient-to-br from-[#5B5F3D]/5 to-[#8B4513]/5 rounded-3xl p-4 sm:p-6 mb-6 sm:mb-8"
          >
            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Colonne de gauche - Texte et CTA */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-sm space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-[#5B5F3D] leading-relaxed">
                  Dans notre salon, chaque chien profite d'une attention bienveillante et d'un soin personnalisé
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="text-[#8B4513] text-base sm:text-xl mt-1">🐾</span>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Conscientes que le toilettage peut être un moment stressant pour votre chien, nous mettons tout 
                      en œuvre pour le rassurer et lui offrir une expérience apaisante.
                    </p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="text-[#8B4513] text-base sm:text-xl mt-1">🌿</span>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Des soins doux, respectant la peau et le pelage, seront utilisés pour votre compagnon.
                    </p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="text-[#8B4513] text-base sm:text-xl mt-1">💝</span>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Avec une approche douce et rassurante, votre loulou sera apaisé et réconforté.
                    </p>
                  </div>
                </div>
                <div className="pt-2 border-t border-[#5B5F3D]/10">
                  <p className="text-lg sm:text-xl font-bold text-[#5B5F3D] flex items-center gap-2">
                    <span className="text-[#8B4513] text-base sm:text-xl">🤎</span>
                    Votre chien est notre priorité.
                  </p>
                </div>
              </div>

              {/* Colonne de droite - Horaires */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-sm">
                <div className="flex flex-col space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-[#5B5F3D] flex items-center gap-2">
                    <FaClock className="w-4 h-4 sm:w-5 sm:h-5" />
                    Nos horaires d'ouverture
                  </h3>

                  <div className="space-y-3">
                    {/* Status ouvert/fermé */}
                    <div className="bg-green-50 text-green-700 rounded-lg px-3 py-2 text-sm inline-flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      Ouvert
                    </div>

                    {/* Horaires semaine */}
                    <div className={`space-y-1 p-2 rounded-lg ${
                      currentDay !== 'Dimanche' && currentDay !== 'Samedi'
                        ? 'bg-gradient-to-r from-[#5B5F3D]/5 to-[#8B4513]/5'
                        : ''
                    }`}>
                      <div className="text-gray-700 font-medium">Lundi à Vendredi</div>
                      <div className="bg-white/50 rounded-lg px-3 py-2 text-sm text-gray-600 inline-block">
                        9h00 – 18h00
                      </div>
                    </div>

                    {/* Horaires samedi */}
                    <div className={`space-y-1 p-2 rounded-lg ${
                      currentDay === 'Samedi'
                        ? 'bg-gradient-to-r from-[#5B5F3D]/5 to-[#8B4513]/5'
                        : ''
                    }`}>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-700 font-medium">Samedi</span>
                        {currentDay === 'Samedi' && (
                          <span className="text-xs bg-[#5B5F3D]/10 text-[#5B5F3D] px-2 py-0.5 rounded">Aujourd'hui</span>
                        )}
                      </div>
                      <div className="bg-white/50 rounded-lg px-3 py-2 text-sm text-gray-600 inline-block">
                        9h00 – 17h00
                      </div>
                    </div>

                    {/* Horaires dimanche */}
                    <div className={`space-y-1 p-2 rounded-lg ${
                      currentDay === 'Dimanche'
                        ? 'bg-gradient-to-r from-red-50 to-red-100/50'
                        : ''
                    }`}>
                      <div className="text-gray-700 font-medium">Dimanche</div>
                      <div className="text-red-500 text-sm">Fermé</div>
                    </div>
                  </div>

                  {/* Note et téléphone */}
                  <div className="space-y-3 pt-3 border-t border-[#5B5F3D]/10">
                    <div className="text-sm text-gray-500">Fermé les jours fériés</div>
                    <a href="tel:0658166105" className="inline-flex items-center gap-2 text-[#5B5F3D] font-medium hover:text-[#8B4513] transition-colors">
                      <FaPhone className="w-4 h-4" />
                      <span>06 58 16 61 05</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Section carte */}
          <motion.div
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-4 sm:mb-8"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-xl sm:text-2xl font-bold text-center text-[#5B5F3D] mb-3 sm:mb-6"
            >
              Où nous trouver
            </motion.h2>
            <motion.div 
              variants={fadeInUp}
              className="w-full h-[200px] sm:h-[300px] rounded-2xl overflow-hidden shadow-lg"
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
              className="text-center mt-3 sm:mt-6"
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
