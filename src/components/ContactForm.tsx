'use client'

import { useState, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const onCaptchaChange = (token: string | null) => {
    setCaptchaToken(token)
  }

  const resetCaptcha = () => {
    recaptchaRef.current?.reset()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!captchaToken) {
      alert("Veuillez valider le captcha")
      return
    }
    
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          captchaToken
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Une erreur est survenue');
      }

      alert('Message envoyé avec succès!')
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
      setCaptchaToken(null)
      resetCaptcha()
    } catch (error) {
      alert('Une erreur est survenue. Veuillez réessayer.')
      console.error('Erreur:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4 max-w-xl mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nom *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring-brand text-sm"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring-brand text-sm"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Téléphone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring-brand text-sm"
        />
      </div>

      <div className="flex-grow">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={2}
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring-brand text-sm resize-y min-h-[60px] max-h-[300px]"
        />
      </div>

      <div className="flex justify-center pt-1 md:pt-2">
        <div className="scale-[0.85] md:scale-100 origin-center transform-gpu">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
            onChange={onCaptchaChange}
          />
        </div>
      </div>

      <div className="flex justify-center pt-1 md:pt-2">
        <button
          type="submit"
          disabled={isSubmitting || !captchaToken}
          className="w-full md:w-auto px-4 md:px-6 py-2 md:py-3 bg-brand text-white font-medium rounded-full hover:bg-brand/90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
        </button>
      </div>
    </form>
  )
}
