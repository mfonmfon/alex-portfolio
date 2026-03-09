import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const portfolioItems = [
  {
    id: 1,
    title: 'Wedding Styling',
    category: 'Wedding',
    image: '/projects/wedding-cover.jpg',
  },
  {
    id: 2,
    title: 'Client Birthday Styling',
    category: 'Personal',
    image: '/projects/birthday-cover.jpg',
  },
  {
    id: 3,
    title: 'Traditional Wedding Styling',
    category: 'Wedding',
    image: '/projects/trad-wedding-1.jpg',
  },
  {
    id: 4,
    title: 'Clients Traditional Wedding Styling',
    category: 'Wedding',
    image: '/projects/victor-trad-1.jpg',
  },
  {
    id: 5,
    title: 'Clients Wedding Styling',
    category: 'Wedding',
    image: '/projects/victor-wed-1.jpg',
  },
]

export default function PortfolioPreview() {
  return (
    <section className="py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-4">
            Recent Wedding & Fashion Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            A glimpse into my latest wedding styling and fashion projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {portfolioItems.map((item) => (
            <Link
              key={item.id}
              href={`/portfolio/${item.id}`}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-secondary"
            >
              {item.image.startsWith('/') ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                  <span className="text-6xl">{item.image}</span>
                </div>
              )}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium mb-3">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <div className="flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>View Project</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 text-lg font-medium text-foreground hover:text-accent transition-colors"
          >
            View All Work
            <ArrowRight size={24} />
          </Link>
        </div>
      </div>
    </section>
  )
}
