import Description from '@/components/Description'
import Hero from '@/components/Hero'

// Enregistrement des modifications.
export default function Home() {
  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Description />
      </div>
    </main>
  )
}
