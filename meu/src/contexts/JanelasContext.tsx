import { createContext } from "react";

export type EsatdoJanela = "fechada" | "aberta" | "minimizada";

export type JanelaDesktop = {
    id: string;
    nome: string;
    estado: EsatdoJanela;
}

type JanelasContextValue = {
    janelas: JanelaDesktop[],
    abrir: (id: string) => void
    fechar: (id: string) => void
    minimizar: (id: string) => void
    alterarPelaTaskbar: (id: string) => void
}

const JanelasContext = createContext<JanelasContextValue | null>(null);