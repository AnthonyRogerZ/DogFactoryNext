export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand/5 via-white to-gray-50 pt-[72px] sm:pt-[80px]">
      <div className="container mx-auto px-4">
        <div className="animate-pulse">
          {/* Hero Section Placeholder */}
          <div className="max-w-4xl mx-auto text-center mb-8">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
          </div>

          {/* Gallery Grid Placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-2xl"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
