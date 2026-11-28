/* ==========================================================================
   BJO FURFACE — Vanilla JavaScript (Single Source of Truth & Interactions)
   ========================================================================== */

(function () {
  "use strict";

  const WHATSAPP_NUMBER = "6287739113037";
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
      hoverImage: "assets/img/pemba-abstrack-2.jpeg",
      hoverAlt: "Detail motif resin dan serat kayu pada tas Pemba Abstrack",
      gallery: [
        { src: "assets/img/pemba-abstrack.jpg", alt: "Tas Pemba Abstrack tampak depan dengan resin ungu dan serat jati" },
        { src: "assets/img/pemba-abstrack-2.jpeg", alt: "Detail resin ungu dan emblem pada tas Pemba Abstrack" },
        { src: "assets/img/pemba-abstrack-3.jpeg", alt: "Detail pegangan kayu pada tas Pemba Abstrack" },
        { src: "assets/img/pemba-abstrack-4.jpeg", alt: "Tampak bagian dalam dan label tas Pemba Abstrack" },
        { src: "assets/img/pemba-abstrack-5.jpeg", alt: "Detail pengunci dan pegangan tas Pemba Abstrack" }
      ],
      description: "Tas kayu yang merayakan keunikan, ketidaksempurnaan yang harmonis, dan kebebasan berekspresi melalui perpaduan kayu jati dan resin.",
      material: "Kayu jati dan resin",
      dimensions: "20 × 10",
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
      hoverImage: "assets/img/lucia-island-new-natural-4.jpeg",
      hoverAlt: "Lucia Island New Natural tampak samping dengan rantai metal",
      gallery: [
        { src: "assets/img/lucia-island-new-natural.jpg", alt: "Tas Lucia Island New Natural tampak depan" },
        { src: "assets/img/lucia-island-new-natural-2.jpeg", alt: "Detail serat kayu pada bagian depan tas Lucia Island" },
        { src: "assets/img/lucia-island-new-natural-3.jpeg", alt: "Detail lapisan bagian dalam tas Lucia Island" },
        { src: "assets/img/lucia-island-new-natural-4.jpeg", alt: "Tas Lucia Island dengan rantai metal tampak utuh" },
        { src: "assets/img/lucia-island-new-natural-5.jpeg", alt: "Tampak samping tas Lucia Island dan label Bjo Furface" }
      ],
      description: "Tas kayu yang memadukan keindahan sederhana dengan keunikan serat alami dan resin. Setiap susunan material membentuk karakter yang berbeda.",
      material: "Kayu dan resin",
      dimensions: "20 × 10",
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
      hoverImage: "assets/img/telenan-island-4.jpeg",
      hoverAlt: "Telenan Island tampak utuh dengan alur resin biru",
      gallery: [
        { src: "assets/img/telenan-island.jpg", alt: "Telenan Island tampak depan dari kayu jati dan resin" },
        { src: "assets/img/telenan-island-2.jpeg", alt: "Detail ujung telenan Island dan alur resin biru" },
        { src: "assets/img/telenan-island-3.jpeg", alt: "Detail pegangan telenan Island" },
        { src: "assets/img/telenan-island-4.jpeg", alt: "Telenan Island tampak utuh dengan pola kayu dan resin" }
      ],
      description: "Perpaduan fungsi dan seni dalam satu peralatan dapur. Garis resin dan serat kayu jati membentuk komposisi yang khas pada setiap karya.",
      material: "Limbah kayu jati dan resin",
      dimensions: "30 × 19",
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
      hoverImage: "assets/img/penampan-island-2.jpg",
      hoverAlt: "Penampan Island dari sudut berbeda dengan detail kayu dan resin",
      gallery: [
        { src: "assets/img/penampan-island-1.jpg", alt: "Penampan Island tampak atas dengan resin biru dan kayu jati" },
        { src: "assets/img/penampan-island-2.jpg", alt: "Penampan Island dari sudut berbeda" },
        { src: "assets/img/penampan-island-3.jpg", alt: "Detail komposisi resin biru pada Penampan Island" },
        { src: "assets/img/penampan-island-4.jpg", alt: "Detail sisi dan konstruksi Penampan Island" },
        { src: "assets/img/penampan-island-5.jpg", alt: "Tampak sisi Penampan Island dengan detail resin" }
      ],
      description: "Penampan saji yang memadukan fungsi dengan komposisi resin dan kayu jati. Tersedia dalam beberapa ukuran untuk kebutuhan penyajian yang berbeda.",
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
      hoverImage: "assets/img/natural-island-wall-clock-3.jpeg",
      hoverAlt: "Detail dial Natural Island Wall Clock dari kayu dan resin",
      gallery: [
        { src: "assets/img/natural-island-wall-clock.jpg", alt: "Natural Island Wall Clock tampak depan" },
        { src: "assets/img/natural-island-wall-clock-2.jpeg", alt: "Jam dinding Bjo Furface tampak penuh" },
        { src: "assets/img/natural-island-wall-clock-3.jpeg", alt: "Detail jarum dan serat kayu pada jam dinding" },
        { src: "assets/img/natural-island-wall-clock-4.jpeg", alt: "Close-up perpaduan resin dan kayu pada dial jam" }
      ],
      description: "Jam dinding fungsional dengan karakter kayu jati dan resin. Bentuk serat, warna resin, dan penanda waktu memberi tiap karya tampilan yang khas.",
      material: "Limbah kayu jati dan resin",
      dimensions: "30 × 30; pilihan diameter 20, 25, dan 30 cm",
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
      hoverImage: "assets/img/wooden-watch-gold-3.jpeg",
      hoverAlt: "Wooden Watch Gold bersama kotak penyimpanannya",
      gallery: [
        { src: "assets/img/wooden-watch-gold.jpg", alt: "Wooden Watch Gold tampak depan" },
        { src: "assets/img/wooden-watch-gold-2.jpeg", alt: "Wooden Watch Gold tampak utuh" },
        { src: "assets/img/wooden-watch-gold-3.jpeg", alt: "Wooden Watch Gold dengan kotak penyimpanan" },
        { src: "assets/img/wooden-watch-gold-4.jpeg", alt: "Detail dial dan strap Wooden Watch Gold" },
        { src: "assets/img/wooden-watch-gold-5.jpeg", alt: "Detail kayu dan pengunci Wooden Watch Gold" }
      ],
      description: "Jam tangan kayu yang membawa karakter serat alami ke dalam aksesori sehari-hari. Aksen warna gold melengkapi perpaduan kayu jati dan resin.",
      material: "Limbah kayu jati dan resin",
      dimensions: "4,2 × 4,2",
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
      gallery: [
        { src: "assets/img/wooden-watch-silver-1.jpg", alt: "Wooden Watch Silver tampak depan" },
        { src: "assets/img/wooden-watch-silver-2.jpg", alt: "Wooden Watch Silver dari sudut berbeda" },
        { src: "assets/img/wooden-watch-silver-3.jpg", alt: "Detail dial Wooden Watch Silver" },
        { src: "assets/img/wooden-watch-silver-4.jpg", alt: "Detail strap kayu Wooden Watch Silver" },
        { src: "assets/img/wooden-watch-silver-5.jpg", alt: "Detail pengunci dan konstruksi Wooden Watch Silver" }
      ],
      description: "Jam tangan kayu dengan resin dan aksen silver. Perpaduan bahan alami dan komponen metal menghadirkan aksesori fungsional dengan karakter khas.",
      material: "Limbah kayu jati dan resin",
      dimensions: "4,2 × 4,2",
      featured: false,
      badge: null
    }
  ];

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function buildWhatsAppProductUrl(product) {
    const text = `Halo Bjo Furface, saya ingin bertanya mengenai produk ${product.name} (${product.priceFormatted}).`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  }

  function createProductCardElement(product) {
    const article = document.createElement("article");
    article.className = "product-card reveal" + (product.hoverImage ? " has-hover-img" : "");
    article.dataset.featured = String(Boolean(product.featured));

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "product-card-trigger";
    trigger.dataset.productDetail = product.id;
    trigger.setAttribute("aria-haspopup", "dialog");
    trigger.setAttribute("aria-label", `Lihat detail ${product.name}`);

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

    trigger.appendChild(media);

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

    const price = document.createElement("p");
    price.className = "product-price";
    price.textContent = product.priceFormatted;
    info.appendChild(price);

    const openCue = document.createElement("span");
    openCue.className = "product-card-cue";
    openCue.textContent = "Lihat detail";
    info.appendChild(openCue);

    trigger.appendChild(info);
    article.appendChild(trigger);
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
    const resinArt = document.createElement("div");
    resinArt.className = "resin-scroll-art";
    resinArt.setAttribute("aria-hidden", "true");
    ["top-right", "bottom-left"].forEach((corner) => {
      const shape = document.createElement("span");
      shape.className = `resin-scroll-art__shape resin-scroll-art__shape--${corner}`;
      resinArt.appendChild(shape);
    });
    document.body.appendChild(resinArt);

    let previousY = window.scrollY;
    let resinFramePending = false;
    let resinTopGlowPlayed = false;
    let resinBottomGlowPlayed = false;

    function updateResinDirection() {
      resinFramePending = false;
      const y = window.scrollY;
      const delta = y - previousY;
      if (Math.abs(delta) < 3) return;
      previousY = y;

      if (y < 12 || prefersReducedMotion) {
        document.body.classList.remove("resin-scroll-down", "resin-scroll-up");
        return;
      }

      document.body.classList.toggle("resin-scroll-down", delta > 0);
      document.body.classList.toggle("resin-scroll-up", delta < 0);

      if (delta > 0 && !resinTopGlowPlayed) {
        document.body.classList.add("resin-glow-top");
        resinTopGlowPlayed = true;
      } else if (delta < 0 && !resinBottomGlowPlayed) {
        document.body.classList.add("resin-glow-bottom");
        resinBottomGlowPlayed = true;
      }
    }

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
      if (!resinFramePending) {
        resinFramePending = true;
        requestAnimationFrame(updateResinDirection);
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
      track.appendChild(createProductCardElement(product));
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
      link.textContent = "Lihat eksplorasi di galeri";

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
        const card = createProductCardElement(product);
        card.classList.add("is-revealed");
        grid.appendChild(card);
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

  /* 6. Product detail dialog shared by home cards and the full catalog. */
  function initProductDetails() {
    const dialog = document.createElement("dialog");
    dialog.className = "product-detail-dialog";
    dialog.id = "product-detail-dialog";
    dialog.setAttribute("aria-labelledby", "product-detail-title");
    dialog.innerHTML = `
      <div class="product-detail-shell">
        <button class="product-detail-close" type="button" data-detail-close aria-label="Tutup detail produk">×</button>
        <section class="product-detail-gallery" aria-label="Foto produk">
          <div class="product-detail-main-image">
            <img id="product-detail-image" src="" alt="">
            <button class="product-detail-arrow product-detail-prev" type="button" data-detail-prev aria-label="Foto sebelumnya">‹</button>
            <button class="product-detail-arrow product-detail-next" type="button" data-detail-next aria-label="Foto berikutnya">›</button>
            <span class="product-detail-photo-count" id="product-detail-photo-count" aria-live="polite"></span>
          </div>
          <div class="product-detail-thumbnails" id="product-detail-thumbnails" aria-label="Pilih foto produk"></div>
        </section>
        <section class="product-detail-content">
          <span class="eyebrow-accent" id="product-detail-category"></span>
          <h2 id="product-detail-title"></h2>
          <p class="product-detail-price" id="product-detail-price"></p>
          <p class="product-detail-description" id="product-detail-description"></p>
          <dl class="product-detail-specs">
            <div><dt>Bahan</dt><dd id="product-detail-material"></dd></div>
            <div><dt>Ukuran</dt><dd id="product-detail-dimensions"></dd></div>
          </dl>
          <p class="product-detail-note">Setiap karya memiliki alur serat dan komposisi resin yang khas. Konfirmasi harga dan ketersediaan melalui WhatsApp.</p>
          <div class="product-detail-actions">
            <a class="btn btn-dark" id="product-detail-whatsapp" href="#" target="_blank" rel="noopener noreferrer">Tanya via WhatsApp</a>
            <a class="btn btn-detail-secondary" id="product-detail-shopee" href="#" target="_blank" rel="noopener noreferrer">Lihat di Shopee</a>
          </div>
        </section>
      </div>`;
    document.body.appendChild(dialog);

    const mainImage = dialog.querySelector("#product-detail-image");
    const photoCount = dialog.querySelector("#product-detail-photo-count");
    const thumbnails = dialog.querySelector("#product-detail-thumbnails");
    let activeProduct = null;
    let activePhotoIndex = 0;
    let lastTrigger = null;

    function showPhoto(index) {
      if (!activeProduct || !activeProduct.gallery?.length) return;
      const photos = activeProduct.gallery;
      activePhotoIndex = (index + photos.length) % photos.length;
      const photo = photos[activePhotoIndex];
      mainImage.src = photo.src;
      mainImage.alt = photo.alt;
      photoCount.textContent = `${activePhotoIndex + 1} / ${photos.length}`;
      thumbnails.querySelectorAll("button").forEach((button, photoIndex) => {
        const selected = photoIndex === activePhotoIndex;
        button.classList.toggle("is-active", selected);
        button.setAttribute("aria-pressed", String(selected));
      });
    }

    function openProduct(product, trigger) {
      activeProduct = product;
      activePhotoIndex = 0;
      lastTrigger = trigger;
      dialog.querySelector("#product-detail-category").textContent = product.category;
      dialog.querySelector("#product-detail-title").textContent = product.name;
      dialog.querySelector("#product-detail-price").textContent = product.priceFormatted;
      dialog.querySelector("#product-detail-description").textContent = product.description;
      dialog.querySelector("#product-detail-material").textContent = product.material;
      dialog.querySelector("#product-detail-dimensions").textContent = product.dimensions;
      dialog.querySelector("#product-detail-whatsapp").href = buildWhatsAppProductUrl(product);
      dialog.querySelector("#product-detail-shopee").href = SHOPEE_URL;

      thumbnails.replaceChildren();
      product.gallery.forEach((photo, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "product-detail-thumb";
        button.setAttribute("aria-label", `Tampilkan foto ${index + 1} dari ${product.gallery.length}`);
        button.setAttribute("aria-pressed", String(index === 0));
        const image = document.createElement("img");
        image.src = photo.src;
        image.alt = "";
        image.loading = "lazy";
        button.appendChild(image);
        button.addEventListener("click", () => showPhoto(index));
        thumbnails.appendChild(button);
      });

      showPhoto(0);
      dialog.showModal();
    }

    document.addEventListener("click", (event) => {
      const trigger = event.target.closest("[data-product-detail]");
      if (!trigger) return;
      const product = PRODUCTS.find((item) => item.id === trigger.dataset.productDetail);
      if (product) openProduct(product, trigger);
    });

    dialog.querySelector("[data-detail-close]").addEventListener("click", () => dialog.close());
    dialog.querySelector("[data-detail-prev]").addEventListener("click", () => showPhoto(activePhotoIndex - 1));
    dialog.querySelector("[data-detail-next]").addEventListener("click", () => showPhoto(activePhotoIndex + 1));
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener("close", () => {
      if (lastTrigger?.isConnected) lastTrigger.focus();
      activeProduct = null;
    });
  }

  /* 7. Galeri Filter & Keyboard-Accessible Lightbox */
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

      if (e.key === "Tab") {
        const controls = [lbClose, lbPrev, lbNext].filter(Boolean);
        const firstControl = controls[0];
        const lastControl = controls[controls.length - 1];

        if (e.shiftKey && document.activeElement === firstControl) {
          e.preventDefault();
          lastControl.focus();
        } else if (!e.shiftKey && document.activeElement === lastControl) {
          e.preventDefault();
          firstControl.focus();
        } else if (!lightbox.contains(document.activeElement)) {
          e.preventDefault();
          firstControl.focus();
        }
      }
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

    const revealGroups = new Map();
    elements.forEach((element) => {
      const group = element.parentElement;
      const groupItems = revealGroups.get(group) || [];
      groupItems.push(element);
      revealGroups.set(group, groupItems);
    });

    revealGroups.forEach((groupItems) => {
      groupItems.forEach((element, index) => {
        element.style.setProperty("--reveal-delay", `${Math.min(index * 75, 360)}ms`);
      });
    });

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
    initProductDetails();
    initGalleryAndLightbox();
    initContactForm();
    initScrollReveal();
  });
})();
