// js/heroCarousel.js
// W3Schools-inspireret hero slideshow: plusSlides, currentSlide, showSlides
// Indeholder: ARRAY, LET, CONSTRAIN (clamp) og LOOP (wrap-around)
// + lille fade som passer til dit design.



function initHeroCarousel() {
  console.log("Hero ready");

  const root = document.querySelector("[data-carousel]");
  const imgEl = root?.querySelector("[data-carousel-image]");
  const titleEl = root?.querySelector("[data-carousel-title]");
  const ctaEl = root?.querySelector("[data-carousel-cta]");
  const dotsWrap = root?.querySelector("[data-carousel-dots]");
  const prevBtn = root?.querySelector("[data-carousel-prev]");
  const nextBtn = root?.querySelector("[data-carousel-next]");

  if (!root || !imgEl || !titleEl || !ctaEl || !dotsWrap) return;
  

  // ARRAY (pensum) — 5 slides passer til din nuværende 5-dot hero
  const slides = [
    {
      img: imgEl.getAttribute("src"),
      alt: imgEl.getAttribute("alt") || "Sportstøj på bøjler",
      title: "DESIGN OG KØB DIT\nEGET HOLDSÆT",
      ctaText: "START HER",
      ctaHref: "#"
    },
    {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=80",
      alt: "Træningstøj",
      title: "NYT TØJ\nTIL TRÆNING",
      ctaText: "SE TØJ",
      ctaHref: "#"
    },
    {
      img: "https://images.unsplash.com/photo-1526401485004-2aa7d7c4b76a?auto=format&fit=crop&w=1400&q=80",
      alt: "Drikkedunk",
      title: "TILBEHØR\nTIL HVERDAGEN",
      ctaText: "SHOP NU",
      ctaHref: "#"
    },
    {
      img: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=1400&q=80",
      alt: "Bold",
      title: "BOLDE\nOG UDSTYR",
      ctaText: "SE UDSTYR",
      ctaHref: "#"
    },
    {
      img: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1400&q=80",
      alt: "Sportstøj",
      title: "KLUBSHOPS\nTIL JERES HOLD",
      ctaText: "FIND KLUB",
      ctaHref: "#"
    }
  ];

  // LET (pensum) — w3schools er typisk 1-baseret
  let slideIndex = 1;

  // CONSTRAIN (pensum)
  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  // “Lækker” fade på billedet (passer til din hero__img styling)
  function fadeSwap(apply) {
    imgEl.style.transition = "opacity 220ms ease";
    imgEl.style.opacity = apply ? "0.15" : "1";
  }

  // Byg dots ud fra slides-array (så HTML altid matcher JS)
  function buildDots() {
    dotsWrap.innerHTML = "";
    for (let i = 1; i <= slides.length; i++) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "dot";
      b.setAttribute("aria-label", `Slide ${i}`);
      b.dataset.slide = String(i); // 1-baseret
      dotsWrap.appendChild(b);
    }
  }

  function setActiveDot() {
    const dots = dotsWrap.querySelectorAll(".dot");
    for (let i = 0; i < dots.length; i++) {
      const dotNumber = i + 1;
      dots[i].classList.toggle("is-active", dotNumber === slideIndex);
      dots[i].setAttribute("aria-current", dotNumber === slideIndex ? "true" : "false");
    }
  }

  // W3Schools API:
  function plusSlides(n) {
    showSlides(slideIndex + n);
  }

  function currentSlide(n) {
    showSlides(n);
  }

  function showSlides(n) {
    // Constrain (didaktisk): hold værdier “rimelige”
    const safeN = clamp(n, -9999, 9999);

    // LOOP / wrap-around
    if (safeN > slides.length) slideIndex = 1;
    else if (safeN < 1) slideIndex = slides.length;
    else slideIndex = safeN;

    const s = slides[slideIndex - 1];

    fadeSwap(true);
    window.setTimeout(() => {
      imgEl.src = s.img;
      imgEl.alt = s.alt;

      titleEl.innerHTML = s.title.replaceAll("\n", "<br />");

      // Behold din pil span (.hero__ctaArrow)
      const arrow = ctaEl.querySelector(".hero__ctaArrow");
      ctaEl.href = s.ctaHref;
      ctaEl.textContent = s.ctaText + " ";
      if (arrow) ctaEl.appendChild(arrow);

      setActiveDot();
      fadeSwap(false);
    }, 140);
  }

  // Events
  prevBtn?.addEventListener("click", () => plusSlides(-1));
  nextBtn?.addEventListener("click", () => plusSlides(1));

  dotsWrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".dot");
    if (!btn) return;
    const n = Number(btn.dataset.slide);
    if (!Number.isNaN(n)) currentSlide(n);
  });

  // Bonus: keyboard (pænt i demo)
  root.tabIndex = 0;
  root.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") plusSlides(-1);
    if (e.key === "ArrowRight") plusSlides(1);
  });

  // Init
  buildDots();
  showSlides(slideIndex);
 }
initHeroCarousel();

