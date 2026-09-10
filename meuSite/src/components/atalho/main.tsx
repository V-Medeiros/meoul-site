import type { CSSProperties } from "react";
import { useJanelas } from "../../hooks/useJanelas";
import styles from "./style.module.css";
import { Janela } from "../janela/main";

type AtalhoProps = {
  id: string;
  nome: string;
  descricao: React.ReactNode;
  top: number;
  left: number;
  width: CSSProperties["width"];
  height: CSSProperties["height"];
  iconeFechado?: string;
  iconeAberto?: string;
  tamanhoIcone?: CSSProperties["backgroundSize"];
};

export function Atalho({
  id,
  nome,
  top,
  left,
  width,
  height,
  descricao,
  iconeFechado,
  iconeAberto,
  tamanhoIcone,
}: AtalhoProps) {
  const { janelas, abrir, fechar, minimizar } = useJanelas();
  const janela = janelas.find((janelaAtual) => janelaAtual.id === id);

  if (!janela) {
    throw new Error(
      `A janela "${id}" não foi cadastrada no JanelasContext.`,
    );
  }

  return (
    <div className={styles.atalho}>
      <button
        className={
          janela.estado !== "fechada" ? styles.circleIcon : styles.icon
        }
        style={{
          backgroundImage: `url("${
            janela.estado !== "fechada"
              ? iconeAberto ?? "/windows-xp-icons/Folder Opened.png"
              : iconeFechado ?? "/windows-xp-icons/Folder Closed.png"
          }")`,
          backgroundSize: tamanhoIcone,
        }}
        onClick={() => abrir(id, nome)}
        type="button"
        aria-label={`Abrir ${nome}`}
      />

      <p>{nome}</p>

      {janela.estado === "aberta" && (
        <Janela
          top={top}
          left={left}
          width={width}
          height={height}
          nome={nome}
          descricao={descricao}
          onMinimize={() => minimizar(id)}
          onClose={() => fechar(id)}
        />
      )}
    </div>
  );
}
