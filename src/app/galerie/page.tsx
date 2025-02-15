'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Types
interface BeforeAfterImage {
  before: string;
  after: string;
  description: string;
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const salonImages = [
    '/images/salon/optimized_image_2.jpg',
    '/images/salon/optimized_image_3.jpg',
    '/images/salon/optimized_image_4.jpg',
    '/images/salon/optimized_image_5.jpg',
    '/images/salon/optimized_image_6.jpg',
    '/images/salon/optimized_image_7.jpg',
    '/images/salon/optimized_image_8.jpg',
    '/images/salon/optimized_image_9.jpg',
    '/images/salon/optimized_image_10.jpg',
    '/images/salon/final_IMG_2586.jpg',
    '/images/salon/final_IMG_2591.jpg'
  ];

  const beforeAfterImages: BeforeAfterImage[] = [
    {
      before: '/images/avantapres/output-1-1.png.webp',
      after: '/images/avantapres/enhanced_after_montage-768x522.png.webp',
      description: 'Toilettage complet avec brushing'
    },
    {
      before: '/images/avantapres/output-2.png',
      after: '/images/avantapres/enhanced_after_montage-768x522.png.webp',
      description: 'Mise en beauté et coupe'
    },
    {
      before: '/images/avantapres/output-2.png',
      after: '/images/avantapres/output-1-1.png.webp',
      description: 'Transformation complète'
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-brand/5 via-white to-gray-50 pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative py-6 md:py-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand/10 to-transparent"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative inline-block mb-4 md:mb-6"
              >
                <motion.div 
                  className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-brand/20 to-brand/5 rounded-full flex items-center justify-center mx-auto relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    rotate: {
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-brand/20 to-transparent"
                    animate={{
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center justify-center space-x-2">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-8 h-8 md:w-10 md:h-10 text-brand" 
                        viewBox="0 0 512 512"
                        fill="currentColor"
                      >
                        <path d="M269.4,2.9c-32.3,0-61.3,17.4-80.8,44.1c-19.5-26.7-48.5-44.1-80.8-44.1C48.7,2.9,0,51.6,0,110.7
                          c0,97.6,168.4,212.3,188.6,212.3c20.2,0,188.6-116.7,188.6-212.3C377.2,51.6,328.5,2.9,269.4,2.9z M188.6,278.7
                          c-8.1,0-147.3-98.2-147.3-168c0-37.8,30.8-68.6,68.6-68.6c29.6,0,56.2,18.9,65.8,47c1.9,5.6,7.1,9.4,13,9.4
                          c5.9,0,11.1-3.8,13-9.4c9.6-28.1,36.2-47,65.8-47c37.8,0,68.6,30.8,68.6,68.6C335.9,180.5,196.7,278.7,188.6,278.7z"/>
                      </svg>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-6 h-6 md:w-8 md:h-8 text-brand" 
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="6" cy="6" r="3" />
                        <circle cx="6" cy="18" r="3" />
                        <line x1="20" y1="4" x2="8.12" y2="15.88" />
                        <line x1="14.47" y1="14.48" x2="20" y2="20" />
                        <line x1="8.12" y1="8.12" x2="12" y2="12" />
                      </svg>
                    </div>
                    <div className="mt-2 text-xs md:text-sm text-brand font-medium text-center">Toilettage</div>
                  </div>
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-brand/10 to-transparent"
                    animate={{
                      rotate: [360, 180, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.div>
                <div className="absolute -inset-4 bg-brand/5 rounded-full blur-xl" />
              </motion.div>
              <motion.h1 
                className="text-2xl md:text-4xl lg:text-5xl font-bold text-brand mb-2 md:mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Bienvenue dans notre Galerie
              </motion.h1>
              <motion.div
                className="relative inline-block px-2 md:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="absolute inset-0 bg-brand/5 transform -rotate-1 rounded-2xl"></div>
                <p className="relative text-sm md:text-lg text-gray-600 leading-relaxed p-2 md:p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-brand/10">
                  Découvrez l'ambiance chaleureuse de notre salon et les magnifiques transformations de nos amis à quatre pattes
                </p>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-12 md:h-24 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Salon Photos */}
        <section className="py-6 md:py-10 relative">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-xl mx-auto text-center mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl md:text-3xl font-bold text-brand mb-1 md:mb-2">Notre Salon Dog'Factory</h2>
              <p className="text-sm md:text-base text-gray-600">Un espace moderne et confortable pour votre compagnon</p>
            </motion.div>
            <motion.div
              className="max-w-6xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                coverflowEffect={{
                  stretch: 0,
                  rotate: 50,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                className="w-full py-8 md:py-12"
              >
                {salonImages.map((image, index) => (
                  <SwiperSlide key={index} className="w-full max-w-2xl">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={image}
                        alt={`Notre salon ${index + 1}`}
                        fill
                        className="object-cover"
                        onClick={() => setSelectedImage(image)}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        </section>

        {/* Before/After Section */}
        <section className="py-6 md:py-10 bg-gradient-to-b from-gray-50 to-white relative">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-xl mx-auto text-center mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl md:text-3xl font-bold text-brand mb-1 md:mb-2">Avant / Après</h2>
              <p className="text-sm md:text-base text-gray-600">Découvrez les transformations de nos clients à quatre pattes</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
              {beforeAfterImages.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 hover:border-brand/20 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="grid grid-cols-2 gap-3 p-3">
                    <div className="relative aspect-square rounded-xl overflow-hidden">
                      <Image
                        src={item.before}
                        alt="Avant"
                        width={300}
                        height={300}
                        className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                        onClick={() => setSelectedImage(item.before)}
                      />
                      <div className="absolute top-2 left-2 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-medium shadow-sm">
                        Avant
                      </div>
                    </div>
                    <div className="relative aspect-square rounded-xl overflow-hidden">
                      <Image
                        src={item.after}
                        alt="Après"
                        width={300}
                        height={300}
                        className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                        onClick={() => setSelectedImage(item.after)}
                      />
                      <div className="absolute top-2 right-2 px-3 py-1 bg-brand/90 backdrop-blur-sm text-white rounded-lg text-xs font-medium shadow-sm">
                        Après
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border-t border-gray-100 bg-gradient-to-b from-gray-50/50 to-white">
                    <p className="text-sm text-gray-600 text-center">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </section>

        {/* Call to Action */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl md:text-3xl font-bold text-brand mb-4">Envie d'une transformation ?</h2>
              <p className="text-sm md:text-base text-gray-600 mb-8">Prenez rendez-vous pour le bien-être de votre compagnon</p>
              <motion.a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-brand text-white text-sm md:text-base font-medium rounded-full hover:bg-brand/90 transition-colors group gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Prendre rendez-vous
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full h-full">
              <Image
                src={selectedImage}
                alt="Image agrandie"
                fill
                className="object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300"
                onClick={() => setSelectedImage(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
