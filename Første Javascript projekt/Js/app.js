import { initNavbar } from "./navbar.js";
import { initHeroCarousel } from "./heroCarousel.js";
import { initRecoCarousel } from "./recoCarousel.js";
import { initPopularCarousel } from "./popularCarousel.js";
import { initForYouCarousel } from "./forYouCarousel.js";

/* Lille event-bus så moduler ikke skal kende hinanden */
export const bus = new EventTarget();
export const emit = (name, detail) => bus.dispatchEvent(new CustomEvent(name, { detail }));
export const on = (name, fn) => bus.addEventListener(name, fn);

/* Fælles helper: “find element eller return null” */
export const $ = (sel, root = document) => root.querySelector(sel);

/* Fælles helper: scroll en track (karusel) */
export function scrollTrack(trackEl, direction = 1, amount = null) {
  if (!trackEl) return;
  const step = amount ?? Math.round(trackEl.clientWidth * 0.9);
  trackEl.scrollBy({ left: direction * step, behavior: "smooth" });
}

/* Init alle 5 moduler */
initNavbar({ $, emit, on });
initHeroCarousel({ $, emit, on, scrollTrack });
initRecoCarousel({ $, emit, on, scrollTrack });
initPopularCarousel({ $, emit, on, scrollTrack });
initForYouCarousel({ $, emit, on, scrollTrack });

/* Global ESC (alle kan lytte på den) */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") emit("app:escape");
});
