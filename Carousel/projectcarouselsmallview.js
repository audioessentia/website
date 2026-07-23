// ---------------------------------------------------------------
// TEAM LINKS — maps a credit name (as it appears in the arrays
// below) to its anchor on aboutus.html. Add new people/aliases
// here as they join — the key must match the name string used in
// `credits` EXACTLY (case-sensitive). Any name not found here
// falls back to aboutus.html#collective (the team section in
// general), per creditLink() below.
// ---------------------------------------------------------------
const teamLinks = {
    "Dan Hawryluk": "dan-hawryluk",
    "John Gregory": "john-gregory",
    "Raine Edgar": "raine-edgar",
    "Steven Tsia": "steven-tsia",
    "Eloísa Sandoval": "eloisa-sandoval",
    "Eloísa Sandoval García": "eloisa-sandoval",
    "Sidharth Satheesh": "sidharth-satheesh",
    "Luz Salcedo": "luz-salcedo",
    "Joel Tong": "joel-tong",
    "Vanessa Yuen": "vanessa-yuen",
    "Vanessa Yuen (樂凡)": "vanessa-yuen",
    "Axel Braaten": "axel-braaten"
};

function creditLink(name) {
    const slug = teamLinks[name];
    return slug ? `aboutus.html#${slug}` : `aboutus.html#collective`;
}

// ---------------------------------------------------------------
// PROJECT DATA
// Replace `src` with real media per project (image path, video path,
// or an embed URL). `type` controls how it's rendered:
//   'image'  -> <img src="...">
//   'video'  -> <video> for a self-hosted file (autoplays, muted, looped)
//   'vimeo'  -> <iframe> using the player.vimeo.com URL from Vimeo's
//               "Embed" share option
//   'youtube'-> <iframe> using the youtube.com/embed/VIDEO_ID URL
//               from YouTube's Share → Embed code (copy the src="..."
//               value out of the <iframe> YouTube gives you — the
//               normal youtube.com/watch?v=... link will NOT work here)
//   'embed'  -> generic fallback, same iframe rendering, for any other
//               host that gives you an embeddable iframe src
// `explore` (true/false) controls whether the EXPLORE button shows —
// only set true for projects that have a real dedicated page to link to.
// `link` is only used when explore is true.
// `imdb` (optional) — full IMDb title URL. When present, a "VIEW ON
// IMDB" button is shown in the lightbox / carousel slide alongside
// the EXPLORE button.
// `credits` is an array of [name, role] pairs shown under the description.
// Each name is automatically linked via creditLink() above.
// In the featured carousel, credits are hidden behind a CREDITS/HIDE
// toggle (like the Motion reference's clip pages) — projects with no
// credits simply don't get a toggle. They also show up in full in the
// "More Projects" lightbox if this same project appears there too.
//
// `lightboxType`/`lightboxSrc` (optional, gridData only) — set these
// if you want the lightbox popup to show different media than the
// grid tile itself, e.g. a static image thumbnail in the grid but
// the actual video when someone clicks in for the full view. Same
// type values as above ('image'/'video'/'vimeo'/'youtube'/'embed').
// If omitted, the lightbox just reuses the tile's own type/src.
//
// Split into two lists:
//   carouselData -> the featured projects shown in the big carousel
//   gridData     -> everything else, shown in the "More Projects" grid
//                   below, opened larger in a lightbox on click.
// ---------------------------------------------------------------

