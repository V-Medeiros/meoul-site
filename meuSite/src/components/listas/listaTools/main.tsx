import styles from "./style.module.css";

type Tools = {
  linguagens: string[];
  frameworks: string[];
  ferramentas: string[];
};

type ListaToolsProps = {
  tools: Tools;
};

export function ListaTools({ tools }: ListaToolsProps) {
  return (
    <div className={styles.lista}>
      <section className={styles.grupo}>
        <h2>Linguagens</h2>
        <ul className={styles.itens}>
          {tools.linguagens.map((linguagem) => (
            <li key={linguagem}>{linguagem}</li>
          ))}
        </ul>
      </section>

      <section className={styles.grupo}>
        <h2>Frameworks</h2>
        <ul className={styles.itens}>
          {tools.frameworks.map((framework) => (
            <li key={framework}>{framework}</li>
          ))}
        </ul>
      </section>

      <section className={styles.grupo}>
        <h2>Ferramentas</h2>
        <ul className={styles.itens}>
          {tools.ferramentas.map((ferramenta) => (
            <li key={ferramenta}>{ferramenta}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
