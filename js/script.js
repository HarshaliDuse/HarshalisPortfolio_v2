
"use strict";

/* =========================
   1. Project Data
   Edit each project's details and URL here.
   ========================= */

const PROJECTS = [
  {
    cat: "uiux",
    img: "immersive",
    title: "Immersive Experiences",
    sub: "",
    color: "#ffd100",
    alpha: 15,
    url: "#",
    desc: "Exploring a virtual shopping experience for IKEA, making product discovery more interactive and engaging.",
    tags: [
      "Virtual Experience",
      "UX Design",
      "UI Design",
      "Interaction Design"
    ]
  },
  {
    cat: "uiux",
    img: "work-life",
    title: "Women’s Work-Life Balance",
    sub: "",
    color: "#804d9f",
    alpha: 15,
    url: "#",
    desc: "Exploring how working women manage and balance their personal and professional lives.",
    tags: [
      "Information Visualization",
      "Data Analysis",
      "UX Research",
      "Data Visualization"
    ]
  },
  {
    cat: "uiux",
    img: "food-junction",
    title: "Food Junction",
    sub: "(Redesign)",
    color: "#f70936",
    alpha: 15,
    url: "#",
    desc: "Redesigning the food-ordering experience with simpler navigation and a seamless user journey.",
    tags: [
      "UX Research",
      "App Redesign",
      "Wireframing",
      "UI Design"
    ]
  },
  {
    cat: "uiux",
    img: "kia-seltos",
    title: "KIA Seltos",
    sub: "(Usability Testing)",
    color: "#a6c3c5",
    alpha: 100,
    url: "#",
    desc: "Improving the in-car dashboard experience through usability testing to make controls more intuitive, accessible, and easy to use.",
    tags: [
      "Usability Testing",
      "UX Research",
      "UX Analysis",
      "Interaction Design"
    ]
  },
  {
    cat: "uiux",
    img: "pune-metro",
    title: "Pune Metro",
    sub: "(Service Design)",
    color: "#a6c3c5",
    alpha: 100,
    url: "#",
    desc: "Improving the metro journey through a more intuitive & user-focused service experience.",
    tags: [
      "Service Design",
      "UX Research",
      "User Journey",
      "UI/UX"
    ]
  },
  {
    cat: "uiux",
    img: "burgergo",
    title: "BurgerGo",
    sub: "(App Design)",
    color: "#ff7622",
    alpha: 15,
    url: "#",
    desc: "Designing a convenient food-ordering experience with intuitive navigation and a smooth, user-friendly interface.",
    tags: [
      "UX Research",
      "App Redesign",
      "Wireframing",
      "UI Design"
    ]
  },
  {
    cat: "uiux",
    img: "accessibility",
    title: "Accessibility Design",
    sub: "",
    color: "#a551f8",
    alpha: 15,
    url: "#",
    desc: "Designing a clear, inclusive, and user-friendly interface for everyone.",
    tags: [
      "UI Design",
      "Accessibility",
      "Inclusive Design",
      "Visual Design"
    ]
  },
  {
    cat: "uiux",
    img: "burud-ali",
    title: "Burud Ali",
    sub: "( Case Study)",
    color: "#b78759",
    alpha: 15,
    url: "#",
    desc: "An ethnographic study exploring the community, culture, and everyday experiences of Burud Ali.",
    tags: [
      "Ethnographic Research",
      "User Research",
      "Field Study",
      "Case Study"
    ]
  },
  {
    cat: "web",
    img: "unique-flowers",
    title: "Unique Flowers",
    sub: "(Web Design)",
    color: "#fad0c6",
    alpha: 20,
    url: "#",
    desc: "Making flower discovery and online ordering simple, elegant, and enjoyable.",
    tags: [
      "UX Design",
      "UI Design",
      "Wireframing",
      "Prototyping"
    ]
  },
  {
    cat: "graphic",
    img: "maheshwar",
    title: "Maheshwar — Case Study",
    sub: "",
    color: "#fad0c6",
    alpha: 20,
    url: "#",
    desc: "An exploration of Maheshwar’s rich cultural heritage, historical architecture, and traditions shaped by the Holkar dynasty and Rajmata Ahilya Devi Holkar.",
    tags: [
      "Cultural Research",
      "Ethnographic Study",
      "Historical Research",
      "Visual Documentation"
    ]
  }
];

/* =========================
   2. Utility Functions
   ========================= */

const esc = (value) =>
  value.replace(/[&<>"]/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;"
  })[char]);

/* =========================
   3. Render Project Cards
   ========================= */

function renderProjects(grid) {
  grid.innerHTML = PROJECTS.map((project) => `
    <article
      class="card"
      data-cat="${project.cat}"
      data-color="${project.color}"
      data-alpha="${project.alpha}"
    >
      <img
        src="assets/img/${project.img}.jpg"
        alt="${esc(project.title)} project cover"
        loading="lazy"
      >

      <h3>
        ${esc(project.title)}
        ${project.sub ? `<small>${esc(project.sub)}</small>` : ""}
      </h3>

      <p>${esc(project.desc)}</p>

      <div class="tags">
        ${project.tags.map((tag) => `
          <span class="tag">${esc(tag)}</span>
        `).join("")}
      </div>

      <a class="btn btn-solid" href="${project.url}">
        View <i class="ic ic-arrow"></i>
      </a>
    </article>
  `).join("");

  grid.querySelectorAll(".card").forEach((card) => {
    card.style.setProperty("--tc", card.dataset.color);
    card.style.setProperty("--ta", `${card.dataset.alpha}%`);
  });
}

