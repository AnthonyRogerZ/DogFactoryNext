'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaDog, FaHome, FaPaw } from 'react-icons/fa'

export default function NotFound() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-brand/5 px-4 overflow-hidden">
      <div className="text-center max-w-2xl mx-auto relative">
        {/* Paw prints animation */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -100, y: 50 * i }}
              animate={{ 
                opacity: [0, 1, 0],
                x: [i % 2 === 0 ? -100 : 100, 0, i % 2 === 0 ? 100 : -100],
                y: [50 * i, 0, -50 * i]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
              className="absolute"
            >
              <FaPaw className="text-brand/20 w-8 h-8 transform rotate-45" />
            </motion.div>
          ))}
        </div>

        {/* Main content */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative mb-12">
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, -10, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-40 h-40 mx-auto"
            >
              <FaDog className="w-full h-full text-brand" />
            </motion.div>
            
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-9xl font-bold text-brand/20">?</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-8xl md:text-9xl font-bold text-brand mb-4">
              404
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              Wooof! Page introuvable
            </h2>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <p className="text-gray-600 text-lg mb-8">
              Notre chien chercheur n'arrive pas à retrouver cette page. 
              Peut-être qu'elle est partie faire une promenade ? 🐾
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:bg-brand/90 transition-colors"
            >
              <FaHome className="w-5 h-5" />
              Retour à l'accueil
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
