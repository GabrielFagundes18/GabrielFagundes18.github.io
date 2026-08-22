# Portfólio de Gabriel Fagundes

Portfólio pessoal de Gabriel Fagundes Oliveira, construído como uma single-page application (SPA) em React. O site apresenta a atuação como desenvolvedor Full Stack, a stack técnica, projetos publicados, informações profissionais e canais de contato.

> **Nota sobre o escopo:** o pedido original mencionava um site de ONG de proteção animal, com vitrine de pets, filtro e doação via PIX. A implementação encontrada neste repositório é um portfólio de desenvolvedor. Não existem os componentes `PetSection` ou `Donation`, nem cadastro/filtro de animais, PIX, QR Code ou rota de “ver todos”. Esses itens estão registrados em [Próximos passos](#7-próximos-passos-e-pendências), em vez de serem descritos como funcionalidades prontas.

## 1. Visão geral do projeto

### Objetivo

O objetivo atual é funcionar como uma apresentação profissional compacta e navegável. A experiência combina conteúdo editorial, links para projetos reais e uma identidade visual inspirada em terminal/sistema ativo.

### Funcionalidades implementadas

- Hero com apresentação, chamada para a seção de projetos, foto local e ícones orbitais das tecnologias.
- Navegação por âncoras para Home, Stack, Projetos e Sobre, com destaque da seção visível.
- Menu mobile animado, bloqueio de rolagem enquanto aberto e fechamento com `Escape`.
- Seção de tecnologias dividida em Frontend, Backend & DB e Ferramentas & Infra.
- Marquee contínuo em CSS com a lista completa de tecnologias.
- Cards de projetos com imagem, categoria, links para produção e GitHub.
- Preview em `iframe` ao passar o mouse sobre projetos que possuem URL publicada.
- Seção Sobre com biografia, foto, currículo para download e contador de repositórios públicos do GitHub.
- Seção de contato com `mailto:`, redes sociais, localização e indicador de disponibilidade.
- HUD fixo com seção ativa e contador de tempo da sessão.
- Cursor decorativo com mola física em dispositivos com ponteiro preciso.
- Layout responsivo para desktop, tablet e mobile.

### Stack e bibliotecas

- **React 19** e **React DOM 19** para composição da interface.
- **Create React App / `react-scripts` 5.0.1** para desenvolvimento, build e testes.
- **Framer Motion** para entrada em viewport, hover, tap, menu e HUD.
- **GSAP** para a sequência de entrada do Hero.
- **tsParticles** (`@tsparticles/react` e `@tsparticles/slim`) para a rede de partículas interativa.
- **React Parallax Tilt** para inclinação e glare nos cards de projetos e na foto da seção Sobre.
- **Lucide React** e **React Icons** para ícones.
- **CSS Modules** para estilos isolados por componente.
- **Google Fonts** com Space Grotesk, Inter e JetBrains Mono.

## 2. Estrutura de pastas

```text
portNovo/
├── public/
│   ├── index.html                 # HTML base, metadados e ponto de montagem
│   └── gabriel.jpg                # Foto pública usada no Hero e em Sobre
├── src/
│   ├── App.js                     # Composição global da página
│   ├── index.js                   # Entrada React 19 e StrictMode
│   ├── assets/                    # Currículos em PDF importados pelo bundle
│   ├── components/
│   │   ├── Button/                # Botão/âncora com variantes e motion
│   │   ├── Cursor/                # Cursor decorativo para mouse
│   │   ├── Marquee/               # Faixa contínua animada em CSS
│   │   ├── Navbar/                # Navegação desktop e menu mobile
│   │   └── StatusHUD/             # Indicador de seção e uptime da sessão
│   ├── data/
│   │   ├── profile.js             # Perfil, contato, redes e links de navegação
│   │   ├── projects.js            # Catálogo estático de projetos
│   │   └── skills.js              # Skills por categoria e lista achatada
│   ├── lib/
│   │   ├── animations.js          # Variantes compartilhadas do Framer Motion
│   │   ├── icons.jsx              # Mapeamento de nomes para componentes de ícone
│   │   └── useActiveSection.js    # Hook baseado em IntersectionObserver
│   ├── sections/
│   │   ├── Hero/                  # Primeira dobra e apresentação
│   │   ├── Tech/                  # Stack técnica e soft skills
│   │   ├── Projects/              # Projetos selecionados
│   │   ├── About/                 # Biografia e indicadores profissionais
│   │   ├── Contact/               # E-mail e redes sociais
│   │   └── Footer/                # Rodapé e stack do site
│   └── styles/globals.css         # Reset, tokens, tipografia e regras globais
├── package.json                   # Dependências e scripts
└── README.md                     # Esta documentação
```

## 3. Componentes e seções

### `App`

É o componente raiz e não recebe props. Renderiza `Cursor`, `Navbar`, as seis seções dentro de `main`, `Footer` e `StatusHUD`. A ordem do JSX define a ordem visual da SPA. Não há React Router: a navegação é feita por hash (`#home`, `#tech`, `#projects`, `#about`, `#contact`).

### `Hero`

Não recebe props. Usa `profile`, `allSkills`, `Button` e `SkillIcon`.

- **Estado:** `init` indica que o motor do tsParticles terminou de inicializar; `isMobile` reduz partículas e oculta o orbital em telas menores que 768 px.
- **Referências e memoização:** `introRef` limita o contexto do GSAP; `orbStack`, criado com `useMemo`, calcula as posições circulares dos ícones.
- **Lógica:** ao clicar em “Ver Projetos”, altera `window.location.hash` para `projects`. A foto vem de `profile.photo`. Cada skill recebe um ângulo e um raio para ser posicionada ao redor da imagem.
- **Animações:** GSAP orquestra badge, título, descrição e ações em cascata. Framer Motion anima o frame da foto e a entrada/hover dos ícones. tsParticles adiciona partículas conectadas, interação de hover (`grab`) e clique (`push`).
- **Design:** a foto fica em um frame recortado por `clipPath`, com halo radial e rede de ícones para comunicar visualmente a área de atuação. O orbital é removido no mobile para preservar espaço e legibilidade.

### `Tech`

Não recebe props. Consome `skillCategories`, `allSkills` e `softSkills` de `src/data/skills.js`.

- Renderiza o marquee com todas as skills e três colunas categorizadas.
- Usa `staggerContainer`, `fadeUp` e `viewportOnce` para revelar as colunas quando entram na viewport.
- Cada item tem hover com pequena escala e deslocamento horizontal; soft skills usam hover vertical e mudança para a cor de destaque.
- A lista `allSkills` é derivada com `flatMap`, evitando manter uma segunda fonte manual de dados para o Hero.

### `Projects` e `ProjectCard`

`Projects` não recebe props. `ProjectCard` recebe a prop `project`, um objeto com `title`, `url`, `github`, `category` e `image`.

- **Estado:** `isHovered` controla blur/opacidade da imagem, exibição do `iframe` e ocultação do overlay de informações.
- **Lógica:** projetos com URL diferente de `#` exibem preview remoto durante hover. O botão “Acessar” abre a URL em nova aba; o botão com GitHub abre o repositório.
- **Animações:** Framer Motion faz o stagger dos cards e os estados de entrada; `react-parallax-tilt` cria inclinação e glare cyan; o preview usa transição CSS.
- **Performance:** imagens do projeto e `iframe` têm `loading="lazy"`. O `iframe` só é montado durante hover e apenas para projetos publicados.
- **Decisão de dados:** `Calculadora Moderna` usa uma imagem remota comum em vez de uma string Base64 extensa embutida no código, reduzindo ruído e tamanho do módulo.

### `About`

Não recebe props. Usa `profile`, `socials` e um array local de `features`.

- **Estado:** `repoCount` começa em zero e é preenchido pela API pública do GitHub. Se a requisição falhar, o componente usa `12` como fallback visual.
- **Lógica:** encontra o social de GitHub pelo campo `icon`, apresenta currículo com `download` e compõe os blocos de habilidades, formação e experiência.
- **Animações:** a foto usa `scaleIn`, o cartão de status faz fade/slide atrasado e o conteúdo textual usa `slideFromRight`. A foto também usa Tilt/glare.
- **UX:** o texto enfatiza comunicação, resolução de problemas, foco em UX e busca por oportunidade Júnior/estágio; ações de currículo e GitHub ficam próximas da biografia.

### `Contact`

Não recebe props. Usa `profile`, `contact` e `socials`.

- O e-mail é um link `mailto:`; cada rede abre em nova aba com `rel="noreferrer"`.
- Exibe localização e disponibilidade com ícones e estado visual.
- O conteúdo principal entra com `fadeUp`; o card de e-mail sobe levemente no hover.

### `Navbar`

Não recebe props. `isOpen` controla o menu mobile e `scrolled` aplica o estado visual da navegação após 24 px de rolagem.

- Usa `useActiveSection` para destacar a âncora correspondente à seção visível.
- `AnimatePresence` anima a entrada e saída do overlay mobile.
- Bloqueia `document.body` enquanto o menu está aberto, fecha ao clicar em um link e aceita `Escape`.
- O botão de menu alterna `Menu` e `X` com rotação e opacidade.

### `Button`

Props:

| Prop | Tipo | Padrão | Uso |
|---|---|---|---|
| `children` | React node | obrigatório | Conteúdo do botão |
| `variant` | `"primary" \| "outline"` | `"primary"` | Variante visual |
| `className` | string | `""` | Classe adicional |
| `href` | string opcional | ausente | Quando existe, renderiza link animado; sem ela, renderiza botão |
| `...props` | atributos HTML | - | Encaminhados para o elemento final |

Framer Motion aplica elevação no hover e redução de escala no clique. O componente centraliza o padrão visual, mas não impõe `type`, `aria-label` ou `rel`; esses atributos devem ser fornecidos pelo chamador quando necessários.

### `Marquee`

Props: `children` (React node), `speed` (número em segundos, padrão `32`) e `reverse` (booleano, padrão `false`). Duplica o conteúdo, marca o segundo grupo como `aria-hidden` e anima `translateX` em CSS puro. Isso evita trabalho JavaScript por frame. A classe de acessibilidade reduz o movimento ao desativar a animação quando `prefers-reduced-motion` está ativo.

### `Cursor`

Não recebe props. Usa `enabled` para decidir se deve renderizar e `isPointer` para ampliar/alterar o cursor sobre links, botões e elementos com `data-cursor-hover`. `useMotionValue` e `useSpring` suavizam a posição. O componente não aparece em ponteiros coarse/touch nem com movimento reduzido e é apenas decorativo.

### `StatusHUD`

Não recebe props. Reutiliza `useActiveSection` e mantém `uptime` com `setInterval` de um segundo. `formatUptime` transforma milissegundos em `MM:SS`. A entrada usa Framer Motion e o HUD exibe caminho da seção ativa, indicador e duração da sessão.

### `useActiveSection` e animações compartilhadas

`useActiveSection(sectionIds)` recebe uma lista de IDs, observa as seções existentes com `IntersectionObserver` e retorna a mais visível dentro da faixa central da viewport. `animations.js` concentra `fadeUp`, `fadeIn`, `scaleIn`, `slideFromLeft`, `slideFromRight`, `staggerContainer` e `viewportOnce`, mantendo duração, easing e margem de viewport consistentes.

## 4. Estilos e design system

Os estilos específicos ficam em arquivos `*.module.css`; `globals.css` contém reset, base e tokens.

### Tokens principais

| Grupo | Tokens |
|---|---|
| Fundo | `--bg: #0a0e14`, `--bg-elevated: #0d1218`, `--surface: #131a24` |
| Bordas | `--border: #212a38`, `--border-strong: #2c3849` |
| Texto | `--text: #e6ebf2`, `--text-muted: #8992a3`, `--text-faint: #4d5566` |
| Acentos | `--accent: #5eead4` (cyan), `--signal: #fbbf24` (âmbar) |
| Tipografia | `--font-display: Space Grotesk`, `--font-body: Inter`, `--font-mono: JetBrains Mono` |
| Layout | `--container-w: 1180px`, `--nav-h: 84px` |
| Raios | `--radius-sm: 8px`, `--radius-md: 14px`, `--radius-lg: 24px` |

O fundo usa uma grade pontilhada radial sutil. Seções têm `z-index` próprio, espaçamento vertical de 140 px no desktop e 96 px no mobile. Botões primários usam preenchimento cyan e texto escuro; botões outline usam borda forte e assumem cyan no hover. Cards de projeto e foto empregam superfícies escuras, bordas discretas, glare e elevação moderada.

## 5. Acessibilidade e performance

### Implementado

- Documento com `lang="pt-BR"`, viewport, descrição e `theme-color`.
- Textos alternativos nas imagens da foto e dos projetos.
- `aria-label` no botão de menu e nos links sociais do rodapé.
- Segundo grupo do marquee marcado com `aria-hidden="true"` para não duplicar conteúdo assistivo.
- Navegação por links e âncoras nativas, sem substituir o cursor real.
- `prefers-reduced-motion` desativa/reduz animações globais, marquee e cursor.
- Imagens de projetos e previews `iframe` usam carregamento lazy.
- O hero mantém dimensões estáveis com `aspect-ratio` e a foto possui carregamento normal para priorizar a primeira dobra.
- Partículas usam `loadSlim`, quantidade menor no mobile e `detectRetina`.
- Limpeza de listeners, `IntersectionObserver`, intervalo e contexto GSAP nos desmontes.

### Pontos a melhorar

- O código ainda não define estilos explícitos de `:focus-visible`; deve-se adicionar foco visível para teclado.
- O botão de menu informa apenas “Abrir menu” mesmo quando aberto; o rótulo poderia alternar para “Fechar menu” e expor `aria-expanded`.
- `iframe` remoto e imagens externas dependem de terceiros e podem falhar ou impactar privacidade/performance.
- O fallback fixo de repositórios pode ser substituído por estado de carregamento/erro mais transparente.
- Não há suíte de testes implementada no estado atual do repositório.

## 6. Como rodar o projeto

Pré-requisitos: Node.js e npm instalados.

```bash
# entrar na pasta do projeto
cd portNovo

# instalar dependências
npm install

# iniciar o servidor de desenvolvimento
npm start
```

O Create React App abrirá a aplicação em `http://localhost:3000` e recarregará a página após alterações.

Para gerar a versão de produção:

```bash
npm run build
```

O resultado será criado em `build/`. Para executar o test runner do CRA:

```bash
npm test
```

Scripts disponíveis em `package.json`: `start`, `build`, `test` e `eject`. `eject` é uma operação irreversível e não é necessário para o fluxo normal.

## 7. Próximos passos e pendências

### Para transformar o projeto em site de ONG

- Redefinir `profile` e metadados para a identidade da ONG.
- Criar `PetSection` com catálogo de animais, dados de idade/porte/localização e estados de carregamento.
- Implementar filtros por espécie, porte, idade e status de adoção.
- Criar página ou rota de detalhes para “Ver todos os animais” e definir a estratégia de roteamento.
- Criar `Donation` com chave PIX, botão de cópia, feedback acessível e QR Code PIX real.
- Definir backend ou fonte de dados para pets, disponibilidade e contatos.
- Substituir os projetos de portfólio e o texto profissional por histórias, campanhas e resultados da ONG.

### Melhorias gerais do portfólio

- Adicionar foco visível, `aria-expanded` no menu e gerenciamento de foco no overlay.
- Adicionar testes para navegação, menu mobile, fallback do GitHub e cards de projetos.
- Considerar cache ou endpoint próprio para o contador de repositórios.
- Hospedar imagens críticas localmente ou com estratégia de CDN e dimensões responsivas.
- Adicionar Open Graph, favicon existente e metadados sociais completos.
- Avaliar `loading="eager"`, `fetchpriority="high"` e dimensões explícitas para a foto principal caso os dados reais de performance indiquem necessidade.

## Changelog técnico

### Hero

- Criada entrada em cascata para badge, título, descrição e ações com GSAP.
- Adicionada rede de partículas com tsParticles e redução de densidade no mobile.
- Centralizada a fonte de skills em `data/skills.js` e gerado o orbital com `useMemo`.
- Mantida foto local em frame recortado, com ícones orbitais apenas em telas maiores.

### Tech Stack

- Consolidada a lista de tecnologias em categorias e lista achatada reutilizável.
- Adicionado marquee em CSS puro para reduzir custo de animação por frame.
- Adicionadas entradas em stagger e interações de hover nos itens.

### Projects

- Criados cards com Tilt, glare, preview remoto em hover e ações persistentes.
- Imagens dos projetos configuradas com `loading="lazy"`.
- Removida a dependência de uma imagem Base64 extensa da calculadora, usando URL de imagem convencional.

### Base e navegação

- Criados tokens globais de cor, tipografia, espaçamento e raios.
- Adicionado hook de seção ativa com `IntersectionObserver`.
- Criado menu mobile com `AnimatePresence`, `Escape` e bloqueio de rolagem.
- Adicionados cursor decorativo e HUD de status com suporte a movimento reduzido.
