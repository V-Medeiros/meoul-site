import { createContext, ReactNode, useState } from "react";

export type EstadoJanela = "fechada"|"aberta"|"minimizada";

export type JanelaDesktop = {
    id: string;
    nome: string;
    estado: EstadoJanela;
}

type JanelasContextValue = {
    janelas : JanelaDesktop[];
    abrir: (id: string) => void;
    fechar: (id: string) => void;
    minimizar: (id: string) => void;
    alerarPelaTaskbar: (id: string) => void;
}

const JanelasContext = createContext<JanelasContextValue | null>(null);

export function JanelasProvider({children} : {children: ReactNode}){
    const [janelas, setJanelas] = useState(janelasIniciais);

    
}