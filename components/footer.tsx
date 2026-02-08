import Link from "next/link"
import { HardHat, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, X } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-[#131313] text-white">
      <div className="container py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 29YARDS Logo and Description */}
          <div className="text-center mb-12 md:mb-16">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <HardHat className="h-6 w-6 md:h-8 md:w-8 text-[#646464]" />
              <span className="text-2xl md:text-3xl font-bold text-white">29YARDS</span>
            </Link>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl">
              Your trusted partner for innovative construction solutions. Building excellence and delivering quality
              since 2026.
            </p>
          </div>

          {/* Our Services Section */}
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-lg md:text-xl font-semibold mb-6 text-white">Our Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
              <Link
                href="/services/residential"
                className="text-gray-400 text-sm md:text-base hover:text-[#646464] transition-colors"
              >
                Residential
              </Link>
              <Link
                href="/services/commercial"
                className="text-gray-400 text-sm md:text-base hover:text-[#646464] transition-colors"
              >
                Commercial
              </Link>
              <Link
                href="/services/renovation"
                className="text-gray-400 text-sm md:text-base hover:text-[#646464] transition-colors"
              >
                Renovation
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-lg md:text-xl font-semibold mb-6 text-white">Quick Links</h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <Link
                href="/about"
                className="text-gray-400 text-sm md:text-base hover:text-[#646464] transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/projects"
                className="text-gray-400 text-sm md:text-base hover:text-[#646464] transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/careers"
                className="text-gray-400 text-sm md:text-base hover:text-[#646464] transition-colors"
              >
                Careers
              </Link>
              <Link
                href="/faq"
                className="text-gray-400 text-sm md:text-base hover:text-[#646464] transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 text-sm md:text-base hover:text-[#646464] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-lg md:text-xl font-semibold mb-8 text-white">Contact Information</h3>
            <div className="space-y-4 mx-[33px]">
              <div className="flex items-center gap-3 justify-start">
                <MapPin className="h-5 w-5 text-[#646464] flex-shrink-0" />
                <span className="text-gray-400 text-sm md:text-base">Vellore, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-3 justify-start">
                <Phone className="h-5 w-5 text-[#646464] flex-shrink-0" />
                <span className="text-gray-400 text-sm md:text-base">+91 7397611591</span>
              </div>
              <div className="flex items-center gap-3 justify-start">
                <Mail className="h-5 w-5 text-[#646464] flex-shrink-0" />
                <span className="text-gray-400 text-sm md:text-base">info@29yards.com</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mb-12 md:mb-16">
            <Link href="/contact#quote-form">
              <Button className="bg-[#3C3C3C] hover:bg-[#646464] text-white font-medium px-8 py-3 transition-all duration-300">
                Get a Free Quote
              </Button>
            </Link>
          </div>

          {/* Social Links */}
          <div className="text-center mb-8 md:mb-12">
            <div className="flex justify-center gap-6">
              <Link href="#" className="text-gray-400 hover:text-[#646464] transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#646464] transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#646464] transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#646464] transition-colors">
                <X className="h-6 w-6" />
                <span className="sr-only">X</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-gray-400 text-xs md:text-sm">
          <p>&copy; {new Date().getFullYear()} 29YARDS Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
