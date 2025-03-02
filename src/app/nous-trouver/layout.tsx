export const metadata = {
  title: 'Où nous trouver | Dog\'Factory',
  description: 'Trouvez facilement notre salon de toilettage Dog\'Factory à Vaux-le-Pénil. Parking gratuit, accès facile et cadre agréable pour votre compagnon.',
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Dog Factory",
  "image": "https://dogfactory.fr/images/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "79 Rue de la Baste",
    "addressLocality": "Vaux-le-Pénil",
    "postalCode": "77000",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "48.5288056",
    "longitude": "2.6753789"
  },
  "url": "https://dogfactory.fr",
  "telephone": "+33 1 23 45 67 89",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "18:30"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        suppressHydrationWarning
      />
      {children}
    </>
  )
}
