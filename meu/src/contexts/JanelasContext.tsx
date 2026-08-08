import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

export type EstadoJanela = "fechada" | "aberta" | "minimizada";

export type JanelaDesktop = {
  id: string;
  nome: string;
  estado: EstadoJanela;
};

type JanelasContextValue = {
  janelas: JanelaDesktop[];
  abrir: (id: string) => void;
  fechar: (id: string) => void;
  minimizar: (id: string) => void;
  alternarPelaTaskbar: (id: string) => void;
};

const JanelasContext = createContext<JanelasContextValue | null>(null);

const janelasIniciais: JanelaDesktop[] = [
  { id: "sobre", nome: "Sobre mim", estado: "fechada" },
  { id: "projetos", nome: "Projetos", estado: "fechada" },
  { id: "experiencia", nome: "Experiência", estado: "fechada" },
  { id: "habilidades", nome: "Habilidades", estado: "fechada" },
  { id: "curriculo", nome: "Currículo", estado: "fechada" },
];

export function JanelasProvider({ children }: { children: ReactNode }) {
  const [janelas, setJanelas] = useState(janelasIniciais);


}