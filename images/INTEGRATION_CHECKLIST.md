# Image Integration Checklist
## OMGEN WATER Website

**Purpose:** Step-by-step checklist for integrating AI-generated images into the website  
**Last Updated:** January 2025

---

## PRE-INTEGRATION CHECKLIST

### **Image Generation**
- [ ] All 18 required images generated using AI prompts
- [ ] Images match brand guidelines (blue #007BFF, black #000, white #FFF)
- [ ] Images are professional quality with no AI artifacts
- [ ] All images optimized and compressed to meet file size requirements

### **File Organization**
- [ ] All images placed in correct directory structure:
  - [ ] `images/hero/` - 3 hero images
  - [ ] `images/products/` - 3 product images
  - [ ] `images/lifestyle/` - 3 lifestyle images
  - [ ] `images/icons/` - 6 icon SVGs
  - [ ] `images/branding/` - 3 logo variations
- [ ] File names match specifications exactly (lowercase, hyphens)
- [ ] File formats correct (JPG for photos, PNG for logos, SVG for icons)

### **File Size Verification**
- [ ] Hero images: <150KB each
- [ ] Product images: <80KB each
- [ ] Lifestyle images: <100KB each
- [ ] Icons: <10KB each
- [ ] Logos: <50KB each

### **Dimension Verification**
- [ ] Hero images: 1920x1080px (16:9)
- [ ] Product images: 800x800px (1:1)
- [ ] Lifestyle images: 1200x800px (3:2)
- [ ] Icons: 256x256px viewBox
- [ ] Logo full: 512x512px
- [ ] Logo icon: 256x256px
- [ ] Logo horizontal: 1024x256px

---

## HTML INTEGRATION CHECKLIST

### **Header Logo** (`index.html` & `products.html`)
- [ ] Logo path updated: `./images/branding/logo-horizontal.png`
- [ ] Alt text: "OMGEN WATER"
- [ ] Loading attribute: `loading="eager"` (above fold)
- [ ] Decoding attribute: `decoding="sync"`

### **Hero Section** (`index.html`)
- [ ] Hero background image path: `./images/hero/main-hero.jpg`
- [ ] Inline style updated with correct path
- [ ] Fallback gradient displays if image missing
- [ ] Hero content updated (tagline, title, subtitle)

### **Product Images** (`index.html` & `products.html`)
- [ ] Whole House System: `./images/products/whole-house-system.jpg`
- [ ] Under-Sink System: `./images/products/under-sink-system.jpg`
- [ ] Alt text descriptive and SEO-friendly
- [ ] Loading attribute: `loading="lazy"`
- [ ] Decoding attribute: `decoding="async"`

### **Lifestyle Images** (`index.html`)
- [ ] Kitchen install: `./images/lifestyle/kitchen-install.jpg`
- [ ] Alt text descriptive
- [ ] Lazy loading enabled

### **Value Prop Icons** (`index.html`)
- [ ] All 6 icons added:
  - [ ] `./images/icons/pure-water.svg`
  - [ ] `./images/icons/cost-savings.svg`
  - [ ] `./images/icons/eco-friendly.svg`
  - [ ] `./images/icons/health.svg`
  - [ ] `./images/icons/installation.svg`
  - [ ] `./images/icons/smart-tech.svg`
- [ ] Alt text empty (decorative): `alt=""`
- [ ] `aria-hidden="true"` added
- [ ] Loading attribute: `loading="lazy"`

---

## CSS VERIFICATION CHECKLIST

### **Hero Section**
- [ ] Background image displays correctly
- [ ] Fallback gradient works if image missing
- [ ] Responsive on mobile (min-height adjusts)
- [ ] Background-size: cover
- [ ] Background-position: center

### **Product Images**
- [ ] Images display in product cards
- [ ] Object-fit: cover applied
- [ ] Responsive sizing works
- [ ] Lazy loading fade-in animation works
- [ ] Skeleton loader displays while loading

### **Icon Images**
- [ ] Icons display in value prop cards
- [ ] Size: 44x44px
- [ ] Fade-in animation works
- [ ] Fallback to emoji if image missing

### **Logo**
- [ ] Logo displays in header
- [ ] Max-width: 220px (desktop), 180px (mobile)
- [ ] Height: 50px (desktop), 42px (mobile)
- [ ] Object-fit: contain

### **Responsive Behavior**
- [ ] Images scale correctly on mobile (<768px)
- [ ] Images scale correctly on tablet (768px-1023px)
- [ ] Images scale correctly on desktop (≥1024px)
- [ ] No horizontal scrolling caused by images
- [ ] Images maintain aspect ratios

---

## FUNCTIONALITY TESTING

### **Image Loading**
- [ ] All images load without 404 errors
- [ ] Lazy loading works (images load as you scroll)
- [ ] Skeleton loaders display while images load
- [ ] Fade-in animations work smoothly
- [ ] No broken image icons visible

### **Performance**
- [ ] Page load time <2 seconds (with images)
- [ ] Images don't block page rendering
- [ ] Lazy loading improves initial load time
- [ ] File sizes meet requirements (check Network tab)

### **Accessibility**
- [ ] All images have descriptive alt text (except decorative)
- [ ] Decorative images have empty alt and aria-hidden
- [ ] Images don't convey critical info without text
- [ ] Keyboard navigation works around images

### **Cross-Browser Testing**
- [ ] Chrome/Edge: Images display correctly
- [ ] Firefox: Images display correctly
- [ ] Safari: Images display correctly
- [ ] Mobile Safari: Images display correctly
- [ ] Mobile Chrome: Images display correctly

---

## VISUAL QUALITY CHECKLIST

### **Brand Alignment**
- [ ] Images match OMGEN WATER brand identity
- [ ] Color palette consistent (blue #007BFF, black #000)
- [ ] Professional, trustworthy appearance
- [ ] Modern, innovative aesthetic
- [ ] Water filtration industry appropriate

### **Image Quality**
- [ ] Images are sharp and high-resolution
- [ ] No visible AI artifacts
- [ ] No watermarks or copyright issues
- [ ] Consistent lighting and style
- [ ] Professional photography quality

### **Composition**
- [ ] Images are well-composed
- [ ] Important elements are in focus
- [ ] No distracting elements
- [ ] Proper aspect ratios maintained
- [ ] Images work with overlay text (hero)

---

## FALLBACK & ERROR HANDLING

### **Missing Images**
- [ ] Fallback gradients display for hero if image missing
- [ ] Placeholder backgrounds show for product images
- [ ] Emoji fallbacks work for missing icons
- [ ] No broken image icons visible
- [ ] Site remains functional without images

### **Slow Loading**
- [ ] Skeleton loaders display during load
- [ ] Fade-in animations work after load
- [ ] No layout shift when images load
- [ ] Progressive enhancement works

### **Error States**
- [ ] 404 errors handled gracefully
- [ ] Network errors don't break page
- [ ] Images with errors don't display broken icon
- [ ] Fallbacks activate automatically

---

## FINAL VERIFICATION

### **Complete Site Review**
- [ ] All images integrated and displaying
- [ ] No console errors related to images
- [ ] Performance metrics acceptable
- [ ] Accessibility standards met
- [ ] Brand consistency maintained

### **Documentation**
- [ ] Image paths documented
- [ ] File naming conventions followed
- [ ] Integration notes added if needed
- [ ] Future maintenance instructions clear

---

## QUICK REFERENCE: IMAGE PATHS

### **Hero Images**
```
./images/hero/main-hero.jpg
./images/hero/whole-house-hero.jpg
./images/hero/under-sink-hero.jpg
```

### **Product Images**
```
./images/products/whole-house-system.jpg
./images/products/under-sink-system.jpg
./images/products/filter-components.jpg
```

### **Lifestyle Images**
```
./images/lifestyle/family-drinking.jpg
./images/lifestyle/kitchen-install.jpg
./images/lifestyle/home-exterior.jpg
```

### **Icons**
```
./images/icons/pure-water.svg
./images/icons/cost-savings.svg
./images/icons/eco-friendly.svg
./images/icons/health.svg
./images/icons/installation.svg
./images/icons/smart-tech.svg
```

### **Branding**
```
./images/branding/logo-full.png
./images/branding/logo-icon.png
./images/branding/logo-horizontal.png
```

---

## TROUBLESHOOTING

### **Images Not Loading**
1. Check file paths match exactly (case-sensitive)
2. Verify files exist in correct directories
3. Check browser console for 404 errors
4. Verify file permissions
5. Check for typos in file names

### **Images Too Large**
1. Re-compress using TinyPNG or Squoosh
2. Reduce JPG quality to 80-85%
3. Verify file sizes meet requirements
4. Check Network tab for actual file sizes

### **Images Not Responsive**
1. Verify CSS object-fit rules applied
2. Check max-width: 100% on images
3. Test at different viewport sizes
4. Verify media queries are working

### **Performance Issues**
1. Verify lazy loading is enabled
2. Check file sizes are optimized
3. Verify images are in correct format
4. Test with browser DevTools Performance tab

---

## POST-INTEGRATION

### **Optimization**
- [ ] Consider WebP format for better compression
- [ ] Implement srcset for responsive images if needed
- [ ] Add image preloading for above-fold images
- [ ] Monitor Core Web Vitals

### **Maintenance**
- [ ] Document any custom image paths
- [ ] Note any image-specific styling
- [ ] Update this checklist if process changes
- [ ] Keep image generation guide updated

---

**Checklist Version:** 1.0  
**Last Updated:** January 2025  
**Status:** Ready for Integration

