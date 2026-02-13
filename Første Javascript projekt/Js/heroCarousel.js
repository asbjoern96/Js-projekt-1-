// js/heroCarousel.js
// W3Schools-inspireret hero slideshow: plusSlides, currentSlide, showSlides
// Pensum: ARRAY, LET, CONSTRAIN (clamp) og LOOP (wrap-around)
// + lille fade

function initHeroCarousel() {
  console.log("Hero ready");

  // 1) Find heroen i DOM
  const root = document.querySelector("[data-carousel]");
  if (!root) return;

  const imgEl = root.querySelector("[data-carousel-image]");
  const titleEl = root.querySelector("[data-carousel-title]");
  const ctaEl = root.querySelector("[data-carousel-cta]");
  const dotsWrap = root.querySelector("[data-carousel-dots]");
  const prevBtn = root.querySelector("[data-carousel-prev]");
  const nextBtn = root.querySelector("[data-carousel-next]");

  // Hvis noget mangler, stop 
  if (!imgEl || !titleEl || !ctaEl || !dotsWrap) return;

  // 2) ARRAY: data til alle slides
  const slides = [
    {
      img: imgEl.getAttribute("src"),
      alt: imgEl.getAttribute("alt") || "Sportstøj på bøjler",
      title: "DESIGN OG KØB DIT\nEGET HOLDSÆT",
      ctaText: "START HER",
      ctaHref: "#",
    },
    {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=80",
      alt: "Træningstøj",
      title: "NYT TØJ\nTIL TRÆNING",
      ctaText: "SE TØJ",
      ctaHref: "#",
    },
    {
      img: "https://images.unsplash.com/photo-1526401485004-2aa7d7c4b76a?auto=format&fit=crop&w=1400&q=80",
      alt: "Drikkedunk",
      title: "TILBEHØR\nTIL HVERDAGEN",
      ctaText: "SHOP NU",
      ctaHref: "#",
    },
    {
      img: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=1400&q=80",
      alt: "Bold",
      title: "BOLDE\nOG UDSTYR",
      ctaText: "SE UDSTYR",
      ctaHref: "#",
    },
    {
      img: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1400&q=80",
      alt: "Sportstøj",
      title: "KLUBSHOPS\nTIL JERES HOLD",
      ctaText: "FIND KLUB",
      ctaHref: "#",
    },
  ];

  // 3) LET: state (hvilken slide er aktiv)
  let slideIndex = 1; // 1-baseret som i W3Schools

  // 4) CONSTRAIN: clamp (holder tal indenfor et spænd)
  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

 

  // Byg dots (LOOP)
  function buildDots() {
    dotsWrap.innerHTML = "";
    for (let i = 1; i <= slides.length; i++) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "dot";
      dot.dataset.slide = String(i);
      dot.setAttribute("aria-label", `Slide ${i}`);
      dotsWrap.appendChild(dot);
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

  // W3Schools-funktioner
  function plusSlides(n) {
    showSlides(slideIndex + n);
  }

  function currentSlide(n) {
    showSlides(n);
  }

  // 5) showSlides: wrap-around 
  function showSlides(n) {
    // didaktisk constrain
    const safeN = clamp(n, -9999, 9999);

    // LOOP / wrap-around (hvis vi går forbi sidste, hop til første)
    if (safeN > slides.length) slideIndex = 1;
    else if (safeN < 1) slideIndex = slides.length;
    else slideIndex = safeN;

    const s = slides[slideIndex - 1];

imgEl.src = s.img;
imgEl.alt = s.alt;
titleEl.innerHTML = s.title.replaceAll("\n", "<br />");

const arrow = ctaEl.querySelector(".hero__ctaArrow");
ctaEl.href = s.ctaHref;
ctaEl.textContent = s.ctaText + " ";
if (arrow) ctaEl.appendChild(arrow);

setActiveDot();


  }

  // 6) Events
  prevBtn?.addEventListener("click", () => plusSlides(-1));
  nextBtn?.addEventListener("click", () => plusSlides(1));

  dotsWrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".dot");
    if (!btn) return;
    const n = Number(btn.dataset.slide);
    if (!Number.isNaN(n)) currentSlide(n);
  });

  // Bonus: keyboard
  root.tabIndex = 0;
  root.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") plusSlides(-1);
    if (e.key === "ArrowRight") plusSlides(1);
  });

  // 7) Init
  buildDots();
  showSlides(slideIndex);
}

initHeroCarousel();
