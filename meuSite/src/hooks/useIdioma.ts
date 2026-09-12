import { useContext } from "react";
import { IdiomaContext } from "../contexts/idioma-context";

export function useIdioma() {
  const contexto = useContext(IdiomaContext);

  if (!contexto) {
    throw new Error("useIdioma precisa ser usado dentro de IdiomaProvider");
  }

  return contexto;
}
