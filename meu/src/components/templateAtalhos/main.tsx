import { useState } from "react";
import styles from "./style.module.css";

export function TemplateAtalhos() {
  const [ativo, setAtivo] = useState(false);

  function handleClick() {
    setAtivo((estadoAtual) => !estadoAtual);
  }

  return (
    <button
      className={ativo ? styles.circleIcon : styles.icon}
      onClick={handleClick}
    />
  );
}
