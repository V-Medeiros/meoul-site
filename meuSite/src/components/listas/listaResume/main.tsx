import styles from "./style.module.css";

const deviconSlugs: Record<string, string> = {
  TypeScript: "typescript",
  React: "react",
  "Tailwind CSS": "tailwindcss",
  "Spring Boot": "spring",
  PostgreSQL: "postgresql",
  Docker: "docker",
};

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
          <h1>{resume.nome}</h1>
          <p>{resume.titulo}</p>
          <p className={styles.location}>{resume.localizacao}</p>
        </div>
        <span className={styles.fileName}>RESUME.TXT</span>
      </header>

      <div className={styles.content}>
        <section className={`${styles.section} ${styles.education}`}>
          <h2>Education</h2>
          <strong>{resume.formacao}</strong>
          <strong>PUC - PR</strong>
          <span>2025 - In progress</span>
        </section>

        <section className={`${styles.section} ${styles.stackSection}`}>
          <h2>Current stack</h2>
          <ul className={`${styles.skills} ${styles.currentStack}`}>
            {resume.competencias.map((competencia) => {
              const slug = deviconSlugs[competencia];

              return (
                <li key={competencia}>
                  {slug && (
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original.svg`}
                      alt=""
                      aria-hidden="true"
                    />
                  )}
                  <span>{competencia}</span>
                </li>
              );
            })}
          </ul>
        </section>
        
        <section className={`${styles.section} ${styles.experience}`}>
          <h2>Work Experience</h2>
          <span>None</span>
        </section>
      </div>
    </article>
  );
}
