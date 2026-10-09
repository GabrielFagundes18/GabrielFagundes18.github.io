import { projectLinks } from "./links";

import patas640 from "../assets/projects/patas-em-casa-640.webp";
import patas1200 from "../assets/projects/patas-em-casa-1200.webp";
import golden640 from "../assets/projects/golden-razor-640.webp";
import golden1200 from "../assets/projects/golden-razor-1200.webp";
import dashboard640 from "../assets/projects/ninja-burger-dashboard-640.webp";
import dashboard1200 from "../assets/projects/ninja-burger-dashboard-1200.webp";
import cardapio640 from "../assets/projects/ninja-burger-cardapio-640.webp";
import cardapio1200 from "../assets/projects/ninja-burger-cardapio-1200.webp";
import library640 from "../assets/projects/ecolibrary-640.webp";
import library1200 from "../assets/projects/ecolibrary-1200.webp";

const image = (small, large, alt) => ({
  src: large,
  srcSet: `${small} 640w, ${large} 1200w`,
  alt,
});

// Ordem: do mais complexo para o mais simples. O projeto com
// `featured: true` aparece em destaque, em um card maior no topo.
export const projects = [
  {
    id: "patas-em-casa",
    title: "Patas em Casa",
    category: "Full Stack · ONG de proteção animal",
    featured: true,
    problem:
      "Site público e painel administrativo para uma ONG: quem quer adotar encontra o pet e envia o pedido de pré-adoção; a equipe gerencia animais, pedidos, doações e voluntários em um só lugar.",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "Mercado Pago"],
    challenge:
      "Filtros combináveis salvos na URL (/adotar?especie=gato&urgente=1), para a busca poder ser compartilhada, e uma API com permissões por cargo, sessão renovada por cookie com proteção CSRF e testes de integração.",
    image: image(
      patas640,
      patas1200,
      "Página inicial do Patas em Casa com cão e gato e botões “Quero adotar” e “Quero doar”"
    ),
    links: projectLinks.patasEmCasa,
  },
  {
    id: "golden-razor",
    title: "Golden Razor",
    category: "Full Stack · Gestão de barbearia",
    problem:
      "Sistema para barbearia com agendamento online, programa de fidelidade, venda de produtos e painéis separados para cliente, barbeiro e administrador.",
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Clerk"],
    challenge:
      "Agendamento em etapas que consulta os horários já ocupados para impedir conflitos, com rotas protegidas por papel (cliente, barbeiro e admin) no front-end e na API.",
    image: image(
      golden640,
      golden1200,
      "Página inicial da Golden Razor com o botão “Reservar experiência”"
    ),
    links: projectLinks.goldenRazor,
  },
  {
    id: "ninja-burger-dashboard",
    title: "Ninja Burger Dashboard",
    category: "Full Stack · Painel administrativo",
    problem:
      "Painel de gestão de uma hamburgueria: registra pedidos no balcão, mostra a fila da cozinha e acompanha vendas e produtos mais vendidos em tempo real.",
    stack: ["React", "Styled Components", "Node.js", "Express", "PostgreSQL"],
    challenge:
      "Pedidos gravados em transação SQL (BEGIN/COMMIT/ROLLBACK), para nunca salvar um pedido sem itens, e alerta visual para pedidos esperando há mais de 15 minutos.",
    image: image(
      dashboard640,
      dashboard1200,
      "Painel de controle do Ninja Burger com cards de pedidos e monitor de pedidos em aberto"
    ),
    links: projectLinks.ninjaBurgerDashboard,
  },
  {
    id: "ninja-burger-cardapio",
    title: "Ninja Burger Cardápio",
    category: "Full Stack · Pedidos online",
    problem:
      "Cardápio digital em que o cliente monta o carrinho e finaliza o pedido de delivery pelo celular.",
    stack: ["React", "Axios", "API ViaCEP", "Node.js", "Express", "PostgreSQL"],
    challenge:
      "Checkout com regras de negócio: bloqueia o pedido quando a loja está fechada e confere pelo CEP se o bairro está dentro da área de entrega.",
    image: image(
      cardapio640,
      cardapio1200,
      "Página inicial do cardápio Ninja Burger com foto de hambúrguer e botão “Fazer pedido”"
    ),
    links: projectLinks.ninjaBurgerCardapio,
  },
  {
    id: "ecolibrary",
    title: "EcoLibrary",
    category: "Java · Projeto acadêmico de POO",
    problem:
      "Sistema de biblioteca para cadastrar clientes, emprestar e devolver livros, sabendo sempre quem está com cada exemplar.",
    stack: ["Java", "Swing (JOptionPane)", "Collections"],
    challenge:
      "Camadas separadas em modelos, repositórios e serviço, com injeção de dependência pelo construtor e herança a partir da classe abstrata ItemBiblioteca.",
    image: image(
      library640,
      library1200,
      "Diagrama das classes do projeto: ItemBiblioteca, Livro, Clientes, repositórios e BibliotecaService"
    ),
    links: projectLinks.ecoLibrary,
  },
];