const carouselData = [
    {
        title: "DEPTHS",
        subtitle: "4D SOUND INSTALLATION",
        type: "image",
        src: "Media/Depths/Depths_1.webp",
        description: "A 4D spatial audio installation that explores consciousness by combining advanced spatial audio technology with Indigenous wisdom traditions.",
        explore: true,
        link: "depths.html",
        credits: [
            ["John Gregory", "Co-Creative Director, Supervising Sound Editor, Re-Recording Mixer And International Talent Coordinator"],
            ["Dan Hawryluk", "Creative Director, Sound Editor and Re-Recording Mixer"],
            ["Eloísa Sandoval", "ADR Editor, Voice Processing, Sound designer & Web Developer"],
            ["Steven Tsia", "Video Editor, Sound Designer, ADR Recordist"],
            ["Raine Edgar", "VFX Artist & Technical Sound Designer"],
            ["Sidharth Satheesh", "Media Composer & Music Producer"],
            ["Joel Tong", "Media Composer & Music Producer"],
            ["Luz Salcedo", "Lead Video Editor"],
        ]
    },
    {
        title: "A SHAMAN'S TALE",
        subtitle: "ANIMATED SHORT FILM",
        type: "image",
        src: "Media/Shamans/AST_2.webp",
        description: "Animated short film that weaves together consciousness exploration, Indigenous wisdom, and transformative sound design.",
        explore: true,
        link: "shamans.html",
        credits: [
            ["Dan Hawryluk", "Re-Recording Mixer & Sound Designer"],
        ]
    },
    {
        title: "CHILAMB",
        subtitle: "ANIMATED SHORT FILM",
        type: "image",
        src: "Media/Chilamb/Chilamb_2.webp",
        description: "Animated short film that weaves together consciousness exploration, Indigenous wisdom, and transformative sound design.",
        explore: false,
        link: "",
        credits: [
            ["John Gregory", "Supervising Sound Editor, Sound Editor"],
            ["Dan Hawryluk", "Sound Editor"],
            ["Eloísa Sandoval", "Dialogue Editor,ADR Editor, Voice Processing"],
            ["Steven Tsia", "Video Editor, Sound Designer, ADR Recordist"],
            ["Raine Edgar", "VFX Artist & Technical Sound Designer"]
        ]
    },
    {
        title: "STRAIN",
        subtitle: "SOUND DESIGN",
        type: "image",
        src: "Media/Strain/Strain.webp",
        description: "A late shift at a cannabis grow-op takes a strange turn when a worker samples the product, only for the night to spiral out of control.",
        explore: false,
        link: "",
        credits: [
            ["John Gregory", "Re-Recording Mixer & Sound Designer"],
            ["Dan Hawryluk", "Re-Recording Mixer & Sound Designer"],
            ["Steven Tsia", "Sound Designer"],
            ["Eloísa Sandoval", "Sound Designer"]
        ]
    },

];

