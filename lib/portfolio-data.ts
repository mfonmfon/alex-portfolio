export interface PortfolioProject {
  id: number
  title: string
  category: string
  description: string
  year: string
  client?: string
  role: string
  images: {
    id: number
    alt: string
    isVideo?: boolean
    videoUrl?: string
    imageUrl?: string
  }[]
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: 'Wedding Styling',
    category: 'Wedding',
    description: 'Complete wedding styling including pre-wedding and traditional ceremony. Creating memorable looks for the special celebration with attention to detail and personal style.',
    year: '2024',
    client: 'Private Client',
    role: 'Lead Stylist',
    images: [
      { id: 1, alt: 'Pre-Wedding Video', isVideo: true, videoUrl: '/projects/wedding-video.mp4' },
      { id: 2, alt: 'Traditional Wedding Video', isVideo: true, videoUrl: '/projects/traditional-wedding-video.mp4' },
    ]
  },
  {
    id: 2,
    title: 'Client Birthday Styling',
    category: 'Personal',
    description: 'Special birthday celebration styling with a focus on creating a memorable and stylish look for the occasion.',
    year: '2024',
    client: 'Private Client',
    role: 'Fashion Stylist',
    images: [
      { id: 1, alt: 'Birthday Styling - Look 1', imageUrl: '/projects/birthday-cover.jpg' },
      { id: 2, alt: 'Birthday Styling - Look 2', imageUrl: '/projects/birthday-2.jpg' },
    ]
  },
  {
    id: 3,
    title: 'Traditional Wedding Styling',
    category: 'Wedding',
    description: 'Traditional wedding ceremony styling with cultural elegance and modern sophistication. Honoring heritage while creating a contemporary aesthetic.',
    year: '2024',
    client: 'Private Client',
    role: 'Lead Stylist',
    images: [
      { id: 1, alt: 'Traditional Wedding - Look 1', imageUrl: '/projects/trad-wedding-1.jpg' },
      { id: 2, alt: 'Traditional Wedding - Look 2', imageUrl: '/projects/trad-wedding-2.jpg' },
      { id: 3, alt: 'Traditional Wedding - Look 3', imageUrl: '/projects/trad-wedding-3.jpg' },
    ]
  },
  {
    id: 4,
    title: 'Clients Traditional Wedding Styling',
    category: 'Wedding',
    description: 'Complete traditional wedding styling celebrating cultural heritage with elegant and sophisticated looks for the special day.',
    year: '2024',
    client: 'Private Client',
    role: 'Lead Stylist',
    images: [
      { id: 1, alt: 'Client Traditional Wedding - Look 1', imageUrl: '/projects/victor-trad-1.jpg' },
      { id: 2, alt: 'Client Traditional Wedding - Look 2', imageUrl: '/projects/victor-trad-2.jpg' },
      { id: 3, alt: 'Client Traditional Wedding - Look 3', imageUrl: '/projects/victor-trad-3.jpg' },
      { id: 4, alt: 'Client Traditional Wedding - Look 4', imageUrl: '/projects/victor-trad-4.jpg' },
    ]
  },
  {
    id: 5,
    title: 'Clients Wedding Styling',
    category: 'Wedding',
    description: 'Beautiful wedding day styling with modern elegance and timeless sophistication for the perfect celebration.',
    year: '2024',
    client: 'Private Client',
    role: 'Lead Stylist',
    images: [
      { id: 1, alt: 'Client Wedding - Look 1', imageUrl: '/projects/victor-wed-1.jpg' },
      { id: 2, alt: 'Client Wedding - Look 2', imageUrl: '/projects/victor-wed-2.jpg' },
    ]
  },
  {
    id: 6,
    title: 'Urban Elegance',
    category: 'Editorial',
    description: 'A contemporary editorial shoot exploring modern menswear in urban settings. Focused on clean lines, neutral tones, and architectural silhouettes.',
    year: '2024',
    client: 'Fashion Magazine',
    role: 'Lead Stylist',
    images: [
      { id: 1, alt: 'Urban Elegance - Look 1' },
      { id: 2, alt: 'Urban Elegance - Look 2' },
      { id: 3, alt: 'Urban Elegance - Look 3' },
      { id: 4, alt: 'Urban Elegance - Look 4' },
      { id: 5, alt: 'Urban Elegance - Look 5' },
      { id: 6, alt: 'Urban Elegance - Look 6' },
    ]
  },
  {
    id: 2,
    title: 'Modern Executive',
    category: 'Commercial',
    description: 'Commercial campaign for a luxury menswear brand, showcasing their new executive collection. Emphasis on tailored fits and premium fabrics.',
    year: '2024',
    client: 'Luxury Brand',
    role: 'Fashion Stylist',
    images: [
      { id: 1, alt: 'Modern Executive - Look 1' },
      { id: 2, alt: 'Modern Executive - Look 2' },
      { id: 3, alt: 'Modern Executive - Look 3' },
      { id: 4, alt: 'Modern Executive - Look 4' },
      { id: 5, alt: 'Modern Executive - Look 5' },
      { id: 6, alt: 'Modern Executive - Look 6' },
    ]
  },
  {
    id: 3,
    title: 'Street Style',
    category: 'Personal',
    description: 'Personal styling project capturing authentic street style moments. Mixing high and low fashion with a focus on individual expression.',
    year: '2024',
    role: 'Stylist & Creative Director',
    images: [
      { id: 1, alt: 'Street Style - Look 1' },
      { id: 2, alt: 'Street Style - Look 2' },
      { id: 3, alt: 'Street Style - Look 3' },
      { id: 4, alt: 'Street Style - Look 4' },
      { id: 5, alt: 'Street Style - Look 5' },
      { id: 6, alt: 'Street Style - Look 6' },
    ]
  },
  {
    id: 4,
    title: 'Formal Affairs',
    category: 'Editorial',
    description: 'Editorial series exploring modern formal wear and black-tie styling. Classic elegance meets contemporary design.',
    year: '2023',
    client: 'Style Magazine',
    role: 'Lead Stylist',
    images: [
      { id: 1, alt: 'Formal Affairs - Look 1' },
      { id: 2, alt: 'Formal Affairs - Look 2' },
      { id: 3, alt: 'Formal Affairs - Look 3' },
      { id: 4, alt: 'Formal Affairs - Look 4' },
      { id: 5, alt: 'Formal Affairs - Look 5' },
      { id: 6, alt: 'Formal Affairs - Look 6' },
    ]
  },
  {
    id: 5,
    title: 'Brand Campaign',
    category: 'Commercial',
    description: 'Seasonal campaign for an international fashion brand. Showcasing versatile pieces for the modern wardrobe.',
    year: '2023',
    client: 'International Brand',
    role: 'Fashion Stylist',
    images: [
      { id: 1, alt: 'Brand Campaign - Look 1' },
      { id: 2, alt: 'Brand Campaign - Look 2' },
      { id: 3, alt: 'Brand Campaign - Look 3' },
      { id: 4, alt: 'Brand Campaign - Look 4' },
      { id: 5, alt: 'Brand Campaign - Look 5' },
      { id: 6, alt: 'Brand Campaign - Look 6' },
    ]
  },
  {
    id: 6,
    title: 'Casual Refined',
    category: 'Personal',
    description: 'Personal project exploring elevated casual wear. Smart casual styling that transitions from day to evening.',
    year: '2023',
    role: 'Stylist & Creative Director',
    images: [
      { id: 1, alt: 'Casual Refined - Look 1' },
      { id: 2, alt: 'Casual Refined - Look 2' },
      { id: 3, alt: 'Casual Refined - Look 3' },
      { id: 4, alt: 'Casual Refined - Look 4' },
      { id: 5, alt: 'Casual Refined - Look 5' },
      { id: 6, alt: 'Casual Refined - Look 6' },
    ]
  },
  {
    id: 7,
    title: 'Minimalist Wardrobe',
    category: 'Editorial',
    description: 'Editorial feature on minimalist menswear. Focusing on essential pieces, quality over quantity, and timeless design.',
    year: '2023',
    client: 'Design Magazine',
    role: 'Lead Stylist',
    images: [
      { id: 1, alt: 'Minimalist Wardrobe - Look 1' },
      { id: 2, alt: 'Minimalist Wardrobe - Look 2' },
      { id: 3, alt: 'Minimalist Wardrobe - Look 3' },
      { id: 4, alt: 'Minimalist Wardrobe - Look 4' },
      { id: 5, alt: 'Minimalist Wardrobe - Look 5' },
      { id: 6, alt: 'Minimalist Wardrobe - Look 6' },
    ]
  },
  {
    id: 8,
    title: 'Luxury Lifestyle',
    category: 'Commercial',
    description: 'Luxury lifestyle campaign showcasing premium menswear in sophisticated settings. Emphasis on craftsmanship and detail.',
    year: '2023',
    client: 'Luxury Lifestyle Brand',
    role: 'Fashion Stylist',
    images: [
      { id: 1, alt: 'Luxury Lifestyle - Look 1' },
      { id: 2, alt: 'Luxury Lifestyle - Look 2' },
      { id: 3, alt: 'Luxury Lifestyle - Look 3' },
      { id: 4, alt: 'Luxury Lifestyle - Look 4' },
      { id: 5, alt: 'Luxury Lifestyle - Look 5' },
      { id: 6, alt: 'Luxury Lifestyle - Look 6' },
    ]
  },
  {
    id: 9,
    title: 'Weekend Essentials',
    category: 'Personal',
    description: 'Personal styling series focused on weekend wear. Comfortable yet refined pieces for leisure and relaxation.',
    year: '2023',
    role: 'Stylist & Creative Director',
    images: [
      { id: 1, alt: 'Weekend Essentials - Look 1' },
      { id: 2, alt: 'Weekend Essentials - Look 2' },
      { id: 3, alt: 'Weekend Essentials - Look 3' },
      { id: 4, alt: 'Weekend Essentials - Look 4' },
      { id: 5, alt: 'Weekend Essentials - Look 5' },
      { id: 6, alt: 'Weekend Essentials - Look 6' },
    ]
  },
]

export function getProjectById(id: number): PortfolioProject | undefined {
  return portfolioProjects.find(project => project.id === id)
}

export function getAllProjects(): PortfolioProject[] {
  return portfolioProjects
}
