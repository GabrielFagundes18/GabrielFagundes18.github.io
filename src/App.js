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

function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Tech />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <StatusHUD />
    </>
  );
}

export default App;
