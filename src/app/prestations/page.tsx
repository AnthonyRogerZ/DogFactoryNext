'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaPaw, FaHeart, FaCut, FaShower, FaCheck, FaStar, FaGoogle, FaMapMarkerAlt, FaPhone, FaUser } from 'react-icons/fa'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'

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
  const [reviews, setReviews] = useState<GoogleReview[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setMounted(true)
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/google-reviews')
        const text = await response.text()
        console.log('Raw API Response:', text)
        
        if (!response.ok) {
          throw new Error(`Failed to fetch reviews: ${response.status} ${text}`)
        }
        
        const data = JSON.parse(text)
        console.log('Parsed reviews:', data)
        
        if (data.reviews && data.reviews.length > 0) {
          setGoogleReviews(data.reviews)
          setReviews(data.reviews)
        } else {
          console.log('No Google reviews available, using mock reviews')
          // Fallback to mock reviews only if no Google reviews are available
          const mockReviews: GoogleReview[] = [
            {
              author_name: "Marie Dupont",
              rating: 5,
              text: "Excellent toilettage pour mon Bichon. L'équipe est très professionnelle et attentionnée. Je recommande vivement !",
              time: new Date().getTime(),
              profile_photo_url: "/images/reviews/avatar1.jpg"
            },
            {
              author_name: "Thomas Martin",
              rating: 5,
              text: "Service impeccable ! Mon Golden en ressort toujours magnifique. Le personnel est aux petits soins avec les animaux.",
              time: new Date().getTime(),
              profile_photo_url: "/images/reviews/avatar2.jpg"
            },
            {
              author_name: "Sophie Bernard",
              rating: 5,
              text: "Très satisfaite du service. Mon chien est toujours heureux d'y aller, c'est un gage de qualité !",
              time: new Date().getTime(),
              profile_photo_url: "/images/reviews/avatar3.jpg"
            }
          ];
          setReviews(mockReviews);
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
      <main className="min-h-screen bg-white pt-16 md:pt-16">
        {/* Hero Section */}
        <section className="relative py-6 md:py-10 bg-gradient-to-b from-brand/5 to-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge>Votre bien-être est notre priorité 🐾</Badge>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-4 mb-4">
                Nos Prestations de Toilettage Canin
              </h1>
              <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4 leading-relaxed">
                Lors du toilettage canin, nous transformons cette expérience en un moment de bien-être 
                grâce à des gestes doux et respectueux que nous nous imposons.
              </p>
              <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4 leading-relaxed">
                Un toilettage adapté et une approche calme deviennent une expérience apaisante et bénéfique 
                pour votre compagnon.
              </p>
              <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed">
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
                  <FaPaw className="w-4 h-4 md:w-5 md:h-5" />
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
                  <FaHeart className="w-4 h-4 md:w-5 md:h-5" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-6 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12">
              {/* Service 1 */}
              <motion.div 
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative h-40 md:h-64 overflow-hidden">
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
                <div className="p-4 md:p-8">
                  <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center gap-2 md:gap-3">
                    <FaCut className="text-brand w-5 h-5 md:w-6 md:h-6" />
                    <span>Toilettage Complet pour Chiens</span>
                  </h2>
                  <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed">
                    Notre toilettage complet inclut tous les soins essentiels pour garantir le confort 
                    et la beauté de votre chien.
                  </p>
                  <ul className="space-y-2 md:space-y-3">
                    {[
                      { icon: '✂️', text: 'Coupe des ongles si nécessaire' },
                      { icon: '🛁', text: 'Bain et séchage professionnel' },
                      { icon: '✂️', text: 'Coupe aux ciseaux ou à la tondeuse' },
                      { icon: '🧴', text: 'Brossage pour un pelage éclatant' },
                      { icon: '👁️', text: 'Nettoyage doux yeux et oreilles' }
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-center gap-2 md:gap-3 text-sm md:text-base text-gray-700"
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
                <div className="relative h-40 md:h-64 overflow-hidden">
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
                <div className="p-4 md:p-8">
                  <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center gap-2 md:gap-3">
                    <FaShower className="text-brand w-5 h-5 md:w-6 md:h-6" />
                    <span>Bain et Séchage</span>
                  </h2>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Offrez à votre chien un bain relaxant et un séchage doux pour un pelage propre et soyeux. 
                    Ce soin est idéal pour rafraîchir votre compagnon entre deux toilettages complets.
                  </p>
                  <div className="mt-4 flex flex-col items-center space-y-2">
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
                <div className="relative h-40 md:h-64 overflow-hidden">
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
                <div className="p-4 md:p-8">
                  <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center gap-2 md:gap-3">
                    <FaHeart className="text-brand w-5 h-5 md:w-6 md:h-6" />
                    <span>Soins Adaptés et Personnalisés</span>
                  </h2>
                  <div className="space-y-3">
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      Chez Dog'Factory, chaque bain est conçu pour répondre aux besoins spécifiques de votre chien. 
                      Nous utilisons des produits respectueux pour offrir à votre compagnon un soin de qualité.
                    </p>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      Grâce à nos techniques de séchage doux et à des soins personnalisés, votre chien bénéficiera 
                      d'un pelage propre, soyeux et délicatement parfumé.
                    </p>
                  </div>
                  <div className="mt-4 space-y-2">
                    {[
                      'Produits adaptés à chaque type de pelage',
                      'Techniques douces et respectueuses',
                      'Attention particulière aux zones sensibles'
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center gap-2 md:gap-3 text-sm md:text-base text-gray-700"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <FaCheck className="text-brand w-4 h-4 flex-shrink-0" />
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
                <div className="relative h-40 md:h-64 overflow-hidden">
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
                <div className="p-4 md:p-8">
                  <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center gap-2 md:gap-3">
                    <FaCut className="text-brand w-5 h-5 md:w-6 md:h-6" />
                    <span>Épilations Spécialisées</span>
                  </h2>
                  <div className="space-y-3">
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
        <section className="py-6 md:py-10 bg-brand/5 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-6"
            >
              <Badge>Questions Fréquentes</Badge>
              <h2 className="text-xl md:text-3xl font-bold text-gray-900 mt-3">
                Tout ce que vous devez savoir
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-3">
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
                  className="bg-white rounded-xl shadow-sm p-4 md:p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 flex items-start gap-2">
                    <FaCheck className="text-brand w-4 h-4 mt-1 flex-shrink-0" />
                    {item.question}
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 ml-6">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-6 md:py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-6"
            >
              <Badge>Avis Clients</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4">
                Ce que pensent nos clients
              </h2>
            </motion.div>

            <div className="relative max-w-5xl mx-auto">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={12}
                slidesPerView={1.2}
                centeredSlides={true}
                loop={true}
                navigation={{
                  prevEl: '.swiper-button-prev',
                  nextEl: '.swiper-button-next',
                }}
                pagination={{
                  el: '.swiper-pagination',
                  clickable: true,
                }}
                breakpoints={{
                  480: {
                    slidesPerView: 1.5,
                    spaceBetween: 15,
                    centeredSlides: true,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    centeredSlides: false,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    centeredSlides: false,
                  },
                }}
                className="!pb-12 !px-4 md:!px-0"
              >
                {reviews.map((review, index) => (
                  <SwiperSlide key={index} className="pb-2">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-2xl shadow-lg p-4 md:p-6 h-full flex flex-col"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 md:w-12 md:h-12 relative flex-shrink-0">
                          <Image
                            src={review.profile_photo_url || "/images/default-avatar.png"}
                            alt={review.author_name}
                            width={48}
                            height={48}
                            className="rounded-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-sm md:text-base">{review.author_name}</h3>
                          <div className="flex items-center gap-0.5 text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <FaStar key={i} className={`w-3 h-3 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`} />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-xs md:text-sm text-gray-700 flex-grow line-clamp-4 mb-2">{review.text}</p>
                      <div className="text-xs text-gray-500">
                        {new Date(review.time * 1000).toLocaleDateString()}
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
              {/* Navigation Buttons */}
              <div className="swiper-button-prev !hidden md:!flex !text-brand hover:!text-brand/80 after:!text-xl !w-8 !h-8 !bg-white/90 !rounded-full shadow-md -left-4 md:left-0"></div>
              <div className="swiper-button-next !hidden md:!flex !text-brand hover:!text-brand/80 after:!text-xl !w-8 !h-8 !bg-white/90 !rounded-full shadow-md -right-4 md:right-0"></div>
              
              {/* Pagination */}
              <div className="swiper-pagination !bottom-0 !pt-4"></div>
            </div>

            {/* Google Review Links */}
            <div className="text-center mt-4 md:mt-6 space-y-3">
              <a
                href="https://g.page/r/CeWJXZjJlxoyEAE/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#4285F4] text-white text-xs md:text-sm rounded-full hover:bg-[#3367D6] transition-colors"
              >
                <FaGoogle className="text-base md:text-lg" />
                <span>Laisser un avis</span>
              </a>
              <div>
                <a
                  href="https://search.google.com/local/reviews?placeid=ChIJgwPkdMjx5UcR5YldmMmXGjI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-brand hover:text-brand/80 transition-colors text-xs md:text-sm"
                >
                  <span>Voir tous les avis sur Google</span>
                  <svg className="w-3 h-3 md:w-4 md:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
