import { useLayoutEffect, useRef, useState, type PointerEvent } from "react";

type Posicao = {
  top: number;
  left: number;
};

export function useArraste(posicaoInicial: Posicao) {
  const [posicao, setPosicao] = useState<Posicao>(posicaoInicial);
  const deslocamento = useRef({ x: 0, y: 0 });
  const elementoRef = useRef<HTMLDivElement>(null);

  function limitarPosicao(left: number, top: number) {
    const largura = elementoRef.current?.offsetWidth ?? 0;
    const altura = elementoRef.current?.offsetHeight ?? 0;
    const taskbar = document.querySelector<HTMLElement>("[data-taskbar]");
    const topoTaskbar = taskbar?.getBoundingClientRect().top ?? window.innerHeight;
    const limiteEsquerdo = Math.max(0, window.innerWidth - largura);
    const limiteSuperior = Math.max(0, topoTaskbar - altura);

    return {
      left: Math.min(Math.max(0, left), limiteEsquerdo),
      top: Math.min(Math.max(0, top), limiteSuperior),
    };
  }

  useLayoutEffect(() => {
    function ajustarAosLimites() {
      setPosicao((posicaoAtual) =>
        limitarPosicao(posicaoAtual.left, posicaoAtual.top),
      );
    }

    ajustarAosLimites();
    window.addEventListener("resize", ajustarAosLimites);

    return () => window.removeEventListener("resize", ajustarAosLimites);
  }, []);

  function iniciarArraste(evento: PointerEvent<HTMLDivElement>) {
    evento.currentTarget.setPointerCapture(evento.pointerId);

    deslocamento.current = {
      x: evento.clientX - posicao.left,
      y: evento.clientY - posicao.top,
    };
  }

  function moverElemento(evento: PointerEvent<HTMLDivElement>) {
    if (!evento.currentTarget.hasPointerCapture(evento.pointerId)) return;

    setPosicao(
      limitarPosicao(
        evento.clientX - deslocamento.current.x,
        evento.clientY - deslocamento.current.y,
      ),
    );
  }

  function finalizarArraste(evento: PointerEvent<HTMLDivElement>) {
    if (evento.currentTarget.hasPointerCapture(evento.pointerId)) {
      evento.currentTarget.releasePointerCapture(evento.pointerId);
    }
  }

  return {
    posicao,
    elementoRef,
    eventosDeArraste: {
      onPointerDown: iniciarArraste,
      onPointerMove: moverElemento,
      onPointerUp: finalizarArraste,
      onPointerCancel: finalizarArraste,
    },
  };
}
