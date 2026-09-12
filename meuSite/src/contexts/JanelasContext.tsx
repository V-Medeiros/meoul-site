import { type ReactNode, useReducer } from "react";
import { JanelasContext, type Stage } from "./janelas-context";

type AcaoJanela =
  | { type: "ABRIR"; id: string; nome: string }
  | { type: "FECHAR"; id: string }
  | { type: "MINIMIZAR"; id: string }
  | { type: "ALTERNAR_TASKBAR"; id: string };

const janelasIniciais: Stage[] = [
  {
    id: "projects",
    nome: "Projects",
    estado: "fechada",
  },
  {
    id: "about",
    nome: "About",
    estado: "fechada",
  },
  {
    id: "contact",
    nome: "Contact",
    estado: "fechada",
  },
  {
    id: "tools",
    nome: "Tools",
    estado: "fechada",
  },
  {
    id: "resume",
    nome: "Resumo",
    estado: "aberta",
  },
  {
    id: "curriculum",
    nome: "Currículo",
    estado: "fechada",
  },
  {
    id: "bin",
    nome: "Bin",
    estado: "fechada",
  },
];

function janelasReducer(
  janelas: Stage[],
  action: AcaoJanela,
): Stage[] {
  return janelas.map((janela) => {
    if (janela.id !== action.id) {
      return janela;
    }

    switch (action.type) {
      case "ABRIR":
        return { ...janela, nome: action.nome, estado: "aberta" };

      case "FECHAR":
        return { ...janela, estado: "fechada" };

      case "MINIMIZAR":
        return { ...janela, estado: "minimizada" };

      case "ALTERNAR_TASKBAR":
        return {
          ...janela,
          estado:
            janela.estado === "aberta" ? "minimizada" : "aberta",
        };
    }
  });
}
type JanelasProviderProps = {
  children: ReactNode;
};

export function JanelasProvider({ children }: JanelasProviderProps) {
  const [janelas, dispatch] = useReducer(janelasReducer, janelasIniciais);

  function abrir(id: string, nome: string) {
    dispatch({ type: "ABRIR", id, nome });
  }

  function fechar(id: string) {
    dispatch({ type: "FECHAR", id });
  }

  function minimizar(id: string) {
    dispatch({ type: "MINIMIZAR", id });
  }

  function alternarPelaTaskbar(id: string) {
    dispatch({ type: "ALTERNAR_TASKBAR", id });
  }

  return (
    <JanelasContext.Provider
      value={{ janelas, abrir, fechar, minimizar, alternarPelaTaskbar, }}
    >
      {children}
    </JanelasContext.Provider>
  );
}
