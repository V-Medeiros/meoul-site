import { useJanelas } from "../../hooks/useJanelas";
import styles from "./style.module.css";

export function TaskBar() {
  const { janelas, alternarPelaTaskbar } = useJanelas();

  const janelasAtivas = janelas.filter(
    (janela) => janela.estado !== "fechada",
  );

  return (
    <nav
      className={styles.taskbar}
      data-taskbar
      aria-label="Barra de tarefas"
    >
      <div>icone menu</div> <br />
      {janelasAtivas.map((janela) => {
        const estaAberta = janela.estado === "aberta";

        return (
          <button
            key={janela.id}
            className={`${styles.taskButton} ${estaAberta ? styles.active : ""
              }`}
            type="button"
            onClick={() => alternarPelaTaskbar(janela.id)}
            aria-label={`${estaAberta ? "Minimizar" : "Restaurar"} ${janela.nome}`}
            aria-pressed={estaAberta}
          >
            <img
              className={styles.taskIcon}
              src="/windows-xp-icons/Folder%20Closed.png"
              alt=""
              aria-hidden="true"
            />
            <span className={styles.taskLabel}>{janela.nome}</span>
          </button>);
      })}
    <footer className={styles.footer}>horario e coisas</footer>
    </nav>
  );
}
