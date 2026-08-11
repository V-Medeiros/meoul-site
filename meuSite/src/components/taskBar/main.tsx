import { useJanelas } from "../../hooks/useJanelas";
import styles from "./style.module.css";

export function TaskBar() {
  const { janelas, alternarPelaTaskbar } = useJanelas();

  const janelasAtivas = janelas.filter((janela) => janela.estado !== "fechada");

  return (
    <nav className={styles.taskbar} data-taskbar>
      <button className={`${styles.taskButton}`}>Icone menu</button><br/>
      {janelasAtivas.map((janela) => {
        const estaAberta = janela.estado === "aberta";

        return (
          <button
            key={janela.id}
            className={`${styles.taskButton} ${estaAberta ? styles.active : ""}`}
            type="button"
            onClick={() => alternarPelaTaskbar(janela.id)}
          >
            <img
              className={`${styles.taskIcon}  ${styles.icon}`} /* e circle icon quando aberto */
              src="/windows-xp-icons/Folder%20Closed.png"
            />
            <span className={styles.taskLabel}>{janela.nome}</span>
          </button>
        );
      })}
      <footer className={styles.footer}>horario e coisas</footer>
    </nav>
  );
}
