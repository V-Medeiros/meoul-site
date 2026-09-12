import styles from "./style.module.css";
import { useIdioma } from "../../../hooks/useIdioma";

type Tools = {
  linguagens: string[];
  frameworks: string[];
  ferramentas: string[];
};

type ListaToolsProps = {
  tools: Tools;
};
/* 
adicionar nas tools -- crescente ou func crescente com while
function tocarNota(nota: string) {
  const audio = new Audio(`caminho/${nota}.mp3`)
  audio.play()

}
  tocarNota("");
  tocarNota("");
  tocarNota("");
*/

export function ListaTools({ tools }: ListaToolsProps) {
  const { traduzir } = useIdioma();

  return (
    <div className={styles.lista}>
      <section className={styles.grupo}>
        <h2>{traduzir("languages")}</h2>
        <ul className={styles.itens}>
          {tools.linguagens.map((linguagem) => (
            <li key={linguagem}>{linguagem}</li>
          ))}
        </ul>
      </section>

      <section className={styles.grupo}>
        <h2>{traduzir("frameworks")}</h2>
        <ul className={styles.itens}>
          {tools.frameworks.map((framework) => (
            <li key={framework}>{framework}</li>
          ))}
        </ul>
      </section>

      <section className={styles.grupo}>
        <h2>{traduzir("tools")}</h2>
        <ul className={styles.itens}>
          {tools.ferramentas.map((ferramenta) => (
            <li key={ferramenta}>{ferramenta}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
