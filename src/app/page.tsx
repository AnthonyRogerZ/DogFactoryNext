import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Description from '@/components/Description'
import Hero from '@/components/Hero'

// Enregistrement des modifications.
export default function Home() {
  return (
    <main className="flex-grow">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Description />
      </div>
      <Footer />
    </main>
  )
}
