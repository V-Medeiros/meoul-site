import { useState } from "react";
import styles from "./style.module.css";
import { Janela } from "../janela/main";

type DescricaoNome = {
  nome: string;
};


export function Atalho({ nome }: DescricaoNome) {
  const [estado, setEstado] = useState(false);

  function handleClick() {
    setEstado((estadoAtual) => !estadoAtual);
  }

  return (<>
    <div className={styles.atalho}>
      <button
        className={`${estado ? styles.circleIcon: styles.icon}`}
        onClick={handleClick}
      />
      <p>{nome}</p>

      {estado && <Janela />}
      <div>
      </div>
    </div>

  </>

  );
}
