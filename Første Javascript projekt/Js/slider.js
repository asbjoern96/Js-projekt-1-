document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-popular]").forEach((slider) => {
    const track = slider.querySelector("[data-popular-track]");
    const prev = slider.querySelector("[data-popular-prev]");
    const next = slider.querySelector("[data-popular-next]");
    const viewport = slider.querySelector("[data-popular-viewport]");

    if (!track || !prev || !next) return;

    function pageWidth() {
      const el = viewport || track.parentElement;
      return el.getBoundingClientRect().width;
    }

    next.addEventListener("click", () => {
      track.scrollBy({ left: pageWidth(), behavior: "smooth" });
    });

    prev.addEventListener("click", () => {
      track.scrollBy({ left: -pageWidth(), behavior: "smooth" });
    });
  });
});