const gridData = [
    {
        title: "KNIGHT TERROR",
        subtitle: "FEATURE FILM AUDIO POST",
        type: "image",
        src: "Media/KT/KT.webp",
        description: "At a remote campsite retreat, a startup's knight mascot begins killing employees. The Knightly staff must solve the murders while navigating office drama as bodies pile up.",
        explore: false,
        link: "",
        imdb: "https://www.imdb.com/title/tt38079921/fullcredits/?ref_=tt_cst_sm#amzn1.imdb.concept.name_credit_category.ce258419-131b-41f0-b2c5-227f5d9b719f",
        credits: [
            ["John Gregory", "Re-Recording Mixer & Sound Designer"],
            ["Dan Hawryluk", "Re-Recording Mixer & Sound Designer"],
            ["Steven Tsia", "Sound Designer"],
            ["Axel Braaten", "Sound Designer"],
            ["Eloísa Sandoval", "Dialogue Editor"]
        ]
    },
    {
        title: "DANCE MOM",
        subtitle: "SHORT FILM AUDIO POST",
        type: "image",
        src: "Media/DanceMom/DanceMom.webp",
        description: "A character drama about an estranged father and his daughter reconnecting through a dance recital.",
        explore: false,
        link: "",
        imdb: "https://www.imdb.com/title/tt32642300/fullcredits/?ref_=tt_cst_sm#amzn1.imdb.concept.name_credit_category.ce258419-131b-41f0-b2c5-227f5d9b719f",
        credits: [
            ["John Gregory", "Foley Recordist & Foley Editor"],
            ["Steven Tsia", "Foley Artist & Foley Editor"],
            ["Eloísa Sandoval", "ADR Recordist & Dialogue Editor"],
            ["Raine Edgar", "Dialogue Editor"]
        ]
    },
    {
        title: "KILLER VACANCY",
        subtitle: "SHORT FILM AUDIO POST",
        type: "image",
        src: "Media/KV/KV.webp",
        description: "A fragile young woman moves into a shared house, where she discovers that her strange roommates have a twisted idea of a practical joke.",
        explore: false,
        link: "",
        imdb: "https://www.imdb.com/title/tt37830452/fullcredits/?ref_=tt_cst_sm#amzn1.imdb.concept.name_credit_category.ce258419-131b-41f0-b2c5-227f5d9b719f",
        lightboxType: "vimeo",
        lightboxSrc: "https://www.youtube.com/embed/RmIxKVxTm0s?si=hvSfEhy4eErWxabT",
        credits: [
            ["Dan Hawryluk", "Re-Recording Mixer"],
            ["Axel Braaten", "Re-Recording Mixer"],
            ["John Gregory", "Foley Recordist, Sound Designer & Music Editor"],
            ["Steven Tsia", "Foley Artist & Sound Designer"],
            ["Eloísa Sandoval", "ADR Recordist & Dialogue Editor"]
        ]
    },
    {
        title: "YONA",
        subtitle: "ANIMATED SHORT FILM SOUND RE-DESIGN",
        type: "image",
        src: "Media/Yona/YonaPhoto.webp",
        description: "After an expedition that went wrong, Chester Cornell, American Captain of the Union finds himself deeply wounded. As he is about to die, an unexpected encounter will make him face his fears and doubts",
        explore: false,
        link: "",
        lightboxType: "vimeo",
        lightboxSrc: "https://www.youtube.com/embed/KuOoTvratBA?si=kiW4ExZoUAy9m2A4",
        credits: [
            ["John Gregory", "Sound Designer & Re-Recording Mixer"],
            ["Sidharth Satheesh", "Media Composer"]
        ]
    },
    {
        title: "AU REVOIR MON MONDE",
        subtitle: "ANIMATED SHORT FILM SOUND RE-DESIGN",
        type: "image",
        src: "Media/ARMM/ARMM_4.webp",
        description: "As the world comes to an end, a man trapped in a fish costume races against the clock toward a mysterious tower.",
        explore: false,
        link: "",
        lightboxType: "vimeo",
        lightboxSrc: "https://www.youtube.com/embed/N45cEg8qGx0?si=G9EJLAgnrkpKSw1Y",
        credits: [
            ["Eloísa Sandoval", "Sound Designer & Re-Recording Mixer"]
        ]
    },
    {
        title: "WARFRAME: A NEW WAR",
        subtitle: "VIDEO GAME TRAILER SOUND RE-DESIGN",
        type: "image",
        src: "Media/Warframe/Warframe.webp",
        description: "Embark on an epic Quest across an expansive new adventure, as you race to unite the factions and discover the most dramatic conflict burning in the Origin System - the one within yourself.",
        explore: false,
        link: "",
        lightboxType: "vimeo",
        lightboxSrc: "https://player.vimeo.com/video/1176342540?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        credits: [
            ["Steven Tsia", "Sound Designer & Re-Recording Mixer"]
        ]
    },
    {
        title: "MARATHON REVEAL CINEMATIC",
        subtitle: "VIDEO GAME TRAILER SOUND RE-DESIGN",
        type: "image",
        src: "Media/Marathon/Marathon.webp",
        description: "A team-based extraction shooter. Choose your Runner and scavenge the lost colony of Tau Ceti IV for fortune, power, and answers to Tau Ceti's secrets.",
        explore: false,
        link: "",
        lightboxType: "vimeo",
        lightboxSrc: "https://www.youtube.com/embed/8GHGXk0p8wk?si=BwFTJl52gndJoUhH",
        credits: [
            ["Ailean Yuzwa", "Sound Designer & Re-Recording Mixer"]
        ]
    },
    {
        title: "The BioShock 2 Trailer",
        subtitle: "VIDEO GAME TRAILER SOUND RE-DESIGN",
        type: "image",
        src: "Media/BioShock/BioShock.webp",
        description: "BioShock 2 follows Subject Delta, a prototype Big Daddy fighting through the ruined underwater city of Rapture. He must rescue his former Little Sister, Eleanor, from her mother, Sofia Lamb, who now controls the city's cult-like survivors.",
        explore: false,
        link: "",
        lightboxType: "vimeo",
        lightboxSrc: "https://www.youtube.com/embed/2NncmpOnIxA?si=6HMaiU8gcUlwd5-u",
        credits: [
            ["Raine Edgar", "Sound Designer & Re-Recording Mixer"]
        ]
    },
    {
        title: "The First Berserker Khazan",
        subtitle: "VIDEO GAME TRAILER SOUND RE-DESIGN",
        type: "image",
        src: "Media/Khazan/Khazan.webp",
        description: "The First Berserker: Khazan is a hardcore action RPG based on DNF (Dungeon & Fighter) Universe that will be available on PlayStation 5. As Khazan, the great general of the Pell Los Empire who overcame death, players will unveil the incidents that led to his downfall and seek vengeance on his enemies.",
        explore: false,
        link: "",
        lightboxType: "vimeo",
        lightboxSrc: "https://www.youtube.com/embed/-6hEc8oXvuU?si=Zt8G0n6EtzWKfTSm",
        credits: [
            ["Axel Braaten", "Sound Designer & Re-Recording Mixer"]
        ]
    }
];

