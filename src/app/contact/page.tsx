'use client'

import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaTiktok, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import ContactForm from '@/components/ContactForm'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-brand/10 text-gray-600 hover:text-brand transition-all"
    whileHover={{ scale: 1.02, y: -2 }}
    whileTap={{ scale: 0.98 }}
  >
    <Icon className="w-6 h-6" />
    <span className="font-medium">{label}</span>
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
      <Header />
      <main className="min-h-screen bg-white pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 bg-gradient-to-b from-brand/10 via-brand/5 to-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="container mx-auto px-4 relative">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge>Prenez contact avec nous 🐾</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-4">
                Contact Dog'Factory
              </h1>
              <p className="text-xl text-gray-700 mb-6 font-medium">
                Toilettage Canin à Vaux-le-Pénil
              </p>
              <div className="relative">
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
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
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Contact Form */}
              <motion.div 
                className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-12 border border-gray-100 mb-6 md:mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:mb-12 gap-4 md:gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand/10 flex items-center justify-center">
                      <FaEnvelope className="w-5 h-5 md:w-6 md:h-6 text-brand" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                        Comment nous contacter ?
                      </h2>
                      <p className="text-sm md:text-base text-gray-500 mt-1">
                        Remplissez le formulaire ci-dessous
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-xl">
                    <FaPhone className="w-5 h-5 text-brand" />
                    <span className="font-medium">06 58 16 61 05</span>
                  </div>
                </div>
                <div className="max-w-5xl mx-auto">
                  <ContactForm />
                </div>
              </motion.div>

              {/* Map and Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Map */}
                <motion.div 
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 h-[300px] md:h-[600px] order-2 md:order-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
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

                {/* Contact Info and Social */}
                <motion.div 
                  className="space-y-4 md:space-y-6 order-1 md:order-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Contact Info */}
                  <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border border-gray-100">
                    <div className="flex items-center gap-3 mb-4 md:mb-6">
                      <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center">
                        <FaMapMarkerAlt className="w-5 h-5 text-brand" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900">
                        Nos coordonnées
                      </h3>
                    </div>
                    <div className="space-y-4">
                      <motion.a
                        href="tel:0658166105"
                        className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-brand/10 text-gray-600 hover:text-brand transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaPhone className="w-5 h-5" />
                        <span className="font-medium">06 58 16 61 05</span>
                      </motion.a>
                      <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50">
                        <FaMapMarkerAlt className="w-5 h-5 text-brand" />
                        <span className="font-medium">Dog'Factory, 79 Rue de la Baste, 77000 Vaux-le-Pénil</span>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border border-gray-100">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">
                      Restez connectés avec Dog'Factory
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
                      Suivez-nous sur nos réseaux sociaux pour découvrir nos dernières réalisations et actualités :
                    </p>
                    <div className="space-y-3">
                      <SocialLink 
                        href="https://facebook.com/dogfactory"
                        icon={FaFacebookF}
                        label="Facebook Dog'Factory"
                      />
                      <SocialLink 
                        href="https://instagram.com/dogfactory"
                        icon={FaInstagram}
                        label="Instagram Dog'Factory"
                      />
                      <SocialLink 
                        href="https://tiktok.com/@dogfactory"
                        icon={FaTiktok}
                        label="TikTok Dog'Factory"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 md:py-16 bg-gradient-to-t from-brand/5 to-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Ou appelez-nous directement au 06 58 16 61 05
              </h2>
              <motion.a
                href="tel:0658166105"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-medium text-white bg-brand rounded-full hover:bg-brand/90 transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhone className="w-5 h-5" />
                <span>Appeler maintenant</span>
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
