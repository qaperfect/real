import Link from "next/link"
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, ArrowRight } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-20 md:py-28 grid md:grid-cols-4 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="animate-fade-in space-y-6" style={{ animationDelay: "0s" }}>
            <h3 className="text-2xl font-serif font-bold">MUHIRE</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Rwanda's trusted real estate partner, connecting you with premium properties and professional expertise.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="text-slate-400 hover:text-amber-500 hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={22} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-amber-500 hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-amber-500 hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in space-y-6" style={{ animationDelay: "0.1s" }}>
            <h4 className="font-serif font-bold text-amber-500 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/properties", label: "Properties" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group text-sm"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in space-y-6" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-serif font-bold text-amber-500 text-lg">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-300 text-sm cursor-pointer">
                <Phone size={20} className="text-amber-500 flex-shrink-0" />
                <a href="tel:+250795664824">+250795664824</a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-300 text-sm cursor-pointer">
                <Mail size={20} className="text-amber-500 flex-shrink-0" />
                <a href="mailto:info@muhire.rw">info@muhire.rw</a>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin size={20} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <span>Kigali, Rwanda</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="animate-fade-in space-y-6" style={{ animationDelay: "0.3s" }}>
            <h4 className="font-serif font-bold text-amber-500 text-lg">Get Updates</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Subscribe to receive the latest properties and market updates.
            </p>
            <div className="flex rounded-lg overflow-hidden shadow-lg">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-5 py-3 bg-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-slate-500"
              />
              <button className="px-5 py-3 bg-amber-600 hover:bg-amber-700 transition-all duration-200 font-medium hover:shadow-lg">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-800 py-10 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400 gap-6">
          <p>&copy; {currentYear} MUHIRE Real Estate. All rights reserved.</p>
          <p className="text-amber-500 font-medium">Website designed & developed by DevPerfection</p>
        </div>
      </div>
    </footer>
  )
}