// ---------------------------------------------------------------
// SHARED HELPER — renders the media element (img/video/iframe) for
// any project object, used by the carousel, the grid, and the
// lightbox.
// ---------------------------------------------------------------
function renderMedia(slide, className) {
    if (slide.type === 'video') {
        return `<video class="${className}" src="${slide.src}" autoplay muted loop playsinline></video>`;
    }
    if (slide.type === 'vimeo' || slide.type === 'youtube' || slide.type === 'embed') {
        return `<iframe class="${className}" src="${slide.src}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" allowfullscreen title="${slide.title}"></iframe>`;
    }
    return `<img class="${className}" src="${slide.src}" alt="${slide.title}">`;
}

function renderCreditsRows(credits) {
    return credits.map(([name, role]) => `
        <div class="credit-row">
            <a class="credit-name" href="${creditLink(name)}">${name}</a>
            <span class="credit-role">${role}</span>
        </div>
    `).join('');
}

// Shared helper — builds the EXPLORE + VIEW ON IMDB buttons for a
// project object, used by both the carousel slides and the lightbox.
function renderActionButtons(project) {
    const exploreBtn = project.explore && project.link
        ? `<a href="${project.link}" class="btn-explore">EXPLORE</a>`
        : '';

    const imdbBtn = project.imdb
        ? `<a href="${project.imdb}" target="_blank" rel="noopener" class="btn-explore">VIEW ON IMDB</a>`
        : '';

    return exploreBtn + imdbBtn;
}

// ---------------------------------------------------------------
// STATE — carousel
// ---------------------------------------------------------------
let currentIndex = 0;
let autoplayTimer = null;

const track = document.getElementById('carouselTrack');
const filmstrip = document.getElementById('carouselFilmstrip');
const carouselEl = document.getElementById('workCarousel');
const carouselViewport = document.querySelector('.carousel-viewport');

// ---------------------------------------------------------------
// FILMSTRIP — thumbnail row below the carousel that lets you jump to
// any project, mirroring the row of clip thumbnails at the bottom of
// markclennon.com/motion's individual clip pages.
// ---------------------------------------------------------------
function buildFilmstrip() {
    filmstrip.innerHTML = '';

    carouselData.forEach((slide, i) => {
        const item = document.createElement('button');
        item.className = 'filmstrip-item';
        item.setAttribute('aria-label', `Go to ${slide.title}`);

        const thumbEl = renderMedia(slide, 'filmstrip-media');

        item.innerHTML = `
            <div class="filmstrip-media-wrapper">${thumbEl}</div>
            <p class="filmstrip-title">${slide.title}</p>
        `;

        item.addEventListener('click', () => goToSlide(i));
        filmstrip.appendChild(item);
    });

    updateFilmstripActiveState();
}

function updateFilmstripActiveState() {
    [...filmstrip.querySelectorAll('.filmstrip-item')].forEach((item, i) => {
        item.classList.toggle('active', i === currentIndex);
    });
}

