import Link from "next/link"
import { HardHat, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-[#131313] text-white">
      <div className="container py-12 md:py-16 lg:py-20 sm:py-14 ml-0 sm:ml-[50px]">
        {/* 29YARDS Section - Full Width */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
          <div className="text-center sm:text-left">
            <Link href="/" className="flex items-center gap-2 mb-6 md:mb-8 justify-center sm:justify-start">
              <HardHat className="h-7 w-7 text-[#646464]" />
              <span className="text-xl font-bold text-white">29YARDS</span>
            </Link>
            <p className="text-gray-400 mb-6 md:mb-8 text-sm sm:text-base">
              Your trusted partner for innovative construction solutions. Building excellence and delivering quality
              since 2026.
            </p>
            <div className="flex space-x-4 md:space-x-6 justify-center sm:justify-start">
              <Link href="#" className="text-gray-400 hover:text-[#646464] transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#646464] transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#646464] transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#646464] transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Services and Quick Links - 2 Columns on Mobile, then 4 Columns on Desktop */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4 md:mb-6 text-white">Our Services</h3>
            <ul className="space-y-2 sm:space-y-3 md:space-y-4">
              <li>
                <Link
                  href="/services/residential"
                  className="text-gray-400 text-sm sm:text-base hover:text-[#646464] transition-colors inline-block"
                >
                  Residential Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/services/commercial"
                  className="text-gray-400 text-sm sm:text-base hover:text-[#646464] transition-colors inline-block"
                >
                  Commercial Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/services/renovation"
                  className="text-gray-400 text-sm sm:text-base hover:text-[#646464] transition-colors inline-block"
                >
                  Renovation Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4 md:mb-6 text-white">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3 md:space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 text-sm sm:text-base hover:text-[#646464] transition-colors inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-400 text-sm sm:text-base hover:text-[#646464] transition-colors inline-block"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 text-sm sm:text-base hover:text-[#646464] transition-colors inline-block"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 text-sm sm:text-base hover:text-[#646464] transition-colors inline-block"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 text-sm sm:text-base hover:text-[#646464] transition-colors inline-block"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - Full Width on Mobile, 2 Columns on Desktop */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-2 text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4 md:mb-6 text-white text-left ml-[33px] sm:ml-0">Contact Information</h3>
            <ul className="space-y-3 sm:space-y-4 md:space-y-6 ml-[33px] sm:ml-0">
              <li className="flex items-start sm:justify-start justify-start">
                <MapPin className="h-5 w-5 text-[#646464] mr-3 md:mr-4 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base text-left">Vellore, Tamil Nadu, India</span>
              </li>
              <li className="flex items-start sm:justify-start justify-start">
                <Phone className="h-5 w-5 text-[#646464] mr-3 md:mr-4 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base">+91 7397611591</span>
              </li>
              <li className="flex items-start sm:justify-start justify-start">
                <Mail className="h-5 w-5 text-[#646464] mr-3 md:mr-4 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base">info@29yards.com</span>
              </li>
            </ul>
            <div className="mt-6 md:mt-8">
              <Link href="/contact#quote-form">
                <Button className="bg-[#3C3C3C] hover:bg-[#646464] text-white font-medium w-full transition-all duration-300">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 sm:mt-10 md:mt-12 pt-6 md:pt-8 text-center text-gray-400 text-sm max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} 29YARDS Construction. All rights reserved.</p>
          <Link href="https://dribyte.vercel.app/" target="_blank" rel="noopener noreferrer" className="mt-2 text-xs text-gray-400 hover:text-[#646464] transition-colors inline-block">
            ⚡Powered by Dribyte
          </Link>
        </div>
      </div>
    </footer>
  )
}
