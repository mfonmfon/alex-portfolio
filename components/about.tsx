import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left - Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden bg-background border border-border">
              <Image
                src="/stylist-photo.jpg"
                alt="Fashion Stylist Portrait"
                fill
                className="object-cover"
                priority
              />
              {/* Accent elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent/20"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-foreground/10"></div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-3 text-sm tracking-widest uppercase text-muted-foreground mb-8">
                <div className="w-12 h-px bg-accent"></div>
                About
              </div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-8 tracking-tight">
                Fashion<br />
                Stylist
              </h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                A fashion stylist that specializes in contemporary style, with a focus on creating refined, modern looks that balance classic tailoring with current trends.
              </p>

              <p>
                My work spans editorial shoots, personal styling, and wardrobe consulting. Each project is approached with attention to detail, understanding of fit and proportion, and a commitment to helping clients develop their personal aesthetic.
              </p>

              <p>
                Based in Lagos Nigeria, working with clients locally and internationally to create cohesive, wearable style solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
