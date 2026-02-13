// js/forYouCarousel.js
// Horizontal carousel voor "Måske noget for dig" sektion
// Pensum: querySelector, addEventListener, scrollIntoView, classList

function initForYouCarousel() {
  console.log("ForYou carousel ready");

  // Find alle elementer
  const root = document.querySelector("[data-foryou]");
  if (!root) return;

  const viewport = root.querySelector("[data-foryou-viewport]");
  const track = root.querySelector("[data-foryou-track]");
  const prevBtn = root.querySelector("[data-foryou-prev]");
  const nextBtn = root.querySelector("[data-foryou-next]");
  const progressBars = root.querySelectorAll("[data-foryou-bar]");
  const cards = root.querySelectorAll("[data-pcard]");

  // Hvis vigtige elementer mangler, stop
  if (!viewport || !track || !cards.length) return;

  let currentIndex = 0;

  // Opdater progress bars baseret på nuværende index
  function updateProgressBars() {
    progressBars.forEach((bar, idx) => {
      bar.classList.toggle("is-active", idx === currentIndex);
      bar.setAttribute("aria-current", idx === currentIndex ? "true" : "false");
    });
  }

  // Animér billeder ved at flytte track
  function animateToCard(index) {
    if (index < 0 || index >= cards.length) return;
    
    currentIndex = index;
    
    // Beregn hvor meget vi skal translateX (-100% per card)
    const translatePercent = -currentIndex * 100;
    
    // Tilføj transition for smooth animation
    track.style.transition = "transform 400ms ease-out";
    track.style.transform = `translateX(${translatePercent}%)`;
    
    updateProgressBars();
  }

  // Næste kort
  function goNext() {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= cards.length) {
      nextIndex = 0; // Loop til start
    }
    animateToCard(nextIndex);
  }

  // Forrige kort
  function goPrev() {
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      prevIndex = cards.length - 1; // Loop til slut
    }
    animateToCard(prevIndex);
  }

  // Event listeners for knapper
  nextBtn?.addEventListener("click", goNext);
  prevBtn?.addEventListener("click", goPrev);

  // Event listeners for progress bars
  progressBars.forEach((bar, idx) => {
    bar.addEventListener("click", () => animateToCard(idx));
  });

  // Init
  updateProgressBars();
}

initForYouCarousel();
