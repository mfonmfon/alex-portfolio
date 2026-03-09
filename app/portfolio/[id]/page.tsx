'use client'

import { use } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getProjectById, getAllProjects } from '@/lib/portfolio-data'

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const projectId = parseInt(id)
  const project = getProjectById(projectId)

  if (!project) {
    notFound()
  }

  const allProjects = getAllProjects()
  const currentIndex = allProjects.findIndex(p => p.id === projectId)
  const nextProject = allProjects[currentIndex + 1] || allProjects[0]
  const prevProject = allProjects[currentIndex - 1] || allProjects[allProjects.length - 1]

  return (
    <main className="bg-background text-foreground">
      <Header />

      <div className="min-h-screen">
        {/* Header */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-12 font-medium uppercase text-sm tracking-wide"
          >
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>

          {/* Project Info */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
              Project Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A complete look at the styling process and final results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="text-center">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Category</p>
              <p className="text-lg text-foreground font-medium">{project.category}</p>
            </div>
            <div className="text-center">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Year</p>
              <p className="text-lg text-foreground font-medium">{project.year}</p>
            </div>
            {project.client && (
              <div className="text-center">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Client</p>
                <p className="text-lg text-foreground font-medium">{project.client}</p>
              </div>
            )}
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center mb-20">
            {project.description}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image) => (
              <div
                key={image.id}
                className="relative aspect-[3/4] bg-secondary rounded-2xl overflow-hidden group"
              >
                {image.isVideo && image.videoUrl ? (
                  <video
                    controls
                    className="w-full h-full object-cover"
                  >
                    <source src={image.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : image.imageUrl ? (
                  <Image
                    src={image.imageUrl}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-secondary to-muted">
                      <div className="text-8xl mb-6">📸</div>
                      <p className="text-foreground font-medium text-lg mb-2">{image.alt}</p>
                      <p className="text-sm text-muted-foreground">Add your photo here</p>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation to Next/Previous Project */}
        <div className="border-t border-border bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Previous Project */}
              <Link
                href={`/portfolio/${prevProject.id}`}
                className="group p-8 bg-background rounded-xl border border-border hover:border-foreground transition-all"
              >
                <div className="flex items-center gap-3 text-sm tracking-widest uppercase text-muted-foreground mb-4">
                  <ArrowLeft size={18} />
                  Previous Project
                </div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {prevProject.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">{prevProject.category}</p>
              </Link>

              {/* Next Project */}
              <Link
                href={`/portfolio/${nextProject.id}`}
                className="group p-8 bg-background rounded-xl border border-border hover:border-foreground transition-all"
              >
                <div className="flex items-center justify-end gap-3 text-sm tracking-widest uppercase text-muted-foreground mb-4">
                  Next Project
                  <ArrowRight size={18} />
                </div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors text-right">
                  {nextProject.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 text-right">{nextProject.category}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
