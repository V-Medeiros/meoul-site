import type { Projeto } from "../../data/portifolio";
import styles from "./style.module.css";
import { useIdioma } from "../../hooks/useIdioma";

type ListaProjetosProps = {
  projetos: Projeto[];
};

export function ListaProjetos({ projetos }: ListaProjetosProps) {
  const { idioma, traduzir } = useIdioma();

  return (
    <div className={styles.lista}>
      {projetos.map((projeto) => (
        <article className={styles.projeto} key={projeto.nome}>
          <h2>{projeto.nome}</h2>
          <p>{idioma === "pt" ? projeto.descricaoPt : projeto.descricao}</p>

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
                {traduzir("repository")}
              </a>
            )}

            {projeto.demonstracao && (
              <a
                href={projeto.demonstracao}
              >
                {traduzir("demo")}
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
