"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function PropertyGallery({
  images,
  title,
  className = "mb-12",
}: {
  images: string[]
  title?: string
  className?: string
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length)
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)

  return (
    <div className={className}>
      <div className="relative bg-slate-200 rounded-xl overflow-hidden h-96 md:h-[550px] shadow-lg">
        <img src={images[currentImageIndex] || "/placeholder.svg"} alt={title || "Property image"} className="w-full h-full object-cover" />

        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 p-3 rounded-full transition-all duration-300 z-10 shadow-lg hover:shadow-xl"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 p-3 rounded-full transition-all duration-300 z-10 shadow-lg hover:shadow-xl"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>

            <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
              {currentImageIndex + 1} / {images.length}
            </div>

            <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    idx === currentImageIndex ? "border-amber-600 shadow-lg" : "border-slate-300 hover:border-slate-400"
                  }`}
                >
                  <img src={img || "/placeholder.svg"} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
