'use client'

import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaBus, FaCar, FaParking } from 'react-icons/fa'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
      <Header />
      <main className="min-h-screen bg-gray-50 pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-brand/5 to-transparent py-8 md:py-12">
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
                <div className="absolute inset-0 bg-brand/5 transform rotate-1 rounded-2xl" />
                <p className="relative text-sm md:text-lg text-gray-600 leading-relaxed p-4 md:p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-brand/10">
                  Vous êtes à la recherche d'un salon de toilettage canin à Vaux-le-Pénil ? Dog'Factory est situé dans un emplacement pratique et accessible.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Comment venir ? */}
        <section className="py-8 md:py-12 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8 md:mb-12"
              >
                <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">Comment venir ?</h2>
                <p className="text-sm md:text-base text-gray-600">Plusieurs options s'offrent à vous pour nous rejoindre facilement</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {/* Depuis l'autoroute */}
                <motion.div
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-3 rounded-xl bg-blue-50 w-fit mb-4">
                    <FaCar className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Accès routier</h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-medium">1</span>
                      <span>Prendre la sortie 16 "Melun" sur l'A5</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-medium">2</span>
                      <span>Suivre D605 direction "Vaux-le-Pénil"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-medium">3</span>
                      <span>Au rond-point, prendre la 2ème sortie</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-sm text-gray-500">Distance depuis la sortie : 4,5 km</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      <p className="text-sm text-gray-500">Itinéraire alternatif via D408</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaParking className="w-4 h-4 text-gray-400" />
                      <p className="text-sm text-gray-500">Parking gratuit sur place</p>
                    </div>
                  </div>
                </motion.div>

                {/* Villes principales */}
                <motion.div
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-3 rounded-xl bg-indigo-50 w-fit mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-4">Villes à proximité</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50">
                      <span className="text-sm text-gray-600">Melun</span>
                      <span className="px-2 py-1 rounded-md bg-indigo-100 text-indigo-700 text-xs font-medium">3,5 km</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50">
                      <span className="text-sm text-gray-600">Dammarie-les-Lys</span>
                      <span className="px-2 py-1 rounded-md bg-indigo-100 text-indigo-700 text-xs font-medium">4,2 km</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50">
                      <span className="text-sm text-gray-600">Le Mée-sur-Seine</span>
                      <span className="px-2 py-1 rounded-md bg-indigo-100 text-indigo-700 text-xs font-medium">5,1 km</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50">
                      <span className="text-sm text-gray-600">Fontainebleau</span>
                      <span className="px-2 py-1 rounded-md bg-indigo-100 text-indigo-700 text-xs font-medium">12 km</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <a 
                      href="https://www.google.com/maps/dir//79+Rue+de+la+Baste,+77000+Vaux-le-P%C3%A9nil,+France" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-brand hover:text-brand/80 transition-colors flex items-center gap-1"
                    >
                      <span>Calculer mon itinéraire</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </motion.div>

                {/* Transports en commun */}
                <motion.div
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-3 rounded-xl bg-green-50 w-fit mb-4">
                    <FaBus className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-4">Transports en commun</h3>
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-50">
                        <span className="px-2 py-1 rounded-md bg-green-100 text-green-700 font-medium">Ligne F</span>
                        <span className="text-sm text-gray-600">Arrêt "Vaux-le-Pénil Centre"</span>
                      </div>
                      <ul className="pl-4 space-y-1">
                        <li className="text-xs text-gray-500 flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                          Direction Melun Gare
                        </li>
                        <li className="text-xs text-gray-500 flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                          Fréquence : toutes les 20 min
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-50">
                        <span className="px-2 py-1 rounded-md bg-purple-100 text-purple-700 font-medium">Ligne O</span>
                        <span className="text-sm text-gray-600">Arrêt "La Baste"</span>
                      </div>
                      <ul className="pl-4 space-y-1">
                        <li className="text-xs text-gray-500 flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                          Direction Le Mée-sur-Seine
                        </li>
                        <li className="text-xs text-gray-500 flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                          Fréquence : toutes les 30 min
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-sm text-gray-500">Premier bus : 6h00 | Dernier bus : 21h00</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Apps de navigation */}
              <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-3 md:gap-4">
                <motion.a
                  href="https://www.google.com/maps/dir//79+Rue+de+la+Baste,+77000+Vaux-le-P%C3%A9nil,+France"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-xl bg-white border border-gray-200 text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img src="https://www.google.com/images/branding/product/2x/maps_96in128dp.png" alt="Google Maps" className="w-4 h-4 md:w-5 md:h-5" />
                  Google Maps
                </motion.a>
                <motion.a
                  href="https://ul.waze.com/ul?place=ChIJ6Z6e5GxZ5kcRp7HWyaR6-m8&ll=48.52881%2C2.67538&navigate=yes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-xl bg-white border border-gray-200 text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img src="/images/waze/icons8-waze-48.png" alt="Waze" className="w-4 h-4 md:w-5 md:h-5" />
                  Waze
                </motion.a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
                {/* Map */}
                <motion.div 
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 h-[300px] md:h-[500px] relative group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <a 
                    href="https://www.google.com/maps/dir//79+Rue+de+la+Baste,+77000+Vaux-le-P%C3%A9nil,+France"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 md:top-4 md:right-4 px-3 md:px-4 py-1.5 md:py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium text-gray-900 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-20 hover:bg-brand hover:text-white"
                  >
                    Obtenir l'itinéraire
                  </a>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.439866011612!2d2.6753788775780387!3d48.52880557123648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5fa6c6e9e9be9%3A0x6fc7a9d4c96d1ab7!2s79%20Rue%20de%20la%20Baste%2C%2077000%20Vaux-le-P%C3%A9nil!5e0!3m2!1sfr!2sfr!4v1707916234567!5m2!1sfr!2sfr"
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
                  </div>
                </motion.div>
              </div>

              {/* Contact Info and Hours */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {/* Contact Info */}
                <motion.div 
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 md:p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-brand/10">
                      <FaPhone className="w-5 h-5 md:w-6 md:h-6 text-brand" />
                    </div>
                    Infos de Contact
                  </h2>
                  <div className="space-y-3 md:space-y-4">
                    <motion.div 
                      className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100/50 border border-gray-200"
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
                      className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100/50 border border-gray-200 hover:from-brand/5 hover:to-brand/10 hover:border-brand/10 transition-colors duration-300"
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
                      className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100/50 border border-gray-200 hover:from-brand/5 hover:to-brand/10 hover:border-brand/10 transition-colors duration-300"
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
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 md:p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                    <h2 className="text-lg md:text-2xl font-bold text-gray-900 flex items-center gap-3">
                      <FaClock className="w-5 h-5 md:w-6 md:h-6 text-brand" />
                      Horaires d'Ouverture
                    </h2>
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
                      <span className="font-medium">
                        {isOpen ? 'Ouvert' : 'Fermé'}
                      </span>
                      {nextOpeningInfo && !isOpen && (
                        <span className="text-sm ml-2 text-gray-600">
                          • {nextOpeningInfo}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="relative">
                      <div className={`flex flex-col md:flex-row md:items-center md:justify-between p-5 rounded-xl ${
                        currentDay !== 'Dimanche' && currentDay !== 'Samedi'
                          ? 'bg-gradient-to-r from-brand/5 to-brand/10 border border-brand/5'
                          : 'bg-gray-50 border border-gray-100'
                      }`}>
                        <div className="flex items-center gap-3 mb-3 md:mb-0">
                          <div className={`w-3 h-3 rounded-full ${
                            currentDay !== 'Dimanche' && currentDay !== 'Samedi' && isOpen
                              ? 'bg-green-500 animate-pulse'
                              : 'bg-gray-300'
                          }`} />
                          <h3 className="font-semibold text-gray-900">Lundi au Vendredi</h3>
                          {(currentDay !== 'Dimanche' && currentDay !== 'Samedi') && (
                            <span className="text-xs px-2 py-1 rounded-full bg-brand/10 text-brand">
                              Aujourd'hui
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-4 py-1.5 rounded-lg bg-white/80 backdrop-blur-sm font-medium text-brand shadow-sm">
                            9h00 – 18h30
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className={`flex flex-col md:flex-row md:items-center md:justify-between p-5 rounded-xl ${
                        currentDay === 'Samedi'
                          ? 'bg-gradient-to-r from-brand/5 to-brand/10 border border-brand/5'
                          : 'bg-gray-50 border border-gray-100'
                      }`}>
                        <div className="flex items-center gap-3 mb-3 md:mb-0">
                          <div className={`w-3 h-3 rounded-full ${
                            currentDay === 'Samedi' && isOpen
                              ? 'bg-green-500 animate-pulse'
                              : 'bg-gray-300'
                          }`} />
                          <h3 className="font-semibold text-gray-900">Samedi</h3>
                          {currentDay === 'Samedi' && (
                            <span className="text-xs px-2 py-1 rounded-full bg-brand/10 text-brand">
                              Aujourd'hui
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-4 py-1.5 rounded-lg bg-white/80 backdrop-blur-sm font-medium text-brand shadow-sm">
                            9h00 – 17h00
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className={`flex flex-col md:flex-row md:items-center md:justify-between p-5 rounded-xl ${
                        currentDay === 'Dimanche'
                          ? 'bg-gradient-to-r from-red-50 to-red-100/50 border border-red-100'
                          : 'bg-gray-50 border border-gray-100'
                      }`}>
                        <div className="flex items-center gap-3 mb-3 md:mb-0">
                          <div className="w-3 h-3 rounded-full bg-red-500" />
                          <h3 className="font-semibold text-gray-900">Dimanche</h3>
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

                  <div className="mt-8 p-4 rounded-xl bg-yellow-50 border border-yellow-100">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-yellow-100">
                        <svg className="w-5 h-5 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-yellow-800">
                          Les rendez-vous sont à prendre par téléphone. N'hésitez pas à nous contacter pour toute demande spécifique.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
