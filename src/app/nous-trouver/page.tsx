'use client'

import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaBus, FaCar, FaParking, FaExclamation } from 'react-icons/fa'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Location() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentDay, setCurrentDay] = useState('')
  const [nextOpeningInfo, setNextOpeningInfo] = useState('')

  useEffect(() => {
    const checkOpeningStatus = () => {
      const now = new Date()
      const day = now.getDay()
      const hours = now.getHours()
      const minutes = now.getMinutes()
      const currentTime = hours + minutes / 60

      const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
      setCurrentDay(days[day])

      if (day === 0) {
        setIsOpen(false)
        setNextOpeningInfo('Ouvert lundi à 9h00')
      } else if (day === 6) {
        setIsOpen(currentTime >= 10 && currentTime < 16)
        setNextOpeningInfo(currentTime >= 16 ? 'Ouvert lundi à 9h00' : '')
      } else {
        setIsOpen(currentTime >= 9 && currentTime < 18.5)
        if (currentTime >= 18.5) {
          setNextOpeningInfo(day === 5 ? 'Ouvert samedi à 10h00' : 'Ouvert demain à 9h00')
        } else if (currentTime < 9) {
          setNextOpeningInfo('Ouvert aujourd\'hui à 9h00')
        } else {
          setNextOpeningInfo('')
        }
      }
    }

    checkOpeningStatus()
    const interval = setInterval(checkOpeningStatus, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <main className="min-h-screen bg-gray-50 pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-brand/5 to-transparent py-6 md:py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Où Nous Trouver
              </motion.h1>
              <motion.div
                className="relative inline-block px-3 md:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <p className="relative text-sm md:text-lg text-gray-600 leading-relaxed p-4 md:p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-brand/10">
                  Vous êtes à la recherche d'un salon de toilettage canin à Vaux-le-Pénil ? Dog'Factory est situé dans un emplacement pratique et accessible.
                </p>
              </motion.div>
              
            </div>
            
          </div>
          
        </section>

        {/* Main Content */}
        <section className="py-4 sm:pt-8 sm:pb-0">
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8 mb-3 md:mb-6">
                {/* Map */}
                <motion.div 
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 h-[250px] md:h-[460px] relative group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.439866011612!2d2.6753788775780387!3d48.52880557123648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5fa6c6e9e9be9%3A0x6fc7a9d4c96d1ab7!2sDog'Factory!5e0!3m2!1sfr!2sfr!4v1707916234567!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </motion.div>

                {/* Transport Info */}
                <motion.div 
                  className="space-y-4 md:space-y-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 md:p-6">
                    <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-brand/10">
                        <FaCar className="w-5 h-5 md:w-6 md:h-6 text-brand" />
                      </div>
                      Moyens de Transport
                    </h2>
                    <div className="space-y-3 md:space-y-4">
                      <motion.div 
                        className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100/50 border border-gray-200 hover:from-brand/5 hover:to-brand/10 hover:border-brand/10 transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="p-1.5 md:p-2 rounded-lg bg-blue-500/10">
                          <FaBus className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 text-sm md:text-base">Transport en commun</h3>
                          <p className="text-gray-600 mt-1 text-xs md:text-sm">L'arrêt « Vaux-le-Pénil Centre » se trouve à deux pas du salon.</p>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100/50 border border-gray-200 hover:from-brand/5 hover:to-brand/10 hover:border-brand/10 transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="p-1.5 md:p-2 rounded-lg bg-green-500/10">
                          <FaParking className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 text-sm md:text-base">Parking</h3>
                          <p className="text-gray-600 mt-1 text-xs md:text-sm">Parking gratuit disponible à côté du salon.</p>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100/50 border border-gray-200 hover:from-brand/5 hover:to-brand/10 hover:border-brand/10 transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="p-1.5 md:p-2 rounded-lg bg-purple-500/10">
                          <FaCar className="w-4 h-4 md:w-5 md:h-5 text-purple-500" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 text-sm md:text-base">En voiture</h3>
                          <p className="text-gray-600 mt-1 text-xs md:text-sm">À seulement 10 minutes de la sortie de l'autoroute A5.</p>
                        </div>
                      </motion.div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3 pt-4 mt-2 border-t border-gray-200">
                      <div className="grid grid-cols-2 gap-2 w-full">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <a
                            href="https://www.google.com/maps/dir//Dog'Factory+79+Rue+de+la+Baste+77000+Vaux-le-P%C3%A9nil+France/@48.5288056,2.6753789,17z"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                          >
                            <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center text-blue-500">
                              <FaMapMarkerAlt className="w-5 h-5" />
                            </div>
                            <span className="whitespace-nowrap">Google Maps</span>
                          </a>
                        </motion.div>

                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <a
                            href="waze://?ll=48.5219,2.6653&navigate=yes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                          >
                            <div className="w-6 h-6 flex-shrink-0">
                              <img 
                                src="/images/waze/icons8-waze-48.png" 
                                alt="Waze" 
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <span className="whitespace-nowrap">Waze</span>
                          </a>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Contact Info and Hours */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-0">
                {/* Contact Info */}
                <motion.div 
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3 md:p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-base md:text-2xl font-bold text-gray-900 mb-3 md:mb-6 flex items-center gap-2 md:gap-3">
                    <div className="p-1.5 md:p-2 rounded-xl bg-brand/10">
                      <FaPhone className="w-4 h-4 md:w-6 md:h-6 text-brand" />
                    </div>
                    Infos de Contact
                  </h2>
                  <div className="space-y-2 md:space-y-4">
                    <motion.div 
                      className="flex items-start gap-2 md:gap-4 p-2 md:p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100/50 border border-gray-200"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="p-1.5 md:p-2 rounded-lg bg-brand/10">
                        <FaMapMarkerAlt className="w-4 h-4 md:w-5 md:h-5 text-brand" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 text-sm md:text-base">Adresse</h3>
                        <p className="text-gray-600 mt-1 text-xs md:text-sm">79 rue de la Baste, 77000 Vaux-le-Pénil</p>
                      </div>
                    </motion.div>

                    <motion.a
                      href="tel:0658166105"
                      className="flex items-start gap-2 md:gap-4 p-2 md:p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100/50 border border-gray-200 hover:from-brand/5 hover:to-brand/10 hover:border-brand/10 transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="p-1.5 md:p-2 rounded-lg bg-green-500/10">
                        <FaPhone className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 text-sm md:text-base">Téléphone</h3>
                        <p className="text-gray-600 mt-1 text-xs md:text-sm">06 58 16 61 05</p>
                      </div>
                    </motion.a>

                    <motion.a
                      href="mailto:contact@dogfactory.fr"
                      className="flex items-start gap-2 md:gap-4 p-2 md:p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100/50 border border-gray-200 hover:from-brand/5 hover:to-brand/10 hover:border-brand/10 transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="p-1.5 md:p-2 rounded-lg bg-blue-500/10">
                        <FaEnvelope className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 text-sm md:text-base">Email</h3>
                        <p className="text-gray-600 mt-1 text-xs md:text-sm">contact@dogfactory.fr</p>
                      </div>
                    </motion.a>
                  </div>

                  <div className="flex justify-center mt-6">
                    <motion.a 
                      href="tel:0658166105"
                      className="inline-flex items-center justify-center px-6 md:px-8 py-2.5 md:py-3 bg-brand text-white text-sm md:text-base font-medium rounded-full hover:bg-brand/90 transition-colors group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaPhone className="w-3.5 h-3.5 md:w-4 md:h-4 mr-2 transform group-hover:rotate-12 transition-transform" />
                      Prendre rendez-vous
                    </motion.a>
                  </div>
                </motion.div>

                {/* Hours */}
                <motion.div 
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2 md:gap-3 mb-2 md:mb-0">
                      <div className="p-2 md:p-2.5 rounded-xl bg-brand/10">
                        <FaClock className="w-5 h-5 md:w-6 md:h-6 text-brand" />
                      </div>
                      Horaires d'Ouverture
                    </h2>
                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl ${
                      isOpen 
                        ? 'bg-green-50 text-green-700 border border-green-100' 
                        : 'bg-red-50 text-red-700 border border-red-100'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        isOpen 
                          ? 'bg-green-500 animate-pulse' 
                          : 'bg-red-500'
                      }`} />
                      <span className="text-sm font-medium">
                        {isOpen ? 'Ouvert' : 'Fermé'}
                      </span>
                      {nextOpeningInfo && !isOpen && (
                        <span className="text-xs text-gray-600">
                          • {nextOpeningInfo}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <div className={`flex items-center justify-between p-3 md:p-4 rounded-lg ${
                      currentDay !== 'Dimanche' && currentDay !== 'Samedi'
                        ? 'bg-gradient-to-r from-brand/5 to-brand/10'
                        : 'bg-gray-50'
                    }`}>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          currentDay !== 'Dimanche' && currentDay !== 'Samedi' && isOpen
                            ? 'bg-green-500 animate-pulse'
                            : 'bg-gray-300'
                        }`} />
                        <span className="text-base md:text-lg font-medium text-gray-900">Lundi au Vendredi</span>
                        {(currentDay !== 'Dimanche' && currentDay !== 'Samedi') && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-brand/10 text-brand">
                            Aujourd'hui
                          </span>
                        )}
                      </div>
                      <span className="text-base md:text-lg text-gray-600">9h00 – 18h30</span>
                    </div>

                    <div className={`flex items-center justify-between p-3 md:p-4 rounded-lg ${
                      currentDay === 'Samedi'
                        ? 'bg-gradient-to-r from-brand/5 to-brand/10'
                        : 'bg-gray-50'
                    }`}>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          currentDay === 'Samedi' && isOpen
                            ? 'bg-green-500 animate-pulse'
                            : 'bg-gray-300'
                        }`} />
                        <span className="text-base md:text-lg font-medium text-gray-900">Samedi</span>
                        {currentDay === 'Samedi' && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-brand/10 text-brand">
                            Aujourd'hui
                          </span>
                        )}
                      </div>
                      <span className="text-base md:text-lg text-gray-600">9h00 – 17h00</span>
                    </div>

                    <div className={`flex items-center justify-between p-3 md:p-4 rounded-lg ${
                      currentDay === 'Dimanche'
                        ? 'bg-gradient-to-r from-red-50 to-red-100/50'
                        : 'bg-gray-50'
                    }`}>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="text-base md:text-lg font-medium text-gray-900">Dimanche</span>
                        {currentDay === 'Dimanche' && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-700">
                            Aujourd'hui
                          </span>
                        )}
                      </div>
                      <span className="text-base md:text-lg text-gray-600">Fermé</span>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-6 p-2.5 md:p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-center gap-2 md:gap-3">
                    <div className="flex-shrink-0 flex items-center">
                      <div className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center rounded-full bg-amber-400 text-white">
                        <FaExclamation className="w-2.5 h-2.5 md:w-3 md:h-3" />
                      </div>
                    </div>
                    <p className="text-xs md:text-base text-amber-700">
                      Les rendez-vous sont à prendre par téléphone. N'hésitez pas à nous contacter pour toute demande spécifique.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action - Mobile Optimized */}
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 border border-gray-100">
          <div className="flex flex-col items-center justify-center mt-6 text-center">
            <p className="text-sm md:text-base text-gray-600 mb-2">Besoin d'un rendez-vous rapidement ?</p>
            <motion.a 
              href="tel:0658166105"
              className="inline-flex items-center justify-center px-6 md:px-8 py-2.5 md:py-3 bg-brand text-white text-sm md:text-base font-medium rounded-full hover:bg-brand/90 transition-colors group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPhone className="w-3.5 h-3.5 md:w-4 md:h-4 mr-2 transform group-hover:rotate-12 transition-transform" />
              Appelez-nous au 06 58 16 61 05
            </motion.a>
          </div>
        </div>
      </main>
    </>
  )
}
