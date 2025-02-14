'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaPaw, FaHeart, FaCut, FaShower, FaCheck, FaStar, FaGoogle, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand/10 text-brand">
    {children}
  </span>
)

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
}

export default function Prestations() {
  const [mounted, setMounted] = useState(false)
  const [googleReviews, setGoogleReviews] = useState<GoogleReview[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    fetchGoogleReviews()
  }, [])

  const fetchGoogleReviews = async () => {
    try {
      const response = await fetch('/api/google-reviews')
      const data = await response.json()
      setGoogleReviews(data.reviews)
    } catch (error) {
      console.error('Erreur lors de la récupération des avis Google:', error)
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 bg-gradient-to-b from-brand/5 to-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge>Votre bien-être est notre priorité 🐾</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-6">
                Nos Prestations de Toilettage Canin
              </h1>
              <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed">
                Lors du toilettage canin, nous transformons cette expérience en un moment de bien-être 
                grâce à des gestes doux et respectueux que nous nous imposons.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed">
                Un toilettage adapté et une approche calme deviennent une expérience apaisante et bénéfique 
                pour votre compagnon.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
                Découvrez nos prestations et offrez à votre fidèle compagnon le soin qu'il mérite dans notre 
                salon de toilettage à Vaux-le-Pénil.
              </p>
              <div className="flex justify-center items-center space-x-4 text-brand">
                <motion.div 
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FaPaw className="w-6 h-6" />
                </motion.div>
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <FaHeart className="w-6 h-6" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
              {/* Service 1 */}
              <motion.div 
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <Image
                    src="/images/toilettage-complet.jpg"
                    alt="Toilettage complet"
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge>Service Complet</Badge>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <FaCut className="text-brand w-6 h-6" />
                    <span>Toilettage Complet pour Chiens</span>
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Notre toilettage complet inclut tous les soins essentiels pour garantir le confort 
                    et la beauté de votre chien.
                  </p>
                  <ul className="space-y-3">
                    {[
                      { icon: '✂️', text: 'Coupe des ongles si nécessaire' },
                      { icon: '🛁', text: 'Bain et séchage professionnel' },
                      { icon: '✂️', text: 'Coupe aux ciseaux ou à la tondeuse' },
                      { icon: '🧴', text: 'Brossage pour un pelage éclatant' },
                      { icon: '👁️', text: 'Nettoyage doux yeux et oreilles' }
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-center gap-3 text-gray-700"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-brand">{item.icon}</span>
                        {item.text}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Service 2 */}
              <motion.div 
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <Image
                    src="/images/pexels-photo-6816855.webp"
                    alt="Bain et séchage"
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge>Soin Essentiel</Badge>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <FaShower className="text-brand w-6 h-6" />
                    <span>Bain et Séchage</span>
                  </h2>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Offrez à votre chien un bain relaxant et un séchage doux pour un pelage propre et soyeux. 
                    Ce soin est idéal pour rafraîchir votre compagnon entre deux toilettages complets.
                  </p>
                  <div className="mt-6 flex flex-col items-center space-y-2">
                    <Badge>Douceur garantie</Badge>
                    <Badge>Sans stress</Badge>
                    <Badge>Produits naturels</Badge>
                  </div>
                </div>
              </motion.div>

              {/* Service 3 */}
              <motion.div 
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <Image
                    src="/images/pexels-photo-6816866.jpeg"
                    alt="Soins adaptés"
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge>Soins Personnalisés</Badge>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <FaHeart className="text-brand w-6 h-6" />
                    <span>Soins Adaptés et Personnalisés</span>
                  </h2>
                  <div className="space-y-4">
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      Chez Dog'Factory, chaque bain est conçu pour répondre aux besoins spécifiques de votre chien. 
                      Nous utilisons des produits respectueux pour offrir à votre compagnon un soin de qualité.
                    </p>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      Grâce à nos techniques de séchage doux et à des soins personnalisés, votre chien bénéficiera 
                      d'un pelage propre, soyeux et délicatement parfumé.
                    </p>
                  </div>
                  <div className="mt-6 space-y-3">
                    {[
                      'Produits adaptés à chaque type de pelage',
                      'Techniques douces et respectueuses',
                      'Attention particulière aux zones sensibles'
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center gap-2 text-gray-700"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <FaCheck className="text-brand flex-shrink-0" />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Service 4 */}
              <motion.div 
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <Image
                    src="/images/pexels-photo-6816862.webp"
                    alt="Épilation"
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge>Soin Spécialisé</Badge>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <FaCut className="text-brand w-6 h-6" />
                    <span>Épilations Spécialisées</span>
                  </h2>
                  <div className="space-y-4 md:space-y-6">
                    <div className="p-3 md:p-4 bg-gray-50 rounded-xl">
                      <h3 className="text-base md:text-lg font-semibold mb-2 text-gray-900">Épilation pour races à poils durs</h3>
                      <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                        Cette méthode est idéale pour préserver la texture naturelle et la qualité du pelage 
                        des races nécessitant ce soin spécifique.
                      </p>
                    </div>
                    <div className="p-3 md:p-4 bg-gray-50 rounded-xl">
                      <h3 className="text-base md:text-lg font-semibold mb-2 text-gray-900">Épilation manuelle</h3>
                      <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                        Adaptée aux races qui demandent un entretien particulier, elle garantit le confort 
                        de votre chien tout en maintenant la santé et l'équilibre de son pelage.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-brand/5 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-8 md:mb-12"
            >
              <Badge>Questions Fréquentes</Badge>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-4 md:mt-6">
                Tout ce que vous devez savoir
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
              {[
                {
                  question: "Combien de temps dure une séance de toilettage ?",
                  answer: "La durée varie selon la taille, le type de pelage et le service choisi. En moyenne, comptez entre 1h30 et 3h pour un toilettage complet."
                },
                {
                  question: "Mon chien doit-il être vacciné ?",
                  answer: "Oui, pour la sécurité de tous, nous demandons que les vaccins soient à jour (CHPL et toux du chenil)."
                },
                {
                  question: "Acceptez-vous tous les chiens ?",
                  answer: "Nous accueillons tous les chiens, quelle que soit leur taille. Cependant, informez-nous de tout problème de comportement lors de la prise de rendez-vous."
                },
                {
                  question: "À quelle fréquence dois-je faire toiletter mon chien ?",
                  answer: "La fréquence dépend du type de pelage et du mode de vie. En général, nous recommandons un toilettage tous les 2 à 3 mois."
                },
                {
                  question: "Puis-je rester avec mon chien pendant le toilettage ?",
                  answer: "Pour le confort et la sécurité de votre chien, nous préférons travailler sans la présence du maître. Cela permet à votre compagnon de rester concentré."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-sm p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start gap-3">
                    <FaCheck className="text-brand w-5 h-5 mt-1 flex-shrink-0" />
                    {item.question}
                  </h3>
                  <p className="text-gray-700 ml-8">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Google Reviews Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <FaGoogle className="text-2xl text-[#4285F4]" />
                <Badge>Avis Google</Badge>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
                Ce que disent nos clients
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Carte Google */}
                <div className="aspect-[4/3] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2634.0893624631297!2d2.663955376941681!3d48.52693177917145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5f47fb48f452d%3A0xdfc0f01eaf2eaaaa!2sDog&#39;Factory!5e0!3m2!1sfr!2sfr!4v1707929433889!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-2xl shadow-lg"
                  ></iframe>
                </div>

                {/* Informations */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-16 h-16 relative">
                      <Image
                        src="/images/logo.png"
                        alt="Dog'Factory Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Dog'Factory</h3>
                      <p className="text-gray-600">Toiletteur à Vaux-le-Pénil</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-[#4285F4] w-5 h-5" />
                      <a 
                        href="https://maps.google.com/?q=Dog'Factory,+79+Rue+de+la+Baste,+77000+Vaux-le-Pénil"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#4285F4] hover:underline"
                      >
                        79 Rue de la Baste, 77000 Vaux-le-Pénil
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaPhone className="text-[#4285F4] w-5 h-5" />
                      <a 
                        href="tel:0658166105"
                        className="text-[#4285F4] hover:underline"
                      >
                        06 58 16 61 05
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <a
                      href="https://g.page/r/CeWJXZjJlxoyEAE/review"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#4285F4] text-white rounded-full hover:bg-[#3367D6] transition-colors w-full"
                    >
                      <FaGoogle />
                      <span>Laisser un avis</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <Badge>Témoignages</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6">
                Ce que disent nos clients
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Marie L.",
                  dog: "Luna",
                  text: "Une équipe formidable qui prend vraiment soin de nos compagnons. Luna est toujours détendue et magnifique après son passage.",
                  rating: 5
                },
                {
                  name: "Thomas B.",
                  dog: "Max",
                  text: "Max est un chien anxieux, mais ici il est entre de bonnes mains. Le personnel est patient et attentionné.",
                  rating: 5
                },
                {
                  name: "Sophie D.",
                  dog: "Oscar",
                  text: "Je recommande vivement ! Un travail de qualité et un véritable souci du bien-être animal.",
                  rating: 5
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <FaHeart key={i} className="text-brand w-4 h-4" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{item.text}"</p>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span className="font-medium">{item.name}</span>
                    <span>et {item.dog}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
