"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const countryCodes = [
  { code: "+1", country: "United States" },
  { code: "+44", country: "United Kingdom" },
  { code: "+91", country: "India" },
  { code: "+61", country: "Australia" },
  { code: "+81", country: "Japan" },
  { code: "+33", country: "France" },
  { code: "+49", country: "Germany" },
  { code: "+39", country: "Italy" },
  { code: "+34", country: "Spain" },
  { code: "+31", country: "Netherlands" },
  { code: "+41", country: "Switzerland" },
  { code: "+46", country: "Sweden" },
  { code: "+47", country: "Norway" },
  { code: "+45", country: "Denmark" },
  { code: "+358", country: "Finland" },
  { code: "+86", country: "China" },
  { code: "+65", country: "Singapore" },
  { code: "+60", country: "Malaysia" },
  { code: "+66", country: "Thailand" },
  { code: "+62", country: "Indonesia" },
  { code: "+55", country: "Brazil" },
  { code: "+56", country: "Chile" },
  { code: "+52", country: "Mexico" },
  { code: "+27", country: "South Africa" },
  { code: "+971", country: "United Arab Emirates" },
  { code: "+966", country: "Saudi Arabia" },
]

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    projectInquiry: "",
    myProject: "",
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    try {
      if (!formData.name || !formData.email || !formData.phone || !formData.projectInquiry || !formData.myProject) {
        setMessage("Please fill in all fields")
        setLoading(false)
        return
      }

      const fullPhone = `${formData.countryCode}${formData.phone}`.replace(/\D/g, "")
      const whatsappPhone = "917397611591" // +91 7397611591

      const messageText = `*New Project Inquiry from 29YARDS Website*

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.countryCode} ${formData.phone}
Project Inquiry: ${formData.projectInquiry}
My Project: ${formData.myProject}`

      const encodedMessage = encodeURIComponent(messageText)
      const whatsappURL = `https://wa.me/${whatsappPhone}?text=${encodedMessage}`

      window.open(whatsappURL, "_blank")

      setMessage("Opening WhatsApp to send your message...")
      setFormData({
        name: "",
        email: "",
        countryCode: "+91",
        phone: "",
        projectInquiry: "",
        myProject: "",
      })

      setTimeout(() => setMessage(""), 3000)
    } catch (error) {
      setMessage("Error sending message. Please try again.")
      console.error("Form error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-4 md:p-6 lg:p-8 rounded-2xl shadow-sm">
      <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Send Us a Message</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6 mb-4 md:mb-6">
        <div>
          <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 md:px-4 py-2 md:py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Full Name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 md:px-4 py-2 md:py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="29yards@gmail.com"
            required
          />
        </div>
      </div>

      <div className="mb-4 md:mb-6">
        <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">Phone Number</label>
        <div className="flex gap-1 md:gap-2">
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className="px-2 md:px-3 py-2 md:py-3 text-xs md:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white flex-shrink-0"
          >
            {countryCodes.map(({ code }) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="flex-1 px-3 md:px-4 py-2 md:py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="7397611591"
            required
          />
        </div>
      </div>

      <div className="mb-4 md:mb-6">
        <label htmlFor="projectInquiry" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
          Next Project Inquiry
        </label>
        <textarea
          id="projectInquiry"
          name="projectInquiry"
          value={formData.projectInquiry}
          onChange={handleChange}
          rows={2}
          className="w-full px-3 md:px-4 py-2 md:py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
          placeholder="Describe your next project needs..."
          required
        ></textarea>
      </div>

      <div className="mb-4 md:mb-6">
        <label htmlFor="myProject" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
          My Project
        </label>
        <textarea
          id="myProject"
          name="myProject"
          value={formData.myProject}
          onChange={handleChange}
          rows={2}
          className="w-full px-3 md:px-4 py-2 md:py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
          placeholder="Tell us about your project details..."
          required
        ></textarea>
      </div>

      {message && (
        <div
          className={`mb-3 md:mb-4 p-2 md:p-3 rounded-lg text-xs md:text-sm font-medium ${
            message.includes("Error") || message.includes("fill")
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {message}
        </div>
      )}

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-amber-500 hover:bg-amber-600 text-black font-medium py-2 md:py-3 text-sm md:text-base"
      >
        {loading ? "Sending..." : "Send Message via WhatsApp"}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  )
}
