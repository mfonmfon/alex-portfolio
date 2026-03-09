'use client'

import { ArrowUpRight } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Personal Styling',
    description: 'Comprehensive style consultation tailored to your lifestyle, body type, and personal brand.',
    number: '01'
  },
  {
    id: 2,
    title: 'Wardrobe Consulting',
    description: 'Strategic wardrobe audit and curation to maximize your existing pieces and identify gaps.',
    number: '02'
  },
  {
    id: 3,
    title: 'Executive Presence',
    description: 'Professional image coaching for leaders who need to command respect and authority.',
    number: '03'
  },
  {
    id: 4,
    title: 'Special Occasions',
    description: 'Expert styling for weddings, galas, red carpet events, and milestone celebrations.',
    number: '04'
  },
  {
    id: 5,
    title: 'Personal Shopping',
    description: 'Curated shopping experiences with access to premium brands and exclusive collections.',
    number: '05'
  },
  {
    id: 6,
    title: 'Virtual Consulting',
    description: 'Remote styling sessions and digital wardrobe planning for clients worldwide.',
    number: '06'
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-3 text-sm tracking-widest uppercase text-muted-foreground mb-6">
            <div className="w-12 h-px bg-accent"></div>
            Services
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight max-w-3xl">
            Comprehensive Styling Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            From personal consultations to complete wardrobe transformations, each service is designed to elevate your style and confidence.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group border-t border-border hover:bg-secondary transition-all duration-300"
            >
              <div className="py-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                {/* Number */}
                <div className="text-5xl md:text-6xl font-bold text-muted-foreground/20 group-hover:text-accent/40 transition-colors w-24 flex-shrink-0">
                  {service.number}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground max-w-2xl">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 border border-border group-hover:border-foreground group-hover:bg-foreground transition-all flex items-center justify-center">
                    <ArrowUpRight size={20} className="text-foreground group-hover:text-background group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-border"></div>
        </div>

        {/* CTA */}
        <div className="mt-20 border border-foreground p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10"></div>
          <div className="relative z-10 max-w-3xl">
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Elevate Your Style?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Book a complimentary consultation to discuss your style goals and discover which service is right for you.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-medium hover:bg-accent hover:text-foreground transition-all"
            >
              Schedule Consultation
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
