import { useIdioma } from "../../../hooks/useIdioma";
import styles from "./style.module.css";

export function ListaCurriculo() {
  const { traduzir } = useIdioma();

  return (
    <section className={styles.downloadPanel}>
      <p>{traduzir("fileComingSoon")}</p>
      <button type="button" disabled>
        {traduzir("downloadResume")}
      </button>
    </section>
  );
}
