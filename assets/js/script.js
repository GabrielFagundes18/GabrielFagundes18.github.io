const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");
const sections = document.querySelectorAll("main, section");

// Inicialização de tema
const savedTheme = localStorage.getItem("theme") || "dark";
rootHtml.setAttribute("data-theme", savedTheme);
if (savedTheme === "light")
  toggleTheme.classList.replace("bi-sun", "bi-moon-stars");

// Troca de tema otimizada
toggleTheme.addEventListener("click", () => {
  const isDark = rootHtml.getAttribute("data-theme") === "dark";
  const newTheme = isDark ? "light" : "dark";

  rootHtml.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  toggleTheme.classList.toggle("bi-sun");
  toggleTheme.classList.toggle("bi-moon-stars");
});

// Accordion
accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    header.parentElement.classList.toggle("active");
  });
});

// Intersection Observer (Menu Ativo)
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        menuLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${id}`,
          );
        });
      }
    });
  },
  { threshold: 0.6 },
);

sections.forEach((section) => {
  if (section.id) observer.observe(section);
});
