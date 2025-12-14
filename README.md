# Resonate Life Water Public Website

Source code for the **Resonate Life Water** public-facing website.

## Live site
`https://flynnvin10.github.io/resonatelifewater/`

## About
Resonate Life Water is committed to delivering health-focused water solutions that support families and communities in accessing clean, great-tasting water for life and wellness.

## Mission
To help families and communities access clean, great-tasting water that supports health and peace of mind.

## Values
- **Wellness-first**: Designed to support everyday hydration with clean water you can trust.
- **Quality-driven**: Built with reliable components and a focus on performance and durability.
- **Service-minded**: Clear guidance, straightforward next steps, and support from start to finish.

## Tech stack
- **HTML5**
- **CSS3**
- **Vanilla JavaScript**

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
- Cart icon and count in the header

When ready:
- Add Shopify Buy SDK: `https://shopify.github.io/js-buy-sdk/`
- Replace `PRODUCT_ID` values with real Shopify product IDs
- Configure Shopify domain + Storefront API access token
- Implement real cart state and checkout redirect

## Deployment (GitHub Pages)
- `index.html` is in the repository root
- All assets use **relative paths**

## License
MIT — see `LICENSE`.
