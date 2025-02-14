'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useMemo } from 'react'
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

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto -mt-4 lg:-mt-12">
          {/* En-tête de section */}
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
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
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
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
            className="bg-gradient-to-br from-[#5B5F3D]/5 to-[#8B4513]/5 rounded-3xl p-8 mb-12"
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

          {/* Section attention personnalisée */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-gradient-to-br from-[#5B5F3D]/5 to-[#8B4513]/5 rounded-3xl p-8 mb-12"
          >
            <motion.div variants={fadeInUp} className="text-center mb-8">
              <div className="space-y-6 text-gray-600 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-[#5B5F3D] mb-2">
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
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/prestations">
                    <span className="inline-flex items-center gap-2 px-6 py-3 bg-[#5B5F3D] text-white rounded-full 
                      hover:bg-[#4A4E2F] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                      <span>Découvrir nos prestations</span>
                      <span className="text-lg">→</span>
                    </span>
                  </Link>
                  <Link href="/contact">
                    <span className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#5B5F3D] rounded-full 
                      border-2 border-[#5B5F3D] hover:bg-[#5B5F3D] hover:text-white
                      transform hover:scale-105 transition-all duration-300">
                      <span>Réserver une séance</span>
                      <span className="text-lg">→</span>
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Section horaires */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-12"
          >
            <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-8 shadow-lg border border-[#5B5F3D]/10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#5B5F3D]/10 rounded-full flex items-center justify-center">
                      <FaClock className="text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#5B5F3D]">Nos Horaires</h3>
                      <div className={`inline-flex items-center gap-2 mt-1 text-sm ${isOpen ? 'text-green-600' : 'text-red-500'}`}>
                        <div className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-600 animate-pulse' : 'bg-red-500'}`} />
                        <span>{isOpen ? 'Ouvert actuellement' : 'Fermé actuellement'}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 border-b border-[#5B5F3D]/10">
                      <span className="font-medium text-[#5B5F3D]">Lundi - Vendredi</span>
                      <span className="text-gray-600">9h - 18h</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-[#5B5F3D]/10">
                      <span className="font-medium text-[#5B5F3D]">Samedi</span>
                      <span className="text-gray-600">9h - 16h</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="font-medium text-[#5B5F3D]">Dimanche</span>
                      <span className="text-gray-600">Fermé</span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="bg-[#5B5F3D]/5 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-[#5B5F3D] mb-3">À noter</h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-[#5B5F3D] mt-1">•</span>
                        <span>Sur rendez-vous uniquement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5B5F3D] mt-1">•</span>
                        <span>Fermé les jours fériés</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:justify-between">
                  <div className="flex items-center gap-2 text-sm">
                    <div className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                    <span>{isOpen ? 'Ouvert actuellement' : 'Fermé actuellement'}</span>
                  </div>
                  <a 
                    href="tel:0658166105" 
                    className="flex items-center gap-2 text-[#5B5F3D] hover:text-[#8B4513] transition-colors whitespace-nowrap"
                  >
                    <FaPhone className="text-sm" />
                    <span className="font-medium">06 58 16 61 05</span>
                  </a>
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
            className="mb-12"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-2xl font-bold text-center text-[#5B5F3D] mb-6"
            >
              Où nous trouver
            </motion.h2>
            <motion.div 
              variants={fadeInUp}
              className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg"
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
                className="inline-block px-6 py-3 bg-[#5B5F3D] text-white rounded-full font-medium 
                  hover:bg-[#4A4E2F] transform hover:scale-105 transition-all duration-300 
                  shadow-lg hover:shadow-xl"
              >
                Obtenir l'itinéraire
              </a>
            </motion.div>
          </motion.div>

          {/* Call to action */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <div className="inline-flex gap-4 flex-col sm:flex-row justify-center">
              <Link href="/prestations">
                <button className="px-8 py-3 bg-[#5B5F3D] text-white rounded-full font-medium 
                  hover:bg-[#4A4E2F] transform hover:scale-105 transition-all duration-300 
                  shadow-lg hover:shadow-xl">
                  Découvrir nos prestations
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-3 bg-white text-[#5B5F3D] rounded-full font-medium 
                  border-2 border-[#5B5F3D] hover:bg-[#5B5F3D] hover:text-white
                  transform hover:scale-105 transition-all duration-300">
                  Nous contacter
                </button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
