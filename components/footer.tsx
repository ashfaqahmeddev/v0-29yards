import Link from "next/link"
import { HardHat, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, X } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-[#131313] text-white">
      <div className="container py-12 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section - 29YARDS and Description */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <HardHat className="h-6 w-6 md:h-8 md:w-8 text-[#646464]" />
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white whitespace-nowrap">29YARDS</span>
            </Link>
            <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
              Your trusted partner for innovative construction solutions. Building excellence and delivering quality
              since 2026.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16 mb-12 md:mb-16 ml-0 lg:ml-[90px]">
            {/* Column 1 - Our Services */}
            <div className="text-center lg:text-left">
              <h3 className="text-lg md:text-xl font-semibold mb-6 text-white">Our Services</h3>
              <div className="flex lg:flex-col gap-2 md:gap-4 justify-center lg:justify-start">
                <Link
                  href="/services/residential"
                  className="text-gray-400 text-xs md:text-sm lg:text-base hover:text-[#646464] transition-colors"
                >
                  Residential
                </Link>
                <Link
                  href="/services/commercial"
                  className="text-gray-400 text-xs md:text-sm lg:text-base hover:text-[#646464] transition-colors"
                >
                  Commercial
                </Link>
                <Link
                  href="/services/renovation"
                  className="text-gray-400 text-xs md:text-sm lg:text-base hover:text-[#646464] transition-colors"
                >
                  Renovation
                </Link>
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div className="text-center lg:text-left">
              <h3 className="text-lg md:text-xl font-semibold mb-6 text-white">Quick Links</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-1 lg:flex lg:flex-col gap-2 md:gap-3 justify-center lg:justify-start">
                <Link
                  href="/about"
                  className="text-gray-400 text-xs md:text-sm lg:text-base hover:text-[#646464] transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/projects"
                  className="text-gray-400 text-xs md:text-sm lg:text-base hover:text-[#646464] transition-colors"
                >
                  Projects
                </Link>
                <Link
                  href="/careers"
                  className="text-gray-400 text-xs md:text-sm lg:text-base hover:text-[#646464] transition-colors"
                >
                  Careers
                </Link>
                <Link
                  href="/faq"
                  className="text-gray-400 text-xs md:text-sm lg:text-base hover:text-[#646464] transition-colors"
                >
                  FAQ
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-400 text-xs md:text-sm lg:text-base hover:text-[#646464] transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Column 3 - Contact Information */}
            <div className="flex flex-col gap-8 text-center lg:text-left">
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-6 text-white">Contact Information</h3>
                <div className="space-y-3 flex flex-col items-center lg:items-start">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-[#646464] flex-shrink-0" />
                    <span className="text-gray-400 text-xs md:text-sm lg:text-base">Vellore, Tamil Nadu, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[#646464] flex-shrink-0" />
                    <span className="text-gray-400 text-xs md:text-sm lg:text-base">+91 7397611591</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[#646464] flex-shrink-0" />
                    <span className="text-gray-400 text-xs md:text-sm lg:text-base">info@29yards.com</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start">
                <Link href="/contact#quote-form">
                  <Button className="bg-[#3C3C3C] hover:bg-[#646464] text-white font-medium px-6 md:px-8 py-2.5 md:py-3 text-xs md:text-sm transition-all duration-300">
                    Get a Free Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Social Links and Copyright */}
          <div className="border-t border-gray-800 pt-8 md:pt-12">
            <div className="flex justify-center gap-6 mb-8">
              <Link href="#" className="text-gray-400 hover:text-[#646464] transition-colors">
                <Facebook className="h-5 w-5 md:h-6 md:w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#646464] transition-colors">
                <Instagram className="h-5 w-5 md:h-6 md:w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#646464] transition-colors">
                <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#646464] transition-colors">
                <X className="h-5 w-5 md:h-6 md:w-6" />
                <span className="sr-only">X</span>
              </Link>
            </div>
            <p className="text-center text-gray-400 text-xs md:text-sm">&copy; {new Date().getFullYear()} 29YARDS Construction. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
