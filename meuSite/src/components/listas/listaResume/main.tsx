import styles from "./style.module.css";

type ResumeProject = {
  nome: string;
  descricao: string;
};

type Resume = {
  nome: string;
  titulo: string;
  localizacao: string;
  resumo: string;
  formacao: string;
  competencias: string[];
  projetos: ResumeProject[];
  email: string;
  github: string;
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
        <section className={styles.mainColumn}>
          <div className={styles.section}>
            <h2>Profile</h2>
            <p>{resume.resumo}</p>
          </div>

          <div className={styles.section}>
            <h2>Selected projects</h2>
            <div className={styles.projects}>
              {resume.projetos.map((projeto) => (
                <article className={styles.project} key={projeto.nome}>
                  <h3>{projeto.nome}</h3>
                  <p>{projeto.descricao}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <aside className={styles.sideColumn}>
          <section className={styles.section}>
            <h2>Education</h2>
            <strong>{resume.formacao}</strong>
            <span>In progress</span>
          </section>

          <section className={styles.section}>
            <h2>Current stack</h2>
            <ul className={styles.skills}>
              {resume.competencias.map((competencia) => (
                <li key={competencia}>{competencia}</li>
              ))}
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Contact</h2>
            <a href={`mailto:${resume.email}`}>{resume.email}</a>
            <a href={resume.github} target="_blank" rel="noreferrer">
              github.com/V-Medeiros
            </a>
          </section>
        </aside>
      </div>
    </article>
  );
}
