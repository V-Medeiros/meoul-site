import { useEffect, useState, type ReactNode } from "react";
import {
  IdiomaContext,
  textosEn,
  textosPt,
  type ChaveTexto,
  type Idioma,
} from "./idioma-context";

export function IdiomaProvider({ children }: { children: ReactNode }) {
  const [idioma, setIdioma] = useState<Idioma>("en");

  useEffect(() => {
    document.documentElement.lang = idioma === "pt" ? "pt-BR" : "en";
  }, [idioma]);

  function alternarIdioma() {
    setIdioma((atual) => (atual === "en" ? "pt" : "en"));
  }

  function traduzir(chave: ChaveTexto) {
    return idioma === "en" ? textosEn[chave] : textosPt[chave];
  }

  return (
    <IdiomaContext.Provider value={{ idioma, alternarIdioma, traduzir }}>
      {children}
    </IdiomaContext.Provider>
  );
}
