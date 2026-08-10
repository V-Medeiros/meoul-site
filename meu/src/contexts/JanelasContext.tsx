import { createContext, ReactNode, useReducer } from "react";

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
