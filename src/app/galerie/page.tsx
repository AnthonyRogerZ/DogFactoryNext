'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ImageModal from '@/components/ImageModal';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Types
interface BeforeAfterImage {
  id: number;
  before: string;
  after: string;
  description: string;
  prestationType: string;
}

const salonImages = [
  { src: '/images/salon/optimized_image_2.jpg', alt: 'Salon de toilettage Dog Factory avant transformation' },
  { src: '/images/salon/optimized_image_3.jpg', alt: 'Salon de toilettage Dog Factory après transformation' },
  { src: '/images/salon/optimized_image_4.jpg', alt: 'Salon de toilettage Dog Factory avec un chien heureux' },
  { src: '/images/salon/optimized_image_5.jpg', alt: 'Salon de toilettage Dog Factory avec un chien en train de jouer' },
  { src: '/images/salon/optimized_image_6.jpg', alt: 'Salon de toilettage Dog Factory avec un chien qui se repose' },
  { src: '/images/salon/optimized_image_7.jpg', alt: 'Salon de toilettage Dog Factory avec un chien qui se fait toiletté' },
  { src: '/images/salon/optimized_image_8.jpg', alt: 'Salon de toilettage Dog Factory avec un chien qui se fait coiffer' },
  { src: '/images/salon/optimized_image_9.jpg', alt: 'Salon de toilettage Dog Factory avec un chien qui se fait baigner' },
  { src: '/images/salon/optimized_image_10.jpg', alt: 'Salon de toilettage Dog Factory avec un chien qui se fait sécher' },
  { src: '/images/salon/final_IMG_2586.jpg', alt: 'Salon de toilettage Dog Factory avec un chien heureux après son toilettage' },
  { src: '/images/salon/final_IMG_2591.jpg', alt: 'Salon de toilettage Dog Factory avec un chien qui se fait admirer' }
];

const metadata = {
  title: 'Galerie - Dog Factory | Salon de toilettage canin',
  description: 'Découvrez notre galerie de photos du salon Dog Factory, spécialisé dans le toilettage canin à Paris. Admirez les transformations de nos amis à quatre pattes.',
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImagePair, setCurrentImagePair] = useState<{ before: string; after: string } | null>(null);
  const [isBeforeImage, setIsBeforeImage] = useState(true);
  const [beforeAfterPhotos, setBeforeAfterPhotos] = useState<BeforeAfterImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('/api/admin/photos');
        const data = await response.json();
        if (data.success) {
          setBeforeAfterPhotos(data.photos);
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();

    // Rafraîchissement automatique toutes les 5 minutes (300000 ms)
    const intervalId = setInterval(fetchPhotos, 300000);
    return () => clearInterval(intervalId);
  }, []);

  const handleImageClick = (photo: BeforeAfterImage, isBeforePhoto: boolean) => {
    setCurrentImagePair({ before: photo.before, after: photo.after });
    setIsBeforeImage(isBeforePhoto);
  };

  const handleNext = () => {
    if (currentImagePair) {
      setIsBeforeImage(!isBeforeImage);
    }
  };

  const handlePrev = () => {
    if (currentImagePair) {
      setIsBeforeImage(!isBeforeImage);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand/5 via-white to-gray-50 pt-[72px] sm:pt-[80px]">
      {/* Hero Section */}
      <section className="py-4 sm:py-6 overflow-hidden">
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
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ rotate: { repeat: Infinity, duration: 4, ease: "easeInOut" } }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-brand/20 to-transparent"
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
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
                  animate={{ rotate: [360, 180, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
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
      </section>

      {/* Salon Photos Section */}
      <section className="py-4 sm:py-6 relative">
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
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
              className="mySwiper"
            >
              {salonImages.map((image, index) => (
                <SwiperSlide key={index} className="max-w-2xl">
                  <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover rounded-lg"
                      onClick={() => setSelectedImage(image.src)}
                      unoptimized
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-xl mx-auto text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-brand mb-4">
              Avant / Après
            </h2>
            <p className="text-sm md:text-lg text-gray-600">
              Découvrez les transformations de nos amis à quatre pattes
            </p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <p className="text-gray-600">Chargement des photos...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {beforeAfterPhotos.map((photo) => (
                <motion.div
                  key={photo.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 hover:border-brand/20 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="grid grid-cols-2 gap-3 p-3">
                    <div className="relative w-full h-[200px] md:h-[300px] rounded-xl overflow-hidden">
                      <Image
                        src={photo.before}
                        alt="Avant"
                        fill
                        className="object-cover transform transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                        onClick={() => handleImageClick(photo, true)}
                        unoptimized
                      />
                      <div className="absolute top-2 left-2 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-medium shadow-sm">
                        Avant
                      </div>
                    </div>
                    <div className="relative w-full h-[200px] md:h-[300px] rounded-xl overflow-hidden">
                      <Image
                        src={photo.after}
                        alt="Après"
                        fill
                        className="object-cover transform transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                        onClick={() => handleImageClick(photo, false)}
                        unoptimized
                      />
                      <div className="absolute top-2 right-2 px-3 py-1 bg-brand/90 backdrop-blur-sm text-white rounded-lg text-xs font-medium shadow-sm">
                        Après
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border-t border-gray-100 bg-gradient-to-b from-gray-50/50 to-white">
                    <p className="text-sm text-gray-500 text-center">{photo.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Call to Action Section */}
          <motion.div
            className="max-w-xl mx-auto text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-brand mb-4">
              Envie d'une transformation ?
            </h2>
            <p className="text-sm md:text-lg text-gray-600 mb-8">
              Prenez rendez-vous pour le bien-être de votre compagnon
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-brand hover:bg-brand/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
            >
              Prendre rendez-vous
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      {currentImagePair && (
        <ImageModal
          images={[
            { src: currentImagePair.before, alt: 'Avant' },
            { src: currentImagePair.after, alt: 'Après' }
          ]}
          currentIndex={isBeforeImage ? 0 : 1}
          onClose={() => {
            setCurrentImagePair(null);
            setIsBeforeImage(true);
          }}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={selectedImage}
              alt="Image agrandie"
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </div>
        </div>
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Galerie de photos de Dog Factory",
            "description": "Découvrez les photos de notre salon de toilettage pour chiens",
            "image": [
              ...salonImages.map((image) => ({ "@type": "ImageObject", "url": image.src, "alt": image.alt }))
            ]
          })
        }}
      />
    </div>
  );
}
