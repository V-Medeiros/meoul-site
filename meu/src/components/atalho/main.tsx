import { useState } from "react";
import styles from "./style.module.css";
import { Janela } from "../janela/main";

type AtalhoProps = {
  nome: string;
  top: number;
  left: number;
  width: number;
  height: number;
};

export function Atalho({ nome, top, left, width, height }: AtalhoProps) {
  const [estado, setEstado] = useState(false);

  function handleClick() {
    setEstado((estadoAtual) => !estadoAtual);
  }

  return (
    <div className={styles.atalho}>
      <button
        className={estado ? styles.circleIcon : styles.icon}
        onClick={handleClick}
      />

      <p>{nome}</p>

      {estado && <Janela top={top} left={left} width={width} height={height} />}
    </div>
  );
}