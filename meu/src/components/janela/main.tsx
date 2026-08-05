import { useArraste } from "../../hooks/useArraste";
import styles from "./style.module.css";

type JanelaProps = {
  top: number;
  left: number;
};

export function Janela({ top, left }: JanelaProps) {
  const { posicao, elementoRef, eventosDeArraste } = useArraste({ top, left });

  return (
    <div
      ref={elementoRef}
      className={styles.stage}
      style={{ top: posicao.top, left: posicao.left }}
    >
      <div className={styles.titleBar} {...eventosDeArraste}>
        Janela
      </div>
    </div>
  );
}
