import { useJanelas } from "../../hooks/useJanelas";
import styles from "./style.module.css";
import { Janela } from "../janela/main";

type AtalhoProps = {
  id: string;
  nome: string;
  descricao: React.ReactNode;
  top: number;
  left: number;
  width: number;
  height: number;
};

export function Atalho({
  id,
  nome,
  top,
  left,
  width,
  height,
  descricao,
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
        onClick={() => abrir(id)}
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
