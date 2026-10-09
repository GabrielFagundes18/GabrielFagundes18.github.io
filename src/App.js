import "./styles/globals.css";

import { Cursor } from "./components/Cursor/Cursor";
import { Navbar } from "./components/Navbar/Navbar";
import { StatusHUD } from "./components/StatusHUD/StatusHUD";

import { Hero } from "./sections/Hero/Hero";
import { Tech } from "./sections/Tech/Tech";
import { Projects } from "./sections/Projects/Projects";
import { About } from "./sections/About/About";
import { Contact } from "./sections/Contact/Contact";
import { Footer } from "./sections/Footer/Footer";

import { ActiveSectionProvider } from "./lib/ActiveSection";
import { sectionIds } from "./data/navigation";

function App() {
  return (
    <ActiveSectionProvider ids={sectionIds}>
      <a href="#main" className="skip-link">
        Pular para o conteúdo
      </a>
      <Cursor />
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Tech />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <StatusHUD />
    </ActiveSectionProvider>
  );
}

export default App;
