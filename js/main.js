(function () {
  "use strict";

  var FLAGS = {
    reveal: true,
    parallax: true,
    typing: true,
    leadPopup: false,
    exitIntent: true,
    pageTransition: true
  };

  function setYear() {
    var el = document.getElementById("year");
    if (!el) return;
    el.textContent = String(new Date().getFullYear());
  }

  function prefersReducedMotion() {
    return (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function track(eventName, props) {
    var payload = { event: eventName, props: props || {}, ts: Date.now() };
    if (window.dataLayer && typeof window.dataLayer.push === "function") {
      window.dataLayer.push(payload);
      return;
    }
    // eslint-disable-next-line no-console
    console.debug("[track]", payload);
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

    // Close menu when resizing up to desktop.
    window.addEventListener(
      "resize",
      function () {
        if (window.innerWidth >= 768) setOpen(false);
      },
      { passive: true }
    );
  }

  function wireHeaderShrink() {
    var header = document.querySelector(".site-header");
    if (!header) return;

    function onScroll() {
      if (window.scrollY > 8) header.classList.add("is-compact");
      else header.classList.remove("is-compact");
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function wireActiveNav() {
    var links = document.querySelectorAll("[data-nav-link]");
    if (!links.length || !("IntersectionObserver" in window)) return;

    var sectionById = {};
    var idByEl = new Map();
    for (var i = 0; i < links.length; i += 1) {
      var id = links[i].getAttribute("data-nav-link");
      if (!id) continue;
      var el = document.querySelector("[data-section='" + id + "'], #" + id);
      if (el) {
        sectionById[id] = el;
        idByEl.set(el, id);
      }
    }

    function setActive(activeId) {
      for (var j = 0; j < links.length; j += 1) {
        var id2 = links[j].getAttribute("data-nav-link");
        if (id2 === activeId) links[j].classList.add("nav__link--active");
        else links[j].classList.remove("nav__link--active");
      }
    }

    var observer = new IntersectionObserver(
      function (entries) {
        var best = null;
        for (var k = 0; k < entries.length; k += 1) {
          var entry = entries[k];
          if (entry.isIntersecting) {
            if (!best || entry.intersectionRatio > best.intersectionRatio) best = entry;
          }
        }
        if (best && idByEl.has(best.target)) setActive(idByEl.get(best.target));
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0.1, 0.2, 0.35, 0.5, 0.7] }
    );

    Object.keys(sectionById).forEach(function (idKey) {
      observer.observe(sectionById[idKey]);
    });
  }

  function wireScrollTop() {
    var btn = document.querySelector("[data-scroll-top]");
    if (!btn) return;
    function onScroll() {
      if (window.scrollY > 700) btn.hidden = false;
      else btn.hidden = true;
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
      track("scroll_top_click");
    });
  }

  function wireReveal() {
    if (!FLAGS.reveal || prefersReducedMotion()) return;
    var els = document.querySelectorAll("[data-reveal]");
    if (!els.length || !("IntersectionObserver" in window)) return;

    var obs = new IntersectionObserver(
      function (entries) {
        for (var i = 0; i < entries.length; i += 1) {
          if (entries[i].isIntersecting) {
            entries[i].target.classList.add("is-visible");
            obs.unobserve(entries[i].target);
          }
        }
      },
      { threshold: 0.05, rootMargin: "50px" }
    );

    for (var j = 0; j < els.length; j += 1) obs.observe(els[j]);
  }

  function wireHeroParallax() {
    if (!FLAGS.parallax || prefersReducedMotion()) return;
    var hero = document.querySelector(".hero");
    if (!hero) return;
    var ticking = false;

    function update() {
      ticking = false;
      var y = Math.min(24, Math.max(-24, window.scrollY * 0.04));
      hero.style.backgroundPosition = "center calc(50% + " + y + "px)";
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
  }

  function wireTyping() {
    if (!FLAGS.typing || prefersReducedMotion()) return;
    var el = document.querySelector("[data-typing]");
    if (!el) return;
    var full = el.getAttribute("data-text") || el.textContent || "";
    var i = 0;
    el.textContent = "";

    function tick() {
      i += 1;
      el.textContent = full.slice(0, i);
      if (i < full.length) window.setTimeout(tick, 22);
      else track("hero_typing_complete");
    }

    window.setTimeout(tick, 240);
  }

  function wireMediaSkeletons() {
    var imgs = document.querySelectorAll(".media__img");
    if (!imgs.length) return;
    function mark(img) {
      var wrapper = img.closest(".media");
      if (!wrapper) return;
      wrapper.classList.add("is-loaded");
    }
    for (var i = 0; i < imgs.length; i += 1) {
      var img = imgs[i];
      if (img.complete) {
        mark(img);
      } else {
        img.addEventListener("load", function (e) {
          mark(e.target);
        });
        img.addEventListener("error", function (e) {
          mark(e.target);
        });
      }
    }
  }

  function getCartCountEl() {
    return document.querySelector("[data-cart-count]");
  }

  function readCart() {
    try {
      var raw = window.localStorage.getItem("rlw_cart_v1");
      if (!raw) return [];
      var parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  }

  function writeCart(items) {
    try {
      window.localStorage.setItem("rlw_cart_v1", JSON.stringify(items));
    } catch (e) {
      // ignore
    }
  }

  function computeCartCount(items) {
    var total = 0;
    for (var i = 0; i < items.length; i += 1) total += items[i].qty || 0;
    return total;
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

  function setCartFromItems(items) {
    writeCart(items);
    setCartCount(computeCartCount(items));
  }

  function addToCart(name, qty) {
    var items = readCart();
    var found = false;
    for (var i = 0; i < items.length; i += 1) {
      if (items[i].name === name) {
        items[i].qty += qty;
        found = true;
        break;
      }
    }
    if (!found) items.push({ name: name, qty: qty });
    setCartFromItems(items);
  }

  function wireAddToCartPlaceholders() {
    var buttons = document.querySelectorAll("[data-add-to-cart]");
    if (!buttons.length) return;

    for (var i = 0; i < buttons.length; i += 1) {
      buttons[i].addEventListener("click", function () {
        var wrap = this.closest(".product") || this.closest("[data-product-id]");
        var name =
          (wrap && wrap.getAttribute("data-product-name")) ||
          (wrap && wrap.querySelector(".product__title") && wrap.querySelector(".product__title").textContent) ||
          "Product";
        var qty = 1;
        addToCart(name, qty);
        track("add_to_cart", { name: name, qty: qty });
        window.alert("Added to cart (placeholder). Shopify integration will replace this behavior.");
      });
    }
  }

  function wireQuiz() {
    var form = document.querySelector("[data-quiz]");
    var result = document.querySelector("[data-quiz-result]");
    if (!form || !result) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(form);
      var goal = String(fd.get("goal") || "");
      var format = String(fd.get("format") || "");
      var rec = format === "refill" ? "Monthly Wellness Refill" : "Resonate Probiotic Water Kit";
      var message =
        "Recommendation: " +
        rec +
        (goal ? " — focused on " + goal + "." : ".") +
        " (Replace with real recommendation logic.)";
      result.textContent = message;
      result.hidden = false;
      track("quiz_complete", { goal: goal, format: format, rec: rec });
    });
  }

  function wireImpact() {
    var households = document.querySelector("[data-impact-households]");
    var rate = document.querySelector("[data-impact-rate]");
    var bottlesOut = document.querySelector("[data-bottles-saved]");
    var co2Out = document.querySelector("[data-co2-saved]");
    var treesOut = document.querySelector("[data-trees-equiv]");
    if (!households || !rate || !bottlesOut || !co2Out || !treesOut) return;

    function compute() {
      var h = Math.max(1, Number(households.value || 1));
      var r = Math.max(1, Number(rate.value || 1));
      var bottles = Math.round(h * r * 12); // annualized
      // placeholder conversions:
      var co2 = (bottles * 0.00026).toFixed(1);
      var trees = Math.max(1, Math.round(bottles / 84));
      bottlesOut.textContent = String(bottles).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      co2Out.textContent = String(co2);
      treesOut.textContent = String(trees);
    }

    households.addEventListener("input", compute);
    rate.addEventListener("input", compute);
    compute();
  }

  function wireLeadCapture() {
    if (!FLAGS.leadPopup) return;
    var modal = document.querySelector("[data-lead-modal]");
    if (!modal) return;

    var closeEls = modal.querySelectorAll("[data-lead-close]");
    var form = modal.querySelector("[data-lead-form]");

    function seen() {
      try {
        return window.localStorage.getItem("rlw_lead_dismissed") === "1";
      } catch (e) {
        return false;
      }
    }
    function markSeen() {
      try {
        window.localStorage.setItem("rlw_lead_dismissed", "1");
      } catch (e) {}
    }

    function open() {
      if (seen()) return;
      modal.hidden = false;
      track("lead_modal_open");
    }
    function close() {
      modal.hidden = true;
      markSeen();
      track("lead_modal_close");
    }

    for (var i = 0; i < closeEls.length; i += 1) closeEls[i].addEventListener("click", close);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !modal.hidden) close();
    });

    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        close();
        window.alert("Thanks! Your discount code will be delivered (placeholder).");
        track("lead_submit");
      });
    }

    if (!seen()) window.setTimeout(open, 15000);

    if (FLAGS.exitIntent && !prefersReducedMotion()) {
      document.addEventListener("mouseout", function (e) {
        if (seen() || !e) return;
        if (e.clientY <= 0) open();
      });
    }
  }

  function wireFooterSignup() {
    var form = document.querySelector("[data-footer-signup]");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      window.alert("Thanks! Newsletter signup is a placeholder.");
      track("newsletter_signup");
    });
  }

  function wirePageTransitions() {
    if (!FLAGS.pageTransition || prefersReducedMotion()) return;
    var links = document.querySelectorAll("a[href$='.html']");
    if (!links.length) return;
    for (var i = 0; i < links.length; i += 1) {
      links[i].addEventListener("click", function (e) {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        var href = this.getAttribute("href");
        if (!href) return;
        e.preventDefault();
        document.body.classList.remove("is-loaded");
        window.setTimeout(function () {
          window.location.href = href;
        }, 140);
      });
    }
  }

  function wireServiceWorker() {
    if (!("serviceWorker" in navigator)) return;
    // GitHub Pages is HTTPS, so this should register cleanly in production.
    navigator.serviceWorker.register("./sw.js").catch(function () {
      // ignore
    });
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
    document.body.classList.add("is-loaded");
    setYear();
    wireMobileNav();
    wireHeaderShrink();
    wireActiveNav();
    wireScrollTop();
    wireReveal();
    wireHeroParallax();
    wireTyping();
    wireMediaSkeletons();
    wireAddToCartPlaceholders();
    wireQuiz();
    wireImpact();
    wireLeadCapture();
    wireFooterSignup();
    wirePageTransitions();
    wireServiceWorker();
    wirePlaceholderForm();
  } catch (err) {
    // Fail safe without breaking page.
    // eslint-disable-next-line no-console
    console.error(err);
  }
})();
