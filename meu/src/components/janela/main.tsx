import { useArraste } from "../../hooks/useArraste";
import styles from "./style.module.css";

type JanelaProps = {
  top: number;
  left: number;
  width: number;
  height: number;
};

export function Janela({ top, left, width, height }: JanelaProps) {
  const { posicao, elementoRef, eventosDeArraste } = useArraste({ top, left });

  return (
    <div
      ref={elementoRef}
      className={styles.stage}
      style={{ top: posicao.top, left: posicao.left, width, height }}
    >
      <div className={styles.titleBar} {...eventosDeArraste}>
        Janela
      </div>
    </div>
  );
}
