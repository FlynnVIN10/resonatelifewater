# Shopify Integration Setup Guide

## Current Status
✅ Shopify Buy Button SDK integrated  
✅ Product containers ready  
✅ Styling configured  
⏳ Awaiting Shopify store configuration

## Overview
The EcoDigest Pro website is now prepared for Shopify e-commerce integration. The infrastructure is in place but disabled by default, allowing the site to continue functioning normally with contact-based lead generation until the Shopify store is configured.

## When Shopify Store is Ready

### Step 1: Get Shopify Credentials

1. Log into Shopify admin panel
2. Navigate to **Settings** → **Apps and sales channels**
3. Click **Develop apps** (or use Shopify Plus API if available)
4. Create a new app or use existing app
5. Enable **Storefront API** access
6. Generate a **Storefront access token**
7. Copy your store domain (format: `yourstore.myshopify.com`)
8. Copy the Storefront access token

**Important:** Storefront API tokens have read-only access to products and can create checkouts. This is perfect for Buy Button integration.

### Step 2: Create Products in Shopify

Create these products in your Shopify store:

#### 1. Commercial Starter Package
- **Title:** Commercial Starter Package
- **Description:** Perfect for Growing Operations (1-5 Acres). 30-day microbial supply treating up to 50,000 gallons.
- **Price:** Set your pricing
- **SKU:** ECO-COMMERCIAL-001
- **Product Type:** Liquid Microbial Solution
- **Vendor:** EcoDigest Pro

#### 2. Enterprise Solution
- **Title:** Enterprise Solution
- **Description:** Industrial-Scale Deployment (5+ Acres). 90-day microbial supply treating up to 200,000+ gallons.
- **Price:** Set your pricing (or use custom pricing)
- **SKU:** ECO-ENTERPRISE-001
- **Product Type:** Liquid Microbial Solution
- **Vendor:** EcoDigest Pro

#### 3. Custom Solutions (Optional)
- **Title:** Custom Solutions
- **Description:** Tailored for Your Unique Operation
- **Price:** Contact for pricing (or set custom pricing)
- **SKU:** ECO-CUSTOM-001
- **Product Type:** Liquid Microbial Solution
- **Vendor:** EcoDigest Pro

**Note:** Custom Solutions can remain contact-only if preferred.

### Step 3: Get Product IDs

For each product in Shopify:

1. Go to the product edit page in Shopify admin
2. Look at the URL - it will contain the product ID
   - Format: `https://admin.shopify.com/store/[store]/products/[PRODUCT_ID]`
3. Convert to GraphQL format: `gid://shopify/Product/[PRODUCT_ID]`

**Alternative method:**
- Use Shopify GraphQL Admin API to query products
- Product IDs will be in GraphQL format: `gid://shopify/Product/[ID]`

### Step 4: Update Configuration

Open `js/shopify-integration.js` and update:

```javascript
const SHOPIFY_CONFIG = {
    domain: 'ecodigestpro.myshopify.com', // Your actual Shopify domain
    storefrontAccessToken: 'your_actual_storefront_token_here', // Your actual token
    enabled: true // Set to true to activate Shopify integration
};

const PRODUCT_IDS = {
    commercialStarter: 'gid://shopify/Product/1234567890', // Actual Commercial Starter ID
    enterpriseSolution: 'gid://shopify/Product/0987654321', // Actual Enterprise Solution ID
    customSolution: 'gid://shopify/Product/1122334455' // Actual Custom Solutions ID (if using)
};
```

### Step 5: Test Locally

1. Open the website locally
2. Open browser console (F12 or Cmd+Option+I)
3. Run: `toggleShopify(true)`
4. Verify:
   - Shopify buy buttons appear on product cards
   - Contact CTAs are hidden
   - Buy buttons are styled correctly
   - Clicking "Add to Cart" opens Shopify checkout
5. Test checkout flow:
   - Add product to cart
   - Proceed through Shopify checkout
   - Verify order processing
6. To disable: Run `toggleShopify(false)` in console

### Step 6: Deploy

Once tested successfully:

1. Commit changes with updated credentials:
   ```bash
   git add .
   git commit -m "Activate Shopify integration - store configured"
   git push origin main
   ```

2. Verify on live site:
   - Visit https://flynnvin10.github.io/EcoDigestPro/
   - Test buy buttons on live site
   - Verify checkout flow works

3. Monitor:
   - Check Shopify admin for test orders
   - Verify email notifications work
   - Test with real payment method (if available)

## Troubleshooting

### Buy Buttons Don't Appear

**Check:**
- Browser console for JavaScript errors
- `SHOPIFY_CONFIG.enabled` is set to `true`
- Shopify SDK loaded (check Network tab)
- Product IDs are correct format (`gid://shopify/Product/[ID]`)
- Storefront access token is valid

**Solution:**
- Verify SDK script loads: Check `<script>` tag in HTML
- Check console for specific error messages
- Verify credentials are correct

### Checkout Fails

**Check:**
- Storefront API token has correct permissions
- Products are published in Shopify
- Products have variants configured
- Inventory is set (if using inventory tracking)

**Solution:**
- Regenerate Storefront API token with full permissions
- Ensure products are active and published
- Check Shopify admin for error logs

### Styling Issues

**Check:**
- CSS overrides in `styles.css` are applied
- Shopify button styles match site design
- Mobile responsiveness

**Solution:**
- Inspect Shopify button elements
- Adjust CSS overrides in `styles.css`
- Test on multiple devices

### Console Errors

**Common Errors:**

1. **"ShopifyBuy is not defined"**
   - SDK script not loaded
   - Check script tag in HTML
   - Verify CDN is accessible

2. **"Invalid product ID"**
   - Product ID format incorrect
   - Product doesn't exist in Shopify
   - Token doesn't have access

3. **"Access denied"**
   - Storefront token invalid or expired
   - Token doesn't have required permissions
   - Regenerate token

## Hybrid Approach

You can run a hybrid setup where:
- Some products use Shopify buy buttons
- Others remain contact-only

**To implement:**
- Only enable Shopify for specific product IDs
- Leave `SHOPIFY_CONFIG.enabled = false` for contact-only products
- Use `toggleShopify(true)` selectively per product

## Security Notes

- **Never commit credentials to Git**
- Store credentials securely
- Use environment variables if possible
- Rotate tokens regularly
- Monitor API usage in Shopify admin

## Support Resources

- [Shopify Buy Button Documentation](https://shopify.dev/docs/api/buy-button)
- [Storefront API Guide](https://shopify.dev/docs/api/storefront)
- [Shopify Community Forums](https://community.shopify.com/)

## Next Steps After Activation

1. **Analytics:** Set up conversion tracking
2. **Email:** Configure order confirmation emails
3. **Inventory:** Set up inventory management
4. **Shipping:** Configure shipping rates
5. **Taxes:** Set up tax calculations
6. **Payment:** Test payment processing
7. **Support:** Train team on order management

---

**Last Updated:** Phase 2 Implementation  
**Status:** Ready for Shopify Store Configuration  
**Contact:** Update this document as configuration progresses

