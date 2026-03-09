# Quick Guide: Add Your Image

## The image you shared is perfect! Here's how to add it:

### Option 1: Save the image directly (Easiest)

1. Save the image you shared as `stylist-hero.jpg` in the `public` folder
2. Copy it again and save as `stylist-photo.jpg` in the same folder
3. That's it! Refresh your browser

### Option 2: Use the same image for both

1. Save your image as `stylist-hero.jpg` in the `public` folder
2. Create a copy named `stylist-photo.jpg`
3. Done!

## File Structure

```
public/
  ├── stylist-hero.jpg     ← Your image for homepage hero
  └── stylist-photo.jpg    ← Your image for about page
```

## The image is already configured in:
- ✅ Hero section (`components/hero.tsx`)
- ✅ About page (`components/about.tsx`)

Just add the files and you're done!

---

## For Project Images Later

When you're ready to add project photos, save them in:
```
public/
  └── projects/
      ├── project-1-image-1.jpg
      ├── project-1-image-2.jpg
      └── ... etc
```

Then update the paths in `lib/portfolio-data.ts`
