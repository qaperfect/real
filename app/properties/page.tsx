"use client"

import React from "react"

import { useState } from "react"
import { MapPin, Home, DollarSign, RotateCcw } from "lucide-react"
import PropertyCard from "@/components/property-card"

const allProperties = [
  {
    id: 1,
    title: "Modern House in Nyarutarama",
    price: "850,000,000 RWF",
    location: "Nyarutarama, Kigali",
    image: "/modern-luxury-house-in-kigali-rwanda.jpg",
    bedrooms: 4,
    bathrooms: 3,
    landSize: "600 sqm",
    type: "House",
    priceValue: 850000000,
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
    type: "Apartment",
    priceValue: 350000000,
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
    type: "House",
    priceValue: 1200000000,
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
    type: "House",
    priceValue: 620000000,
  },
  {
    id: 5,
    title: "Luxury Apartment Remera",
    price: "450,000,000 RWF",
    location: "Remera, Kigali",
    image: "/luxury-apartment-building-kigali.jpg",
    bedrooms: 3,
    bathrooms: 2,
    landSize: "200 sqm",
    type: "Apartment",
    priceValue: 450000000,
  },
  {
    id: 6,
    title: "Commercial Space Kigali Center",
    price: "280,000,000 RWF",
    location: "Kigali Center, Kigali",
    image: "/modern-luxury-house-in-kigali-rwanda.jpg",
    bedrooms: 0,
    bathrooms: 2,
    landSize: "300 sqm",
    type: "Commercial",
    priceValue: 280000000,
  },
]

export default function PropertiesPage() {
  const [filteredProperties, setFilteredProperties] = useState(allProperties)
  const [selectedLocation, setSelectedLocation] = useState("All Locations")
  const [selectedType, setSelectedType] = useState("All Types")
  const [selectedPrice, setSelectedPrice] = useState("Any Price")
  const [sortBy, setSortBy] = useState("newest")

  const locations = ["All Locations", "Kigali", "Nyarutarama", "Kacyiru", "Kimihurura", "Gisozi", "Remera"]
  const types = ["All Types", "House", "Apartment", "Land", "Commercial"]
  const priceRanges = ["Any Price", "0 - 100M RWF", "100M - 300M RWF", "300M - 600M RWF", "600M - 1B RWF", "1B+ RWF"]

  const handleFilter = () => {
    let filtered = allProperties

    if (selectedLocation !== "All Locations") {
      filtered = filtered.filter((p) => p.location.includes(selectedLocation))
    }

    if (selectedType !== "All Types") {
      filtered = filtered.filter((p) => p.type === selectedType)
    }

    if (selectedPrice !== "Any Price") {
      filtered = filtered.filter((p) => {
        if (selectedPrice === "0 - 100M RWF") return p.priceValue < 100000000
        if (selectedPrice === "100M - 300M RWF") return p.priceValue >= 100000000 && p.priceValue < 300000000
        if (selectedPrice === "300M - 600M RWF") return p.priceValue >= 300000000 && p.priceValue < 600000000
        if (selectedPrice === "600M - 1B RWF") return p.priceValue >= 600000000 && p.priceValue < 1000000000
        if (selectedPrice === "1B+ RWF") return p.priceValue >= 1000000000
        return true
      })
    }

    if (sortBy === "price-low") {
      filtered.sort((a, b) => a.priceValue - b.priceValue)
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => b.priceValue - a.priceValue)
    }

    setFilteredProperties(filtered)
  }

  React.useEffect(() => {
    handleFilter()
  }, [selectedLocation, selectedType, selectedPrice, sortBy])

  const handleReset = () => {
    setSelectedLocation("All Locations")
    setSelectedType("All Types")
    setSelectedPrice("Any Price")
    setSortBy("newest")
  }

  return (
    <main className="min-h-screen pt-32 pb-20 bg-white">
      {/* Header */}
      <section className="border-b border-slate-200 pb-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">Browse Properties</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-900 mb-6 mt-4 text-balance">
              All Properties
            </h1>
            <p className="text-xl text-slate-600 font-light">
              Browse {filteredProperties.length} available premium properties across Rwanda
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Filter Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-slate-200 p-8 sticky top-32 card-shadow-md">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-lg font-serif font-bold text-slate-900">Filters</h2>
                <button
                  onClick={handleReset}
                  className="text-sm text-amber-600 hover:text-amber-700 font-semibold flex items-center gap-1 transition-colors duration-300"
                  title="Reset all filters"
                >
                  <RotateCcw size={16} />
                  Reset
                </button>
              </div>

              {/* Location Filter */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider flex items-center gap-2">
                  <MapPin size={16} className="text-amber-600" />
                  Location
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="input-premium"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Property Type Filter */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider flex items-center gap-2">
                  <Home size={16} className="text-amber-600" />
                  Property Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="input-premium"
                >
                  {types.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider flex items-center gap-2">
                  <DollarSign size={16} className="text-amber-600" />
                  Price Range
                </label>
                <select
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                  className="input-premium"
                >
                  {priceRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Sort By</label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="input-premium">
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Properties Grid */}
          <div className="lg:col-span-3">
            {filteredProperties.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProperties.map((property, idx) => (
                  <div key={property.id} className="animate-fade-in" style={{ animationDelay: `${idx * 0.05}s` }}>
                    <PropertyCard property={property} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="col-span-full text-center py-24 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-xl text-slate-600 mb-8 font-medium">No properties found matching your criteria.</p>
                <button onClick={handleReset} className="btn-primary inline-flex items-center gap-2">
                  <RotateCcw size={18} />
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
