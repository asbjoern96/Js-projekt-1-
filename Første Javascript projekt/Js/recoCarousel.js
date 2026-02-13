
document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector("[data-reco]");
  const track = section.querySelector("[data-reco-track]");
  const prevBtn = section.querySelector("[data-reco-prev]");
  const nextBtn = section.querySelector("[data-reco-next]");
  const counter = section.querySelector("[data-reco-counter]");
  const cards = section.querySelectorAll("[data-product]");

  let currentIndex = 0;
  const total = cards.length;
  const cardWidth = cards[0].offsetWidth + 20;

  function updateSlider() {
    track.scrollTo({
      left: currentIndex * cardWidth,
      behavior: "smooth"
    });

    counter.textContent = `${currentIndex + 1} / ${total}`;
  }

  nextBtn.addEventListener("click", function () {
    if (currentIndex < total - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  updateSlider(); // sætter 1 / 8 ved load
});

