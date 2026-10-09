import { Hero } from "./sections/Hero/Hero";
import { Tech } from "./sections/Tech/Tech";
import { Projects } from "./sections/Projects/Projects";
import { About } from "./sections/About/About";
import { Contact } from "./sections/Contact/Contact";

// A ordem aqui precisa bater com `sections` em src/data/navigation.js,
// que alimenta o menu e o destaque da seção ativa.
export function Home() {
  return (
    <>
      <Hero />
      <Tech />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
