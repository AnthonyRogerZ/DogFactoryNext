'use client'

export default function Map() {
  const address = "79 rue de la Baste, 77000 Vaux-le-Pénil";
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodedAddress}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-center mb-6">Notre Localisation</h2>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="w-full h-[400px] rounded-lg shadow-lg"
          loading="lazy"
          src={mapUrl}
          allowFullScreen
        ></iframe>
      </div>
      <div className="text-center">
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Obtenir l&apos;itinéraire
        </a>
      </div>
    </div>
  )
}
