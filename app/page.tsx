"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle, ChevronRight, Eye, Lightbulb, HardHat, Hammer, Compass, Target } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedButton } from "@/components/ui/animated-button"
import { HoverButton } from "@/components/ui/hover-button"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerIn } from "@/components/animations/stagger-in"
import { ScaleIn } from "@/components/animations/scale-in"
import { HoverCard } from "@/components/animations/hover-card"
import { CountUp } from "@/components/animations/count-up"
import { ScrollProgress } from "@/components/animations/scroll-progress"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />

      {/* Hero Section with Background Video */}
      <section className="relative w-full overflow-hidden h-[600px] md:h-[700px] lg:h-[800px]">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            src="https://fmeaahxb3twsxffw.public.blob.vercel-storage.com/1197802-hd_1920_1080_25fps%20%281%29.mp4"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Hero Content */}
        <div className="absolute inset-0 z-30 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block px-4 py-2 bg-slate-200 text-slate-700 rounded-full text-sm font-medium mb-4"
              >
                Engineered with Precision
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-md">
                Quality Spaces with <span className="text-gray-900">Engineering Excellence</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-10 max-w-xl md:max-w-2xl mx-auto drop-shadow-md">
                Professional construction and engineering solutions for residential, commercial, and design projects.
                Built by engineers, delivered with precision.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link href="/services" className="w-full sm:w-auto">
                  <AnimatedButton
                    size="lg"
                    className="bg-slate-700 hover:bg-slate-800 text-white font-semibold px-6 sm:px-8 w-full sm:w-auto"
                    hoverEffect="lift"
                    iconAnimation={true}
                  >
                    Explore Services
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </AnimatedButton>
                </Link>
                <Link href="/projects" className="w-full sm:w-auto">
                  <HoverButton
                    size="lg"
                    variant="outline"
                    className="text-[#646464] border-2 border-[#646464] hover:bg-[#646464] hover:text-white font-semibold px-6 sm:px-8 w-full sm:w-auto transition-all duration-300"
                    hoverEffect="glow"
                    rippleColor="rgba(100, 100, 100, 0.3)"
                  >
                    View Projects
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </HoverButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-[#131313]">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto">
              <div className="inline-block px-4 py-2 bg-[#3C3C3C] text-white rounded-full text-sm font-medium mb-3 md:mb-4">
                Our Purpose
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white">
                Mission & Vision
              </h2>
              <p className="text-base md:text-lg text-[#B5B5B5]">
                To provide integrated construction solutions with strong engineering, safety, transparency, and timely
                delivery across Tamil Nadu.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-[#3C3C3C] p-6 md:p-10 rounded-2xl shadow-md border border-[#646464]">
                <div className="flex items-center mb-4 md:mb-6 justify-center sm:justify-start">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#E5E5E5] dark:bg-[#646464] w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mr-4"
                  >
                    <Target className="h-6 w-6 md:h-7 md:w-7 text-[#3C3C3C] dark:text-white" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-6 text-sm sm:text-base text-center sm:text-left">
                  To provide integrated construction solutions with strong engineering, safety, transparency, and timely
                  delivery.
                </p>
                <StaggerIn direction="up" staggerDelay={0.1}>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#646464] mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-[#3C3C3C] dark:text-[#B5B5B5] text-sm sm:text-base text-left">
                      Engineer-led projects ensuring technical expertise at every stage
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#646464] mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-[#3C3C3C] dark:text-[#B5B5B5] text-sm sm:text-base text-left">
                      Transparent costing with clear BOQs and stage-wise billing
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#646464] mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-[#3C3C3C] dark:text-[#B5B5B5] text-sm sm:text-base text-left">
                      ISO-based quality systems with international standards
                    </p>
                  </div>
                </StaggerIn>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.4}>
              <div className="bg-[#3C3C3C] p-6 md:p-10 rounded-2xl shadow-md border border-[#646464]">
                <div className="flex items-center mb-4 md:mb-6 justify-center sm:justify-start">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#E5E5E5] dark:bg-[#646464] w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mr-4"
                  >
                    <Eye className="h-6 w-6 md:h-7 md:w-7 text-[#3C3C3C] dark:text-white" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-6 text-sm sm:text-base text-center sm:text-left">
                  To become a trusted and technology-driven construction company delivering quality-focused projects
                  across Tamil Nadu.
                </p>
                <StaggerIn direction="up" staggerDelay={0.1}>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#646464] mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-[#3C3C3C] dark:text-[#B5B5B5] text-sm sm:text-base text-left">
                      International standards with local expertise in Tamil Nadu
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#646464] mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-[#3C3C3C] dark:text-[#B5B5B5] text-sm sm:text-base text-left">
                      Modern technology like BIM, ETABS, and advanced software
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#646464] mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-[#3C3C3C] dark:text-[#B5B5B5] text-sm sm:text-base text-left">
                      Founder-led project supervision from planning to completion
                    </p>
                  </div>
                </StaggerIn>
              </div>
            </FadeIn>
          </div>

          <ScaleIn delay={0.6}>
            <div className="mt-10 md:mt-16 text-center">
              <div className="bg-[#3C3C3C]/80 p-6 md:p-8 rounded-2xl max-w-3xl mx-auto border border-[#646464]">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#E5E5E5] dark:bg-[#646464] w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Lightbulb className="h-6 w-6 md:h-7 md:w-7 text-[#3C3C3C] dark:text-white" />
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">
                  Our Core Values
                </h3>
                <p className="text-[#B5B5B5] text-sm sm:text-base md:text-lg mb-5 md:mb-6">
                  Engineering Integrity | Quality First | Safety Commitment | Technology-Driven | Accountability |
                  Client Focus
                </p>
                <Link href="/contact">
                  <AnimatedButton
                    className="bg-[#3C3C3C] hover:bg-[#646464] text-white font-semibold"
                    hoverEffect="shine"
                    iconRotate={true}
                  >
                    Partner With Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 md:py-16 bg-[#131313] bg-sidebar-ring">
        <div className="container mx-auto px-4">
          <StaggerIn direction="up" staggerDelay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              <HoverCard>
                <div className="p-6 md:p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow border border-[#E5E5E5] bg-neutral-300">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#E5E5E5] w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <HardHat className="h-7 w-7 md:h-8 md:w-8 text-[#3C3C3C]" />
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-[#131313]">
                    Engineer-Led
                  </h3>
                  <p className="text-[#3C3C3C] text-sm sm:text-base">
                    Projects managed directly by qualified civil engineers with field and design expertise.
                  </p>
                </div>
              </HoverCard>
              <HoverCard>
                <div className="p-6 md:p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow border border-[#E5E5E5] bg-neutral-300">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#E5E5E5] w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Hammer className="h-7 w-7 md:h-8 md:w-8 text-[#3C3C3C]" />
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-[#131313]">
                    Transparent Costing
                  </h3>
                  <p className="text-[#3C3C3C] text-sm sm:text-base">
                    Clear BOQs, stage-wise billing, and no hidden costs throughout the project lifecycle.
                  </p>
                </div>
              </HoverCard>
              <HoverCard className="sm:col-span-2 md:col-span-1">
                <div className="p-6 md:p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow border border-[#E5E5E5] bg-neutral-300">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#E5E5E5] w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Compass className="h-7 w-7 md:h-8 md:w-8 text-[#3C3C3C]" />
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-[#131313]">
                    Modern Technology
                  </h3>
                  <p className="text-[#3C3C3C] text-sm sm:text-base">
                    BIM, ETABS, Revit, and advanced software for precision and efficient coordination.
                  </p>
                </div>
              </HoverCard>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 md:py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 text-center max-w-5xl mx-auto">
            <FadeIn direction="up" delay={0.1}>
              <div className="p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">
                  <CountUp end={3} suffix="+" />
                </div>
                <p className="text-gray-300 font-medium text-sm md:text-base">Projects Completed</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <div className="p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">
                  <CountUp end={8} suffix="+" />
                </div>
                <p className="text-gray-300 font-medium text-sm md:text-base">Years Experience</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <div className="p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">
                  <CountUp end={6} suffix="+" />
                </div>
                <p className="text-gray-300 font-medium text-sm md:text-base">Expert Engineers</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <div className="p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">
                  <CountUp end={3} suffix="+" />
                </div>
                <p className="text-gray-300 font-medium text-sm md:text-base">Countries Experienced</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gray-900 dark:bg-black text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Build with 29YARDS?</h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mx-auto mb-6 md:mb-10">
              Contact us for a free consultation. Our team is ready to discuss your construction project with
              engineering excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/contact" className="w-full sm:w-auto">
                  <HoverButton
                    size="lg"
                    className="bg-slate-700 hover:bg-slate-800 text-white font-semibold px-6 md:px-8 w-full sm:w-auto"
                    hoverEffect="ripple"
                  >
                  Get a Free Consultation
                  <ChevronRight className="ml-2 h-4 w-4" />
                </HoverButton>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                  <HoverButton
                    size="lg"
                    className="bg-transparent border-2 border-slate-400 text-slate-300 hover:bg-slate-500 hover:text-white font-semibold px-6 md:px-8 w-full sm:w-auto transition-all duration-300"
                    hoverEffect="glow"
                  >
                  Contact Our Team
                  <ChevronRight className="ml-2 h-4 w-4" />
                </HoverButton>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
