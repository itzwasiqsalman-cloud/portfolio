/* ============================================================
   CONTENT DATA — edit these arrays to update the site.
   No need to touch the HTML below the fold.
   ============================================================ */

/* ------------------------------------------------------------
   PHOTOS (flip cards under Selected work > Photography)
   Drop your images into assets/photos/ and update `src` here.
   Add or remove entries freely — the grid adjusts itself.
   ------------------------------------------------------------ */
const PHOTOS = [
  {
    src: "assets/photos/photo-1.jpg",
    title: "Colorised Double Exposure",
    description:
      "This edit was made using two different photographs, a portrait and a landscape, blended together using double exposure. The goal was to visually illustrate a person lost in their internal thoughts. The Urdu font at the bottom is a song lyric which directly translates to “My Thoughts are Lost in Your Yearning”.",
  },
  {
    src: "assets/photos/photo-2.jpg",
    title: "Long Exposure Blur Portrait",
    description:
      "Inspired by the cover of The Neighbourhood's album Wiped Out. I created the sunset effect using a strong flashlight with a stencil and finished it off by editing the photo to look black and white.",
  },
  {
    src: "assets/photos/photo-3.jpg",
    title: "Long Exposure Light Trail Portrait",
    description:
      "This photoshoot was inspired by the preseason media days that happen in sporting organizations. I used a lengthy flashlight and a long shutter speed to capture the movement of the light in real time.",
  },
  {
    src: "assets/photos/photo-4.jpg",
    title: "Long Exposure Light Trail Portrait",
    description:
      "This photoshoot was inspired by the preseason media days that happen in sporting organizations. I used a lengthy flashlight and a long shutter speed to capture the movement of the light in real time.",
  },
  {
    src: "assets/photos/photo-5.jpg",
    title: "Film Camera Long Exposure Portrait",
    description:
      "My first time using a film camera. The goal of this photoshoot was to create a visual illustration of a person feeling like they're lost in the movement of the world.",
  },
  {
    src: "assets/photos/photo-6.jpg",
    title: "Film Camera Landscape",
    description:
      "The goal of this photoshoot was to simply capture landscapes of buildings around Oxford. The cherry on top for this photo is the motion blur of a person walking through the frame, which enhances the picture.",
  },
  {
    src: "assets/photos/photo-7.jpg",
    title: "Diffused Natural Light",
    description:
      "One of my favorites because of the twilight effect, which causes even sharp edges to be diffused. The best part is that this photo is barely edited: the entire effect was caused by condensation on the camera lens due to the humidity of the greenhouse.",
  },
  {
    src: "assets/photos/photo-8.jpg",
    title: "Wes Anderson Inspired Movie Still",
    description:
      "A spontaneous edit inspired by Wes Anderson's films and how he utilizes saturation, paired with colored fonts that add to the contrast. The objective was to make it seem like a screenshot from a movie still where two characters are having a conversation.",
  },
];

/* ------------------------------------------------------------
   CERTIFICATES & ACHIEVEMENTS
   Each entry: title, issuer (small uppercase meta line),
   description (what the certificate means), image.
   - `image` is optional: set it to null for achievements that
     have no visual yet (they render as text-only cards and
     don't open the lightbox). Add the image path later when
     you find a visual.
   - The certificate images below are placeholders. Drop your
     real certificate scans into assets/certificates/ and
     update the paths.
   ------------------------------------------------------------ */
const CERTIFICATES = [
  {
    title: "TKS Innovate Honours Graduate",
    issuer: "The Knowledge Society (TKS)",
    description:
      "The highest honour a student can graduate TKS with, awarded when project work is reviewed and certified by two or more professionals in the field.",
    image: "assets/certificates/tks-innovate-honours.png",
  },
  {
    title: "TKS Hackathon Winner",
    issuer: "The Knowledge Society (TKS)",
    description:
      "Created and pitched Road Pulse, a concept for an autonomous road recovery and repair system.",
    image: "assets/certificates/tks-hackathon-winner.jpg",
  },
  {
    title: "TKS Moonshot People's Choice Award",
    issuer: "The Knowledge Society (TKS)",
    description:
      "Voted for by the audience during the Moonshot presentations as the most liked idea.",
    image: "assets/certificates/tks-moonshot-peoples-choice.png",
  },
  {
    title: "TKS Moonshot TED Award",
    issuer: "The Knowledge Society (TKS)",
    description:
      "An individual award for the best presentation, judged on slides, delivery, and the ability to answer questions.",
    image: "assets/certificates/tks-moonshot-ted.png",
  },
  {
    title: "2x IKLC International English Competition Winner",
    issuer: "IKLC",
    description:
      "An international linguistics competition for English. Bronze medallist two years in a row.",
    image: "assets/certificates/certificate-5.svg", // [PLACEHOLDER image: replace when you have an IKLC visual]
  },
];

