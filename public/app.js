const header = document.querySelector("[data-header]");
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");
const navLinks = document.querySelectorAll(".nav a");

function setMenuState(isOpen) {
  if (!header || !toggle) return;

  header.classList.toggle("is-open", isOpen);
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.setAttribute("aria-label", isOpen ? "Закрыть меню" : "Открыть меню");
  document.documentElement.classList.toggle("nav-open", isOpen);
}

if (header && toggle && nav) {
  toggle.addEventListener("click", () => {
    setMenuState(!header.classList.contains("is-open"));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuState(false);
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (!header.contains(target)) setMenuState(false);
  });

  window.matchMedia("(min-width: 721px)").addEventListener("change", (event) => {
    if (event.matches) setMenuState(false);
  });
}
