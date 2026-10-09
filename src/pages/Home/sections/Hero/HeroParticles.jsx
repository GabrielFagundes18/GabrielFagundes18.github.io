import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const options = {
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" },
      onClick: { enable: true, mode: "push" },
    },
    modes: {
      grab: { distance: 250, links: { opacity: 0.3, color: "#5eead4" } },
    },
  },
  particles: {
    color: { value: "#5eead4" },
    links: {
      enable: true,
      distance: 150,
      color: "#5eead4",
      opacity: 0.15,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.4,
      outModes: { default: "bounce" },
    },
    number: { value: 80, density: { enable: true } },
    opacity: { value: 0.25 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
  },
  detectRetina: true,
};

// Carregado sob demanda (React.lazy) e só em telas grandes, para não
// pesar o bundle inicial nem a navegação no celular.
export default function HeroParticles({ className }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine((engine) => loadSlim(engine)).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <div className={className} aria-hidden="true">
      <Particles id="tsparticles" options={options} />
    </div>
  );
}
