/* ==========================================================================
   BJO FURFACE — Vanilla JavaScript (Single Source of Truth & Interactions)
   ========================================================================== */

(function () {
  "use strict";

  /* GANTI: nomor WA resmi dari admin (format internasional tanpa +) */
  const WHATSAPP_NUMBER = "6280000000000";
  const SHOPEE_URL = "https://shopee.co.id/bjofurface";

  /* HARGA SEMENTARA DARI KKI, KONFIRMASI ADMIN */
  const PRODUCTS = [
    {
      id: "pemba-abstrack",
      name: "Pemba Abstrack",
      category: "Tas Kayu",
      filterGroup: "Tas Kayu",
      price: 2399000,
      priceFormatted: "Rp2.399.000",
      image: "assets/img/pemba-abstrack.jpg",
      alt: "Tas kayu Pemba Abstrack karya Bjo Furface berbahan limbah kayu jati dengan motif abstrak alami",
      hoverImage: null,
      hoverAlt: null,
      material: null,
      dimensions: null,
      featured: true,
      badge: "UNGGULAN"
    },
    {
      id: "lucia-island-new-natural",
      name: "Lucia Island New Natural",
      category: "Tas Kayu",
      filterGroup: "Tas Kayu",
      price: 2399000,
      priceFormatted: "Rp2.399.000",
      image: "assets/img/lucia-island-new-natural.jpg",
      alt: "Tas kayu Lucia Island New Natural karya Bjo Furface dengan tampilan serat alami kayu jati",
      hoverImage: null,
      hoverAlt: null,
      material: null,
      dimensions: null,
      featured: true,
      badge: "UNGGULAN"
    },
    {
      id: "telenan-island",
      name: "Telenan Island",
      category: "Peralatan Dapur",
      filterGroup: "Peralatan Dapur",
      price: 299000,
      priceFormatted: "Rp299.000",
      image: "assets/img/telenan-island.jpg",
      alt: "Telenan Island Bjo Furface berbahan kayu jati dan resin untuk peralatan dapur",
      hoverImage: null,
      hoverAlt: null,
      material: null,
      dimensions: null,
      featured: false,
      badge: null
    },
    {
      id: "penampan-island",
      name: "Penampan Island",
      category: "Peralatan Dapur",
      filterGroup: "Peralatan Dapur",
      price: 599000,
      priceFormatted: "Rp599.000",
      image: "assets/img/penampan-island-1.jpg",
      alt: "Penampan Island Bjo Furface berbahan limbah kayu jati dan resin dengan motif kepulauan",
      hoverImage: "assets/img/penampan-island-closeup.jpg",
      hoverAlt: "Close-up detail tekstur resin dan serat kayu jati pada Penampan Island",
      material: "Limbah kayu jati dan resin",
      dimensions: "S 32,5 x 20 x 5,5 cm / M 37 x 23 x 5,5 cm / L 48,5 x 26 x 5,5 cm",
      featured: false,
      badge: null
    },
    {
      id: "natural-island-wall-clock",
      name: "Natural Island Wall Clock",
      category: "Jam Dinding",
      filterGroup: "Jam & Jam Dinding",
      price: 499000,
      priceFormatted: "Rp499.000",
      image: "assets/img/natural-island-wall-clock.jpg",
      alt: "Natural Island Wall Clock jam dinding kayu jati dan resin karya Bjo Furface",
      hoverImage: null,
      hoverAlt: null,
      material: null,
      dimensions: null,
      featured: false,
      badge: null
    },
    {
      id: "wooden-watch-gold",
      name: "Wooden Watch (Gold)",
      category: "Jam Tangan",
      filterGroup: "Jam & Jam Dinding",
      price: 999000,
      priceFormatted: "Rp999.000",
      image: "assets/img/wooden-watch-gold.jpg",
      alt: "Jam tangan kayu Wooden Watch varian Gold berbahan limbah kayu jati dan resin",
      hoverImage: null,
      hoverAlt: null,
      material: "Limbah kayu jati dan resin",
      dimensions: null,
      featured: false,
      badge: null
    },
    {
      id: "wooden-watch-silver",
      name: "Wooden Watch (Silver)",
      category: "Jam Tangan",
      filterGroup: "Jam & Jam Dinding",
      price: 999000,
      priceFormatted: "Rp999.000",
      image: "assets/img/wooden-watch-silver-1.jpg",
      alt: "Jam tangan kayu Wooden Watch varian Silver tampak depan berbahan limbah kayu jati dan resin",
      hoverImage: "assets/img/wooden-watch-silver-2.jpg",
      hoverAlt: "Jam tangan kayu Wooden Watch varian Silver sudut kedua menampilkan detail strap kayu",
      material: "Limbah kayu jati dan resin",
      dimensions: null,
      featured: false,
      badge: null
    }
  ];

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function buildWhatsAppProductUrl(product) {
    const text = `Halo Bjo Furface, saya ingin bertanya mengenai produk ${product.name} (${product.priceFormatted}).`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  }

  function createProductCardElement(product, options = {}) {
    const { showExtendedSpecs = false } = options;
    const article = document.createElement("article");
    article.className = "product-card" + (product.hoverImage ? " has-hover-img" : "");
    article.dataset.featured = String(Boolean(product.featured));

    const media = document.createElement("div");
    media.className = "product-media";

    if (product.badge) {
      const badge = document.createElement("span");
      badge.className = "product-badge";
      badge.textContent = product.badge;
      media.appendChild(badge);
    }

    const primaryImg = document.createElement("img");
    primaryImg.src = product.image;
    primaryImg.alt = product.alt;
    primaryImg.className = "product-img product-img-primary";
    primaryImg.loading = "lazy";
    media.appendChild(primaryImg);

    if (product.hoverImage) {
      const hoverImg = document.createElement("img");
      hoverImg.src = product.hoverImage;
      hoverImg.alt = product.hoverAlt || product.alt;
      hoverImg.className = "product-img product-img-hover";
      hoverImg.loading = "lazy";
      media.appendChild(hoverImg);
    }

    const actions = document.createElement("div");
    actions.className = "product-hover-actions";

    const waLink = document.createElement("a");
    waLink.href = buildWhatsAppProductUrl(product);
    waLink.target = "_blank";
    waLink.rel = "noopener noreferrer";
    waLink.className = "pill-action pill-action-wa";
    waLink.textContent = "Tanya via WhatsApp";
    actions.appendChild(waLink);

    const shopeeLink = document.createElement("a");
    shopeeLink.href = SHOPEE_URL;
    shopeeLink.target = "_blank";
    shopeeLink.rel = "noopener noreferrer";
    shopeeLink.className = "pill-action pill-action-shopee";
    shopeeLink.textContent = "Lihat di Shopee";
    actions.appendChild(shopeeLink);

    media.appendChild(actions);
    article.appendChild(media);

    const info = document.createElement("div");
    info.className = "product-info";

    const cat = document.createElement("span");
    cat.className = "product-category-label";
    cat.textContent = product.category;
    info.appendChild(cat);

    const title = document.createElement("h3");
    title.className = "product-title";
    title.textContent = product.name;
    info.appendChild(title);

    if (showExtendedSpecs && product.material) {
      const mat = document.createElement("p");
      mat.className = "product-spec";
      mat.textContent = `Bahan: ${product.material}`;
      info.appendChild(mat);
    }

    if (showExtendedSpecs && product.dimensions) {
      const dim = document.createElement("p");
      dim.className = "product-spec";
      dim.textContent = `Ukuran: ${product.dimensions}`;
      info.appendChild(dim);
    }

    const price = document.createElement("p");
    price.className = "product-price";
    price.textContent = product.priceFormatted;
    info.appendChild(price);

    article.appendChild(info);
    return article;
  }

  /* 1. Announcement Bar Rotation */
  function initAnnouncementBar() {
    const items = document.querySelectorAll("[data-announcement]");
    if (items.length <= 1 || prefersReducedMotion) return;

    let current = 0;
    setInterval(() => {
      items[current].classList.remove("is-active");
      current = (current + 1) % items.length;
      items[current].classList.add("is-active");
    }, 4000);
  }

  /* 2. Header Scroll Behavior & Mobile Drawer */
  function initHeaderAndDrawer() {
    const header = document.getElementById("site-header");
    const backToTop = document.getElementById("back-to-top");

    function handleScroll() {
      const y = window.scrollY;
      if (header && header.classList.contains("is-transparent")) {
        if (y > 40) {
          header.classList.add("is-scrolled");
        } else {
          header.classList.remove("is-scrolled");
        }
      }
      if (backToTop) {
        if (y > 420) {
          backToTop.classList.add("is-visible");
        } else {
          backToTop.classList.remove("is-visible");
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    if (backToTop) {
      backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
      });
    }

    const toggle = document.getElementById("nav-toggle");
    const drawer = document.getElementById("mobile-drawer");
    const backdrop = document.getElementById("drawer-backdrop");
    const closeBtn = document.getElementById("drawer-close");

    if (!toggle || !drawer || !backdrop) return;

    function openDrawer() {
      toggle.setAttribute("aria-expanded", "true");
      drawer.setAttribute("aria-hidden", "false");
      drawer.classList.add("is-open");
      backdrop.hidden = false;
      requestAnimationFrame(() => backdrop.classList.add("is-open"));
      if (closeBtn) closeBtn.focus();
    }

    function closeDrawer() {
      toggle.setAttribute("aria-expanded", "false");
      drawer.setAttribute("aria-hidden", "true");
      drawer.classList.remove("is-open");
      backdrop.classList.remove("is-open");
      setTimeout(() => {
        backdrop.hidden = true;
      }, 300);
      toggle.focus();
    }

    toggle.addEventListener("click", openDrawer);
    if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
    backdrop.addEventListener("click", closeDrawer);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && drawer.classList.contains("is-open")) {
        closeDrawer();
      }
    });
  }

  /* 3. Hero Carousel (Beranda) */
  function initHeroCarousel() {
    const slides = document.querySelectorAll("[data-hero-slide]");
    const dots = document.querySelectorAll("[data-hero-dot]");
    const prevBtn = document.getElementById("hero-prev");
    const nextBtn = document.getElementById("hero-next");

    if (slides.length === 0) return;

    let currentIndex = 0;
    let timer = null;

    function goToSlide(index) {
      const nextIndex = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        const active = i === nextIndex;
        slide.classList.toggle("is-active", active);
        slide.setAttribute("aria-hidden", String(!active));
      });
      dots.forEach((dot, i) => {
        const active = i === nextIndex;
        dot.classList.toggle("is-active", active);
        dot.setAttribute("aria-selected", String(active));
      });
      currentIndex = nextIndex;
    }

    function startAutoplay() {
      if (prefersReducedMotion) return;
      stopAutoplay();
      timer = setInterval(() => goToSlide(currentIndex + 1), 5500);
    }

    function stopAutoplay() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        goToSlide(currentIndex - 1);
        startAutoplay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        goToSlide(currentIndex + 1);
        startAutoplay();
      });
    }

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const idx = Number(dot.getAttribute("data-hero-dot"));
        goToSlide(idx);
        startAutoplay();
      });
    });

    const heroSection = document.querySelector(".hero-section");
    if (heroSection) {
      heroSection.addEventListener("mouseenter", stopAutoplay);
      heroSection.addEventListener("mouseleave", startAutoplay);
      heroSection.addEventListener("focusin", stopAutoplay);
      heroSection.addEventListener("focusout", startAutoplay);
    }

    startAutoplay();
  }

  /* 4. Beranda Featured Carousel + Tabs */
  function initFeaturedSection() {
    const track = document.getElementById("featured-track");
    if (!track) return;

    const tabs = document.querySelectorAll("[data-featured-tab]");
    const prevBtn = document.getElementById("featured-prev");
    const nextBtn = document.getElementById("featured-next");

    const orderedProducts = [
      ...PRODUCTS.filter((p) => p.featured),
      ...PRODUCTS.filter((p) => !p.featured)
    ];

    track.innerHTML = "";
    orderedProducts.forEach((product) => {
      track.appendChild(createProductCardElement(product, { showExtendedSpecs: false }));
    });

    let snapRestoreTimer = null;
    let isProgrammaticScroll = false;
    let programmaticTimer = null;

    function setActiveTabUI(mode) {
      tabs.forEach((tab) => {
        const isMatch = tab.getAttribute("data-featured-tab") === mode;
        tab.classList.toggle("is-active", isMatch);
        tab.setAttribute("aria-selected", String(isMatch));
      });
    }

    function scrollTrackTo(targetLeft) {
      if (prefersReducedMotion) {
        track.scrollLeft = targetLeft;
        return;
      }
      isProgrammaticScroll = true;
      track.style.scrollSnapType = "none";
      track.scrollTo({ left: targetLeft, behavior: "smooth" });

      clearTimeout(snapRestoreTimer);
      snapRestoreTimer = setTimeout(() => {
        track.style.scrollSnapType = "";
      }, 520);

      clearTimeout(programmaticTimer);
      programmaticTimer = setTimeout(() => {
        isProgrammaticScroll = false;
      }, 550);
    }

    function getNonFeaturedOffset() {
      const firstCard = track.firstElementChild;
      const firstNonFeatured = track.querySelector('[data-featured="false"]');
      if (!firstCard || !firstNonFeatured) return 0;
      return Math.max(0, firstNonFeatured.offsetLeft - firstCard.offsetLeft);
    }

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const mode = tab.getAttribute("data-featured-tab");
        setActiveTabUI(mode);

        if (mode === "unggulan") {
          scrollTrackTo(0);
        } else {
          scrollTrackTo(getNonFeaturedOffset());
        }
      });
    });

    track.addEventListener("scroll", () => {
      if (isProgrammaticScroll) return;
      const threshold = getNonFeaturedOffset() * 0.6;
      if (threshold > 0 && track.scrollLeft >= threshold) {
        setActiveTabUI("semua");
      } else {
        setActiveTabUI("unggulan");
      }
    }, { passive: true });

    function getStepWidth() {
      const firstCard = track.firstElementChild;
      return firstCard ? firstCard.getBoundingClientRect().width + 28 : 340;
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        track.scrollBy({ left: -getStepWidth(), behavior: prefersReducedMotion ? "auto" : "smooth" });
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        track.scrollBy({ left: getStepWidth(), behavior: prefersReducedMotion ? "auto" : "smooth" });
      });
    }

    setActiveTabUI("unggulan");
  }

  /* 5. Produk Page Filter, Sort & Editorial Map Tile */
  function initProductCatalogPage() {
    const grid = document.getElementById("product-grid");
    if (!grid) return;

    const filterBtns = document.querySelectorAll("[data-category-filter]");
    const sortSelect = document.getElementById("sort-select");
    const statusEl = document.getElementById("catalog-status");

    const params = new URLSearchParams(window.location.search);
    const initialCat = params.get("kategori");
    const validCategories = ["Semua", "Tas Kayu", "Jam & Jam Dinding", "Peralatan Dapur"];

    let activeCategory = validCategories.includes(initialCat) ? initialCat : "Semua";
    let activeSort = "default";

    function syncFilterButtons() {
      filterBtns.forEach((btn) => {
        const match = btn.getAttribute("data-category-filter") === activeCategory;
        btn.classList.toggle("is-active", match);
        btn.setAttribute("aria-pressed", String(match));
      });
    }

    function createEditorialTile() {
      const tile = document.createElement("aside");
      tile.className = "editorial-grid-tile";
      tile.setAttribute("aria-label", "Sorotan eksplorasi karya kayu jati dan resin");

      const media = document.createElement("div");
      media.className = "editorial-tile-media";
      const img = document.createElement("img");
      img.src = "assets/img/105609566.jpg";
      img.alt = "Karya peta kepulauan Indonesia dari perpaduan limbah kayu jati dan resin buatan Bjo Furface";
      img.loading = "lazy";
      media.appendChild(img);

      const body = document.createElement("div");
      body.className = "editorial-tile-body";

      const eyebrow = document.createElement("span");
      eyebrow.className = "eyebrow-accent";
      eyebrow.textContent = "Eksplorasi Kriya";

      const heading = document.createElement("h2");
      heading.className = "editorial-tile-title";
      heading.textContent = "One Product For One Person";

      const desc = document.createElement("p");
      desc.className = "editorial-tile-desc";
      desc.textContent = "Setiap alur serat kayu jati dan resin menghasilkan komposisi motif alami yang tidak identik satu sama lain.";

      const link = document.createElement("a");
      link.href = "galeri.html";
      link.className = "text-link";
      link.innerHTML = "Lihat eksplorasi di galeri &#8594;";

      body.appendChild(eyebrow);
      body.appendChild(heading);
      body.appendChild(desc);
      body.appendChild(link);

      tile.appendChild(media);
      tile.appendChild(body);
      return tile;
    }

    function renderCatalog() {
      let filtered = activeCategory === "Semua"
        ? [...PRODUCTS]
        : PRODUCTS.filter((p) => p.filterGroup === activeCategory);

      if (activeSort === "price-asc") {
        filtered.sort((a, b) => a.price - b.price);
      } else if (activeSort === "price-desc") {
        filtered.sort((a, b) => b.price - a.price);
      } else if (activeSort === "name-asc") {
        filtered.sort((a, b) => a.name.localeCompare(b.name, "id"));
      }

      grid.innerHTML = "";
      filtered.forEach((product) => {
        grid.appendChild(createProductCardElement(product, { showExtendedSpecs: true }));
      });

      if (filtered.length > 0) {
        grid.appendChild(createEditorialTile());
      }

      if (statusEl) {
        statusEl.textContent = `Menampilkan ${filtered.length} produk (${activeCategory})`;
      }
    }

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        activeCategory = btn.getAttribute("data-category-filter");
        syncFilterButtons();
        renderCatalog();
      });
    });

    if (sortSelect) {
      sortSelect.addEventListener("change", () => {
        activeSort = sortSelect.value;
        renderCatalog();
      });
    }

    syncFilterButtons();
    renderCatalog();
  }

  /* 6. Galeri Filter & Keyboard-Accessible Lightbox */
  function initGalleryAndLightbox() {
    const galleryGrid = document.getElementById("gallery-grid");
    const lightbox = document.getElementById("lightbox");
    if (!galleryGrid || !lightbox) return;

    const filterBtns = document.querySelectorAll("[data-gallery-filter]");
    const items = Array.from(galleryGrid.querySelectorAll(".gallery-item"));
    const triggers = Array.from(galleryGrid.querySelectorAll(".gallery-trigger"));

    const lbImg = document.getElementById("lightbox-img");
    const lbCaption = document.getElementById("lightbox-caption");
    const lbClose = document.getElementById("lightbox-close");
    const lbPrev = document.getElementById("lightbox-prev");
    const lbNext = document.getElementById("lightbox-next");
    const lbBackdrop = lightbox.querySelector("[data-lightbox-close]");

    let activeIndex = 0;
    let lastFocusedTrigger = null;

    function getVisibleTriggers() {
      return triggers.filter((btn) => !btn.closest(".gallery-item").classList.contains("is-hidden"));
    }

    function updateLightbox(visibleList, index) {
      const targetBtn = visibleList[index];
      if (!targetBtn) return;
      const img = targetBtn.querySelector("img");
      const caption = targetBtn.closest(".gallery-item").querySelector(".gallery-caption");

      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lbCaption.textContent = caption ? caption.textContent : img.alt;
      activeIndex = index;
    }

    function openLightbox(triggerBtn) {
      const visibleList = getVisibleTriggers();
      const idx = visibleList.indexOf(triggerBtn);
      if (idx === -1) return;

      lastFocusedTrigger = triggerBtn;
      updateLightbox(visibleList, idx);
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
      lbClose.focus();
    }

    function closeLightbox() {
      lightbox.hidden = true;
      document.body.style.overflow = "";
      if (lastFocusedTrigger) {
        lastFocusedTrigger.focus();
      }
    }

    function stepLightbox(delta) {
      const visibleList = getVisibleTriggers();
      if (visibleList.length === 0) return;
      const nextIdx = (activeIndex + delta + visibleList.length) % visibleList.length;
      updateLightbox(visibleList, nextIdx);
    }

    triggers.forEach((btn) => {
      btn.addEventListener("click", () => openLightbox(btn));
    });

    lbClose.addEventListener("click", closeLightbox);
    if (lbBackdrop) lbBackdrop.addEventListener("click", closeLightbox);
    lbPrev.addEventListener("click", () => stepLightbox(-1));
    lbNext.addEventListener("click", () => stepLightbox(1));

    document.addEventListener("keydown", (e) => {
      if (lightbox.hidden) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") stepLightbox(-1);
      if (e.key === "ArrowRight") stepLightbox(1);
    });

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const selected = btn.getAttribute("data-gallery-filter");
        filterBtns.forEach((b) => {
          const isMatch = b === btn;
          b.classList.toggle("is-active", isMatch);
          b.setAttribute("aria-pressed", String(isMatch));
        });

        items.forEach((item) => {
          const cat = item.getAttribute("data-gallery-category");
          const show = selected === "Semua" || cat === selected;
          item.classList.toggle("is-hidden", !show);
        });
      });
    });
  }

  /* 7. Kontak Form -> Pre-filled WhatsApp */
  function initContactForm() {
    const form = document.getElementById("whatsapp-contact-form");
    if (!form) return;

    const nameInput = document.getElementById("sender-name");
    const msgInput = document.getElementById("sender-message");
    const errorEl = document.getElementById("form-error");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = nameInput.value.trim();
      const message = msgInput.value.trim();

      if (!name || !message) {
        errorEl.textContent = "Mohon isi nama dan pesan Anda terlebih dahulu sebelum mengirim ke WhatsApp.";
        errorEl.hidden = false;
        if (!name) nameInput.focus();
        else msgInput.focus();
        return;
      }

      errorEl.hidden = true;
      const fullMessage = `Halo Bjo Furface, perkenalkan saya ${name}.\n\n${message}`;
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`;
      window.open(waUrl, "_blank", "noopener,noreferrer");
    });
  }

  /* 8. IntersectionObserver Scroll Reveal (Once, Subtle) */
  function initScrollReveal() {
    const elements = document.querySelectorAll(".reveal");
    if (elements.length === 0) return;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -24px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
  }

  document.addEventListener("DOMContentLoaded", () => {
    initAnnouncementBar();
    initHeaderAndDrawer();
    initHeroCarousel();
    initFeaturedSection();
    initProductCatalogPage();
    initGalleryAndLightbox();
    initContactForm();
    initScrollReveal();
  });
})();