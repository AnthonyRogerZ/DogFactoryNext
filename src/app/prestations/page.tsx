'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaPaw, FaHeart, FaCut, FaShower, FaCheck, FaStar, FaGoogle, FaMapMarkerAlt, FaPhone, FaUser } from 'react-icons/fa'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

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
  profile_photo_url: string;
}

export default function Prestations() {
  const [mounted, setMounted] = useState(false)
  const [googleReviews, setGoogleReviews] = useState<GoogleReview[]>([])
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setMounted(true)
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/google-reviews')
        if (!response.ok) {
          throw new Error('Failed to fetch reviews')
        }
        const data = await response.json()
        console.log('Received reviews:', data.reviews) // Debug log
        if (data.reviews) {
          setReviews(data.reviews)
        }
      } catch (error) {
        console.error('Error fetching reviews:', error)
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [])

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
                    src="/images/épilation/épilation.webp"
                    alt="Épilation spécialisée"
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

            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              {loading && (
                <div className="text-center py-8">
                  <p className="text-gray-600">Chargement des avis...</p>
                </div>
              )}
              
              {!loading && reviews.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-600">Aucun avis disponible pour le moment.</p>
                </div>
              )}

              {/* Reviews Carousel */}
              {!loading && reviews.length > 0 && (
                <div className="mb-12">
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                      bulletActiveClass: 'swiper-pagination-bullet-active bg-brand',
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                    }}
                    className="pb-12"
                  >
                    {reviews.map((review, index) => (
                      <SwiperSlide key={index}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white p-4 sm:p-6 rounded-xl shadow-md h-full flex flex-col"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center overflow-hidden">
                              {review.profile_photo_url ? (
                                <Image
                                  src={review.profile_photo_url}
                                  alt={review.author_name}
                                  width={48}
                                  height={48}
                                  className="rounded-full w-full h-full object-cover"
                                />
                              ) : (
                                <FaUser className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-1 sm:mb-2">
                                <h4 className="font-medium text-gray-900 text-sm sm:text-base truncate">{review.author_name}</h4>
                                <span className="text-xs sm:text-sm text-gray-500">
                                  {new Date(review.time * 1000).toLocaleDateString()}
                                </span>
                              </div>
                              <div className="flex items-center gap-1 mb-2">
                                {[...Array(5)].map((_, i) => (
                                  <FaStar
                                    key={i}
                                    className={`w-3 h-3 sm:w-4 sm:h-4 ${
                                      i < review.rating ? 'text-yellow-400' : 'text-gray-200'
                                    }`}
                                  />
                                ))}
                              </div>
                              <p className="text-gray-600 text-xs sm:text-sm line-clamp-4">{review.text}</p>
                            </div>
                          </div>
                        </motion.div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  
                  <div className="text-center mt-8 space-y-4">
                    <a
                      href="https://g.page/r/CeWJXZjJlxoyEAE/review"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#4285F4] text-white text-sm sm:text-base rounded-full hover:bg-[#3367D6] transition-colors"
                    >
                      <FaGoogle className="text-lg sm:text-xl" />
                      <span>Laisser un avis</span>
                    </a>
                    <div>
                      <a
                        href="https://search.google.com/local/reviews?placeid=ChIJgwPkdMjx5UcR5YldmMmXGjI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-brand hover:text-brand/80 transition-colors mt-4 text-sm sm:text-base"
                      >
                        <span>Voir tous les avis sur Google</span>
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
