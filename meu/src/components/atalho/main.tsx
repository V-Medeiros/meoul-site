import { useState } from "react";
import styles from "./style.module.css";
import { Janela } from "../janela/main";

type AtalhoProps = {
  nome: string;
  descricao: React.ReactNode;
  top: number;
  left: number;
  width: number;
  height: number;
};

export function Atalho({ nome, top, left, width, height, descricao }: AtalhoProps) {
  const [estado, setEstado] = useState<"fechada" | "aberta" | "minimizada">(
    "fechada",
  );

  function handleClick() {
    setEstado((estadoAtual) =>
      estadoAtual === "aberta" ? "fechada" : "aberta",
    );
  }

  return (
    <div className={styles.atalho}>
      <button
        className={estado !== "fechada" ? styles.circleIcon : styles.icon}
        onClick={handleClick}
        type="button"
        aria-label={`${estado === "minimizada" ? "Restaurar" : estado === "aberta" ? "Fechar" : "Abrir"} ${nome}`}
      />

      <p>{nome}</p>

      {estado === "aberta" && (
        <Janela
          top={top}
          left={left}
          width={width}
          height={height}
          nome={nome}
          descricao={descricao}
          onMinimize={() => setEstado("minimizada")}
          onClose={() => setEstado("fechada")}
        />
      )}
    </div>
  );
}
