# AI Image Generation Guide
## OMGEN WATER Website Assets

**Project:** OMGEN WATER Website Rebranding  
**Purpose:** Generate professional images for water filtration system website  
**Target Audience:** Project Manager (Grok) for AI image generation  
**Last Updated:** January 2025

---

## TABLE OF CONTENTS

1. [Quick Start Workflow](#quick-start-workflow)
2. [Image Categories & Requirements](#image-categories--requirements)
3. [AI Generation Prompts](#ai-generation-prompts)
4. [Directory Structure](#directory-structure)
5. [File Naming Conventions](#file-naming-conventions)
6. [Optimization Guidelines](#optimization-guidelines)
7. [Integration Checklist](#integration-checklist)
8. [Quality Control Standards](#quality-control-standards)
9. [Recommended AI Tools](#recommended-ai-tools)

---

## QUICK START WORKFLOW

### Step 1: Choose AI Tool
- **Recommended:** DALL-E 3 (via ChatGPT Plus), Leonardo.ai, or Midjourney
- **Alternative:** Grok (if available with image generation)

### Step 2: Generate Images by Category
Follow the prompts in [AI Generation Prompts](#ai-generation-prompts) section below. Generate images in this order:
1. Branding (logo) - **Priority 1**
2. Hero images - **Priority 2**
3. Product images - **Priority 3**
4. Lifestyle images - **Priority 4**
5. Icons - **Priority 5**

### Step 3: Optimize Images
- Compress to <100KB per image (use TinyPNG, Squoosh, or ImageOptim)
- Convert to appropriate format (JPG for photos, PNG for logos, SVG for icons)
- Verify dimensions match specifications

### Step 4: Place in Directory Structure
- Follow the [Directory Structure](#directory-structure) section
- Use exact file names specified in prompts

### Step 5: Verify Integration
- Check HTML image paths are correct
- Test lazy loading
- Verify responsive behavior
- Check alt text is descriptive

---

## IMAGE CATEGORIES & REQUIREMENTS

### **Category 1: Hero Images** (3 images)
**Purpose:** Full-width background images for main hero sections  
**Format:** JPG  
**Dimensions:** 1920x1080px (16:9 aspect ratio)  
**File Size:** <150KB (compressed)  
**Style:** Photorealistic, modern, clean, professional

**Files:**
- `hero/main-hero.jpg` - Main landing page hero
- `hero/whole-house-hero.jpg` - Whole House System section hero
- `hero/under-sink-hero.jpg` - Under-Sink System section hero

---

### **Category 2: Product Images** (3 images)
**Purpose:** Standalone product photography for product cards  
**Format:** JPG  
**Dimensions:** 800x800px (1:1 aspect ratio)  
**File Size:** <80KB (compressed)  
**Style:** Professional product photography, white/light background, clean

**Files:**
- `products/whole-house-system.jpg` - Whole House filtration system
- `products/under-sink-system.jpg` - Under-Sink filtration system
- `products/filter-components.jpg` - Filter cartridges/components close-up

---

### **Category 3: Lifestyle/Context Images** (3 images)
**Purpose:** Contextual images showing products in use  
**Format:** JPG  
**Dimensions:** 1200x800px (3:2 aspect ratio)  
**File Size:** <100KB (compressed)  
**Style:** Lifestyle photography, natural lighting, authentic

**Files:**
- `lifestyle/family-drinking.jpg` - Family drinking filtered water
- `lifestyle/kitchen-install.jpg` - Kitchen with under-sink system visible
- `lifestyle/home-exterior.jpg` - Home exterior showing whole house system connection

---

### **Category 4: Feature/Benefit Icons** (6 icons)
**Purpose:** SVG icons for value propositions and benefits  
**Format:** SVG (vector)  
**Dimensions:** 256x256px viewBox  
**File Size:** <10KB each  
**Style:** Modern, minimalist, line art, monochrome or two-color

**Files:**
- `icons/pure-water.svg` - Water droplet or clean water symbol
- `icons/cost-savings.svg` - Dollar sign or savings symbol
- `icons/eco-friendly.svg` - Leaf or recycling symbol
- `icons/health.svg` - Heart or wellness symbol
- `icons/installation.svg` - Tools or installation symbol
- `icons/smart-tech.svg` - Technology or smart device symbol

---

### **Category 5: Brand Elements** (3 logo variations)
**Purpose:** OMGEN WATER brand logo in multiple formats  
**Format:** PNG (with transparency)  
**Dimensions:** Various (see specifications)  
**File Size:** <50KB each  
**Style:** Modern, clean, water-focused, professional

**Files:**
- `branding/logo-full.png` - Full logo with wordmark (512x512px)
- `branding/logo-icon.png` - Icon only (256x256px)
- `branding/logo-horizontal.png` - Horizontal layout (1024x256px)

---

## AI GENERATION PROMPTS

### **HERO IMAGES**

#### **Prompt 1: Main Hero Background**
```
Create a photorealistic, professional image of a modern, clean water filtration system installed in a contemporary home setting. The scene should show:

VISUAL ELEMENTS:
- A sleek, modern whole-house water filtration system visible in a well-lit utility room or basement
- Clean, minimalist home interior with natural lighting
- Blue and white color palette (water theme)
- Subtle water droplets or flow indicators
- Modern architectural elements (clean lines, neutral tones)
- Professional, trustworthy atmosphere

STYLE:
- Photorealistic photography style
- High-end product photography quality
- Clean, uncluttered composition
- Soft, natural lighting
- Depth of field with system in focus
- Modern, premium aesthetic

COLOR PALETTE:
- Primary: Deep blue (#007BFF), white (#FFFFFF)
- Accents: Light blue tones, silver/metallic
- Background: Neutral whites, light grays

TECHNICAL:
- Resolution: 1920x1080px
- Aspect ratio: 16:9
- Format: High-quality JPG
- Style: Professional product photography, magazine quality

BRAND ALIGNMENT:
- Conveys innovation, trust, and premium quality
- Water filtration industry standard
- Modern home technology aesthetic
- Clean, health-focused imagery
```

#### **Prompt 2: Whole House System Hero**
```
Create a photorealistic image showcasing a whole-house water filtration system in a residential setting:

VISUAL ELEMENTS:
- Large, professional whole-house filtration unit (2-stage system visible)
- Installed in utility room, basement, or garage
- Clean, organized installation with visible plumbing connections
- Modern home environment (well-maintained, professional)
- Subtle indicators of water flow or filtration process
- Blue accent colors matching water theme

STYLE:
- Professional installation photography
- Clean, organized composition
- Technical but approachable
- Natural lighting
- Focus on the filtration system as hero element

COLOR PALETTE:
- Primary: Blue (#007BFF), white, silver
- Accents: Green (#28A745) for eco-friendly elements
- Background: Neutral, clean whites

TECHNICAL:
- Resolution: 1920x1080px
- Aspect ratio: 16:9
- Format: JPG
- Style: Product installation photography

BRAND ALIGNMENT:
- Professional installation quality
- Whole-house coverage concept
- Trustworthy, reliable system
```

#### **Prompt 3: Under-Sink System Hero**
```
Create a photorealistic image of a modern under-sink water filtration system in a contemporary kitchen:

VISUAL ELEMENTS:
- Sleek under-sink filtration system (5-stage) visible under modern kitchen sink
- Clean, modern kitchen environment
- Premium kitchen fixtures and cabinetry
- Water flowing from filtered water tap
- Professional installation appearance
- Blue and white color accents

STYLE:
- Lifestyle product photography
- Kitchen interior photography style
- Clean, modern aesthetic
- Natural kitchen lighting
- Focus on the filtration system and filtered water

COLOR PALETTE:
- Primary: Blue (#007BFF), white, stainless steel
- Kitchen: Warm whites, light wood tones
- Accents: Blue for water theme

TECHNICAL:
- Resolution: 1920x1080px
- Aspect ratio: 16:9
- Format: JPG
- Style: Kitchen lifestyle photography

BRAND ALIGNMENT:
- Convenience and accessibility
- Premium kitchen upgrade
- Health and wellness focus
- Modern home improvement
```

---

### **PRODUCT IMAGES**

#### **Prompt 4: Whole House System Product Shot**
```
Create a professional product photography image of a whole-house water filtration system:

VISUAL ELEMENTS:
- Standalone whole-house filtration system (2-stage)
- White or light gray background (studio photography style)
- System shown from front/angled view
- Visible filter cartridges and housing
- Clean, modern design
- Professional product photography lighting
- Blue accent colors on system

STYLE:
- E-commerce product photography
- Clean white background
- Professional studio lighting
- Product-focused composition
- High detail and clarity

COLOR PALETTE:
- Product: White, blue (#007BFF), silver/metallic
- Background: Pure white (#FFFFFF) or light gray
- Accents: Blue for branding

TECHNICAL:
- Resolution: 800x800px
- Aspect ratio: 1:1 (square)
- Format: JPG
- Style: E-commerce product photography

BRAND ALIGNMENT:
- Premium product quality
- Professional appearance
- Trustworthy and reliable
- Modern technology
```

#### **Prompt 5: Under-Sink System Product Shot**
```
Create a professional product photography image of an under-sink water filtration system:

VISUAL ELEMENTS:
- Standalone under-sink filtration system (5-stage)
- White or light background
- System shown from front/angled view
- Visible filter stages and components
- Compact, modern design
- Professional product photography
- Blue accent colors

STYLE:
- E-commerce product photography
- Clean background
- Studio lighting
- Product-focused
- High detail

COLOR PALETTE:
- Product: White, blue (#007BFF), silver
- Background: White or light gray
- Accents: Blue branding

TECHNICAL:
- Resolution: 800x800px
- Aspect ratio: 1:1
- Format: JPG
- Style: Product photography

BRAND ALIGNMENT:
- Compact and efficient
- Premium quality
- Easy installation
- Modern design
```

#### **Prompt 6: Filter Components Close-Up**
```
Create a professional product photography image of water filter cartridges and components:

VISUAL ELEMENTS:
- Multiple filter cartridges arranged artistically
- Close-up view showing filter details
- Clean, organized composition
- Visible filter media and housing
- Professional product photography
- Blue and white color scheme

STYLE:
- Product detail photography
- Clean background
- Studio lighting
- Focus on product quality
- High detail and clarity

COLOR PALETTE:
- Filters: White, blue, clear
- Background: White or light gray
- Accents: Blue branding

TECHNICAL:
- Resolution: 800x800px
- Aspect ratio: 1:1
- Format: JPG
- Style: Product detail photography

BRAND ALIGNMENT:
- Quality components
- Replaceable filters
- Professional grade
```

---

### **LIFESTYLE IMAGES**

#### **Prompt 7: Family Drinking Filtered Water**
```
Create a warm, authentic lifestyle photography image:

VISUAL ELEMENTS:
- Diverse, happy family (2-4 people) drinking water from glasses
- Modern, clean kitchen or dining area
- Natural, authentic expressions
- Filtered water visible (clear, clean)
- Under-sink system subtly visible in background
- Warm, inviting atmosphere
- Natural lighting

STYLE:
- Lifestyle photography
- Authentic, natural moments
- Warm, inviting composition
- Natural lighting
- Family-focused, health-focused

COLOR PALETTE:
- Warm whites, light wood tones
- Blue accents (#007BFF)
- Natural skin tones
- Clean, bright environment

TECHNICAL:
- Resolution: 1200x800px
- Aspect ratio: 3:2
- Format: JPG
- Style: Lifestyle photography

BRAND ALIGNMENT:
- Family health and wellness
- Trust and safety
- Quality of life improvement
- Accessible, everyday use
```

#### **Prompt 8: Kitchen with Under-Sink Installation**
```
Create a professional lifestyle image showing an under-sink filtration system in a modern kitchen:

VISUAL ELEMENTS:
- Modern, clean kitchen interior
- Under-sink filtration system visible (professional installation)
- Filtered water tap visible
- Premium kitchen fixtures
- Clean, organized kitchen environment
- Natural kitchen lighting
- Blue accent colors

STYLE:
- Kitchen interior photography
- Professional installation appearance
- Clean, modern aesthetic
- Natural lighting
- Lifestyle product integration

COLOR PALETTE:
- Kitchen: Warm whites, light wood, stainless steel
- System: Blue (#007BFF), white
- Accents: Blue for water theme

TECHNICAL:
- Resolution: 1200x800px
- Aspect ratio: 3:2
- Format: JPG
- Style: Kitchen interior photography

BRAND ALIGNMENT:
- Seamless integration
- Professional installation
- Kitchen upgrade
- Modern convenience
```

#### **Prompt 9: Home Exterior with Whole House System**
```
Create a professional image showing a modern home with whole-house water filtration system:

VISUAL ELEMENTS:
- Modern, well-maintained residential home exterior
- Subtle indication of whole-house system (utility area visible)
- Clean, professional appearance
- Natural outdoor lighting
- Blue sky, green landscaping
- Trustworthy, established home

STYLE:
- Real estate photography style
- Professional, clean composition
- Natural lighting
- Home-focused, system-integrated

COLOR PALETTE:
- Home: Neutral tones, whites, grays
- Landscape: Greens, natural tones
- Sky: Blue (#007BFF range)
- Accents: Blue for water theme

TECHNICAL:
- Resolution: 1200x800px
- Aspect ratio: 3:2
- Format: JPG
- Style: Home exterior photography

BRAND ALIGNMENT:
- Whole-house coverage
- Home value improvement
- Professional installation
- Trustworthy service
```

---

### **FEATURE/BENEFIT ICONS**

#### **Prompt 10: Pure Water Icon**
```
Create a modern, minimalist SVG-style icon representing pure, clean water:

VISUAL ELEMENTS:
- Water droplet shape (stylized, modern)
- Clean, flowing lines
- Minimalist design
- Blue color (#007BFF) or monochrome
- Professional, clean aesthetic

STYLE:
- Modern line art
- Minimalist icon design
- Clean, simple composition
- Vector-style (can be rasterized to SVG)

COLOR PALETTE:
- Primary: Blue (#007BFF) or black (#000000)
- Optional: White for negative space
- Monochrome or two-color maximum

TECHNICAL:
- Resolution: 256x256px viewBox
- Format: SVG (vector) or PNG with transparency
- Style: Modern icon design
- File size: <10KB

BRAND ALIGNMENT:
- Clean, pure water concept
- Modern, professional
- Simple, recognizable
```

#### **Prompt 11: Cost Savings Icon**
```
Create a modern icon representing cost savings and value:

VISUAL ELEMENTS:
- Dollar sign or money symbol (stylized)
- Downward arrow or savings indicator
- Modern, clean design
- Blue or green color (#007BFF or #28A745)
- Professional icon style

STYLE:
- Modern icon design
- Minimalist, clean
- Recognizable symbol
- Professional appearance

COLOR PALETTE:
- Primary: Blue (#007BFF) or Green (#28A745)
- Monochrome option available

TECHNICAL:
- Resolution: 256x256px
- Format: SVG or PNG
- Style: Icon design
- File size: <10KB

BRAND ALIGNMENT:
- Value proposition
- Cost-effective solution
- Savings benefit
```

#### **Prompt 12: Eco-Friendly Icon**
```
Create a modern icon representing environmental sustainability:

VISUAL ELEMENTS:
- Leaf or recycling symbol
- Green color (#28A745)
- Modern, clean design
- Environmental theme
- Professional icon style

STYLE:
- Modern icon design
- Minimalist
- Recognizable environmental symbol
- Clean composition

COLOR PALETTE:
- Primary: Green (#28A745)
- Optional: Blue (#007BFF) for water connection

TECHNICAL:
- Resolution: 256x256px
- Format: SVG or PNG
- Style: Icon design
- File size: <10KB

BRAND ALIGNMENT:
- Environmental responsibility
- Sustainability
- Eco-friendly benefits
```

#### **Prompt 13: Health Benefits Icon**
```
Create a modern icon representing health and wellness:

VISUAL ELEMENTS:
- Heart or wellness symbol
- Health-focused design
- Blue or red accent (#007BFF or health red)
- Modern, clean icon
- Professional appearance

STYLE:
- Modern icon design
- Minimalist
- Health-focused symbol
- Clean composition

COLOR PALETTE:
- Primary: Blue (#007BFF) or health red
- Monochrome option

TECHNICAL:
- Resolution: 256x256px
- Format: SVG or PNG
- Style: Icon design
- File size: <10KB

BRAND ALIGNMENT:
- Health and wellness
- Quality of life
- Safety and purity
```

#### **Prompt 14: Easy Installation Icon**
```
Create a modern icon representing easy installation:

VISUAL ELEMENTS:
- Tools or installation symbol (wrench, screwdriver, or installation graphic)
- Modern, clean design
- Blue color (#007BFF)
- Professional icon style
- Simple, recognizable

STYLE:
- Modern icon design
- Minimalist
- Installation/convenience theme
- Clean composition

COLOR PALETTE:
- Primary: Blue (#007BFF)
- Monochrome option

TECHNICAL:
- Resolution: 256x256px
- Format: SVG or PNG
- Style: Icon design
- File size: <10KB

BRAND ALIGNMENT:
- Easy installation
- Convenience
- Professional service
```

#### **Prompt 15: Smart Technology Icon**
```
Create a modern icon representing smart technology and innovation:

VISUAL ELEMENTS:
- Technology symbol (circuit, smart device, or innovation graphic)
- Modern, tech-focused design
- Blue color (#007BFF)
- Professional, innovative appearance
- Clean, futuristic aesthetic

STYLE:
- Modern icon design
- Tech-focused
- Innovation theme
- Clean composition

COLOR PALETTE:
- Primary: Blue (#007BFF)
- Accent: Silver/metallic
- Monochrome option

TECHNICAL:
- Resolution: 256x256px
- Format: SVG or PNG
- Style: Icon design
- File size: <10KB

BRAND ALIGNMENT:
- Innovation
- Modern technology
- Smart features
- Advanced filtration
```

---

### **BRAND ELEMENTS**

#### **Prompt 16: OMGEN WATER Logo (Full)**
```
Create a modern, professional logo for OMGEN WATER:

VISUAL ELEMENTS:
- "OMGEN WATER" wordmark (bold, modern typography)
- Water-themed icon or symbol (atomic structure, water molecule, or water drop)
- Blue (#007BFF) and black (#000000) color scheme
- Clean, professional design
- Modern, trustworthy aesthetic
- Water filtration industry appropriate

STYLE:
- Modern logo design
- Professional branding
- Clean typography
- Icon + wordmark combination
- Premium appearance

COLOR PALETTE:
- Primary: Blue (#007BFF)
- Secondary: Black (#000000)
- Accent: White (#FFFFFF) for negative space
- Optional: Green (#28A745) for eco accent

TECHNICAL:
- Resolution: 512x512px (square format)
- Format: PNG with transparency
- Style: Professional logo design
- File size: <50KB

BRAND ALIGNMENT:
- Water filtration industry
- Modern, innovative
- Trustworthy, professional
- Premium quality
- "Restoring Tomorrow, Today Water" brand message
```

#### **Prompt 17: OMGEN WATER Logo (Icon Only)**
```
Create a standalone icon for OMGEN WATER logo:

VISUAL ELEMENTS:
- Water-themed icon (atomic structure, water molecule, or stylized water symbol)
- Blue (#007BFF) and black (#000000) colors
- Modern, recognizable symbol
- Clean, professional design
- Works as standalone mark

STYLE:
- Modern icon design
- Professional branding
- Clean, simple composition
- Recognizable symbol
- Premium appearance

COLOR PALETTE:
- Primary: Blue (#007BFF)
- Secondary: Black (#000000)
- Optional: White for negative space

TECHNICAL:
- Resolution: 256x256px
- Format: PNG with transparency
- Style: Icon/logo mark
- File size: <30KB

BRAND ALIGNMENT:
- Recognizable brand mark
- Water filtration theme
- Modern, professional
```

#### **Prompt 18: OMGEN WATER Logo (Horizontal)**
```
Create a horizontal layout logo for OMGEN WATER:

VISUAL ELEMENTS:
- Icon on left, "OMGEN WATER" wordmark on right
- Horizontal layout (wide format)
- Blue (#007BFF) and black (#000000) colors
- Professional, modern design
- Suitable for header/navigation use

STYLE:
- Modern logo design
- Horizontal layout
- Professional branding
- Clean typography
- Header-appropriate sizing

COLOR PALETTE:
- Primary: Blue (#007BFF)
- Secondary: Black (#000000)
- Accent: White for negative space

TECHNICAL:
- Resolution: 1024x256px (4:1 aspect ratio)
- Format: PNG with transparency
- Style: Horizontal logo
- File size: <50KB

BRAND ALIGNMENT:
- Header/navigation use
- Professional branding
- Modern, clean
- Water filtration industry
```

---

## DIRECTORY STRUCTURE

```
images/
├── hero/
│   ├── main-hero.jpg (1920x1080)
│   ├── whole-house-hero.jpg (1920x1080)
│   └── under-sink-hero.jpg (1920x1080)
│   └── README.md (category documentation)
│
├── products/
│   ├── whole-house-system.jpg (800x800)
│   ├── under-sink-system.jpg (800x800)
│   └── filter-components.jpg (800x800)
│   └── README.md (category documentation)
│
├── lifestyle/
│   ├── family-drinking.jpg (1200x800)
│   ├── kitchen-install.jpg (1200x800)
│   └── home-exterior.jpg (1200x800)
│   └── README.md (category documentation)
│
├── icons/
│   ├── pure-water.svg (256x256)
│   ├── cost-savings.svg (256x256)
│   ├── eco-friendly.svg (256x256)
│   ├── health.svg (256x256)
│   ├── installation.svg (256x256)
│   └── smart-tech.svg (256x256)
│   └── README.md (category documentation)
│
├── branding/
│   ├── logo-full.png (512x512)
│   ├── logo-icon.png (256x256)
│   └── logo-horizontal.png (1024x256)
│   └── README.md (category documentation)
│
└── AI_IMAGE_GENERATION_GUIDE.md (this file)
```

---

## FILE NAMING CONVENTIONS

### **Rules:**
- Use lowercase letters only
- Separate words with hyphens (-)
- No spaces or special characters
- Include category prefix when appropriate
- Be descriptive but concise

### **Examples:**
- ✅ `main-hero.jpg`
- ✅ `whole-house-system.jpg`
- ✅ `family-drinking.jpg`
- ✅ `pure-water.svg`
- ❌ `Main Hero.jpg` (uppercase, space)
- ❌ `whole_house_system.jpg` (underscore)
- ❌ `familyDrinking.jpg` (camelCase)

---

## OPTIMIZATION GUIDELINES

### **Compression Requirements:**
- **Hero images:** <150KB (JPG, quality 80-85%)
- **Product images:** <80KB (JPG, quality 80-85%)
- **Lifestyle images:** <100KB (JPG, quality 80-85%)
- **Icons:** <10KB (SVG preferred, PNG if needed)
- **Logos:** <50KB (PNG, quality 90%+)

### **Format Selection:**
- **JPG:** Photos, complex images (hero, product, lifestyle)
- **PNG:** Logos, graphics with transparency
- **SVG:** Icons, simple graphics (preferred for scalability)

### **Tools for Optimization:**
- **TinyPNG:** https://tinypng.com/ (JPG/PNG compression)
- **Squoosh:** https://squoosh.app/ (advanced compression)
- **ImageOptim:** Mac app for batch optimization
- **SVGOMG:** https://jakearchibald.github.io/svgomg/ (SVG optimization)

### **Compression Workflow:**
1. Generate image at full resolution
2. Verify dimensions match specifications
3. Compress using TinyPNG or Squoosh
4. Verify file size meets requirements
5. Test image quality (should remain sharp)
6. Save to appropriate directory

---

## INTEGRATION CHECKLIST

### **Pre-Integration:**
- [ ] All images generated and optimized
- [ ] File names match specifications exactly
- [ ] Images placed in correct directory structure
- [ ] File sizes meet requirements
- [ ] Image quality verified (sharp, professional)

### **HTML Integration:**
- [ ] Image paths updated in `index.html`
- [ ] Image paths updated in `products.html`
- [ ] Alt text added for all images (descriptive)
- [ ] Lazy loading attributes added (`loading="lazy"`)
- [ ] Decoding attributes added (`decoding="async"`)

### **CSS Verification:**
- [ ] Images display correctly at all breakpoints
- [ ] Responsive sizing works (mobile, tablet, desktop)
- [ ] Lazy loading fade-in animations work
- [ ] Image hover effects (if applicable) work
- [ ] Placeholder backgrounds display for missing images

### **Testing:**
- [ ] All images load correctly
- [ ] Lazy loading functions properly
- [ ] Images are responsive on mobile devices
- [ ] Performance is maintained (<2s load time)
- [ ] Accessibility: Alt text is descriptive
- [ ] Cross-browser compatibility verified

### **Final Verification:**
- [ ] All images match brand guidelines
- [ ] Color palette is consistent
- [ ] Image quality is professional
- [ ] No broken image links
- [ ] Site performance is optimal

---

## QUALITY CONTROL STANDARDS

### **Visual Quality:**
- ✅ Sharp, high-resolution images
- ✅ Professional photography/design quality
- ✅ Consistent color palette (blue #007BFF, black #000, white #FFF)
- ✅ Brand-appropriate styling
- ✅ No watermarks or AI artifacts

### **Technical Quality:**
- ✅ Correct dimensions (as specified)
- ✅ Appropriate file format (JPG/PNG/SVG)
- ✅ File size within limits
- ✅ Optimized compression
- ✅ Proper aspect ratios

### **Brand Alignment:**
- ✅ Matches OMGEN WATER brand identity
- ✅ Water filtration industry appropriate
- ✅ Professional, trustworthy appearance
- ✅ Modern, innovative aesthetic
- ✅ Consistent with site design

### **Accessibility:**
- ✅ Descriptive alt text for all images
- ✅ Proper semantic HTML structure
- ✅ Images don't convey critical information without text
- ✅ Color contrast meets WCAG standards

---

## RECOMMENDED AI TOOLS

### **1. DALL-E 3 (via ChatGPT Plus)**
- **Best for:** Photorealistic images, product photography
- **Strengths:** High quality, natural results, good prompt understanding
- **Cost:** $20/month (ChatGPT Plus)
- **URL:** https://chat.openai.com/

### **2. Leonardo.ai**
- **Best for:** Product images, lifestyle photography
- **Strengths:** Good control, multiple models, free tier available
- **Cost:** Free tier + paid plans
- **URL:** https://leonardo.ai/

### **3. Midjourney**
- **Best for:** Artistic, high-quality images
- **Strengths:** Excellent quality, artistic control
- **Cost:** $10-60/month
- **URL:** https://www.midjourney.com/ (via Discord)

### **4. Grok (if available)**
- **Best for:** Quick generation, integrated workflow
- **Strengths:** Integrated with project workflow
- **Cost:** Varies
- **URL:** Check availability

### **5. Stable Diffusion (via various platforms)**
- **Best for:** Custom models, fine-tuned control
- **Strengths:** Open source, customizable
- **Cost:** Free (self-hosted) or paid platforms
- **URL:** Various platforms available

---

## PROMPT OPTIMIZATION TIPS

### **For Best Results:**
1. **Be Specific:** Include exact dimensions, colors, and style requirements
2. **Use Style References:** Reference "photorealistic," "professional photography," etc.
3. **Iterate:** Generate multiple variations and select the best
4. **Refine Prompts:** Adjust prompts based on initial results
5. **Combine Elements:** Mention brand colors, style, and technical specs together

### **Common Adjustments:**
- If too dark: Add "bright, natural lighting"
- If too cluttered: Add "clean, minimalist composition"
- If colors off: Specify exact hex codes (#007BFF, #000000)
- If quality low: Add "high resolution, professional quality"
- If style wrong: Specify "photorealistic" or "modern icon design"

---

## TROUBLESHOOTING

### **Issue: Images too large**
- **Solution:** Use TinyPNG or Squoosh to compress
- **Target:** Reduce quality to 80-85% for JPG

### **Issue: Wrong dimensions**
- **Solution:** Use image editor to crop/resize to exact specs
- **Tool:** Photoshop, GIMP, or online tools like Photopea

### **Issue: Colors don't match brand**
- **Solution:** Adjust in image editor or regenerate with specific color codes
- **Reference:** Use brand color palette (#007BFF, #000000, #FFFFFF, #28A745)

### **Issue: AI artifacts visible**
- **Solution:** Regenerate with "photorealistic, no artifacts" in prompt
- **Alternative:** Use image editor to remove artifacts

### **Issue: Images not loading**
- **Solution:** Check file paths, verify file names match exactly
- **Verify:** Check browser console for 404 errors

---

## NEXT STEPS

1. **Generate Images:** Use prompts above to create all required images
2. **Optimize:** Compress and optimize all images
3. **Organize:** Place images in correct directory structure
4. **Integrate:** Update HTML with image paths
5. **Test:** Verify all images load and display correctly
6. **Refine:** Adjust based on visual feedback

---

**Document Version:** 1.0  
**Last Updated:** January 2025  
**Maintained By:** Development Team  
**Questions?** Refer to integration checklist or contact project manager.

