import type { Projeto } from "../../data/portifolio";
import styles from "./style.module.css";

type ListaProjetosProps = {
  projetos: Projeto[];
};

export function ListaProjetos({ projetos }: ListaProjetosProps) {
  return (
    <div className={styles.lista}>
      {projetos.map((projeto) => (
        <article className={styles.projeto} key={projeto.nome}>
          <h2>{projeto.nome}</h2>
          <p>{projeto.descricao}</p>

          <ul className={styles.tecnologias}>
            {projeto.tecnologias.map((tecnologia) => (
              <li key={tecnologia.name}>{tecnologia.name}</li>
            ))}
          </ul>

          <div className={styles.links}>
            {projeto.repositorio && (
              <a
                href={projeto.repositorio}
              >
                Repository
              </a>
            )}

            {projeto.demonstracao && (
              <a
                href={projeto.demonstracao}
              >
                Demo
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
