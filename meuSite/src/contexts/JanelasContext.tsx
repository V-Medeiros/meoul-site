import {
  createContext,
  type ReactNode,
  useReducer,
} from "react";

export type EstadoJanela = "fechada" | "aberta" | "minimizada";

export type Stage = {
  id: string;
  nome: string;
  estado: EstadoJanela;
};

type AcaoJanela =
  | { type: "ABRIR"; id: string; nome: string }
  | { type: "FECHAR"; id: string }
  | { type: "MINIMIZAR"; id: string }
  | { type: "ALTERNAR_TASKBAR"; id: string };

export type JanelasContextType = {
  janelas: Stage[];
  abrir: (id: string, nome: string) => void;
  fechar: (id: string) => void;
  minimizar: (id: string) => void;
  alternarPelaTaskbar: (id: string) => void;
};

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
    id: "experiencia",
    nome: "Experiência",
    estado: "fechada",
  },
  {
    id: "habilidades",
    nome: "Habilidades",
    estado: "fechada",
  },
  {
    id: "curriculo",
    nome: "Curriculo",
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
// Exportado para o hook useJanelas, que fica em um arquivo separado.
// eslint-disable-next-line react-refresh/only-export-components
export const JanelasContext =
  createContext<JanelasContextType | null>(null);

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
      value={{
        janelas,
        abrir,
        fechar,
        minimizar,
        alternarPelaTaskbar,
      }}
    >
      {children}
    </JanelasContext.Provider>
  );
}
