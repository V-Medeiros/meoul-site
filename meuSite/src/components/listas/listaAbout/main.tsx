import type { Projeto } from "../../../data/portifolio";
import styles from "./style.module.css";

type ListaDescricaoProps = {
  Descricao: Projeto[];
};

export function ListaProjetos({  }: ListaDescricaoProps) {
  return (
    <div className={styles.lista}>
    </div>
  );
}
