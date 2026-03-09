'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const portfolioItems = [
  {
    id: 5,
    title: 'Clients Wedding Styling',
    category: 'Wedding',
    image: '/projects/victor-wed-1.jpg',
  },
  {
    id: 6,
    title: 'Wedding Celebration Styling',
    category: 'Wedding',
    image: '/projects/timi-wed-1.jpg',
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
    id: 2,
    title: 'Client Birthday Styling',
    category: 'Personal',
    image: '/projects/birthday-cover.jpg',
  },
  {
    id: 1,
    title: 'Wedding Styling',
    category: 'Wedding',
    image: '/projects/wedding-cover.jpg',
  },
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(portfolioItems.map(item => item.category))]
  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <main className="bg-background text-foreground">
      <Header />
      
      <div className="min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          {/* Header */}
          <div className="mb-20">
            <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-12 font-medium uppercase text-sm tracking-wide">
              <ArrowLeft size={18} />
              Back
            </Link>
            
            <div className="mb-16">
              <div className="inline-flex items-center gap-3 text-sm tracking-widest uppercase text-muted-foreground mb-8">
                <div className="w-12 h-px bg-accent"></div>
                Portfolio
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
                All Work
              </h1>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-16 pb-12 border-b border-border">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 font-medium transition-all uppercase text-sm tracking-wide ${
                  selectedCategory === category
                    ? 'bg-foreground text-background'
                    : 'border border-border text-foreground hover:border-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
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
        </div>
      </div>

      <Footer />
    </main>
  )
}
