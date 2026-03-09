'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Mail, Phone, MapPin, Send, ArrowLeft, Instagram, Linkedin, Facebook } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', serviceType: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main className="bg-background text-foreground">
      <Header />
      
      <div className="min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-medium">
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Let's Create Something Beautiful
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? I'd love to hear from you. Send me a message and I'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Email */}
              <div className="bg-secondary rounded-xl border border-border p-8 hover:border-primary hover:shadow-lg transition-all duration-300">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20">
                      <Mail className="text-accent" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground mb-3">alexawharota723@gmail.com</p>
                    <a href="mailto:alexawharota723@gmail.com" className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">
                      Send an Email →
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-secondary rounded-xl border border-border p-8 hover:border-primary hover:shadow-lg transition-all duration-300">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20">
                      <Phone className="text-accent" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground mb-3">+234 817 828 8205</p>
                    <a href="tel:+2348178288205" className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">
                      Call Me →
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-secondary rounded-xl border border-border p-8 hover:border-primary hover:shadow-lg transition-all duration-300">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20">
                      <MapPin className="text-accent" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground mb-1">Ogudu Ojota, Lagos, Nigeria</p>
                    <p className="text-primary text-sm font-medium">Also Available Online</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-border">
                <h3 className="text-lg font-bold text-foreground mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="p-3 rounded-lg bg-secondary border border-border hover:border-primary text-foreground hover:text-primary transition-all duration-300"
                    title="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-3 rounded-lg bg-secondary border border-border hover:border-primary text-foreground hover:text-primary transition-all duration-300"
                    title="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-3 rounded-lg bg-secondary border border-border hover:border-primary text-foreground hover:text-primary transition-all duration-300"
                    title="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-secondary rounded-xl border border-border p-8 sm:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Type
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="consultation">Personal Consultation</option>
                    <option value="wardrobe">Wardrobe Transformation</option>
                    <option value="occasion">Occasion Styling</option>
                    <option value="online">Online Service</option>
                    <option value="corporate">Corporate Coaching</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell me about your styling goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  {submitted ? 'Message Sent! ✓' : 'Send Message'}
                  {!submitted && <Send size={18} />}
                </button>

                {submitted && (
                  <div className="p-4 rounded-lg bg-accent/20 text-accent text-sm text-center font-medium">
                    Thank you! I'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Response Time */}
            <div className="bg-secondary rounded-xl border border-border p-8">
              <h3 className="text-xl font-bold text-foreground mb-3">Response Time</h3>
              <p className="text-muted-foreground mb-4">
                I typically respond to all inquiries within 24 hours. For urgent matters, feel free to call me directly.
              </p>
              <p className="text-sm font-medium text-primary">Available Mon-Fri, 9am-6pm EST</p>
            </div>

            {/* Booking Info */}
            <div className="bg-secondary rounded-xl border border-border p-8">
              <h3 className="text-xl font-bold text-foreground mb-3">Booking</h3>
              <p className="text-muted-foreground mb-4">
                Ready to book? I offer flexible scheduling for all services, including early morning and evening appointments.
              </p>
              <p className="text-sm font-medium text-primary">Let's find a time that works for you</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
