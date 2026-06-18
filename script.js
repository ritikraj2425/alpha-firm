const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const header = document.querySelector("[data-header]");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    nav.classList.toggle("is-open", !isOpen);
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navToggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    }
  });
}

const observer = new IntersectionObserver(
  ([entry]) => {
    header?.classList.toggle("is-scrolled", !entry.isIntersecting);
  },
  { threshold: 0.01 }
);

const hero = document.querySelector(".hero");
if (hero) {
  observer.observe(hero);
}
