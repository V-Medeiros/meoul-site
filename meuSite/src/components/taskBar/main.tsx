import { useEffect, useRef, useState } from "react";
import { useJanelas } from "../../hooks/useJanelas";
import styles from "./style.module.css";

export function TaskBar() {
  const { janelas, abrir, alternarPelaTaskbar } = useJanelas();
  const [horario, setHorario] = useState(() => new Date());
  const [menuAberto, setMenuAberto] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = window.setInterval(() => setHorario(new Date()), 30_000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    function fecharMenu(event: PointerEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setMenuAberto(false);
      }
    }

    function fecharComEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuAberto(false);
      }
    }

    document.addEventListener("pointerdown", fecharMenu);
    document.addEventListener("keydown", fecharComEscape);

    return () => {
      document.removeEventListener("pointerdown", fecharMenu);
      document.removeEventListener("keydown", fecharComEscape);
    };
  }, []);

  function abrirPeloMenu(id: string, nome: string) {
    abrir(id, nome);
    setMenuAberto(false);
  }

  const janelasAtivas = janelas.filter((janela) => janela.estado !== "fechada");

  return (
    <>
    <nav className={styles.taskbar} data-taskbar>
      <div className={styles.startMenuArea} ref={menuRef}>
        {menuAberto && (
          <section className={styles.startMenu} id="start-menu" aria-label="Start menu">
            <div className={styles.startMenuRail} aria-hidden="true">
              <span>my.portifolio</span>
            </div>
            <div className={styles.startMenuItems}>
              {janelas.map((janela) => (
                <button
                  key={janela.id}
                  className={styles.startMenuItem}
                  type="button"
                  onClick={() => abrirPeloMenu(janela.id, janela.nome)}
                >
                  <img
                    className={janela.id === "bin" ? styles.binIcon : undefined}
                    src={
                      janela.id === "bin"
                        ? "/windows-xp-icons/Bin.png"
                        : "/windows-xp-icons/Folder%20Closed.png"
                    }
                    alt=""
                  />
                  <span>{janela.nome}</span>
                </button>
              ))}
            </div>
          </section>
        )}

        <button
          className={`${styles.menuButton} ${menuAberto ? styles.active : ""}`}
          onClick={() => setMenuAberto((aberto) => !aberto)}
          type="button"
          aria-expanded={menuAberto}
          aria-controls="start-menu"
        >
          <span>Start</span>
        </button>
      </div>

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
                className={`${styles.taskIcon} ${
                  janela.id === "bin" ? styles.binTaskIcon : ""
                }`}
                src={
                  janela.id === "bin"
                    ? "/windows-xp-icons/Bin.png"
                    : `/windows-xp-icons/Folder%20${estaAberta ? "Opened" : "Closed"}.png`
                }
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
