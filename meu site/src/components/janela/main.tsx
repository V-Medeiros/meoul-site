import { useId, useState } from "react";
import { useArraste } from "../../hooks/useArraste";
import styles from "./style.module.css";

let maiorZIndex = 1000;

function proximoZIndex() {
  maiorZIndex += 1;
  return maiorZIndex;
}

type JanelaProps = {
  top: number;
  left: number;
  width: number;
  height: number;
  nome: string;
  descricao: React.ReactNode;

  onMinimize: () => void;
  onClose: () => void;
};

export function Janela({
  top,
  left,
  width,
  height,
  nome,
  descricao,
  onMinimize,
  onClose,
}: JanelaProps) {
  const { posicao, elementoRef, eventosDeArraste } = useArraste({ top, left });
  const [maximizada, setMaximizada] = useState(false);
  const [zIndex, setZIndex] = useState(proximoZIndex);
  const tituloId = useId();

  function alternarMaximizacao() {
    setMaximizada((estadoAtual) => !estadoAtual);
  }

  function trazerParaFrente() {
    setZIndex(proximoZIndex());
  }

  return (
    <>

      <div
        ref={elementoRef}
        className={`${styles.stage} ${maximizada ? styles.maximized : ""}`}
        style={{ top: posicao.top, left: posicao.left, width, height, zIndex }}
        onPointerDown={trazerParaFrente}
        role="dialog"
        aria-labelledby={tituloId}
      >
        <header
          className={styles.titleBar}
          {...(!maximizada ? eventosDeArraste : {})}
          onDoubleClick={alternarMaximizacao}
        >
          <strong id={tituloId} className={styles.title}>{nome}</strong>

          <div
            className={styles.windowControls}
            aria-label={`Controles da janela ${nome}`}
            onPointerDown={(evento) => {
              evento.stopPropagation();
              trazerParaFrente();
            }}
            onDoubleClick={(evento) => evento.stopPropagation()}
          >
            <button
              className={styles.controlButton}
              type="button"
              onClick={onMinimize}
              title={`Minimizar ${nome}`}
              aria-label={`Minimizar ${nome}`}
            >
              <span className={styles.minimizeIcon} aria-hidden="true" />
            </button>
            <button
              className={styles.controlButton}
              type="button"
              onClick={alternarMaximizacao}
              title={`${maximizada ? "Restaurar" : "Maximizar"} ${nome}`}
              aria-label={`${maximizada ? "Restaurar" : "Maximizar"} ${nome}`}
            >
              <span
                className={maximizada ? styles.restoreIcon : styles.maximizeIcon}
                aria-hidden="true"
              />
            </button>
            <button
              className={`${styles.controlButton} ${styles.closeButton}`}
              type="button"
              onClick={onClose}
              title={`Fechar ${nome}`}
              aria-label={`Fechar ${nome}`}
            >
              <span className={styles.closeIcon} aria-hidden="true" />
            </button>
          </div>
        </header>

        <section className={styles.windowBody}>
          <div>{descricao}</div>
        </section>

        <footer />
      </div>
    </>
  );
}
