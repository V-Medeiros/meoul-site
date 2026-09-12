import { createContext } from "react";

export type EstadoJanela = "fechada" | "aberta" | "minimizada";

export type Stage = {
  id: string;
  nome: string;
  estado: EstadoJanela;
};

export type JanelasContextType = {
  janelas: Stage[];
  abrir: (id: string, nome: string) => void;
  fechar: (id: string) => void;
  minimizar: (id: string) => void;
  alternarPelaTaskbar: (id: string) => void;
};

export const JanelasContext = createContext<JanelasContextType | null>(null);
