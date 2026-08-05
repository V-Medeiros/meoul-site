import { useRef, useState, type PointerEvent } from "react";

type Posicao = {
  top: number;
  left: number;
};

export function useArraste(posicaoInicial: Posicao) {
  const [posicao, setPosicao] = useState<Posicao>(posicaoInicial);
  const deslocamento = useRef({ x: 0, y: 0 });
  const elementoRef = useRef<HTMLDivElement>(null);

  function iniciarArraste(evento: PointerEvent<HTMLDivElement>) {
    evento.currentTarget.setPointerCapture(evento.pointerId);

    deslocamento.current = {
      x: evento.clientX - posicao.left,
      y: evento.clientY - posicao.top,
    };
  }

  function moverElemento(evento: PointerEvent<HTMLDivElement>) {
    if (!evento.currentTarget.hasPointerCapture(evento.pointerId)) return;

    const largura = elementoRef.current?.offsetWidth ?? 0;
    const altura = elementoRef.current?.offsetHeight ?? 0;
    const limiteEsquerdo = Math.max(0, window.innerWidth - largura);
    const limiteSuperior = Math.max(0, window.innerHeight - altura);

    setPosicao({
      left: Math.min(
        Math.max(0, evento.clientX - deslocamento.current.x),
        limiteEsquerdo,
      ),
      top: Math.min(
        Math.max(0, evento.clientY - deslocamento.current.y),
        limiteSuperior,
      ),
    });
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
