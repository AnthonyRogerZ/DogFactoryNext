import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Description from '@/components/Description'
import Hero from '@/components/Hero'

// Enregistrement des modifications.
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <div className="flex-grow container mx-auto px-4 py-8 mt-24">
        <Description />
        <div className="my-8">
        </div>
      </div>
      <Footer />
    </main>
  )
}
