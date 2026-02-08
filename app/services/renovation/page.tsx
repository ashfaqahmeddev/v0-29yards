import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Hammer, RefreshCw, Wrench } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Renovation Services | 29YARDS",
  description:
    "Expert renovation and remodeling services for residential and commercial spaces in Tamil Nadu with modern design and quality craftsmanship.",
}

export default function RenovationServicePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image src="/images/project-3.png" alt="Renovation services" fill className="object-cover" priority />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Renovation Services</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Transform your space with expert renovation and remodeling services.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-block px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-4">
                Renovation Services
              </div>
              <h2 className="text-4xl font-bold mb-6">Give Your Space a New Life</h2>
              <p className="text-gray-700 mb-6 text-lg">
                Whether you're looking to modernize an aging space or completely transform your property, 29YARDS brings
                expertise in renovation and remodeling. We specialize in breathing new life into existing structures
                while preserving their character and charm.
              </p>
              <p className="text-gray-700 mb-8">
                Our renovation projects are managed with minimal disruption, creative problem-solving, and attention to
                detail, ensuring your updated space meets contemporary standards while respecting the original
                architecture.
              </p>
              <Link href="/contact">
                <Button className="bg-slate-500 hover:bg-slate-600 text-black">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/project-3.png" alt="Renovation services" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-4">
              What We Offer
            </div>
            <h2 className="text-4xl font-bold mb-6">Our Renovation Services</h2>
            <p className="text-gray-700 text-lg">
              Comprehensive renovation solutions for residential and commercial properties.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {renovationServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-slate-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-slate-500 mr-2 mt-1 flex-shrink-0" />
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
            <div className="inline-block px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-4">
              Our Process
            </div>
            <h2 className="text-4xl font-bold mb-6">How We Execute Renovations</h2>
            <p className="text-gray-700 text-lg">
              Our methodical approach ensures minimal disruption while maximizing the quality of transformation.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-200 hidden md:block"></div>
              <div className="space-y-12 relative">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                  >
                    <div className="md:w-1/2 relative">
                      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm relative z-10">
                        <div className="bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                          <span className="text-slate-700 font-bold text-xl">{index + 1}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                        <p className="text-gray-700">{step.description}</p>
                      </div>
                      <div className="absolute top-1/2 left-0 md:left-auto md:right-0 transform translate-y-[-50%] translate-x-[-50%] md:translate-x-[50%] w-6 h-6 bg-slate-500 rounded-full border-4 border-white z-20 hidden md:block"></div>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Renovate?</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Contact us today for a free consultation and let's transform your space together.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-slate-500 hover:bg-slate-600 text-black font-medium px-8">
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

const renovationServices = [
  {
    title: "Kitchen Remodeling",
    description: "Complete kitchen renovation with modern design and functional upgrades.",
    icon: Hammer,
    features: [
      "Layout optimization",
      "Modern fixtures and appliances",
      "Quality cabinetry",
      "Efficient storage solutions",
    ],
  },
  {
    title: "Bathroom Renovation",
    description: "Elegant bathroom makeovers with modern fixtures and spa-like features.",
    icon: Wrench,
    features: ["Layout redesign", "Premium fixtures", "Waterproofing systems", "Contemporary design"],
  },
  {
    title: "Full Space Renovation",
    description: "Complete overhaul of commercial or residential spaces with structural updates.",
    icon: RefreshCw,
    features: ["Structural assessment", "Complete redesign", "Modern systems upgrade", "Contemporary finishes"],
  },
]

const processSteps = [
  {
    title: "Assessment & Planning",
    description:
      "Thorough evaluation of existing structure, identification of issues, and comprehensive renovation plan.",
  },
  {
    title: "Design Proposal",
    description: "Creative design concepts that balance modernization with preservation of original character.",
  },
  {
    title: "Execution",
    description: "Systematic renovation work with phase-wise planning to minimize disruption to daily activities.",
  },
  {
    title: "Quality Checks",
    description: "Rigorous inspections at every stage to ensure structural integrity and finishing quality.",
  },
  {
    title: "Final Handover",
    description: "Complete documentation, cleanup, and walkthrough to ensure satisfaction with the renovated space.",
  },
]