// ---------------------------------------------------------------
// CAROUSEL BUILD
// Featured slides are full-bleed: media spans the entire viewport
// width (edge-to-edge). Below it sits a PREVIOUS CLIP / NEXT UP text
// nav row, then title/subtitle/description left-aligned, then a
// CREDITS/HIDE toggle that reveals the credits panel when present —
// all mirroring markclennon.com/motion's individual clip pages. A
// filmstrip of thumbnails below the whole carousel (see buildFilmstrip)
// lets you jump straight to any project.
// ---------------------------------------------------------------
function buildSlides() {
    track.innerHTML = '';

    carouselData.forEach((slide, i) => {
        const slideEl = document.createElement('div');
        slideEl.className = 'carousel-slide';

        const mediaEl = renderMedia(slide, 'slide-media');
        const hasCredits = Array.isArray(slide.credits) && slide.credits.length > 0;

        slideEl.innerHTML = `
            <div class="slide-media-wrapper">
                ${mediaEl}
            </div>
            <div class="slide-nav-row">
                <button class="clip-nav prev-clip" aria-label="Previous project">
                    <span class="clip-nav-arrow">←</span> PREVIOUS CLIP
                </button>
                <button class="clip-nav next-clip" aria-label="Next project">
                    NEXT UP <span class="clip-nav-arrow">→</span>
                </button>
            </div>
            <div class="slide-info">
                <p class="slide-subtitle">${slide.subtitle}</p>
                <h2 class="slide-title">${slide.title}</h2>
                <p class="slide-description">${slide.description}</p>
                <div class="slide-actions">
                    ${renderActionButtons(slide)}
                    ${hasCredits ? `<button class="credits-toggle" type="button">CREDITS</button>` : ''}
                </div>
                ${hasCredits ? `
                    <div class="slide-credits collapsible">
                        ${renderCreditsRows(slide.credits)}
                    </div>
                ` : ''}
            </div>
        `;

        slideEl.querySelector('.prev-clip').addEventListener('click', prevSlide);
        slideEl.querySelector('.next-clip').addEventListener('click', nextSlide);

        const creditsToggle = slideEl.querySelector('.credits-toggle');
        if (creditsToggle) {
            const creditsPanel = slideEl.querySelector('.slide-credits');
            creditsToggle.addEventListener('click', () => {
                const isOpen = creditsPanel.classList.toggle('open');
                creditsToggle.textContent = isOpen ? 'HIDE' : 'CREDITS';
                syncViewportHeight();
            });
        }

        track.appendChild(slideEl);
    });

    currentIndex = Math.min(currentIndex, Math.max(carouselData.length - 1, 0));
    buildFilmstrip();
    updateCarousel();
}

function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateFilmstripActiveState();
    syncViewportHeight();
}

// All slides sit side-by-side in .carousel-track (that's what lets
// translateX slide between them), so the track's own height is
// naturally set by the TALLEST slide (DEPTHS, with the longest
// description) even though only one slide is visible at a time. Fix:
// explicitly set the viewport's height to match only the currently
// active slide, and clip the rest with overflow:hidden (already set
// in CSS).
function syncViewportHeight() {
    const activeSlide = track.children[currentIndex];
    if (!activeSlide || !carouselViewport) return;
    carouselViewport.style.height = `${activeSlide.offsetHeight}px`;
}

window.addEventListener('resize', syncViewportHeight);

function goToSlide(index) {
    const total = carouselData.length;
    if (total === 0) return;
    currentIndex = (index + total) % total;
    updateCarousel();
}

function nextSlide() {
    goToSlide(currentIndex + 1);
}

function prevSlide() {
    goToSlide(currentIndex - 1);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
});

// ---------------------------------------------------------------
// SWIPE — since the carousel is now full-bleed/edge-to-edge, touch
// swipe left/right is the natural way to move between slides on
// mobile, in addition to the PREVIOUS CLIP / NEXT UP buttons and the
// filmstrip below.
// ---------------------------------------------------------------
let touchStartX = 0;
let touchDeltaX = 0;

carouselViewport.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchDeltaX = 0;
}, { passive: true });

carouselViewport.addEventListener('touchmove', (e) => {
    touchDeltaX = e.touches[0].clientX - touchStartX;
}, { passive: true });

carouselViewport.addEventListener('touchend', () => {
    const SWIPE_THRESHOLD = 50;
    if (touchDeltaX > SWIPE_THRESHOLD) {
        prevSlide();
    } else if (touchDeltaX < -SWIPE_THRESHOLD) {
        nextSlide();
    }
    touchStartX = 0;
    touchDeltaX = 0;
});

// Optional autoplay — pauses while the pointer is over the carousel,
// and is skipped entirely on mobile (≤768px, same breakpoint used
// everywhere else on the site) since scrolling should be manual
// there. `mobileMediaQuery.change` also catches someone resizing
// the browser or rotating a tablet across that breakpoint mid-visit.
let isHovering = false;
const mobileMediaQuery = window.matchMedia('(max-width: 768px)');

function autoplayTick() {
    if (!isHovering) nextSlide();
}

function startAutoplay() {
    clearInterval(autoplayTimer);
    if (mobileMediaQuery.matches) return;
    autoplayTimer = setInterval(autoplayTick, 7000);
}

startAutoplay();
mobileMediaQuery.addEventListener('change', startAutoplay);

carouselEl.addEventListener('mouseenter', () => {
    isHovering = true;
    clearInterval(autoplayTimer);
});

carouselEl.addEventListener('mouseleave', () => {
    isHovering = false;
    startAutoplay();
});

buildSlides();