/* ------------------------------------------------------------
   PROJECTS (Selected work)
   - `tags`: any of "build", "write", "perform", "photography"
     (used by the filter buttons).
   - `stack`: small muted chips shown on the card (tech stack,
     credits, awards). Optional.
   - `thumb`: optional thumbnail image path, or null.
   - `links`: array of { label, url } shown at the bottom of
     the card. Empty array = no links.
   Photography lives in the PHOTOS array above (flip cards),
   not here.
   ------------------------------------------------------------ */
const PROJECTS = [
  /* --- Build --- */
  {
    title: "Misinformation Monitor",
    description:
      "End-to-end pipeline ingesting articles every 2 hours, extracting verifiable claims via a calibrated LLM prompt, and clustering semantically equivalent claims using sentence embeddings & cosine similarity. Features composite priority ranking combining cross-source spread, velocity scoring, rhetorical risk analysis, and Google Fact Check API integration. Validated by experts at AllSides and Full Fact UK.",
    tags: ["build"],
    stack: ["Python", "LLM", "Sentence Embeddings", "Streamlit", "Google Fact Check API"],
    thumb: null,
    links: [],
  },
  {
    title: "Videre Labs Text Analysis Tool",
    description:
      "Detects structural persuasion in written media by analysing articles or specific text across 4 research-backed rhetoric qualities: Emotional Intensity, Certainty Language, Attribution Clarity, and Framing Cues, helping readers spot when media is nudging their thinking.",
    tags: ["build"],
    stack: ["JavaScript", "HTML", "NLP", "Reader Psychology"],
    thumb: null,
    links: [],
  },

  /* --- Write --- */
  {
    title: "How AI Spots Deepfakes by Reading the Digital Fingerprints We Can't See",
    description:
      "Deepfakes pose an enormous societal risk through misinformation, erosion of trust, and media weaponisation. This article explores how AI can identify synthetic media by detecting the invisible digital traces that generative models leave behind.",
    tags: ["write"],
    stack: ["Medium", "Deepfakes", "AI Detection", "Media Literacy"],
    thumb: null,
    links: [
      {
        label: "Read on Medium",
        url: "https://medium.com/@itzwasiq.salman/how-ai-spots-deepfakes-by-reading-the-digital-fingerprints-we-cant-see-98ef297a8596",
      },
    ],
  },
  {
    title: "Seeing Before Believing: Measuring Persuasive Architecture in Modern Media",
    description:
      "A deep dive into the Videre Labs testing process, documenting how the rhetoric analysis model was built, refined, and validated against real-world media to detect structural persuasion in written text.",
    tags: ["write"],
    stack: ["Medium", "Videre Labs", "Rhetoric Analysis", "Research"],
    thumb: null,
    links: [
      {
        label: "Read on Medium",
        url: "https://medium.com/@itzwasiq.salman/seeing-before-believing-measuring-persuasive-architecture-in-modern-media-aa41f3164a6b",
      },
    ],
  },
  {
    title: "From Persuasion to Pattern: Building a Claim Monitoring System for Fact-Checkers",
    description:
      "Traces the journey from Videre Labs' user feedback to the architecture of the Misinformation Monitor, exploring how iterative learning shaped the design of a live claim-tracking pipeline for fact-checkers.",
    tags: ["write"],
    stack: ["Medium", "Misinformation Monitor", "Fact-Checking", "NLP"],
    thumb: null,
    links: [
      {
        label: "Read on Medium",
        url: "https://medium.com/@itzwasiq.salman/from-persuasion-to-pattern-building-a-claim-monitoring-system-for-fact-checkers-dfcfdb3b5102",
      },
    ],
  },

  /* --- Perform --- */
  {
    title: "The Taming of the Shrew",
    description:
      "Acted as supporting lead Hortensio in a full stage production of Shakespeare's classic comedy. A demanding role requiring strong physicality, comic timing, and ensemble coordination across the full run.",
    tags: ["perform"],
    stack: ["Shakespeare", "Supporting Lead", "Stage Acting"],
    thumb: null,
    links: [],
  },
  {
    title: "Coriolanus",
    description:
      "Directed a modern political adaptation of Shakespeare's Coriolanus for a competitive festival. The production tied for the most successful in the competition's history, winning 4 out of 7 available awards including Best Production. I was awarded Best Director.",
    tags: ["perform"],
    stack: ["Shakespeare", "Direction", "Best Director 🏆", "Best Production 🏆"],
    thumb: null,
    links: [],
  },
  {
    title: "Talent Show",
    description:
      "Hosted and co-produced a large-scale talent show that drew a huge turnout and was met with widespread acclaim. Its success was such that the event has now been established as an annual fixture.",
    tags: ["perform"],
    stack: ["Hosting", "Production", "Live Event", "Annual Series"],
    thumb: null,
    links: [],
  },
  {
    title: "We Will Rock You",
    description:
      "Performing in the ensemble cast of the iconic Queen musical at the Royal Theatre Windsor. A landmark production bringing together live music, choreography, and large-scale theatrical performance.",
    tags: ["perform"],
    stack: ["Musical Theatre", "Ensemble", "Royal Theatre Windsor", "Upcoming 📅"],
    thumb: null,
    links: [],
  },
];

