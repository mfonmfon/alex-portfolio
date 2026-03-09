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
    title: 'Wedding Celebration Styling',
    category: 'Wedding',
    description: 'Elegant wedding celebration styling with sophisticated looks and attention to detail for a memorable special day.',
    year: '2024',
    client: 'Private Client',
    role: 'Lead Stylist',
    images: [
      { id: 1, alt: 'Wedding Celebration - Look 1', imageUrl: '/projects/timi-wed-1.jpg' },
      { id: 2, alt: 'Wedding Celebration - Look 2', imageUrl: '/projects/timi-wed-2.jpg' },
    ]
  },
]

export function getProjectById(id: number): PortfolioProject | undefined {
  return portfolioProjects.find(project => project.id === id)
}

export function getAllProjects(): PortfolioProject[] {
  return portfolioProjects
}