// ---------------------------------------------------------------
// MORE PROJECTS GRID — hover reveals a short description (and a
// "click to see credits" hint) on the tile itself; clicking opens
// the full project (with credits) in a lightbox. On touch devices
// (no hover), the tile currently centered in the viewport as the
// user scrolls gets the same reveal automatically.
// ---------------------------------------------------------------
const moreProjectsGrid = document.getElementById('moreProjectsGrid');

function buildGrid() {
    moreProjectsGrid.innerHTML = '';

    gridData.forEach((project, i) => {
        const tile = document.createElement('div');
        tile.className = 'grid-tile';

        const mediaEl = renderMedia(project, 'grid-media');

        tile.innerHTML = `
            <div class="grid-media-wrapper">
                ${mediaEl}
            </div>
            <div class="grid-overlay">
                <p class="grid-subtitle">${project.subtitle}</p>
                <h3 class="grid-title">${project.title}</h3>
                <p class="grid-description">${project.description}</p>
                <p class="grid-hint">Click to see credits</p>
            </div>
        `;

        tile.addEventListener('click', () => openLightbox(i));
        moreProjectsGrid.appendChild(tile);
    });

    setupInViewObserver();
}

// ---------------------------------------------------------------
// LIGHTBOX — opened when a grid tile is clicked. Media stays a
// fixed size; the info panel below it (description + credits)
// scrolls independently if it's taller than the available space.
//
// HISTORY HANDLING — opening the lightbox pushes a history entry.
// That means the browser's back button closes the lightbox and
// lands back on the Projects page (instead of leaving the page
// entirely, e.g. back to the Home page). Closing the lightbox any
// other way (X button, clicking outside, Escape) calls
// history.back() itself so that pushed entry gets cleaned up and
// a second back-button press isn't needed later.
// --------------------------------------------------------------
const projectLightbox = document.getElementById('projectLightbox');
const lightboxMedia = document.getElementById('lightboxMedia');
const lightboxInfo = document.getElementById('lightboxInfo');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxBackdrop = document.getElementById('lightboxBackdrop');

let lightboxHistoryPushed = false;

function slugify(str) {
    return str.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function openLightbox(index) {
    const project = gridData[index];
    if (!project) return;

    const lightboxMediaSource = {
        type: project.lightboxType || project.type,
        src: project.lightboxSrc || project.src,
        title: project.title
    };

    lightboxMedia.innerHTML = renderMedia(lightboxMediaSource, 'lightbox-media-el');

    lightboxInfo.innerHTML = `
        <p class="slide-subtitle">${project.subtitle}</p>
        <h2 class="slide-title">${project.title}</h2>
        <p class="slide-description">${project.description}</p>
        ${renderActionButtons(project)}
        <div class="slide-credits">
            <p class="credits-label">CREDITS</p>
            ${renderCreditsRows(project.credits)}
        </div>
    `;

    projectLightbox.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Push a history entry so the back button closes the lightbox
    // instead of navigating away from the Projects page.
    history.pushState({ lightbox: true }, '', `#${slugify(project.title)}`);
    lightboxHistoryPushed = true;
}

function closeLightbox(fromPopState) {
    projectLightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
    lightboxMedia.innerHTML = '';

    if (lightboxHistoryPushed) {
        lightboxHistoryPushed = false;
        // If we're not already responding to a popstate (i.e. the
        // person closed the lightbox by clicking X / outside /
        // Escape), undo the history entry we pushed when opening
        // it so the URL/history stack stays clean.
        if (!fromPopState) {
            history.back();
        }
    }
}

// Back-button support: closes the lightbox instead of leaving the page.
window.addEventListener('popstate', () => {
    if (projectLightbox.classList.contains('active')) {
        closeLightbox(true);
    }
});

lightboxClose.addEventListener('click', () => closeLightbox(false));
lightboxBackdrop.addEventListener('click', () => closeLightbox(false));

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectLightbox.classList.contains('active')) {
        closeLightbox(false);
    }
});

// ---------------------------------------------------------------
// TOUCH "IN VIEW" REVEAL — on devices without hover, whichever
// tile is centered in the viewport as the person scrolls gets its
// info revealed automatically, standing in for hover.
// ---------------------------------------------------------------
function setupInViewObserver() {
    if (!window.matchMedia('(hover: none)').matches) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle('in-view', entry.isIntersecting);
        });
    }, {
        root: null,
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0
    });

    document.querySelectorAll('.grid-tile').forEach(tile => observer.observe(tile));
}

buildGrid();

// Nav scroll effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    if (window.pageYOffset > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});