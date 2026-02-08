"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { HardHat, ChevronDown, Menu } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { AnimatedButton } from "@/components/ui/animated-button"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { MobileMenu } from "@/components/mobile-menu"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const prefersReducedMotion = useReducedMotion()

  // After mounting, we can access the theme
  useEffect(() => {
    setMounted(true)

    // Add scroll event listener
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Determine scroll direction
      if (currentScrollY > lastScrollY + 5) {
        setScrollDirection("down")
      } else if (currentScrollY < lastScrollY - 5) {
        setScrollDirection("up")
      }

      // Update scroll state
      if (currentScrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Always show navbar at the top of the page
      if (currentScrollY < 50) {
        setScrollDirection("up")
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    // Close mobile menu on route change
    const handleRouteChange = () => {
      setMobileMenuOpen(false)
    }

    window.addEventListener("popstate", handleRouteChange)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("popstate", handleRouteChange)
    }
  }, [lastScrollY])

  // Toggle mobile menu with useCallback to ensure consistent behavior
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prevState) => !prevState)
  }, [])

  // Close mobile menu
  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false)
  }, [])

  // Navbar animation variants
  const navVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: prefersReducedMotion ? "tween" : "spring",
        stiffness: 100,
        damping: 20,
        duration: prefersReducedMotion ? 0.1 : undefined,
      },
    },
    hidden: {
      y: -100,
      opacity: 0,
      transition: {
        type: prefersReducedMotion ? "tween" : "spring",
        stiffness: 100,
        damping: 20,
        duration: prefersReducedMotion ? 0.1 : undefined,
      },
    },
  }

  // Determine if navbar should be visible
  const shouldShowNavbar = scrollDirection === "up" || !scrolled || lastScrollY < 50

  return (
    <>
      <motion.header
        className={`sticky top-0 z-50 w-full backdrop-blur-sm transition-all duration-300 ${
          scrolled ? "bg-background/95 shadow-md" : "bg-background/80"
        } safe-top`}
        initial="visible"
        animate={shouldShowNavbar ? "visible" : "hidden"}
        variants={navVariants}
      >
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 max-w-[1920px]">
          <div className="flex h-14 sm:h-16 md:h-18 lg:h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-1.5 sm:gap-2 group">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="bg-[#3C3C3C] text-white p-1.5 sm:p-2 rounded-lg"
                >
                  <HardHat className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                </motion.div>
                <div className="flex flex-col">
                  <motion.span
                    className="text-lg sm:text-xl md:text-2xl font-bold text-foreground leading-none"
                    initial={{ opacity: 1 }}
                    whileHover={{ scale: 1.03, color: "#646464" }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="inline xs:hidden">29Yards</span>
                    <span className="hidden xs:inline">29YARDS</span>
                  </motion.span>
                  <span className="text-[10px] sm:text-xs text-muted-foreground hidden xs:inline">
                    Construction Excellence
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-center">
              <ul className="flex items-center space-x-0.5 sm:space-x-1 lg:space-x-2">
                <NavItem
                  href="/"
                  label="Home"
                  isActive={pathname === "/"}
                  onHover={() => setHoveredItem("home")}
                  onLeave={() => setHoveredItem(null)}
                  isHovered={hoveredItem === "home"}
                />

                <DropdownNavItem
                  label="Services"
                  items={[
                    { href: "/services/residential", label: "Residential Construction" },
                    { href: "/services/commercial", label: "Commercial Construction" },
                    { href: "/services/renovation", label: "Renovation Services" },
                  ]}
                  pathname={pathname}
                  onHover={() => setHoveredItem("services")}
                  onLeave={() => setHoveredItem(null)}
                  isHovered={hoveredItem === "services"}
                />

                <NavItem
                  href="/projects"
                  label="Projects"
                  isActive={pathname === "/projects"}
                  onHover={() => setHoveredItem("projects")}
                  onLeave={() => setHoveredItem(null)}
                  isHovered={hoveredItem === "projects"}
                />

                <NavItem
                  href="/about"
                  label="About Us"
                  isActive={pathname === "/about"}
                  onHover={() => setHoveredItem("about")}
                  onLeave={() => setHoveredItem(null)}
                  isHovered={hoveredItem === "about"}
                />

                <NavItem
                  href="/contact"
                  label="Contact"
                  isActive={pathname === "/contact"}
                  onHover={() => setHoveredItem("contact")}
                  onLeave={() => setHoveredItem(null)}
                  isHovered={hoveredItem === "contact"}
                />
              </ul>
            </nav>

            {/* Desktop Right Side */}
            <div className="hidden md:flex items-center gap-2 lg:gap-4">
              <Link href="/contact#quote-form">
                <AnimatedButton
                  className="bg-[#3C3C3C] hover:bg-[#646464] text-white font-medium text-sm sm:text-base h-9 sm:h-10 transition-all duration-300 shadow-md hover:shadow-lg"
                  hoverEffect="lift"
                  iconAnimation={true}
                >
                  Get a Quote
                  <ChevronDown className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                </AnimatedButton>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-1.5 sm:gap-2 md:hidden">
              {/* Hamburger Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 sm:h-9 sm:w-9 bg-[#F3F3F3]"
                onClick={toggleMobileMenu}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle menu"
                type="button"
              >
                <Menu className="h-4 w-4 sm:h-5 sm:w-5 text-[#3C3C3C]" />
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu - Now using a separate component for better isolation */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={closeMobileMenu} />
    </>
  )
}

// Desktop Nav Item
function NavItem({
  href,
  label,
  isActive,
  onHover,
  onLeave,
  isHovered,
}: {
  href: string
  label: string
  isActive: boolean
  onHover: () => void
  onLeave: () => void
  isHovered: boolean
}) {
  return (
    <li>
      <Link
        href={href}
        className={`relative px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-sm sm:text-base font-medium transition-colors flex items-center focus:outline-none focus:ring-2 focus:ring-[#646464] focus:ring-offset-2 ${
          isActive
            ? "text-[#646464]"
            : "text-foreground hover:text-[#646464] hover:bg-[#F3F3F3]/50"
        }`}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <motion.span
          animate={isHovered && !isActive ? { y: -2, color: "#646464" } : { y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="inline-block"
        >
          {label}
        </motion.span>
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"
            layoutId="navbar-underline"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </Link>
    </li>
  )
}

// Desktop Dropdown Nav Item
function DropdownNavItem({
  label,
  items,
  pathname,
  onHover,
  onLeave,
  isHovered,
}: {
  label: string
  items: { href: string; label: string }[]
  pathname: string
  onHover: () => void
  onLeave: () => void
  isHovered: boolean
}) {
  const isActive = items.some((item) => item.href === pathname)
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      setIsOpen(!isOpen)
      e.preventDefault()
    } else if (e.key === "Escape" && isOpen) {
      setIsOpen(false)
    }
  }

  return (
    <li
      className="relative"
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`relative px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-sm sm:text-base font-medium transition-colors flex items-center ${
          isActive
            ? "text-[#646464]"
            : "text-foreground hover:text-[#646464] hover:bg-[#F3F3F3]/50"
        }`}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        type="button"
      >
        <motion.span
          animate={isHovered && !isActive ? { y: -2, color: "#646464" } : { y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="inline-flex items-center gap-1"
        >
          {label}
          <motion.div animate={isOpen ? { rotate: 180 } : { rotate: 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </motion.span>
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#646464]"
            layoutId="navbar-underline"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </button>

      {isOpen && (
        <div
          className="absolute left-0 mt-1 w-48 sm:w-56 rounded-xl bg-white shadow-lg p-1.5 sm:p-2 z-50"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
            >
              <Link
                href={item.href}
                className={`block cursor-pointer text-sm sm:text-base py-1.5 sm:py-2 px-2.5 sm:px-3 rounded-lg ${
                  pathname === item.href
                    ? "text-[#646464] bg-[#F3F3F3]"
                    : "text-[#131313] hover:text-[#646464] hover:bg-[#F3F3F3]"
                }`}
                onClick={() => setIsOpen(false)}
                role="menuitem"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </li>
  )
}
