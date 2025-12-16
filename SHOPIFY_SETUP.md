# Shopify Integration Setup Guide

## Current Status
✅ Shopify Buy Button SDK integrated  
✅ Product containers ready  
✅ Styling configured  
⏳ Awaiting Shopify store configuration

## Overview
The Resonate Life Water website is now prepared for Shopify e-commerce integration. The infrastructure is in place but disabled by default, allowing the site to continue functioning normally with contact-based lead generation until the Shopify store is configured.

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

#### 1. Discovery Journey
- **Title:** Discovery Journey
- **Description:** 4-month supply - Begin your wellness journey. Get started with Resonate Life Water! This 30-day supply includes 8 bottles (32 oz each) and is designed to easily fit into your daily routine. Experience the potential benefits for your overall well-being.
- **Price:** Starting at $750 (Early Adopter Pricing)
- **SKU:** RLW-DISCOVERY-001
- **Product Type:** Probiotic Structured Water
- **Vendor:** Resonate Life Water

#### 2. Transformation Path
- **Title:** Transformation Path
- **Description:** 8-month supply - Complete transformation protocol. The Transformative Path package includes a full 120-day supply of Resonate Life Water. This is designed to provide you with the complete regimen for the duration of the study or your wellness journey.
- **Price:** $3,000 (Save 20% - Complete Protocol)
- **SKU:** RLW-TRANSFORM-001
- **Product Type:** Probiotic Structured Water
- **Vendor:** Resonate Life Water
- **Note:** Mark as "BEST VALUE" in product tags

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
    domain: 'resonatelifewater.myshopify.com', // Your actual Shopify domain
    storefrontAccessToken: 'your_actual_storefront_token_here', // Your actual token
    enabled: true // Set to true to activate Shopify integration
};

const PRODUCT_IDS = {
    discoveryJourney: 'gid://shopify/Product/1234567890', // Actual Discovery Journey ID
    transformationPath: 'gid://shopify/Product/0987654321' // Actual Transformation Path ID
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
   - Visit https://flynnvin10.github.io/resonatelifewater/
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

## Product Configuration Notes

- **Discovery Journey:** 4-month supply package (30-day supply, 8 bottles)
- **Transformation Path:** 8-month supply package (120-day supply) - Best Value option
- Both products are probiotic structured water delivered in 32 oz bottles
- Products align with Resonate Life Water wellness protocol

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

**Last Updated:** December 2025  
**Status:** Ready for Shopify Store Configuration  
**Project:** Resonate Life Water  
**Contact:** Update this document as configuration progresses

