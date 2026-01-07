"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would send the form data to a backend
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    }, 4000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+250795664824",
      link: "tel:+250795664824",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@muhire.rw",
      link: "mailto:info@muhire.rw",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Kigali, Rwanda",
      link: "#",
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon - Fri: 8:00 AM - 6:00 PM",
      link: "#",
    },
  ]

  return (
    <main className="min-h-screen pt-24 pb-16 bg-white">
      {/* Hero Section */}
      <section className="py-28 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-serif font-bold mb-8 text-balance">Get In Touch</h1>
          <p className="text-xl text-blue-100 leading-relaxed font-light">
            We're here to help you find the perfect property or answer any questions you may have
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Info Grid */}
        <section className="py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, idx) => (
              <a
                key={idx}
                href={info.link}
                className="bg-white border border-slate-200 p-8 rounded-xl text-center hover:border-amber-400 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex justify-center mb-5">
                  <div className="w-14 h-14 bg-blue-900/10 rounded-lg flex items-center justify-center group-hover:bg-amber-600/20 transition-colors duration-300">
                    <info.icon className="w-7 h-7 text-blue-900 group-hover:text-amber-600 transition-colors" />
                  </div>
                </div>
                <h3 className="font-serif font-bold text-slate-900 mb-2 text-lg">{info.title}</h3>
                <p className="text-slate-600 group-hover:text-blue-900 transition-colors font-medium">{info.details}</p>
              </a>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-5xl font-serif font-bold text-slate-900 mb-10 text-balance">Send us a Message</h2>

              {submitted && (
                <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl flex items-start gap-4 animate-slide-in-down">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-900 mb-1">Message Sent Successfully</h3>
                    <p className="text-green-800 text-sm">
                      Thank you for your message! Our team will get back to you as soon as possible.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="input-premium"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="input-premium"
                    />
                  </div>
                </div>

                {/* Phone and Subject */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+250 ..."
                      className="input-premium"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="input-premium"
                    >
                      <option value="">Select a subject</option>
                      <option value="property-inquiry">Property Inquiry</option>
                      <option value="buy">I Want to Buy</option>
                      <option value="sell">I Want to Sell</option>
                      <option value="rent">I Want to Rent</option>
                      <option value="investment">Investment Opportunity</option>
                      <option value="general">General Question</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us more about your real estate needs..."
                    rows={7}
                    className="input-premium resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-primary text-base py-5 flex items-center justify-center gap-2 font-semibold hover:shadow-xl"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-1 space-y-8">
              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-xl p-10 shadow-lg">
                <h3 className="text-2xl font-serif font-bold mb-4">Quick Contact</h3>
                <p className="text-blue-100 mb-8 leading-relaxed font-light">
                  Prefer to talk directly? Reach out to us via phone or WhatsApp for immediate assistance.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+250795664824"
                    className="block bg-white text-blue-900 py-3 px-4 rounded-lg hover:bg-slate-100 transition-all duration-300 font-semibold text-center hover:shadow-lg"
                  >
                    Call Us
                  </a>
                  <a
                    href="https://wa.me/250795664824"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg transition-all duration-300 font-semibold text-center hover:shadow-lg"
                  >
                    WhatsApp Chat
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white border border-slate-200 rounded-xl p-10 card-shadow-md">
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-6">Office Hours</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Monday - Friday</p>
                    <p className="text-slate-600">8:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Saturday</p>
                    <p className="text-slate-600">9:00 AM - 3:00 PM</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Sunday</p>
                    <p className="text-slate-600 text-amber-600">Closed</p>
                  </div>
                </div>
              </div>

              {/* Why Contact */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-10">
                <h3 className="text-lg font-serif font-bold text-slate-900 mb-5">Why Contact Us?</h3>
                <ul className="text-sm text-slate-600 space-y-3">
                  {[
                    "Expert advice & consultation",
                    "Free property valuations",
                    "Market insights",
                    "Investment opportunities",
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="text-amber-600 font-bold flex-shrink-0 mt-1">✓</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 -mx-4 sm:-mx-6 lg:-mx-8">
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-10 px-4 sm:px-6 lg:px-8 text-balance">
            Find Us on Map
          </h2>
          <div className="bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 rounded-xl h-96 overflow-hidden shadow-lg">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin size={56} className="mx-auto mb-4 opacity-80" />
                <p className="font-serif font-bold text-xl mb-2">Kigali, Rwanda</p>
                <p className="text-sm opacity-90 font-light">Interactive map placeholder</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-28 text-center animate-fade-in">
          <h2 className="text-5xl font-serif font-bold text-slate-900 mb-6 text-balance">
            Have Questions About Properties?
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Browse our properties or let our experts guide you to your perfect home.
          </p>
          <a href="/properties" className="btn-primary inline-block">
            View Properties
          </a>
        </section>
      </div>
    </main>
  )
}
