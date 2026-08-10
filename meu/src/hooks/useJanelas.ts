import { useContext } from "react";
import { JanelasContext } from "../contexts/JanelasContext";

export function useJanelas() {
  const contexto = useContext(JanelasContext);

  if (contexto === null) {
    throw new Error(
      "useJanelas precisa ser usado dentro de JanelasProvider",
    );
  }

  return contexto;
}
