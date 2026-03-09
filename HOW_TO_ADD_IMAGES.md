# How to Add Your Images to the Portfolio

## Step 1: Save Your Images

Save the image you shared to your `public` folder with these names:

1. **For Hero Section**: Save as `public/stylist-hero.jpg`
2. **For About Page**: Save as `public/stylist-about.jpg` (or use the same image for both)

## Step 2: Image Locations

Your images are already configured in these files:

### Hero Section
- File: `components/hero.tsx`
- Image path: `/stylist-hero.jpg`
- This is the main image on your homepage

### About Page
- File: `components/about.tsx`
- Image path: `/stylist-photo.jpg`
- This is your portrait on the about section

## Step 3: Add Project Images

For each project in your portfolio, you need to add 6 images per project.

Save your project images in the `public` folder like this:

```
public/
  projects/
    urban-elegance-1.jpg
    urban-elegance-2.jpg
    urban-elegance-3.jpg
    urban-elegance-4.jpg
    urban-elegance-5.jpg
    urban-elegance-6.jpg
    
    modern-executive-1.jpg
    modern-executive-2.jpg
    ... and so on
```

Then update the image paths in `lib/portfolio-data.ts` to point to your actual images.

## Quick Start

1. Save the image you shared as `public/stylist-hero.jpg`
2. Copy it again as `public/stylist-about.jpg` (or use a different photo)
3. Refresh your browser to see the images!

## Image Recommendations

- **Hero Image**: 1200 x 1600px (3:4 ratio)
- **About Image**: 1200 x 1600px (3:4 ratio)
- **Project Images**: 1920 x 1200px (16:10 ratio)
- Format: JPG or PNG
- Keep file sizes under 500KB for fast loading
