import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})
const _lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "MUHIRE Real Estate - Find Your Dream Home in Rwanda",
  description:
    "Discover premium properties in Kigali, Rwanda. Trusted agents, verified properties, transparent pricing, and fast communication.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_playfair.variable} ${_lato.variable} font-sans antialiased bg-white text-slate-900`}>
        <Navbar />
        {children}
        <ScrollToTop />
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
