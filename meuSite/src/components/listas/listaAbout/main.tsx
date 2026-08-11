import { ReactNode } from "react";
import styles from "./style.module.css";

type ListaDescricaoProps = {
  Descricao: ReactNode;
};

export function ListaProjetos({ Descricao }: ListaDescricaoProps) {
  return <div className={styles.lista}>{Descricao}</div>;
}
