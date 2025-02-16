'use client'

import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaTiktok, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import ContactForm from '@/components/ContactForm'
import { socialLinks } from '@/data/socialLinks'

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 p-2 sm:p-3 rounded-xl bg-gray-50 hover:bg-brand/10 text-gray-600 hover:text-brand transition-all text-center sm:text-left"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <Icon className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
    <span className="text-xs sm:text-sm md:text-base font-medium">{label}</span>
  </motion.a>
)

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand/10 text-brand">
    {children}
  </span>
)

export default function Contact() {
  return (
    <>
      <main className="min-h-screen bg-white pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative py-4 md:py-10 bg-gradient-to-b from-brand/10 via-brand/5 to-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="container mx-auto px-4 relative">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge>Prenez contact avec nous 🐾</Badge>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-1.5 md:mt-4 md:mb-2">
                Contact Dog'Factory
              </h1>
              <p className="text-base md:text-xl text-gray-700 mb-2 md:mb-4 font-medium">
                Toilettage Canin à Vaux-le-Pénil
              </p>
              <div className="relative">
                <p className="text-sm md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  Bienvenue sur la page Contact Dog'Factory – Toilettage Canin à Vaux-le-Pénil. 
                  <span className="text-brand"> Vous souhaitez prendre rendez-vous </span> 
                  ou en savoir plus sur nos prestations ? 
                  <span className="text-brand"> Nous sommes à votre écoute </span> 
                  pour répondre à vos questions et vous conseiller sur les soins adaptés à votre compagnon.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section className="py-4 md:py-10">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Contact Form - Visible en premier sur mobile */}
              <motion.div 
                className="lg:hidden bg-white rounded-2xl shadow-xl p-4 md:p-6 border border-gray-100 mb-4 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand/10 flex items-center justify-center">
                    <FaEnvelope className="w-4 h-4 md:w-5 md:h-5 text-brand" />
                  </div>
                  <div>
                    <h2 className="text-lg md:text-2xl font-bold text-gray-900">
                      Contactez-nous
                    </h2>
                    <p className="text-sm md:text-base text-gray-500 mt-0.5 md:mt-1">
                      Nous vous répondrons dans les plus brefs délais
                    </p>
                  </div>
                </div>
                <ContactForm />
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                {/* Left Column: Map and Contact Info */}
                <motion.div 
                  className="space-y-4 md:space-y-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Map */}
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 h-[250px] md:h-[300px] lg:h-[350px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.439866011612!2d2.6753788775780387!3d48.52880557123648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5fa6c6e9e9be9%3A0x6fc7a9d4c96d1ab7!2s79%20Rue%20de%20la%20Baste%2C%2077000%20Vaux-le-P%C3%A9nil!5e0!3m2!1sfr!2sfr!4v1707916234567!5m2!1sfr!2sfr"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  {/* Contact Info */}
                  <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 border border-gray-100">
                    <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand/10 flex items-center justify-center">
                        <FaMapMarkerAlt className="w-4 h-4 md:w-5 md:h-5 text-brand" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900">
                        Nos coordonnées
                      </h3>
                    </div>
                    <div className="space-y-3">
                      <motion.a
                        href="tel:0658166105"
                        className="flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-xl bg-gray-50 hover:bg-brand/10 text-gray-600 hover:text-brand transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaPhone className="w-4 h-4 md:w-5 md:h-5" />
                        <span className="text-sm md:text-base font-medium">06 58 16 61 05</span>
                      </motion.a>
                      <div className="flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-xl bg-gray-50">
                        <FaMapMarkerAlt className="w-4 h-4 md:w-5 md:h-5 text-brand" />
                        <span className="text-sm md:text-base font-medium">Dog'Factory, 79 Rue de la Baste, 77000 Vaux-le-Pénil</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Right Column: Contact Form - Desktop Only */}
                <motion.div 
                  className="hidden lg:block bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center">
                      <FaEnvelope className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        Contactez-nous
                      </h2>
                      <p className="text-gray-500 mt-1">
                        Nous vous répondrons dans les plus brefs délais
                      </p>
                    </div>
                  </div>
                  <ContactForm />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <motion.div 
          className="max-w-2xl mx-auto mt-4 md:mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 border border-gray-100">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-4 text-center">
              Restez connectés
            </h3>
            <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 leading-relaxed text-center">
              Suivez-nous sur nos réseaux sociaux pour découvrir nos dernières réalisations et actualités :
            </p>
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              <SocialLink
                href={socialLinks[0].href}
                icon={socialLinks[0].icon}
                label={socialLinks[0].label}
              />
              <SocialLink
                href={socialLinks[1].href}
                icon={socialLinks[1].icon}
                label={socialLinks[1].label}
              />
              <SocialLink
                href={socialLinks[2].href}
                icon={socialLinks[2].icon}
                label={socialLinks[2].label}
              />
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <section className="py-4 md:py-8 bg-gradient-to-t from-brand/5 to-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                Besoin d'un rendez-vous rapidement ?
              </h2>
              <motion.a
                href="tel:0658166105"
                className="inline-flex items-center justify-center gap-2 md:gap-3 px-5 md:px-8 py-2.5 md:py-4 text-base md:text-lg font-medium text-white bg-brand rounded-full hover:bg-brand/90 transition-colors shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPhone className="w-4 h-4 md:w-5 md:h-5" />
                Appelez-nous au 06 58 16 61 05
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
