"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    return pathname === href
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/properties", label: "Properties" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50 border-b border-slate-100 backdrop-blur-md bg-white/98">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="text-2xl font-serif font-bold text-slate-900 transition-all duration-300 group-hover:text-blue-900">
              MUHIRE<span className="text-amber-600"> Real Estate</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-all duration-300 relative group text-sm tracking-wide ${
                  isActive(link.href) ? "text-blue-900 font-semibold" : "text-slate-700 hover:text-blue-900"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-600 to-amber-500 transition-all duration-300 rounded-full ${
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            <a
              href="https://wa.me/250795664824"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm py-3 px-6"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-blue-900 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 border-t border-slate-100 animate-slide-in-down">
            <div className="space-y-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-4 rounded-lg transition-all duration-200 font-medium ${
                    isActive(link.href) ? "bg-blue-900 text-white" : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/250795664824"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 btn-secondary text-center text-sm py-3"
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
