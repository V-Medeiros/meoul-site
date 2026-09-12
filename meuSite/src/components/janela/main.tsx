import { useState, type CSSProperties } from "react";
import { useArraste } from "../../hooks/useArraste";
import styles from "./style.module.css";
import { useIdioma } from "../../hooks/useIdioma";

let maiorZIndex = 1000;

function proximoZIndex() {
  maiorZIndex += 1;
  return maiorZIndex;
}

type JanelaProps = {
  top: number;
  left: number;
  width: CSSProperties["width"];
  height: CSSProperties["height"];
  nome: string;
  descricao: React.ReactNode;

  onMinimize: () => void;
  onClose: () => void;
};

export function Janela({top,left,width,height,nome,descricao,onMinimize,onClose}: JanelaProps) {
  const { traduzir } = useIdioma();
  const { posicao, elementoRef, eventosDeArraste } = useArraste({ top, left });
  const [maximizada, setMaximizada] = useState(false);
  const [zIndex, setZIndex] = useState(proximoZIndex);

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
      >
        <header
          className={styles.titleBar}
          {...(!maximizada ? eventosDeArraste : {})}
          onDoubleClick={alternarMaximizacao}
        >
          <strong className={styles.title}>{nome}</strong>

          <div
            className={styles.windowControls}
            onPointerDown={(evento) => {
              evento.stopPropagation();
              trazerParaFrente();
            }}
            onDoubleClick={(evento) => evento.stopPropagation()}
          >
            <button
              className={styles.controlButton}
              type="button"
              aria-label={traduzir("minimize")}
              onClick={onMinimize}>
              <span className={styles.minimizeIcon}/>
            </button>
            <button
              className={styles.controlButton}
              type="button"
              aria-label={traduzir(maximizada ? "restore" : "maximize")}
              onClick={alternarMaximizacao}
            >
              <span className={maximizada ? styles.restoreIcon : styles.maximizeIcon}/>
            </button>
            <button
              className={`${styles.controlButton} ${styles.closeButton}`}
              type="button"
              aria-label={traduzir("close")}
              onClick={onClose}>
              <span className={styles.closeIcon} />
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
