import PropertyGallery from "@/components/property-gallery"
import {
  Bed,
  Bath,
  Maximize2,
  Droplets,
  Power,
  MapPin,
  Lock,
  Home,
  ShoppingCart,
} from "lucide-react"
import Link from "next/link"

const propertyData = {
  1: {
    id: 1,
    title: "Modern House in Nyarutarama",
    price: "850,000,000 RWF",
    location: "Nyarutarama, Kigali, Rwanda",
    images: [
      "/modern-luxury-house-in-kigali-rwanda.jpg",
      "/luxury-apartment-building-kigali.jpg",
      "/elegant-family-house-rwanda.jpg",
      "/modern-luxury-house-architecture-kigali-rwanda.jpg",
    ],
    bedrooms: 4,
    bathrooms: 3,
    landSize: "600 sqm",
    description: `This stunning modern house in Nyarutarama offers the perfect blend of luxury and comfort. Built to the highest standards with premium finishes throughout, this property features spacious living areas, a fully equipped kitchen, and beautifully landscaped gardens.

The house is ideally located in one of Kigali's most prestigious neighborhoods, close to schools, shopping centers, and business districts. Perfect for families seeking a sophisticated lifestyle in a secure and peaceful environment.

This is an exceptional opportunity to own a premium property in Rwanda's capital city.`,
    features: [
      { icon: Bed, text: "4 Bedrooms", details: "Spacious master suite with walk-in closet" },
      { icon: Bath, text: "3 Bathrooms", details: "Modern fixtures and finishes" },
      { icon: Droplets, text: "Water Supply", details: "24/7 water connection" },
      { icon: Power, text: "Electricity", details: "Reliable power supply" },
      { icon: MapPin, text: "Paved Road Access", details: "Direct access to main road" },
      { icon: Lock, text: "Secure Compound", details: "High wall and security gate" },
      { icon: Home, text: "Near Schools", details: "Close to top educational institutions" },
      { icon: ShoppingCart, text: "Shopping Centers", details: "Convenient access to markets" },
    ],
  },
  2: {
    id: 2,
    title: "Contemporary Apartment in Kacyiru",
    price: "350,000,000 RWF",
    location: "Kacyiru, Kigali, Rwanda",
    images: [
      "/luxury-apartment-building-kigali.jpg",
      "/modern-luxury-house-in-kigali-rwanda.jpg",
      "/luxury-villa-rwanda-modern-architecture.jpg",
      "/elegant-family-house-rwanda.jpg",
    ],
    bedrooms: 2,
    bathrooms: 2,
    landSize: "150 sqm",
    description: `A beautiful contemporary apartment perfect for professionals and small families. This modern unit features open-plan living, modern kitchen, and comfortable bedrooms.

Located in a secure residential complex with excellent amenities including 24/7 security, generator backup, and water tank. The building is in a vibrant neighborhood with easy access to restaurants, shops, and business centers.

An ideal investment for those seeking modern city living.`,
    features: [
      { icon: Bed, text: "2 Bedrooms", details: "Comfortable and well-lit" },
      { icon: Bath, text: "2 Bathrooms", details: "Contemporary design" },
      { icon: Droplets, text: "Water Supply", details: "24/7 water connection" },
      { icon: Power, text: "Electricity", details: "Backup generator available" },
      { icon: MapPin, text: "Paved Road Access", details: "Easy access roads" },
      { icon: Lock, text: "Secure Complex", details: "24/7 security personnel" },
      { icon: Home, text: "Parking Available", details: "Dedicated parking space" },
      { icon: ShoppingCart, text: "Shopping Nearby", details: "Close to commercial area" },
    ],
  },
  3: {
    id: 3,
    title: "Premium Villa in Kimihurura",
    price: "1,200,000,000 RWF",
    location: "Kimihurura, Kigali, Rwanda",
    images: [
      "/luxury-villa-rwanda-modern-architecture.jpg",
      "/modern-luxury-house-in-kigali-rwanda.jpg",
      "/luxury-apartment-building-kigali.jpg",
      "/elegant-family-house-rwanda.jpg",
    ],
    bedrooms: 5,
    bathrooms: 4,
    landSize: "900 sqm",
    description: `Experience luxury living at its finest with this premium villa in Kimihurura. This architectural masterpiece boasts contemporary design, high-end finishes, and exceptional attention to detail.

The property features multiple living areas, a chef's kitchen, a spacious family room, and a stunning master suite. Set on expansive grounds with manicured gardens, swimming pool area, and entertainment spaces, this villa is perfect for discerning homeowners.

Located in Kigali's most exclusive neighborhood, surrounded by diplomatic residences and high-end properties.`,
    features: [
      { icon: Bed, text: "5 Bedrooms", details: "Luxurious master and guest suites" },
      { icon: Bath, text: "4 Bathrooms", details: "Premium fixtures throughout" },
      { icon: Droplets, text: "Water Supply", details: "24/7 water connection" },
      { icon: Power, text: "Electricity", details: "Reliable power supply" },
      { icon: MapPin, text: "Paved Road Access", details: "Exclusive location" },
      { icon: Lock, text: "Premium Security", details: "High-security compound" },
      { icon: Home, text: "Swimming Pool", details: "Professional pool area" },
      { icon: ShoppingCart, text: "Exclusive Area", details: "Premium neighborhood" },
    ],
  },
  4: {
    id: 4,
    title: "Family Home in Gisozi",
    price: "620,000,000 RWF",
    location: "Gisozi, Kigali, Rwanda",
    images: [
      "/elegant-family-house-rwanda.jpg",
      "/modern-luxury-house-in-kigali-rwanda.jpg",
      "/luxury-apartment-building-kigali.jpg",
      "/luxury-villa-rwanda-modern-architecture.jpg",
    ],
    bedrooms: 3,
    bathrooms: 2,
    landSize: "400 sqm",
    description: `A charming family home in the peaceful neighborhood of Gisozi. This well-designed property offers comfortable living spaces, modern amenities, and a welcoming atmosphere.

The home features three spacious bedrooms, a modern kitchen, and a large living area perfect for family gatherings. The property sits on a generous plot with a beautiful garden and outdoor entertaining space.

Ideal for families looking for a serene environment while maintaining close proximity to Kigali's urban conveniences.`,
    features: [
      { icon: Bed, text: "3 Bedrooms", details: "Comfortable family spaces" },
      { icon: Bath, text: "2 Bathrooms", details: "Modern facilities" },
      { icon: Droplets, text: "Water Supply", details: "24/7 water connection" },
      { icon: Power, text: "Electricity", details: "Reliable supply" },
      { icon: MapPin, text: "Paved Road Access", details: "Easy access" },
      { icon: Lock, text: "Secure Compound", details: "Walled property" },
      { icon: Home, text: "Garden Area", details: "Large outdoor space" },
      { icon: ShoppingCart, text: "Schools Nearby", details: "Close to education" },
    ],
  },
  5: {
    id: 5,
    title: "Luxury Apartment Remera",
    price: "450,000,000 RWF",
    location: "Remera, Kigali, Rwanda",
    images: [
      "/luxury-apartment-building-kigali.jpg",
      "/modern-luxury-house-in-kigali-rwanda.jpg",
      "/elegant-family-house-rwanda.jpg",
      "/luxury-villa-rwanda-modern-architecture.jpg",
    ],
    bedrooms: 3,
    bathrooms: 2,
    landSize: "200 sqm",
    description: `Discover luxury living in this premium apartment located in Remera. Modern design meets functionality in this well-appointed residence perfect for professionals and families.

The apartment features a spacious living area, modern kitchen, and comfortable bedrooms. The building offers excellent amenities and is situated in a vibrant area with easy access to restaurants, shops, and entertainment venues.

An excellent choice for those seeking modern convenience and comfortable urban living.`,
    features: [
      { icon: Bed, text: "3 Bedrooms", details: "Well-designed spaces" },
      { icon: Bath, text: "2 Bathrooms", details: "Modern fixtures" },
      { icon: Droplets, text: "Water Supply", details: "24/7 water connection" },
      { icon: Power, text: "Electricity", details: "Backup power" },
      { icon: MapPin, text: "Paved Road Access", details: "Easy access" },
      { icon: Lock, text: "Secure Building", details: "24/7 security" },
      { icon: Home, text: "Modern Amenities", details: "Gym and lounge" },
      { icon: ShoppingCart, text: "Shopping Area", details: "Close to shops" },
    ],
  },
  6: {
    id: 6,
    title: "Commercial Space Kigali Center",
    price: "280,000,000 RWF",
    location: "Kigali Center, Kigali, Rwanda",
    images: [
      "/modern-luxury-house-in-kigali-rwanda.jpg",
      "/luxury-apartment-building-kigali.jpg",
      "/elegant-family-house-rwanda.jpg",
      "/luxury-villa-rwanda-modern-architecture.jpg",
    ],
    bedrooms: 0,
    bathrooms: 2,
    landSize: "300 sqm",
    description: `Prime commercial space in the heart of Kigali's central business district. Perfect for retail, office, or service-based businesses. This strategic location attracts high foot traffic and excellent visibility.

The space features modern design, good lighting, and flexible layout options. Located near major shops, restaurants, and business establishments, this is an ideal location for entrepreneurs and established businesses.

A rare opportunity to secure premium commercial real estate in Rwanda's most dynamic business hub.`,
    features: [
      { icon: Droplets, text: "Water Supply", details: "24/7 water connection" },
      { icon: Power, text: "Electricity", details: "3-phase power available" },
      { icon: MapPin, text: "Prime Location", details: "High visibility spot" },
      { icon: Lock, text: "Secure Area", details: "Well-monitored zone" },
      { icon: Home, text: "Flexible Layout", details: "Can be customized" },
      { icon: ShoppingCart, text: "Business Hub", details: "Surrounded by commerce" },
    ],
  },
}

