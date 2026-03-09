'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
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
    <section id="contact" className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Let's Create Something Beautiful
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? I'd love to hear from you. Send me a message and I'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-background rounded-xl border border-border p-8">
              <div className="flex gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20">
                    <Mail className="text-accent" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Email</h3>
                  <p className="text-muted-foreground">hello@stylistportfolio.com</p>
                  <a href="mailto:hello@stylistportfolio.com" className="text-primary hover:text-primary/80 text-sm font-medium">
                    Send an Email
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-xl border border-border p-8">
              <div className="flex gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20">
                    <Phone className="text-accent" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <a href="tel:+15551234567" className="text-primary hover:text-primary/80 text-sm font-medium">
                    Call Me
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-xl border border-border p-8">
              <div className="flex gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20">
                    <MapPin className="text-accent" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Location</h3>
                  <p className="text-muted-foreground">New York, NY 10001</p>
                  <p className="text-primary text-sm font-medium">Also Available Online</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-border">
              <h3 className="text-lg font-bold text-foreground mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {['Instagram', 'Facebook', 'LinkedIn', 'Pinterest'].map(social => (
                  <a
                    key={social}
                    href="#"
                    className="p-3 rounded-lg bg-background border border-border hover:border-primary text-foreground hover:text-primary transition-all"
                    title={social}
                  >
                    <div className="w-5 h-5">@</div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background rounded-xl border border-border p-8 sm:p-12">
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
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
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
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
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
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
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
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground focus:outline-none focus:border-primary transition-colors"
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
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your styling goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
