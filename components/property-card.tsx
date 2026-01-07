import Link from "next/link"
import { Bed, Bath, Maximize2 } from "lucide-react"

interface Property {
  id: number
  title: string
  price: string
  location: string
  image: string
  bedrooms: number
  bathrooms: number
  landSize: string
}

interface PropertyCardProps {
  property: Property
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/properties/${property.id}`}>
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col hover-lift border border-slate-100">
        {/* Image Container with Badge */}
        <div className="relative overflow-hidden bg-slate-200 h-64 flex-shrink-0">
          <img
            src={property.image || "/placeholder.svg"}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 right-4 bg-blue-900 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide">
            Featured
          </div>
        </div>

        {/* Content */}
        <div className="p-7 flex flex-col flex-grow">
          <h3 className="text-lg font-serif font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-900 transition-colors duration-300">
            {property.title}
          </h3>

          <p className="text-sm text-slate-500 mb-5 flex items-center gap-2 font-medium">
            <span>📍</span> {property.location}
          </p>

          <p className="text-3xl font-serif font-bold text-amber-600 mb-7">{property.price}</p>

          <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-slate-200">
            <div className="flex flex-col items-center text-center group/feat">
              <div className="w-10 h-10 rounded-lg bg-blue-900/10 flex items-center justify-center mb-2 group-hover/feat:bg-amber-600/20 transition-colors duration-300">
                <Bed size={18} className="text-blue-900 group-hover/feat:text-amber-600 transition-colors" />
              </div>
              <span className="text-sm font-bold text-slate-900">{property.bedrooms}</span>
              <span className="text-xs text-slate-500 font-medium">Beds</span>
            </div>
            <div className="flex flex-col items-center text-center group/feat">
              <div className="w-10 h-10 rounded-lg bg-blue-900/10 flex items-center justify-center mb-2 group-hover/feat:bg-amber-600/20 transition-colors duration-300">
                <Bath size={18} className="text-blue-900 group-hover/feat:text-amber-600 transition-colors" />
              </div>
              <span className="text-sm font-bold text-slate-900">{property.bathrooms}</span>
              <span className="text-xs text-slate-500 font-medium">Baths</span>
            </div>
            <div className="flex flex-col items-center text-center group/feat">
              <div className="w-10 h-10 rounded-lg bg-blue-900/10 flex items-center justify-center mb-2 group-hover/feat:bg-amber-600/20 transition-colors duration-300">
                <Maximize2 size={18} className="text-blue-900 group-hover/feat:text-amber-600 transition-colors" />
              </div>
              <span className="text-sm font-bold text-slate-900">{property.landSize.split(" ")[0]}</span>
              <span className="text-xs text-slate-500 font-medium">Size</span>
            </div>
          </div>

          <button className="mt-auto w-full btn-primary text-sm py-3 flex items-center justify-center gap-2 font-semibold">
            View Details
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>
    </Link>
  )
}
