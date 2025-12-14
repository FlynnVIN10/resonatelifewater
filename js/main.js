(function () {
  "use strict";

  function setYear() {
    var el = document.getElementById("year");
    if (!el) return;
    el.textContent = String(new Date().getFullYear());
  }

  function wireMobileNav() {
    var btn = document.querySelector(".menu-btn");
    var nav = document.querySelector("[data-nav]");
    if (!btn || !nav) return;

    function setOpen(isOpen) {
      btn.setAttribute("aria-expanded", String(isOpen));
      if (isOpen) {
        nav.classList.add("is-open");
      } else {
        nav.classList.remove("is-open");
      }
    }

    btn.addEventListener("click", function () {
      var isOpen = btn.getAttribute("aria-expanded") === "true";
      setOpen(!isOpen);
    });

    nav.addEventListener("click", function (e) {
      var target = e.target;
      if (target && target.tagName === "A") {
        setOpen(false);
      }
    });
  }

  function getCartCountEl() {
    return document.querySelector("[data-cart-count]");
  }

  function setCartCount(count) {
    var el = getCartCountEl();
    if (!el) return;
    el.textContent = String(Math.max(0, count));
  }

  function getCartCount() {
    var el = getCartCountEl();
    if (!el) return 0;
    var n = Number(el.textContent);
    return Number.isFinite(n) ? n : 0;
  }

  function wireAddToCartPlaceholders() {
    var buttons = document.querySelectorAll("[data-add-to-cart]");
    if (!buttons.length) return;

    for (var i = 0; i < buttons.length; i += 1) {
      buttons[i].addEventListener("click", function () {
        // Placeholder for Shopify Buy Button integration.
        // In production, this click should call Shopify Buy SDK and update cart state.
        setCartCount(getCartCount() + 1);
        window.alert("Added to cart (placeholder). Shopify integration will replace this behavior.");
      });
    }
  }

  function wirePlaceholderForm() {
    var form = document.querySelector("form[aria-label='Contact form']");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      // Placeholder-only: no network request.
      window.alert("Thanks! This form is a placeholder and does not submit yet.");
    });
  }

  // Shopify Buy SDK placeholder:
  // - Add SDK: https://shopify.github.io/js-buy-sdk/
  // - Configure domain and storefront access token
  // - Replace PRODUCT_ID placeholders
  // - Wire cart drawer / redirect to checkout

  try {
    setYear();
    wireMobileNav();
    wireAddToCartPlaceholders();
    wirePlaceholderForm();
  } catch (err) {
    // Fail safe without breaking page.
    // eslint-disable-next-line no-console
    console.error(err);
  }
})();
