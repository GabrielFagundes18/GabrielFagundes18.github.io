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





window.addEventListener("load", function() {
  const logo = document.getElementById("main-logo");
  const text = document.getElementById("welcome-text");
  const preloader = document.getElementById("preloader");

  // 1. Tempo total que a logo fica pulsando (ex: 2.5 segundos)
  setTimeout(() => {
    // Esconde a logo suavemente
    logo.style.display = "none";
    
    // 2. Mostra o texto de boas-vindas
    text.style.display = "block";
    setTimeout(() => {
      text.style.opacity = "1";
    }, 50); // Pequeno atraso para o efeito de fade funcionar

    // 3. Tempo que o texto fica na tela antes de sumir (ex: 2 segundos)
    setTimeout(() => {
      preloader.classList.add("hidden");
    }, 3000); 

  }, 2500); 
});




document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        threshold: 0.2 // Começa quando 20% da seção aparecer
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Agora selecionamos também os itens de tecnologia
    const elementsToAnimate = document.querySelectorAll(
        '.projects__card, .card__buttons, .technologies__item, .projects__container > a'
    );

    elementsToAnimate.forEach((el) => observer.observe(el));
});




