import { createContext, ReactNode, useReducer } from "react";

export type EstadoJanela = "fechada" | "aberta" | "minimizada";

export type Janela = {
    id: string;
    nome: string;
    estado: EstadoJanela;
}

type AcaoJanela = 
   | {type: "ABRIR"; id: string}
   | {type: "FECHAR"; id: string}
   | {type: "MINIMIZAR"; id: string}
   | {type: "ALTERNAR_TASKBAR"; id: string};

const janelasIniciais : Janela[] = [
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

function janelasReducer(janelas: Janela[]){
    
}
