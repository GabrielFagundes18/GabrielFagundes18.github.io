import "./styles/globals.css";

import { Cursor } from "./components/Cursor/Cursor";
import { Navbar } from "./components/Navbar/Navbar";
import { StatusHUD } from "./components/StatusHUD/StatusHUD";
import { Footer } from "./components/Footer/Footer";

import { Home } from "./pages/Home/Home";

import { ActiveSectionProvider } from "./contexts/ActiveSectionContext";
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
        <Home />
      </main>
      <Footer />
      <StatusHUD />
    </ActiveSectionProvider>
  );
}

export default App;