/* ------------------------------------------------------------
   SOCIAL LINKS
   Replace the `url` values with your real profiles. `icon`
   must be a key of the ICONS map just below.
   ------------------------------------------------------------ */
const SOCIAL_LINKS = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/muhammad-wasiq-salman-699b53377/", icon: "linkedin" },
  { label: "Instagram (@wasiqcam)", url: "https://www.instagram.com/wasiqcam/", icon: "instagram" },
  // To add more later, uncomment and fill in:
  // { label: "GitHub", url: "https://github.com/your-username", icon: "github" },
  // { label: "X", url: "https://x.com/your-handle", icon: "x" },
];

/* Inline SVG icons (no icon-font dependency). */
const ICONS = {
  github:
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.24 2.75.12 3.04.74.81 1.19 1.83 1.19 3.09 0 4.41-2.7 5.38-5.26 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"/></svg>',
  instagram:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/></svg>',
  x:
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z"/></svg>',
};

/* ============================================================
   RENDERING & BEHAVIOUR — no need to edit below this line
   for routine content updates.
   ============================================================ */

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

/* ---------- Photography flip cards ---------- */
function renderPhotos() {
  const grid = document.getElementById("photo-grid");
  grid.innerHTML = PHOTOS.map(
    (photo) => `
    <li>
      <button class="photo-card" type="button" aria-pressed="false">
        <span class="sr-only">Show details for ${photo.title}</span>
        <span class="photo-card__inner">
          <span class="photo-card__face photo-card__face--front" aria-hidden="true">
            <img src="${photo.src}" alt="" loading="lazy">
          </span>
          <span class="photo-card__face photo-card__face--back">
            <h3>${photo.title}</h3>
            <p>${photo.description}</p>
          </span>
        </span>
      </button>
    </li>`
  ).join("");

  const cards = grid.querySelectorAll(".photo-card");
  cards.forEach((card) => {
    // Click covers taps AND Enter/Space (native button behaviour).
    card.addEventListener("click", () => {
      const flipped = card.classList.toggle("is-flipped");
      card.setAttribute("aria-pressed", String(flipped));
      // Tapping one card flips any other open card back.
      cards.forEach((other) => {
        if (other !== card) {
          other.classList.remove("is-flipped");
          other.setAttribute("aria-pressed", "false");
        }
      });
    });
  });
}

/* ---------- Certificates ---------- */
function renderCertificates() {
  const grid = document.getElementById("cert-grid");
  grid.innerHTML = CERTIFICATES.map((cert, index) => {
    const meta = `<div class="cert-card__meta"><span>${cert.issuer}</span></div>`;
    const desc = cert.description
      ? `<p class="cert-card__desc">${cert.description}</p>`
      : "";

    if (cert.image) {
      return `
      <li>
        <button class="cert-card" type="button" data-cert-index="${index}"
                aria-haspopup="dialog" aria-label="View certificate: ${cert.title}">
          <span class="cert-card__thumb"><img src="${cert.image}" alt="" loading="lazy"></span>
          <span class="cert-card__body">
            <h3>${cert.title}</h3>
            ${meta}
            ${desc}
            <span class="cert-card__hint">View certificate</span>
          </span>
        </button>
      </li>`;
    }
    return `
    <li>
      <div class="cert-card">
        <div class="cert-card__body">
          <h3>${cert.title}</h3>
          ${meta}
          ${desc}
        </div>
      </div>
    </li>`;
  }).join("");

  grid.querySelectorAll("[data-cert-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const cert = CERTIFICATES[Number(button.dataset.certIndex)];
      openLightbox(cert.image, cert.title, button);
    });
  });
}

