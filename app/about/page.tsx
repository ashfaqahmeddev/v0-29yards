import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Award, Target, Eye, Lightbulb, Compass, Wrench } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { ScaleIn } from "@/components/animations/scale-in"

import { Button } from "@/components/ui/button"

export const metadata = {
  title: "About 29YARDS | Construction & Engineering",
  description:
    "Learn about 29YARDS, founded by twin brothers Er. Aaqil Abdullah and Er. Aadil Abdullah. Engineer-led construction with international standards and Tamil Nadu expertise.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image src="/images/construction-team.jpeg" alt="29YARDS team" fill className="object-cover" priority />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About 29YARDS</h1>
          <p className="text-xl text-white/90 max-w-2xl py-0 my-0">
            Engineer-led construction company delivering quality spaces with precision across Tamil Nadu.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300 rounded-full text-sm font-medium mb-4">
              Our Purpose
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Mission & Vision</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Guided by engineering principles, we deliver quality-focused construction solutions with international
              standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-5xl mx-auto">
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 md:p-8 lg:p-10 rounded-2xl shadow-md">
                <div className="flex items-center mb-6">
                  <div className="bg-amber-100 dark:bg-amber-900 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                    <Target className="h-7 w-7 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  To deliver exceptional construction services that exceed client expectations through innovation,
                  integrity, and craftsmanship. We are committed to:
                </p>
                <ul className="space-y-4 md:space-y-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300">
                      Creating safe, sustainable, and functional spaces that enhance the quality of life for those who
                      use them
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300">
                      Fostering a culture of excellence, continuous improvement, and professional growth among our team
                      members
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300">
                      Building lasting relationships with clients, partners, and communities through transparent
                      communication and ethical practices
                    </p>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 md:p-8 lg:p-10 rounded-2xl shadow-md">
                <div className="flex items-center mb-6">
                  <div className="bg-amber-100 dark:bg-amber-900 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                    <Eye className="h-7 w-7 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  To be the most trusted and innovative construction company, recognized for:
                </p>
                <ul className="space-y-4 md:space-y-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300">
                      Setting new standards of excellence in construction quality, safety, and client satisfaction
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300">
                      Pioneering sustainable building practices that minimize environmental impact while maximizing
                      efficiency and durability
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300">
                      Creating positive change in the communities where we work through responsible business practices
                      and meaningful engagement
                    </p>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>

          <ScaleIn delay={0.6}>
            <div className="mt-12 md:mt-20 text-center">
              <div className="bg-amber-50 dark:bg-amber-900/30 p-6 md:p-8 lg:p-10 rounded-2xl max-w-3xl mx-auto">
                <div className="bg-amber-100 dark:bg-amber-900 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-7 w-7 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Approach</h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                  We combine strong engineering principles with modern technology and transparent execution. Every
                  project is managed directly by engineers, ensuring accuracy, quality, and confidence for our clients.
                </p>
                <Link href="/contact">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold">
                    Partner With Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300 rounded-full text-sm font-medium mb-4">
                Our Story
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Founded on Engineering Excellence
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                29YARDS was established in 2026 by twin brothers Er. Aaqil Abdullah and Er. Aadil Abdullah, both
                qualified civil engineers with diverse international experience.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                With over 8 years of experience across India, United Arab Emirates, and Saudi Arabia, the founders bring
                global construction standards to local projects in Tamil Nadu. Their expertise spans complex
                construction projects, from design to execution.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Er. Aaqil Abdullah holds a BE in Civil Engineering and an MBA in Business Finance, blending technical
                expertise with strategic financial management. Er. Aadil Abdullah brings deep field knowledge and
                execution excellence. Together, they've built 29YARDS on the foundation of engineering integrity,
                quality craftsmanship, and direct founder involvement.
              </p>
              <Link href="/contact">
                <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/about-story.png" alt="29YARDS founders" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300 rounded-full text-sm font-medium mb-4">
              Our Values
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Six Core Values</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Engineering Integrity | Quality First | Safety Commitment | Technology-Driven | Accountability | Client
              Focus
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-amber-100 dark:bg-amber-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Quality First</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Every project is executed with the highest standards using quality materials and modern construction
                technology.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-amber-100 dark:bg-amber-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Engineering Integrity</h3>
              <p className="text-gray-700 dark:text-gray-300">
                All decisions are technically justified and practically executable by our qualified engineers.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-amber-100 dark:bg-amber-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Compass className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Technology-Driven</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We use BIM, ETABS, Revit, and advanced software for precision and efficient project coordination.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-amber-100 dark:bg-amber-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Safety Commitment</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Worker and site safety is paramount. We maintain strict safety protocols and continuous training for all team members.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-amber-100 dark:bg-amber-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Accountability</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We take full responsibility for our actions and deliver on all commitments made to our clients and partners.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-amber-100 dark:bg-amber-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Client Focus</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Client satisfaction and needs drive all our decisions. We maintain transparent communication throughout every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300 rounded-full text-sm font-medium mb-4">
              Quality & Compliance
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">ISO Certified</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              We follow ISO-based management practices ensuring quality, safety, and environmental responsibility.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md text-center">
              <div className="bg-amber-100 dark:bg-amber-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">ISO 9001:2015</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Quality Management System - Ensuring consistent quality in all project executions.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md text-center">
              <div className="bg-amber-100 dark:bg-amber-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">ISO 14001:2015</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Environmental Management System - Responsible and sustainable construction practices.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md text-center">
              <div className="bg-amber-100 dark:bg-amber-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">ISO 45001:2018</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Occupational Health & Safety - Safe work environment and practices at all sites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 lg:py-28 bg-amber-500 dark:bg-amber-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12 text-center max-w-5xl mx-auto">
            <FadeIn direction="up" delay={0.1}>
              <div className="p-4 md:p-6 lg:p-8">
                <div className="text-4xl font-bold text-white mb-2">3+</div>
                <p className="text-black dark:text-gray-100 font-medium">Projects Completed</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <div className="p-4 md:p-6 lg:p-8">
                <div className="text-4xl font-bold text-white mb-2">8+</div>
                <p className="text-black dark:text-gray-100 font-medium">Years Experience</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <div className="p-4 md:p-6 lg:p-8">
                <div className="text-4xl font-bold text-white mb-2">2+</div>
                <p className="text-black dark:text-gray-100 font-medium">Expert Engineers</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <div className="p-4 md:p-6 lg:p-8">
                <div className="text-4xl font-bold text-white mb-2">3+</div>
                <p className="text-black dark:text-gray-100 font-medium">Countries Experienced</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-900 dark:bg-black text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With 29YARDS?</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Contact us today to discuss your project needs and discover how 29YARDS can bring your vision to life with
            engineering excellence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10 font-semibold px-8 bg-transparent"
              >
                View Our Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
