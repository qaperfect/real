import { Heart, Target, Users, Award, TrendingUp, Shield } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "500+", label: "Properties Sold", icon: TrendingUp },
    { number: "1000+", label: "Happy Clients", icon: Users },
  ]

  const team = [
    {
      id: 1,
      name: "Jean Paul Mvita",
      role: "Managing Director",
      image: "/professional-man-rwanda.jpg",
      bio: "20+ years of real estate experience in Rwanda",
    },
    {
      id: 2,
      name: "Marie Uwimana",
      role: "Senior Property Consultant",
      image: "/professional-woman-rwanda.jpg",
      bio: "Specialist in residential and commercial properties",
    },
    {
      id: 3,
      name: "Cyril Nkurunziza",
      role: "Property Valuation Expert",
      image: "/professional-man-business-rwanda.jpg",
      bio: "Expert in property assessment and valuation",
    },
    {
      id: 4,
      name: "Sylvie Harelimana",
      role: "Client Relations Manager",
      image: "/professional-woman-business-rwanda.jpg",
      bio: "Dedicated to exceeding client expectations",
    },
  ]

  const values = [
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "We maintain the highest standards of honesty and transparency in all transactions",
    },
    {
      icon: Heart,
      title: "Client-Focused",
      description: "Your satisfaction is our priority. We listen and deliver personalized solutions",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service delivery",
    },
  ]

  return (
    <main className="min-h-screen pt-20 pb-16 bg-white">
      {/* Hero Section */}
      <section className="py-28 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-serif font-bold mb-8 text-balance">About MUHIRE</h1>
          <p className="text-xl text-blue-100 leading-relaxed font-light">
            Leading the real estate transformation in Rwanda with integrity, expertise, and client-focused solutions
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Story */}
        <section className="py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-serif font-bold text-slate-900 mb-8 text-balance">Our Story</h2>
              <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  Founded with a vision to revolutionize real estate in Rwanda, MUHIRE Real Estate has grown to become a
                  trusted name in the Kigali property market. We recognized the need for a professional, transparent,
                  and client-focused approach to real estate transactions.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Starting with a small team of passionate professionals, we've built a reputation for delivering
                  exceptional service. Today, we proudly serve hundreds of satisfied clients, helping them find their
                  dream properties across Rwanda.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our success is built on the foundation of trust, integrity, and a deep understanding of the Rwandan
                  real estate market. We're committed to continuing this legacy while embracing innovation and best
                  practices.
                </p>
              </div>
            </div>
            <div className="bg-slate-300 rounded-xl h-96 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src="/luxury-modern-house-architecture-kigali-rwanda.jpg"
                alt="MUHIRE Office"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-28 bg-gradient-to-b from-slate-50 to-white -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 rounded-2xl">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-serif font-bold text-slate-900 mb-16 text-center text-balance">
              Our Mission & Vision
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-white rounded-xl p-12 shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-100 group">
                <div className="w-14 h-14 bg-blue-900/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-600/20 transition-colors duration-300">
                  <Target className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-5">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  To help every client find secure and affordable property in Rwanda through professional service,
                  transparent pricing, and deep market expertise. We strive to make real estate transactions accessible,
                  reliable, and rewarding for buyers, sellers, and investors.
                </p>
              </div>
              <div className="bg-white rounded-xl p-12 shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-100 group">
                <div className="w-14 h-14 bg-blue-900/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-600/20 transition-colors duration-300">
                  <Heart className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-5">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  To become the leading and most trusted real estate company in Rwanda. We envision a future where
                  quality properties are easily accessible, and every transaction is conducted with professionalism,
                  integrity, and excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-28">
          <h2 className="text-5xl font-serif font-bold text-slate-900 mb-16 text-center text-balance">
            By The Numbers
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-xl p-10 text-center card-shadow-md hover:shadow-2xl transition-all duration-300 group border border-blue-700"
              >
                <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-600/30 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-amber-400 group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-6xl font-serif font-bold mb-3">{stat.number}</p>
                <p className="text-blue-100 text-lg font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section className="py-28 bg-gradient-to-b from-slate-50 to-white -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 rounded-2xl">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-serif font-bold text-slate-900 mb-16 text-center text-balance">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {values.map((value, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-10 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 group text-center hover-lift"
                >
                  <div className="w-14 h-14 bg-blue-900/10 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-600/20 transition-colors duration-300">
                    <value.icon className="w-7 h-7 text-blue-900 group-hover:text-amber-600 transition-colors" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-28">
          <h2 className="text-5xl font-serif font-bold text-slate-900 mb-8 text-center text-balance">Meet Our Team</h2>
          <p className="text-center text-slate-600 text-lg mb-16 max-w-3xl mx-auto leading-relaxed">
            Our team of experienced professionals is dedicated to providing exceptional service and expert guidance
            throughout your real estate journey.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 hover-lift group p-8"
              >
                  <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">{member.name}</h3>
                  <p className="text-amber-600 font-semibold text-sm mb-3 uppercase tracking-wide">{member.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-28 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 rounded-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-serif font-bold mb-8 text-balance">Why Choose MUHIRE</h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed font-light">
              With over 15 years of experience in the Rwandan real estate market, we've established ourselves as
              trustworthy professionals committed to matching clients with their perfect properties. Our deep market
              knowledge, professional network, and client-centric approach ensure you receive the best service possible.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Expertise", text: "Deep knowledge of Rwandan real estate market trends and valuations" },
                { title: "Transparency", text: "Clear pricing and honest communication throughout the process" },
                { title: "Service", text: "Fast response times and personalized attention to your needs" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-blue-800/50 backdrop-blur-sm p-8 rounded-xl border border-blue-700/50 hover:bg-blue-800/70 transition-colors duration-300"
                >
                  <h3 className="font-serif font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-28 text-center animate-fade-in">
          <h2 className="text-5xl font-serif font-bold text-slate-900 mb-6 text-balance">Ready to Work With Us?</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Whether you're looking to buy, sell, or invest in Rwandan real estate, our team is ready to assist you.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/contact" className="btn-primary">
              Contact Us
            </a>
            <a href="https://wa.me/250700000000" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Chat on WhatsApp
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
