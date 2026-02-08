import Image from "next/image"
import { Mail, MapPin, Phone, Clock } from "lucide-react"
import ContactForm from "@/components/contact-form"

export const metadata = {
  title: "Contact 29YARDS | Get a Free Consultation",
  description:
    "Get in touch with 29YARDS for inquiries, free consultation, or to discuss your construction project needs.",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image src="/images/contact-hero.png" alt="Contact 29YARDS" fill className="object-cover" priority />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact 29YARDS</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Get in touch with our engineering team to discuss your construction project or request a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 max-w-6xl mx-auto">
            <div>
              <div className="inline-block px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-4 md:mb-6">
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">We'd Love to Hear From You</h2>
              <p className="text-gray-700 mb-8 md:mb-10 text-base md:text-lg">
                Whether you have questions about our services, want a free consultation, or are ready to start your
                construction project, our team is here to help.
              </p>
              <div className="space-y-5 md:space-y-6 lg:space-y-8">
                <div className="flex items-start">
                  <div className="bg-slate-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-slate-600" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-base md:text-lg">Location</h3>
                    <p className="text-gray-700 text-sm md:text-base break-words">Vellore, Tamil Nadu, India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-slate-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Phone className="h-5 w-5 md:h-6 md:w-6 text-slate-600" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-base md:text-lg">Phone Number</h3>
                    <p className="text-gray-700 text-sm md:text-base break-words">+91 7397611591</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-slate-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Mail className="h-5 w-5 md:h-6 md:w-6 text-slate-600" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-base md:text-lg">Email Address</h3>
                    <p className="text-gray-700 text-sm md:text-base break-words">info@29yards.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-slate-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Clock className="h-5 w-5 md:h-6 md:w-6 text-slate-600" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-base md:text-lg">Availability</h3>
                    <p className="text-gray-700 text-sm md:text-base">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-700 text-sm md:text-base">Weekend: By appointment</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div id="quote-form" className="scroll-mt-24">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-900">
                  Request a Free Consultation
                </h3>
                <p className="text-gray-700 text-sm md:text-base mb-6 md:mb-8">
                  Fill out this form to get a detailed consultation for your construction project. Our engineers will
                  analyze your requirements and provide comprehensive guidance.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-4 md:mb-6">
              FAQ
            </div>
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-700 text-lg">Find answers to common questions about 29YARDS services.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 md:space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 md:p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const faqs = [
  {
    question: "What types of projects does 29YARDS handle?",
    answer:
      "We specialize in residential construction, commercial development, architectural design, interior design, structural engineering, and turnkey construction solutions. We serve residential, commercial, and design clients across Tamil Nadu.",
  },
  {
    question: "How do I get a free consultation from 29YARDS?",
    answer:
      "You can request a free consultation by filling out our contact form, calling us, or sending an email. Our engineering team will schedule a meeting to discuss your project requirements and provide guidance.",
  },
  {
    question: "What makes 29YARDS different from other construction companies?",
    answer:
      "29YARDS is engineer-led with 8+ years of international experience. We offer transparent costing, ISO-based quality systems, modern technology (BIM, ETABS, Revit), direct founder involvement, and on-time delivery.",
  },
  {
    question: "Does 29YARDS handle permits and approvals?",
    answer:
      "Yes, we handle all necessary permits and regulatory approvals as part of our comprehensive service. Our team is familiar with Tamil Nadu building codes and local authority requirements.",
  },
  {
    question: "What is your work process?",
    answer:
      "Our process includes three main phases:\n" +
      "(1) Design & Planning - requirement analysis, design development, and approvals\n" +
      "(2) Construction & Quality Control - planned execution with systematic inspections\n" +
      "(3) Handover & Support - final inspections and post-handover assistance.",
  },
  {
    question: "Are you ISO certified?",
    answer:
      "Yes, our founders are certified in ISO 9001:2015 (Quality Management), ISO 14001:2015 (Environmental Management), and ISO 45001:2018 (Health & Safety). We ensure quality workmanship, safe execution, and environmental responsibility.",
  },
]
