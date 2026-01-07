"use client"

import type React from "react"

import { useState } from "react"
import { Search, MapPin, Home, DollarSign } from "lucide-react"

export default function SearchBar() {
  const [location, setLocation] = useState("")
  const [propertyType, setPropertyType] = useState("")
  const [priceRange, setPriceRange] = useState("")

  const locations = [
    "All Locations",
    "Kigali",
    "Nyarutarama",
    "Kacyiru",
    "Kimihurura",
    "Gisozi",
    "Remera",
    "Nyamata",
    "Musanze",
    "Huye",
  ]

  const propertyTypes = ["All Types", "House", "Apartment", "Land", "Commercial"]

  const priceRanges = ["Any Price", "0 - 100M RWF", "100M - 300M RWF", "300M - 600M RWF", "600M - 1B RWF", "1B+ RWF"]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
  }

  const searchFields = [
    {
      icon: MapPin,
      label: "Location",
      value: location,
      onChange: (e: React.ChangeEvent<HTMLSelectElement>) => setLocation(e.target.value),
      options: locations,
    },
    {
      icon: Home,
      label: "Property Type",
      value: propertyType,
      onChange: (e: React.ChangeEvent<HTMLSelectElement>) => setPropertyType(e.target.value),
      options: propertyTypes,
    },
    {
      icon: DollarSign,
      label: "Price Range",
      value: priceRange,
      onChange: (e: React.ChangeEvent<HTMLSelectElement>) => setPriceRange(e.target.value),
      options: priceRanges,
    },
  ]

  return (
    <form onSubmit={handleSearch} className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100">
      <div className="grid md:grid-cols-4 gap-0">
        {searchFields.map((field, idx) => (
          <div key={idx} className="relative border-r border-slate-200 last:border-r-0 p-6 md:p-5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-3 flex items-center gap-2">
              <field.icon size={16} className="text-amber-600" />
              {field.label}
            </label>
            <select
              value={field.value}
              onChange={field.onChange}
              className="input-premium text-base font-medium text-slate-900"
            >
              {field.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        ))}
        <div className="p-6 md:p-5 flex items-end">
          <button
            type="submit"
            className="w-full btn-secondary text-sm font-bold py-3 md:py-2.5 flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
          >
            <Search size={20} />
            Search
          </button>
        </div>
      </div>
    </form>
  )
}
