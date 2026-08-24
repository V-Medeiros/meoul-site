import styles from "./style.module.css";

type Resume = {
  nome: string;
  titulo: string;
  localizacao: string;
  formacao: string;
  ferramentas: string[];
  competencias: string[];
};

type ListaResumeProps = {
  resume: Resume;
};

export function ListaResume({ resume }: ListaResumeProps) {
  return (
    <article className={styles.resume}>
      <header className={styles.header}>
        <div>
          <span className={styles.badge}>BETA</span>
          <h1>{resume.nome}</h1>
          <p>{resume.titulo}</p>
          <p className={styles.location}>{resume.localizacao}</p>
        </div>
        <span className={styles.fileName}>RESUME.TXT</span>
      </header>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Education</h2>
          <strong>{resume.formacao}</strong>
          <span>In progress</span>
        </section>

        <section className={styles.section}>
          <h2>Tools &amp; skills</h2>
          <ul className={styles.skills}>
            {resume.ferramentas.map((ferramenta) => (
              <li key={ferramenta}>{ferramenta}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Current stack</h2>
          <ul className={styles.skills}>
            {resume.competencias.map((competencia) => (
              <li key={competencia}>{competencia}</li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
