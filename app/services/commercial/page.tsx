import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Building2, Zap, BarChart3 } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Commercial Construction | 29YARDS",
  description:
    "Professional commercial construction services including office buildings, retail spaces, and corporate facilities in Tamil Nadu.",
}

export default function CommercialServicePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image src="/images/commercial-1.png" alt="Commercial construction" fill className="object-cover" priority />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Commercial Construction</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Building professional spaces with precision, efficiency, and durability.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
                Commercial Services
              </div>
              <h2 className="text-4xl font-bold mb-6">Building Business Spaces That Work</h2>
              <p className="text-gray-700 mb-6 text-lg">
                At 29YARDS, we specialize in creating commercial spaces that enhance productivity and reflect your brand
                identity. From office complexes to retail outlets, we deliver projects with efficient planning,
                durability, and modern construction standards.
              </p>
              <p className="text-gray-700 mb-8">
                Our team brings expertise in handling complex commercial projects with strict timelines, budget
                management, and minimal disruption to ongoing business operations.
              </p>
              <Link href="/contact">
                <Button className="bg-amber-500 hover:bg-amber-600 text-black">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/commercial-1.png" alt="Commercial construction" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
              What We Offer
            </div>
            <h2 className="text-4xl font-bold mb-6">Our Commercial Services</h2>
            <p className="text-gray-700 text-lg">
              We provide comprehensive commercial construction solutions tailored to your business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {commercialServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
              Our Process
            </div>
            <h2 className="text-4xl font-bold mb-6">How We Execute Commercial Projects</h2>
            <p className="text-gray-700 text-lg">
              Our streamlined process ensures efficiency, minimal business interruption, and on-time delivery.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-200 hidden md:block"></div>
              <div className="space-y-12 relative">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                  >
                    <div className="md:w-1/2 relative">
                      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm relative z-10">
                        <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                          <span className="text-amber-700 font-bold text-xl">{index + 1}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                        <p className="text-gray-700">{step.description}</p>
                      </div>
                      <div className="absolute top-1/2 left-0 md:left-auto md:right-0 transform translate-y-[-50%] translate-x-[-50%] md:translate-x-[50%] w-6 h-6 bg-amber-500 rounded-full border-4 border-white z-20 hidden md:block"></div>
                    </div>
                    <div className="md:w-1/2 hidden md:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">Ready for Your Commercial Project?</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Contact us today for a free consultation and discover how 29YARDS can build your business space.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-medium px-8">
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

const commercialServices = [
  {
    title: "Office Buildings",
    description: "Modern office complexes designed for efficiency and professional environment.",
    icon: Building2,
    features: [
      "Efficient floor planning",
      "Meeting and collaboration spaces",
      "Modern HVAC and electrical systems",
      "Accessibility compliance",
    ],
  },
  {
    title: "Retail Spaces",
    description: "Strategic retail design that maximizes customer flow and sales potential.",
    icon: BarChart3,
    features: [
      "High-visibility storefronts",
      "Flexible layout options",
      "Utility management",
      "Customer-friendly design",
    ],
  },
  {
    title: "Infrastructure & Utilities",
    description: "Robust infrastructure supporting all commercial operations.",
    icon: Zap,
    features: ["Power backup systems", "Water management", "Waste management solutions", "Fire safety systems"],
  },
]

const processSteps = [
  {
    title: "Site Assessment",
    description:
      "Comprehensive analysis of the site, structural requirements, and compliance with commercial building codes.",
  },
  {
    title: "Design & Planning",
    description: "Professional design that balances functionality, aesthetics, and operational efficiency.",
  },
  {
    title: "Execution",
    description: "Systematic construction with minimal disruption, maintaining schedules and budget discipline.",
  },
  {
    title: "Quality Checks",
    description: "Rigorous quality control ensuring all systems function optimally and meet standards.",
  },
  {
    title: "Handover",
    description: "Complete project documentation, staff training, and post-completion support.",
  },
]
