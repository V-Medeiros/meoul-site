import { useEffect, useState } from "react";
import { useJanelas } from "../../hooks/useJanelas";
import styles from "./style.module.css";

export function TaskBar() {
  const { janelas, alternarPelaTaskbar } = useJanelas();
  const [horario, setHorario] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setHorario(new Date()), 30_000);

    return () => window.clearInterval(timer);
  }, []);

  const janelasAtivas = janelas.filter((janela) => janela.estado !== "fechada");

  return (
    <nav className={styles.taskbar} data-taskbar>
      <button className={styles.startButton} type="button">
        <span>Start</span>
      </button>

      <div className={styles.separator} />

      <div className={styles.tasks}>
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
                className={styles.taskIcon}
                src={`/windows-xp-icons/Folder%20${estaAberta ? "Opened" : "Closed"}.png`}
                alt=""
              />
              <span className={styles.taskLabel}>{janela.nome}</span>
            </button>
          );
        })}
      </div>

      <div className={styles.clock}>
        <time dateTime={horario.toISOString()}>
          {horario.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </time>
      </div>
    </nav>
  );
}