/* =========================
   4. Project Filters
   ========================= */

function initFilters(grid) {
  const tabs = document.querySelectorAll(".filter");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((item) => {
        item.setAttribute(
          "aria-selected",
          String(item === tab)
        );
      });

      const filter = tab.dataset.filter;

      grid.querySelectorAll(".card").forEach((card) => {
        card.hidden =
          filter !== "all" && card.dataset.cat !== filter;
      });
    });
  });
}

/* =========================
   5. Shared Contact Section
   Used on both pages.
   ========================= */

const CONTACT_HTML = `
  <form class="contact-form" id="contact-form" novalidate>
    <img
      class="contact-girl"
      src="assets/img/contact-girl.png"
      alt=""
    >

    <img
      class="paper-plane"
      src="assets/img/paper-plane.png"
      alt=""
    >

    <h2>
      Have an idea?<br>
      Let’s turn it into an
      <span class="accent">experience.</span>
    </h2>

    <p class="open-badge">Open To Full-Time Opportunities</p>

    <label class="field">
      <span>Your Full Name</span>
      <input name="name" autocomplete="name" required>
      <p class="err" aria-live="polite"></p>
    </label>

    <label class="field">
      <span>Your Email</span>
      <input
        name="email"
        type="email"
        autocomplete="email"
        required
      >
      <p class="err" aria-live="polite"></p>
    </label>

    <label class="field">
      <span>Subject</span>
      <input name="subject" required>
      <p class="err" aria-live="polite"></p>
    </label>

    <label class="field">
      <span>Your Message</span>
      <textarea name="message" required></textarea>
      <p class="err" aria-live="polite"></p>
    </label>

    <button class="btn btn-solid" type="submit">
      Submit <i class="ic ic-send"></i>
    </button>

    <p class="form-status" role="status"></p>
  </form>

  <aside class="contact-info">
    <h2>
      Let’s Create<br>
      <u>Impactful</u><br>
      Experiences together.
    </h2>

    <hr>

    <p>
      I’m always open to discussing new project,<br>
      Creative ideas, or opportunities<br>
      to be part of your vision.
    </p>

    <ul class="contact-list">
      <li>
        <span class="dot dot-pin">
          <i class="ic ic-pin"></i>
        </span>
        Pune, India
      </li>

      <li>
        <span class="dot">
          <img src="assets/img/gmail.png" alt="">
        </span>
        <a href="mailto:harshaliduse03@gmail.com">
          harshaliduse03@gmail.com
        </a>
      </li>

      <li>
        <span class="dot dot-phone">
          <i class="ic ic-phone"></i>
        </span>
        <a href="tel:+9011793885">9011793885</a>
      </li>
    </ul>

    <h3>Let’s Connect</h3>

    <div class="socials">
      <a
        class="social li"
        href="https://www.linkedin.com/in/harshali-duse-27a33728b"
        aria-label="LinkedIn"
      >in</a>

      <a
        class="social be"
        href="https://www.behance.net/harshaliduse"
        aria-label="Behance"
      >Bē</a>
    </div>

    <div class="hero-cta">
      <a
        class="btn btn-ghost"
        href="assets/Harshali-Resume.pdf"
        download
      >
        Resume <i class="ic ic-download"></i>
      </a>

      <a class="btn btn-light" href="projects.html">
        View Work <i class="ic ic-arrow"></i>
      </a>
    </div>
  </aside>
`;

/* =========================
   6. Contact Form Validation
   ========================= */

function initContactForm(form) {
  const rules = {
    name: (value) =>
      value.trim() ? "" : "Please enter your name.",

    email: (value) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? ""
        : "Please enter a valid email address.",

    subject: (value) =>
      value.trim() ? "" : "Please add a subject.",

    message: (value) =>
      value.trim().length >= 10
        ? ""
        : "Please write at least 10 characters."
  };

  const check = (field) => {
    const message = rules[field.name](field.value);
    const container = field.closest(".field");

    container.classList.toggle("invalid", Boolean(message));
    container.querySelector(".err").textContent = message;

    return !message;
  };

  form.querySelectorAll("input, textarea").forEach((field) => {
    field.addEventListener("blur", () => check(field));
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const status = form.querySelector(".form-status");

    const isValid = [
      ...form.querySelectorAll("input, textarea")
    ].map(check).every(Boolean);

    if (!isValid) {
      status.textContent = "";

      form
        .querySelector(".invalid input, .invalid textarea")
        ?.focus();

      return;
    }

    // A form service or backend is required to deliver messages.
    status.textContent =
      "Thanks! Your message is ready to send — connect a form service to deliver it.";

    form.reset();
  });
}

/* =========================
   7. Initialize the Page
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  const contact = document.getElementById("contact");

  if (contact) {
    contact.innerHTML = CONTACT_HTML;

    initContactForm(
      contact.querySelector("form")
    );
  }

  const grid = document.getElementById("project-grid");

  if (grid) {
    renderProjects(grid);
    initFilters(grid);
  }

  // Prevent placeholder links from jumping to the top.
  document.addEventListener("click", (event) => {
    if (event.target.closest('a[href="#"]')) {
      event.preventDefault();
    }
  });
});