export default function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const property = propertyData[params.id as keyof typeof propertyData] || propertyData[1]

  return (
    <main className="min-h-screen pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/properties"
          className="text-blue-900 hover:text-blue-800 font-semibold mb-10 inline-flex items-center gap-2 transition-colors duration-300"
        >
          <span>←</span> Back to Properties
        </Link>

        {/* Image Gallery (server page delegates interactivity to client component) */}
        <PropertyGallery images={property.images} title={property.title} />

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Property Header */}
            <div className="border-b border-slate-200 pb-10">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6 text-balance">
                {property.title}
              </h1>
              <div className="flex items-center gap-2 text-slate-600 mb-6">
                <MapPin size={22} className="text-amber-600 flex-shrink-0" />
                <span className="text-lg font-medium">{property.location}</span>
              </div>
              <p className="text-5xl font-serif font-bold text-amber-600">{property.price}</p>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-6 bg-gradient-to-br from-slate-50 to-white p-10 rounded-xl border border-slate-200">
              {property.bedrooms > 0 && (
                <div className="text-center group">
                  <div className="w-16 h-16 bg-blue-900/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-amber-600/20 transition-colors duration-300">
                    <Bed size={28} className="text-blue-900 group-hover:text-amber-600 transition-colors" />
                  </div>
                  <p className="text-3xl font-bold text-slate-900 mb-1">{property.bedrooms}</p>
                  <p className="text-slate-600 font-medium">Bedrooms</p>
                </div>
              )}
              {property.bathrooms > 0 && (
                <div className="text-center group">
                  <div className="w-16 h-16 bg-blue-900/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-amber-600/20 transition-colors duration-300">
                    <Bath size={28} className="text-blue-900 group-hover:text-amber-600 transition-colors" />
                  </div>
                  <p className="text-3xl font-bold text-slate-900 mb-1">{property.bathrooms}</p>
                  <p className="text-slate-600 font-medium">Bathrooms</p>
                </div>
              )}
              <div className="text-center group">
                <div className="w-16 h-16 bg-blue-900/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-amber-600/20 transition-colors duration-300">
                  <Maximize2 size={28} className="text-blue-900 group-hover:text-amber-600 transition-colors" />
                </div>
                <p className="text-3xl font-bold text-slate-900 mb-1">{property.landSize}</p>
                <p className="text-slate-600 font-medium">Land Size</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">About This Property</h2>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line text-lg">{property.description}</p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Property Features</h2>
              <div className="grid md:grid-cols-2 gap-5">
                {property.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 bg-white border border-slate-200 p-6 rounded-xl hover:shadow-md hover:border-amber-300 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-blue-900/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-600/20 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-blue-900 group-hover:text-amber-600 transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{feature.text}</h3>
                      <p className="text-sm text-slate-600">{feature.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-slate-200 rounded-xl p-8 sticky top-32 card-shadow-md">
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">Contact Agent</h2>

              <form className="space-y-5 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input type="text" placeholder="Your name" className="input-premium" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                  <input type="email" placeholder="your@email.com" className="input-premium" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone</label>
                  <input type="tel" placeholder="+250 ..." className="input-premium" />
                </div>
              </form>

              <div className="space-y-3 mb-6">
                <button className="w-full btn-primary text-base py-4 font-semibold">Send Inquiry</button>

                <a
                  href="https://wa.me/+250795664824"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg transition-all duration-300 font-semibold text-center hover:shadow-lg"
                >
                  Chat on WhatsApp
                </a>

                <a
                  href="tel:+250795664824"
                  className="block w-full bg-slate-700 hover:bg-slate-800 text-white py-4 rounded-lg transition-all duration-300 font-semibold text-center hover:shadow-lg"
                >
                  Call Agent
                </a>
              </div>

              {/* Agent Info */}
              <div className="pt-6 border-t border-slate-200">
                <h3 className="font-serif font-bold text-slate-900 mb-3">MUHIRE Team</h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  Professional real estate agents ready to assist you
                </p>
                <p className="text-sm text-slate-600 mb-2">
                  <span className="font-semibold text-slate-900">Phone:</span> +250795664824
                </p>
                <p className="text-sm text-slate-600">
                  <span className="font-semibold text-slate-900">Email:</span> info@muhire.rw
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
