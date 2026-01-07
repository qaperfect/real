import { Search, CheckCircle2, Users, Zap, MapPin, Lock, TrendingUp } from "lucide-react"
import PropertyCard from "@/components/property-card"
import SearchBar from "@/components/search-bar"

const featuredProperties = [
  {
    id: 1,
    title: "Modern House in Nyarutarama",
    price: "850,000,000 RWF",
    location: "Nyarutarama, Kigali",
    image: "/modern-luxury-house-in-kigali-rwanda.jpg",
    bedrooms: 4,
    bathrooms: 3,
    landSize: "600 sqm",
  },
  {
    id: 2,
    title: "Contemporary Apartment in Kacyiru",
    price: "350,000,000 RWF",
    location: "Kacyiru, Kigali",
    image: "/luxury-apartment-building-kigali.jpg",
    bedrooms: 2,
    bathrooms: 2,
    landSize: "150 sqm",
  },
  {
    id: 3,
    title: "Premium Villa in Kimihurura",
    price: "1,200,000,000 RWF",
    location: "Kimihurura, Kigali",
    image: "/luxury-villa-rwanda-modern-architecture.jpg",
    bedrooms: 5,
    bathrooms: 4,
    landSize: "900 sqm",
  },
  {
    id: 4,
    title: "Family Home in Gisozi",
    price: "620,000,000 RWF",
    location: "Gisozi, Kigali",
    image: "/elegant-family-house-rwanda.jpg",
    bedrooms: 3,
    bathrooms: 2,
    landSize: "400 sqm",
  },
]

const whyChoose = [
  {
    icon: Users,
    title: "Local Expertise",
    description: "Deep knowledge of Rwandan real estate market trends and neighborhoods",
  },
  {
    icon: CheckCircle2,
    title: "Verified Properties",
    description: "All listings are thoroughly verified and professionally photographed",
  },
  {
    icon: Lock,
    title: "Secure Process",
    description: "Transparent, secure transactions with clear documentation",
  },
  {
    icon: Zap,
    title: "Fast Service",
    description: "Quick responses and efficient property viewing scheduling",
  },
]

const howItWorks = [
  {
    number: "01",
    title: "Search Properties",
    description: "Browse our curated selection of premium properties across Rwanda with advanced filters",
    icon: Search,
  },
  {
    number: "02",
    title: "Schedule Viewing",
    description: "Contact our team to schedule a viewing at your convenience",
    icon: MapPin,
  },
  {
    number: "03",
    title: "Complete Purchase",
    description: "Our experts guide you through the entire transaction process",
    icon: Lock,
  },
]

const trustIndicators = [
  { number: "500+", label: "Properties Sold", icon: TrendingUp },
  { number: "1000+", label: "Happy Clients", icon: Users },
  { number: "15+", label: "Years Experience", icon: TrendingUp },
]

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-24">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/luxury-modern-house-architecture-kigali-rwanda.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10" />

        <div className="relative z-20 text-center text-white px-6 max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 text-balance leading-tight tracking-tight">
            Find Your Dream Home in Rwanda
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-12 text-slate-100 text-balance leading-relaxed font-light">
            Discover premium properties in Kigali and across Rwanda. Trusted agents, verified listings, transparent
            pricing.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/properties" className="btn-secondary">
              View Properties
            </a>
            <a
              href="https://wa.me/250795664824"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white px-10 py-4 rounded-lg font-serif font-bold text-lg transition-all duration-300 border border-white/40 hover:border-white/60 hover:shadow-lg"
            >
              Contact via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Search Bar Section */}
      <section className="bg-white py-10 border-b border-slate-100 relative -mt-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchBar />
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {trustIndicators.map((indicator, idx) => (
              <div key={idx} className="animate-fade-in group" style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <indicator.icon className="w-14 h-14 text-amber-400" />
                </div>
                <p className="text-5xl font-serif font-bold mb-2">{indicator.number}</p>
                <p className="text-blue-100 font-medium text-lg">{indicator.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">Featured Listings</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-6 mt-4 text-balance">
              Premium Properties
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Handpicked premium properties available now in Rwanda's most desirable locations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProperties.map((property, idx) => (
              <div key={property.id} className="animate-fade-in" style={{ animationDelay: `${idx * 0.12}s` }}>
                <PropertyCard property={property} />
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in">
            <a href="/properties" className="btn-primary">
              View All Properties
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">Our Process</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-6 mt-4 text-balance">
              How It Works
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Simple, transparent steps to finding your perfect property
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {howItWorks.map((step, idx) => (
              <div key={idx} className="relative animate-fade-in group" style={{ animationDelay: `${idx * 0.12}s` }}>
                <div className="bg-white rounded-xl p-10 card-shadow-md h-full hover-lift border border-slate-100">
                  <div className="text-6xl font-serif font-bold text-amber-600/15 mb-6 leading-none">{step.number}</div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-600 transition-colors duration-300">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900 pt-1">{step.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose MUHIRE */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-6 mt-4 text-balance">
              Our Advantages
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              What sets MUHIRE apart in the Rwandan real estate market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 card-shadow-md hover-lift animate-fade-in border border-slate-100 group"
                style={{ animationDelay: `${idx * 0.12}s` }}
              >
                <div className="w-14 h-14 bg-blue-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-serif font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 text-balance">
            Ready to Find Your Perfect Property?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed font-light">
            Our team is ready to help you navigate the Rwandan real estate market with expertise, transparency, and
            dedication.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/contact" className="btn-primary bg-white text-blue-900 hover:bg-slate-100">
              Get In Touch
            </a>
            <a href="https://wa.me/+250795664824" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
