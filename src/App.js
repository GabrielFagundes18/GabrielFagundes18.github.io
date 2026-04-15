// 1. Estilos Globais (Sempre no topo para garantir a base do design)
import "./styles/globals.css";

// 2. Componentes de UI/Layout (Elementos que aparecem em múltiplas páginas ou estruturais)
import { Navbar } from "./components/Navbar/Navbar";

// 3. Seções da Página (Seguindo a ordem visual de renderização)
import { Hero } from "./sections/Hero/Hero";
import { Tech } from "./sections/Tech/Tech";
import { Projects } from "./sections/Projects/Projects";
import { About } from "./sections/About/About";
import { Contact } from "./sections/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Tech />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer
        style={{
          padding: "40px 20px",
          textAlign: "center",
          borderTop: "1px solid var(--border)",
          fontSize: "0.8rem",
          color: "var(--text-dim)",
        }}
      >
        © 2026 Gabriel Oliveira. Desenvolvido com React 19.
      </footer>
    </>
  );
}

export default App;
