import { useEffect, useRef, useState } from "react";
import { useJanelas } from "../../hooks/useJanelas";
import styles from "./style.module.css";

export function TaskBar() {
  const { janelas, alternarPelaTaskbar } = useJanelas();
  const [horario, setHorario] = useState(() => new Date());
  const audioRef = useRef<HTMLAudioElement>(null)
  const [somAtivo, setSomAtivo] = useState(false)

  async function alternarSom() {
    const audio = audioRef.current;
    if (!audio) return;

    if (somAtivo) {
      audio.pause();
      setSomAtivo(false);
    }

    else {
      await audio.play();
      setSomAtivo(true);
    }
  }



  useEffect(() => {
    const timer = window.setInterval(() => setHorario(new Date()), 30_000);

    return () => window.clearInterval(timer);
  }, []);

  const janelasAtivas = janelas.filter((janela) => janela.estado !== "fechada");

  return (<>
    <audio
      ref={audioRef}
      src="/sounds/hey.mp3"
      preload="metadata"
      onEnded={() => setSomAtivo(false)}
    />
    <nav className={styles.taskbar} data-taskbar>
      <button className={styles.menuButton} onClick={alternarSom} type="button">
        <span>Hey</span>
        {/* ao clicar no icone meu abrir uma section com... agent ou arquivos normais e x modo */}
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
  </>
  );
}
