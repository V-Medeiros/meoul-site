import {createContext, ReactNode, useReducer } from "react";

export type EstadoJanela = "fechada" | "aberta" | "minimizada";

export type Stage = {
    id: string;
    nome: string;
    estado: EstadoJanela;
}

type AcaoJanela =
    | { type: "ABRIR"; id: string }
    | { type: "FECHAR"; id: string }
    | { type: "MINIMIZAR"; id: string }
    | { type: "ALTERNAR_TASKBAR"; id: string };

type JanelasContextType = {
    janelas: Stage[];
    abrir: (id: string) => void
    fechar: (id: string) => void
    minimizar: (id: string) => void
    alternarPelaTaskbar: (id: string) => void
}

const janelasIniciais: Stage[] = [
    {
        id: "projetos",
        nome: "Projetos",
        estado: "fechada",
    },
    {
        id: "sobre",
        nome: "Sobre mim",
        estado: "fechada",
    },
    {
        id: "contato",
        nome: "Contato",
        estado: "fechada",
    },
]

function janelasReducer(
    janelas: Stage[], action: AcaoJanela,): Stage[] {
    return janelas.map((janela) => {
        if (janela.id !== action.id) {
            return janela;
        }

        switch (action.type) {
            case "ABRIR":
                return {
                    ...janela,
                    estado: "aberta",
                };

            case "FECHAR":
                return {
                    ...janela,
                    estado: "fechada",
                };

            case "MINIMIZAR":
                return {
                    ...janela,
                    estado: "minimizada",
                };

            case "ALTERNAR_TASKBAR":
                return {
                    ...janela,
                    estado:
                        janela.estado === "aberta"
                            ? "minimizada"
                            : "aberta",
                };
        }
    });
}

const JanelasContext = createContext<JanelasContextType | null>(null);

type JanelasProviderProps = {
    children: ReactNode
}

export function JanelasProvider({ children }: JanelasProviderProps) {
    const [janelas, dispatch] = useReducer(janelasReducer, janelasIniciais)



function abrir(id: string) {
    dispatch({
        type: "ABRIR",
        id
    });
}
function fechar(id: string) {
    dispatch({
        type: "FECHAR",
        id
    });
}
function minimizar(id: string) {
    dispatch({
        type: "MINIMIZAR",
        id
    });
}
function alternarPelaTaskbar(id: string) {
    dispatch({
        type: "ALTERNAR_TASKBAR",
        id
    });

   
}

return(
    <JanelasContext.Provider value={{janelas,abrir,fechar,minimizar,alternarPelaTaskbar}}>
        {children}
    </JanelasContext.Provider>
)
}