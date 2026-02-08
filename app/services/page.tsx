import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Services | 29YARDS Construction & Engineering",
  description:
    "29YARDS offers residential construction, commercial development, architectural design, interior design, structural engineering, and turnkey solutions.",
}

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/images/services-hero.png"
          alt="29YARDS construction services"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">Our Services</h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl sm:max-w-2xl">
            Comprehensive construction solutions with engineering excellence and transparent execution.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-3 md:mb-4">
              What We Offer
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-6">Our Core Services</h2>
            <p className="text-base md:text-lg text-gray-700">
              From concept to completion, we provide end-to-end services to bring your vision to life with precision and
              excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{service.title}</h3>
                  <p className="text-gray-700 mb-5 md:mb-6 text-sm sm:text-base">{service.description}</p>
                  <Link href={service.link}>
                    <Button className="bg-slate-500 hover:bg-slate-600 text-black w-full">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-3 md:mb-4">
              Our Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-6">How We Work</h2>
            <p className="text-base md:text-lg text-gray-700">
              Our streamlined process ensures a smooth experience from initial consultation to project completion.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Vertical line - hidden on mobile, visible on larger screens */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-200 hidden md:block"></div>

              {/* Process steps - mobile optimized */}
              <div className="space-y-8 md:space-y-12 lg:space-y-16 relative">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                  >
                    <div className="md:w-1/2 relative w-full">
                      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md relative z-10">
                        <div className="bg-slate-100 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-3 md:mb-4">
                          <span className="text-slate-700 font-bold text-lg md:text-xl">{index + 1}</span>
                        </div>
                        <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">{step.title}</h3>
                        <p className="text-gray-700 text-sm sm:text-base">{step.description}</p>
                      </div>
                      {/* Circle on the timeline - hidden on mobile */}
                      <div className="absolute top-1/2 left-0 md:left-auto md:right-0 transform translate-y-[-50%] translate-x-[-50%] md:translate-x-[50%] w-6 h-6 bg-slate-500 rounded-full border-4 border-white z-20 hidden md:block"></div>
                    </div>
                    <div className="md:w-1/2 hidden md:block">{/* This div is just for spacing in the timeline */}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center max-w-6xl mx-auto">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
              <Image
                src="/images/quality.png"
                alt="Construction quality"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-3 md:mb-4">
                Why Choose Us
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-6">The 29YARDS Difference</h2>
              <p className="text-base md:text-lg text-gray-700 mb-5 md:mb-8">
                When you choose 29YARDS, you're choosing a partner committed to excellence, innovation, and your
                complete satisfaction.
              </p>
              <div className="space-y-4 md:space-y-6 lg:space-y-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-slate-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-base md:text-lg">{benefit.title}</h3>
                      <p className="text-gray-700 text-sm sm:text-base">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl md:max-w-2xl mx-auto mb-6 md:mb-10">
            Contact us today for a free consultation and discover how 29YARDS can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-slate-500 hover:bg-slate-600 text-black font-medium px-6 md:px-8 w-full sm:w-auto"
              >
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

// Sample data
const services = [
  {
    title: "Residential Construction",
    description:
      "Independent houses, villas, and apartments built with quality materials, proper structural design, and clear costing.",
    image: "/images/residential-1.png",
    link: "/services/residential",
  },
  {
    title: "Commercial Construction",
    description:
      "Office buildings, shops, and commercial spaces executed with efficient planning and durable construction systems.",
    image: "/images/commercial-1.png",
    link: "/services/commercial",
  },
  {
    title: "Renovation Services",
    description:
      "Transform existing spaces with expert renovation and remodeling services for residential and commercial properties.",
    image: "/images/project-3.png",
    link: "/services/renovation",
  },
]

const processSteps = [
  {
    title: "Design & Planning",
    description:
      "Requirement analysis, design development, approvals, and BOQ preparation with detailed documentation.",
  },
  {
    title: "Construction & Quality Control",
    description: "Planned execution with systematic inspections, quality checks, and ISO-based management practices.",
  },
  {
    title: "Handover & Support",
    description:
      "Final inspections, comprehensive documentation, and post-handover assistance for complete peace of mind.",
  },
]

const benefits = [
  {
    title: "Experienced Civil Engineers",
    description: "Projects managed directly by qualified engineers with field and design expertise.",
  },
  {
    title: "Transparent Costing",
    description: "Clear BOQs, stage-wise billing, and no hidden costs throughout the project.",
  },
  {
    title: "ISO-Based Quality Systems",
    description: "Execution aligned with international quality, safety, and environmental standards.",
  },
  {
    title: "Modern Construction Technology",
    description: "Use of BIM, ETABS, and advanced software to reduce errors and improve coordination.",
  },
  {
    title: "On-Time Delivery",
    description: "Well-planned schedules and disciplined execution to meet committed timelines.",
  },
  {
    title: "Direct Founder Involvement",
    description: "Hands-on supervision by the founders from planning to completion.",
  },
]