/* ---------- Lightbox ---------- */
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxClose = document.getElementById("lightbox-close");
let lightboxTrigger = null;

function openLightbox(src, caption, trigger) {
  lightboxTrigger = trigger;
  lightboxImage.src = src;
  lightboxImage.alt = caption;
  lightboxCaption.textContent = caption;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.src = "";
  document.body.style.overflow = "";
  if (lightboxTrigger) lightboxTrigger.focus();
  lightboxTrigger = null;
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
});

/* ---------- Projects & filters ---------- */
function renderProjects() {
  const grid = document.getElementById("project-grid");
  grid.innerHTML = PROJECTS.map((project) => {
    const tags = project.tags.map((tag) => `<span>${tag}</span>`).join("");
    const stack = (project.stack || []).map((item) => `<span>${item}</span>`).join("");
    const links = (project.links || [])
      .map((link) => `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label}</a>`)
      .join("");
    const thumb = project.thumb
      ? `<div class="project-card__thumb"><img src="${project.thumb}" alt="" loading="lazy"></div>`
      : "";

    return `
    <li class="project-card" data-tags="${project.tags.join(" ")}">
      ${thumb}
      <div class="project-card__body">
        <div class="project-card__tags">${tags}</div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        ${stack ? `<div class="project-card__stack">${stack}</div>` : ""}
        ${links ? `<div class="project-card__links">${links}</div>` : ""}
      </div>
    </li>`;
  }).join("");
}

function initFilters() {
  const buttons = document.querySelectorAll(".filters__button");
  const cards = document.querySelectorAll(".project-card");
  const photoGrid = document.getElementById("photo-grid");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
      const filter = button.dataset.filter;

      // The flip-card photo grid stands in for photography projects.
      photoGrid.hidden = !(filter === "all" || filter === "photography");

      cards.forEach((card) => {
        const matches =
          filter === "all" || card.dataset.tags.split(" ").includes(filter);
        if (matches) {
          const wasHidden = card.classList.contains("is-hidden");
          card.classList.remove("is-hidden");
          if (wasHidden && !prefersReducedMotion.matches) {
            card.classList.add("is-entering");
            requestAnimationFrame(() =>
              requestAnimationFrame(() => card.classList.remove("is-entering"))
            );
          }
        } else {
          card.classList.add("is-hidden");
        }
      });
    });
  });
}

/* ---------- Social links ---------- */
function renderSocialLinks() {
  const list = document.getElementById("social-links");
  list.innerHTML = SOCIAL_LINKS.map(
    (link) => `
    <li>
      <a href="${link.url}" aria-label="${link.label}" target="_blank" rel="noopener noreferrer">
        ${ICONS[link.icon]}
      </a>
    </li>`
  ).join("");
}

/* ---------- Scroll reveals ---------- */
function initReveals() {
  const revealElements = [...document.querySelectorAll(".reveal")];
  if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
    revealElements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const pending = new Set(revealElements);

  const show = (el) => {
    el.classList.add("is-visible");
    pending.delete(el);
    observer.unobserve(el);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) show(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  // Reveal anything currently on screen. Runs at load and on scroll as a
  // plain fallback, so content never stays hidden in embedded browsers
  // where IntersectionObserver misbehaves.
  const sweep = () => {
    pending.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) show(el);
    });
  };

  revealElements.forEach((el) => observer.observe(el));
  sweep();
  window.addEventListener("scroll", sweep, { passive: true });
}

/* ---------- Nav border on scroll ---------- */
function initHeader() {
  const header = document.querySelector(".site-header");
  const update = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* ---------- Footer year ---------- */
document.getElementById("footer-year").textContent = new Date().getFullYear();

/* ---------- Boot ---------- */
renderPhotos();
renderCertificates();
renderProjects();
initFilters();
renderSocialLinks();
initReveals();
initHeader();
