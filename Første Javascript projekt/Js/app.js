import { initNavbar } from "./navbar.js";
import { initHeroCarousel } from "./heroCarousel.js";
import { initRecoCarousel } from "./recoCarousel.js";
import { initPopularCarousel } from "./popularCarousel.js";
import { initForYouCarousel } from "./forYouCarousel.js";

/* Init alle 5 moduler */
initNavbar({ $, emit, on });
initHeroCarousel({ $, emit, on, scrollTrack });
initRecoCarousel({ $, emit, on, scrollTrack });
initPopularCarousel({ $, emit, on, scrollTrack });
initForYouCarousel({ $, emit, on, scrollTrack });

