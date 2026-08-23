# Gabriel Fagundes | Portfólio

Portfólio pessoal de **Gabriel Fagundes Oliveira**, desenvolvido como uma Single Page Application (SPA) em React. O site apresenta a atuação profissional, tecnologias, projetos selecionados, informações pessoais e canais de contato em uma interface responsiva com estética inspirada em consoles de desenvolvimento.

## Índice

- [Visão geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Arquitetura](#arquitetura)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Fluxo de execução](#fluxo-de-execução)
- [Tecnologias e dependências](#tecnologias-e-dependências)
- [Configuração e instalação](#configuração-e-instalação)
- [Uso](#uso)
- [Dados, integrações e endpoints](#dados-integrações-e-endpoints)
- [Decisões técnicas](#decisões-técnicas)
- [Testes e qualidade](#testes-e-qualidade)
- [Deploy](#deploy)
- [Contribuição e manutenção](#contribuição-e-manutenção)
- [Roadmap](#roadmap)
- [Licença](#licença)

## Visão geral

### O que o projeto faz

O projeto funciona como uma apresentação profissional online para um desenvolvedor full stack. Ele transforma informações estáticas de perfil e projetos em uma experiência navegável, animada e adaptada a desktop e dispositivos móveis.

### Problema resolvido

Reúne em um único endereço as informações que normalmente ficam espalhadas entre currículo, repositórios e redes sociais. Assim, recrutadores, potenciais clientes e outros desenvolvedores podem conhecer rapidamente o perfil, a stack, os projetos e as formas de contato.

### Público e caso de uso principal

- Recrutadores avaliando uma oportunidade de estágio ou posição júnior.
- Clientes ou parceiros buscando desenvolvimento de aplicações web.
- Pessoas interessadas em consultar os projetos e competências técnicas do autor.

### Identidade apresentada

- **Nome:** Gabriel Fagundes Oliveira
- **Atuação:** Desenvolvedor Full Stack
- **Localização:** Guarulhos, SP, Brasil
- **Disponibilidade:** Desenvolvedor Júnior ou Estagiário
- **Contato:** `gabrielfagundesvv@gmail.com`

## Funcionalidades

- Navegação por âncoras entre Home, Stack, Projetos, Sobre e Contato.
- Navbar responsiva com menu mobile, fechamento por clique externo e tecla `Escape`.
- Destaque automático da seção visível na navbar.
- Hero com apresentação, chamada para os projetos, foto, ícones orbitais e partículas interativas.
- Listagem de tecnologias por categorias de frontend, backend/banco de dados e ferramentas/infraestrutura.
- Marquee contínuo de tecnologias implementado apenas com CSS.
- Lista de soft skills.
- Cards de projetos com imagem, categoria, link externo e repositório GitHub.
- Pré-visualização em iframe no hover quando o projeto possui URL publicada.
- Seção Sobre com biografia, currículo para download, GitHub e contador de repositórios públicos.
- Contato por `mailto:` e links para GitHub, LinkedIn e Instagram.
- HUD fixo que exibe a seção ativa e o tempo da sessão no navegador.
- Cursor decorativo em dispositivos com ponteiro preciso, desativado para toque e `prefers-reduced-motion`.
- Animações de entrada e interação com Framer Motion e GSAP.
- Layout e interações responsivos, com redução de elementos pesados em telas menores.

## Arquitetura

O sistema é um frontend estático client-side. Não há backend próprio, banco de dados, autenticação, roteamento por páginas ou camada de serviços internos.

```text
Navegador
	|
	| carrega public/index.html
	v
ReactDOM (src/index.js)
	|
	v
App (src/App.js)
	|-- componentes globais: Cursor, Navbar, Footer, StatusHUD
	|-- seções: Hero, Tech, Projects, About, Contact
	|-- dados locais: src/data/*.js
	|-- estilos: CSS global + CSS Modules
	|
	|-- GitHub REST API (somente About: contagem de repositórios públicos)
	|-- imagens externas (Cloudinary/Unsplash)
	|-- links externos (projetos, GitHub, LinkedIn, Instagram)
```

### Comunicação entre módulos

1. `src/index.js` cria a raiz React e renderiza `App` dentro de `React.StrictMode`.
2. `App` importa e ordena os componentes globais e as seções da página.
3. As seções importam seus dados de `src/data` e seus estilos CSS Module locais.
4. `Navbar` e `StatusHUD` compartilham o hook `useActiveSection`, que usa `IntersectionObserver` para identificar a seção ativa.
5. `Hero` usa `allSkills`; `Tech` usa `skillCategories`, `allSkills` e `softSkills`; `About`, `Contact` e `Footer` usam os dados de perfil e redes sociais.
6. `lib/icons.jsx` converte nomes de ícones presentes nos dados em componentes de `react-icons`.
7. `lib/animations.js` centraliza variantes reutilizáveis do Framer Motion.

## Estrutura do projeto

```text
.
├── .github/workflows/deploy.yml       # Build e deploy automático no GitHub Pages
├── package.json                        # Dependências, scripts e configuração CRA
├── package-lock.json                   # Lock das versões instaladas pelo npm
├── vite.config.js                     # Configuração Vite presente no repositório
├── public/
│   ├── index.html                      # Template HTML e metadados da aplicação
│   ├── favicon.ico                     # Ícone do site
│   └── gabriel.jpg                     # Foto pública usada pelo perfil
├── src/
│   ├── index.js                        # Entry point React
│   ├── App.js                          # Composição principal da SPA
│   ├── App.css                         # Arquivo legado atualmente vazio
│   ├── index.css                        # Arquivo atualmente vazio
│   ├── assets/
│   │   ├── Gabriel_Fagundes_de_Oliveira_Curriculo.pdf
│   │   ├── Gabriel_FagundesDeOliveira_Currículo.pdf
│   │   └── Gabriel.jpg                  # Assets locais de currículo e imagem
│   ├── components/
│   │   ├── Button/                      # Botão animado, como <a> ou <button>
│   │   ├── Cursor/                      # Cursor decorativo condicionado ao dispositivo
│   │   ├── Marquee/                     # Faixa contínua de tecnologias em CSS
│   │   ├── Navbar/                      # Navegação desktop e menu mobile
│   │   └── StatusHUD/                   # Seção ativa e contador de sessão
│   ├── data/
│   │   ├── profile.js                   # Perfil, contato, redes e links de navegação
│   │   ├── projects.js                  # Catálogo de projetos publicados
│   │   └── skills.js                    # Skills categorizadas, achatadas e soft skills
│   ├── lib/
│   │   ├── animations.js                # Variantes e configurações de animação
│   │   ├── icons.jsx                    # Mapas de ícones e componentes auxiliares
│   │   └── useActiveSection.js          # Hook de observação da seção ativa
│   ├── sections/                        # Seções visíveis da página
│   │   ├── Hero/
│   │   ├── Tech/
│   │   ├── Projects/
│   │   ├── About/
│   │   ├── Contact/
│   │   └── Footer/
│   └── styles/globals.css               # Tokens, reset, fontes e estilos compartilhados
└── README.md                            # Esta documentação
```

Cada diretório de componente/seção contém o arquivo JSX e seu CSS Module (`*.module.css`), mantendo a apresentação próxima da unidade funcional.

## Fluxo de execução

### Inicialização

1. O navegador abre `public/index.html` e cria o elemento `#root`.
2. O bundler executa `src/index.js`.
3. `ReactDOM.createRoot` monta `App` em modo estrito.
4. `App` carrega `globals.css` e renderiza a árvore completa da página.
5. Os efeitos dos componentes registram listeners de scroll, resize, teclado e mouse; `Hero` inicializa o motor slim do tsParticles.

### Navegação e seção ativa

Os links usam hashes (`#home`, `#tech`, `#projects`, `#about` e `#contact`). O `useActiveSection` observa as seções de navegação e atualiza o estado quando uma delas entra na região central da viewport. O mesmo estado alimenta o link ativo da navbar e o caminho exibido no `StatusHUD`.

### Fluxo de projetos

`Projects` percorre o array `projects`. Cada `ProjectCard` exibe a imagem e informações do projeto. No hover, a imagem é atenuada e, se `url !== "#"`, um iframe lazy é montado para pré-visualizar o endereço publicado. Os botões sempre oferecem acesso externo ao projeto e ao GitHub correspondente.

### Fluxo da integração GitHub

Ao montar `About`, um `fetch` sem autenticação consulta `https://api.github.com/users/GabrielFagundes18`. O campo `public_repos` alimenta o contador de repositórios. Em caso de erro, o componente utiliza o fallback `12`. A aplicação continua funcionando mesmo sem essa resposta.

### Pontos de entrada

- **Aplicação:** `src/index.js`
- **Documento HTML:** `public/index.html`
- **Comando de desenvolvimento:** script `start` em `package.json`
- **Build de produção:** script `build` em `package.json`
- **Deploy:** workflow `.github/workflows/deploy.yml`, acionado em push para `main`

## Tecnologias e dependências

As versões abaixo são as faixas declaradas em `package.json`; o `package-lock.json` deve ser a fonte de resolução exata da instalação.

| Tecnologia | Versão declarada | Uso |
| --- | --- | --- |
| JavaScript / JSX | ES Modules | Código da aplicação e componentes |
| React | `^19.2.5` | Modelo de componentes e estado |
| React DOM | `^19.2.5` | Montagem no DOM |
| Create React App | `react-scripts 5.0.1` | Servidor local, build e testes |
| Framer Motion | `^12.38.0` | Animações declarativas e gestos |
| GSAP | `^3.12.5` | Sequência de entrada do Hero |
| tsParticles React | `^3.0.0` | Partículas interativas |
| tsParticles Slim | `^3.9.1` | Engine reduzida do tsParticles |
| React Icons | `^5.6.0` | Ícones de tecnologias e redes |
| Lucide React | `^1.8.0` | Ícones de navegação e ações |
| React Parallax Tilt | `^1.7.323` | Efeito de inclinação em foto e cards |
| Testing Library | versões no `package.json` | Infraestrutura declarada para testes React/DOM |
| Web Vitals | `^2.1.4` | Dependência padrão para métricas web |

As fontes `Space Grotesk`, `Inter` e `JetBrains Mono` são carregadas externamente pelo Google Fonts em `src/styles/globals.css`.

### Dependências externas em runtime

- GitHub REST API para `public_repos`.
- Cloudinary para a imagem do Ninja Burger Dashboard.
- Unsplash para imagens de alguns cards de projetos.
- Sites publicados dos projetos, carregados diretamente ou em iframe.
- GitHub, LinkedIn e Instagram como destinos de links sociais.

Não há variáveis de ambiente, chaves privadas, banco de dados ou API própria configurados no projeto.

## Configuração e instalação

### Pré-requisitos

- Node.js compatível com o ambiente de build. O workflow de produção usa Node.js 20.
- npm, incluído na instalação do Node.js.
- Navegador moderno com suporte a ES Modules, `IntersectionObserver` e CSS moderno.

### Instalação do zero

```bash
git clone <URL-DO-REPOSITÓRIO>
cd GabrielFagundes18.github.io
npm ci
```

Caso o lockfile precise ser atualizado ou não esteja disponível, use `npm install`.

### Variáveis de ambiente

Nenhuma variável de ambiente é necessária atualmente. Não existe arquivo `.env` no repositório. Um arquivo de exemplo não é necessário para executar a versão atual.

### Desenvolvimento

```bash
npm start
```

O Create React App inicia o servidor de desenvolvimento, normalmente em `http://localhost:3000`, com recarregamento automático.

### Build e execução de produção

```bash
npm run build
```

O comando gera a pasta `build/`, ignorada pelo Git. O projeto não inclui um servidor de produção próprio; a pasta deve ser servida por uma hospedagem de arquivos estáticos, como GitHub Pages, Vercel ou um servidor web configurado para SPA.

## Uso

Depois de iniciar o projeto, a página pode ser usada pelos elementos abaixo:

| Ação | Resultado |
| --- | --- |
| Clicar em `Ver Projetos` | Navega para `#projects` |
| Usar a navbar | Move para a seção correspondente |
| Abrir o menu em viewport mobile | Exibe links e ação de contato |
| Passar o mouse sobre um projeto publicado | Tenta carregar uma prévia em iframe |
| Clicar em `Acessar` | Abre a URL publicada do projeto |
| Clicar no botão GitHub | Abre o repositório do projeto |
| Clicar em `Download CV` | Baixa o currículo local configurado |
| Clicar no e-mail | Abre o cliente de e-mail via `mailto:` |

Os projetos atualmente cadastrados são: Ninja Burger Dashboard, Ninja Burger Client, EcoLibrary System e Calculadora Moderna. O EcoLibrary possui `url: "#"`, portanto não tem prévia ou endereço publicado acessível pelo botão principal.

## Dados, integrações e endpoints

### Modelo de dados local

Não existe persistência de dados. Os modelos são módulos JavaScript estáticos:

- `profile`: nome, cargo, usuário GitHub, tagline, biografia, disponibilidade, localização, foto e currículo.
- `contact`: e-mail público.
- `socials`: nome, URL e chave do ícone de cada rede.
- `navLinks`: rótulo, hash, caminho textual e ícone de cada item de navegação.
- `projects`: título, URL publicada, URL do GitHub, categoria e imagem.
- `skillCategories`: categorias com skills, chave do ícone e cor.
- `allSkills`: visão achatada de `skillCategories`, usada no Hero e no marquee.
- `softSkills`: lista de competências comportamentais.

### Endpoint externo consumido

| Método | Rota | Finalidade | Campos usados |
| --- | --- | --- | --- |
| `GET` | `https://api.github.com/users/GabrielFagundes18` | Obter dados públicos do usuário GitHub | `public_repos` |

Não existem endpoints internos, operações de escrita, autenticação, tabelas ou relacionamentos de banco de dados.

## Decisões técnicas

### SPA com componentes por seção

Uma única página é adequada ao objetivo de portfólio: reduz a complexidade de roteamento e mantém a jornada de apresentação contínua. A divisão por seções permite alterar uma área sem espalhar sua implementação pela aplicação.

### Dados separados da apresentação

Perfil, projetos e skills ficam em `src/data`. Isso evita duplicação e permite atualizar conteúdo sem alterar a estrutura dos componentes. O mapa de ícones também fica isolado em `src/lib/icons.jsx`, convertendo chaves simples em componentes visuais.

### CSS Modules e tokens globais

Cada unidade possui estilos encapsulados em CSS Modules, enquanto `globals.css` concentra reset, tipografia, tokens de cor, layout e regras compartilhadas. Essa combinação reduz colisões sem perder uma identidade visual centralizada.

### Animação com responsabilidades distintas

Framer Motion atende transições de componentes, viewport e gestos. GSAP controla a sequência de entrada do Hero. O marquee usa CSS puro para não depender de atualizações JavaScript por frame. Cursor, partículas e tilt são tratados como camadas decorativas e não como requisitos de navegação.

### Limitações e trade-offs conhecidos

- A resposta do GitHub é pública e pode sofrer limite de requisições; há fallback fixo, mas o número pode ficar desatualizado.
- Imagens de Cloudinary e Unsplash dependem de serviços externos e rede disponível.
- iframes podem ser bloqueados por `X-Frame-Options` ou `Content-Security-Policy` do site de destino.
- O e-mail e os links de redes sociais estão hardcoded em `src/data/profile.js`.
- Não há CMS ou painel para atualização de conteúdo.
- O workflow usa `npm install`; para builds reprodutíveis localmente, `npm ci` é preferível.
- `vite.config.js` existe, mas não é usado pelos scripts atuais e referencia `@vitejs/plugin-react`, que não está declarado em `package.json`. O pipeline efetivo é Create React App (`react-scripts`).
- O template possui dependências de Testing Library e o script `test`, mas não há testes no repositório neste momento.

## Testes e qualidade

### Comandos disponíveis

```bash
npm test
npm run build
```

`npm test` inicia o runner de testes do Create React App em modo interativo. Como não existem arquivos de teste versionados, atualmente não há cobertura funcional automatizada documentada. `npm run build` é a verificação mais relevante disponível para confirmar compilação e empacotamento.

### Verificações manuais recomendadas

- Abrir em desktop e mobile.
- Testar navegação, menu mobile e tecla `Escape`.
- Confirmar o download do currículo e os links externos.
- Verificar comportamento sem JavaScript habilitado, em que o template exibe a mensagem de fallback.
- Testar com `prefers-reduced-motion` e com dispositivo de toque.
- Confirmar a resposta da GitHub API e a renderização de cada imagem/iframe.

## Deploy

O workflow [deploy.yml](.github/workflows/deploy.yml) é acionado a cada push para `main` e executa:

1. Checkout do código.
2. Configuração do Node.js 20 com cache npm.
3. `npm install` e `npm run build`.
4. Upload da pasta `./build` como artefato do GitHub Pages.
5. Publicação com `actions/deploy-pages`.

Para habilitar esse fluxo, o repositório precisa ter GitHub Pages configurado para publicação por GitHub Actions e permissões compatíveis com `contents: read`, `pages: write` e `id-token: write`.

## Contribuição e manutenção

1. Crie uma branch descritiva a partir de `main`.
2. Instale as dependências com `npm ci`.
3. Faça a alteração no módulo correspondente.
4. Execute `npm run build` e, quando houver testes, `npm test`.
5. Revise responsividade, acessibilidade, links e dependências externas.
6. Abra um pull request descrevendo comportamento alterado e validações executadas.

Não há um padrão de commits formal configurado no repositório. Recomenda-se usar mensagens curtas e imperativas, por exemplo: `feat: adiciona projeto ao portfólio`, `fix: corrige navegação mobile` e `docs: atualiza instruções de deploy`.

Ao adicionar um projeto, atualize `src/data/projects.js`. Ao adicionar uma tecnologia, atualize `src/data/skills.js` e, se necessário, o mapa correspondente em `src/lib/icons.jsx`. Alterações de perfil, contato ou navegação devem ser feitas em `src/data/profile.js`.

## Roadmap

Não há um roadmap formal registrado no código. Próximas melhorias naturais, coerentes com a base atual, seriam:

- Adicionar testes de renderização e interação para navegação, contato e cards de projetos.
- Resolver a configuração de bundling, removendo `vite.config.js` se o projeto permanecer em Create React App ou migrando de forma completa para Vite.
- Adicionar validação e observabilidade para imagens externas, iframes e GitHub API.
- Introduzir metatags sociais, sitemap e melhorias adicionais de SEO.
- Considerar uma fonte de conteúdo administrável caso as atualizações deixem de ser ocasionais.

## Licença

O `package.json` marca o projeto como privado (`private: true`) e não há arquivo de licença no repositório. Portanto, não existe uma licença open-source formal declarada no estado atual. Defina e adicione uma licença antes de distribuir o código com permissões explícitas.
