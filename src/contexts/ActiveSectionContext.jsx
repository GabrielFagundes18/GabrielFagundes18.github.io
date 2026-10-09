import { createContext, useContext, useEffect, useState } from "react";

// A área observada é uma faixa fina no centro vertical da viewport: a
// seção ativa é a que está cruzando o meio da tela, qualquer que seja a
// altura dela. Comparar `intersectionRatio` não serve aqui: uma seção
// curta sempre teria proporção visível maior que uma longa.
const CENTER_BAND = "-49% 0px -50% 0px";

const ActiveSectionContext = createContext(null);

function containsViewportCenter(element) {
  const center = window.innerHeight / 2;
  const { top, bottom } = element.getBoundingClientRect();
  return top <= center && bottom >= center;
}

function isAtPageBottom() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  return scrollTop + clientHeight >= scrollHeight - 2;
}

export function ActiveSectionProvider({ ids, children }) {
  const [activeId, setActiveId] = useState(ids[0]);
  const idsKey = ids.join(",");

  useEffect(() => {
    const elements = idsKey
      .split(",")
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (elements.length === 0) return undefined;

    const intersecting = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) intersecting.add(entry.target);
          else intersecting.delete(entry.target);
        });

        const candidates = [...intersecting];
        const current =
          candidates.find(containsViewportCenter) ?? candidates[0];
        if (current) setActiveId(current.id);
      },
      { rootMargin: CENTER_BAND, threshold: 0 }
    );

    // No fim da página a última seção pode ser curta demais para chegar
    // ao centro da tela; nesse caso ela é marcada como ativa.
    const lastElement = elements[elements.length - 1];
    const handleScroll = () => {
      if (isAtPageBottom()) setActiveId(lastElement.id);
    };

    elements.forEach((element) => observer.observe(element));
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [idsKey]);

  return (
    <ActiveSectionContext.Provider value={activeId}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  return useContext(ActiveSectionContext);
}
