import { useState } from "react";
import styles from "./style.module.css";

type DescricaoNome = {
  nome: string;
};


export function Atalho({ nome }: DescricaoNome) {
  const [ativo, setAtivo] = useState(false);
  const [janelaAberta, setJanelaAberta] = useState(false)

  function handleClick() {
    setAtivo((estadoAtual) => !estadoAtual);
  }

  return (<>
    <div className={styles.atalho}>
      <button
        className={ativo ? styles.circleIcon : styles.icon}
        onClick={handleClick}

      />
      <p>{nome}</p>
    </div>

  </>

  );
}
