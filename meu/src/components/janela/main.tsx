import styles from "./style.module.css";

type JanelaProps = {
  top: number
  left: number
}


export function Janela({top, left}: JanelaProps) {
  return (
    <div
      className={styles.stage}
      style={{ top, left }}>
    </div>
  );
}
