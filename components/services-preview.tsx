import Link from 'next/link'
import { CheckCircle2, ChevronRight } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Personal Styling',
    description: 'One-on-one consultation to define your unique style',
    icon: '👔',
  },
  {
    id: 2,
    title: 'Wardrobe Transformation',
    description: 'Complete wardrobe overhaul with curated pieces',
    icon: '✨',
  },
  {
    id: 3,
    title: 'Occasion Styling',
    description: 'Specialized styling for any special event',
    icon: '💎',
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
            Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            What I Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional styling solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map(service => (
            <div
              key={service.id}
              className="group relative bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-all duration-300 hover:border-primary"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight size={18} className="text-primary" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
          >
            Explore All Services
            <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
