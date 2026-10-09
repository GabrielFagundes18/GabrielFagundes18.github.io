// Ordem igual à das seções na página. `path` é o rótulo exibido no HUD
// e no menu mobile.
export const sections = [
  { id: "home", label: "Home", path: "~/home" },
  { id: "tech", label: "Stack", path: "~/tech-stack" },
  { id: "projects", label: "Projetos", path: "~/projects" },
  { id: "about", label: "Sobre", path: "~/about" },
  { id: "contact", label: "Contato", path: "~/contact" },
];

export const sectionIds = sections.map((section) => section.id);

// "Contato" fica fora da lista porque tem botão próprio no menu.
export const navLinks = sections.filter((section) => section.id !== "contact");
