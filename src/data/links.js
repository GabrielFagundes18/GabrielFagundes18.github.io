// Fonte única de todos os links externos do site. As URLs do GitHub são
// montadas a partir de GITHUB_USER, então o usuário aparece em um só lugar.
export const GITHUB_USER = "GabrielFagundes18";

const githubProfile = `https://github.com/${GITHUB_USER}`;
const repo = (name) => `${githubProfile}/${name}`;

export const links = {
  github: githubProfile,
  linkedin: "https://www.linkedin.com/in/gabrielfagundesdeoliveira/",
  email: "mailto:gabrielfagundesvv@gmail.com",
  resume: "/curriculo-gabriel-fagundes.pdf",
};

export const projectLinks = {
  patasEmCasa: {
    deploy: "https://patas-em-casa-ruby.vercel.app/",
    repo: repo("Patas-em-Casa"),
    apiRepo: repo("Patas-em-casa-backend"),
  },
  goldenRazor: {
    deploy: "https://golden-razor-barbearia-wp48.vercel.app/",
    repo: repo("GOLDEN-RAZOR-BARBEARIA"),
    apiRepo: repo("GOLDEN-RAZOR-BARBEARIA-backend"),
  },
  ninjaBurgerDashboard: {
    // O domínio ainda usa o nome antigo do projeto na Vercel ("deshboard").
    // Troque aqui quando o projeto for renomeado no painel.
    deploy: "https://deshboard-hamburgueria-admin.vercel.app/",
    repo: repo("Dashboard-Hamburgueria-Admin"),
    apiRepo: repo("Dashboard-Hamburgueria-Backend"),
  },
  ninjaBurgerCardapio: {
    deploy: "https://hamburgueria-gamma-five.vercel.app/",
    repo: repo("Hamburgueria"),
    apiRepo: repo("backend-Hamburgueria"),
  },
  ecoLibrary: {
    repo: repo("ProjetoBibliotecaJava"),
  },
};
