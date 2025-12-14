# Resonate Life Water Public Website

Professional public-facing website for **Resonate Life Water**.

## Overview
This site is a fast, accessible, mobile-first static website designed to:
- Showcase Resonate Life Water products and benefits
- Communicate the brand story, mission, and trust signals
- Provide clear calls to action and contact information

## Tech stack
- **HTML5** (semantic markup)
- **CSS3** (responsive layout with Flexbox/Grid)
- **Vanilla JavaScript** (small enhancements only)

## Local development
Open `index.html` directly in a browser, or serve the folder locally.

Example (Python not required):

```bash
# If you have node installed
npx serve .
```

## Project structure
- `index.html`: Homepage
- `products.html`: Products (Shopify-ready placeholders)
- `css/styles.css`: Global styles
- `js/main.js`: Core JavaScript
- `images/`: Product and brand imagery
- `assets/`: Icons, fonts, and other resources

## Shopify integration (planned)
This site includes placeholders for Shopify Buy Button integration:
- `data-product-id="PRODUCT_ID"` placeholders in product sections
- `data-add-to-cart` buttons (currently update the cart count locally for demo)
- cart icon and count in the header

When ready:
- Add Shopify Buy SDK: `https://shopify.github.io/js-buy-sdk/`
- Replace `PRODUCT_ID` values with real Shopify product IDs
- Configure Shopify domain + Storefront API access token
- Implement real cart state and checkout redirect

## Deployment
This repository is structured for **GitHub Pages**:
- `index.html` is in the repository root
- Assets use **relative paths**

## License
MIT — see `LICENSE`.
