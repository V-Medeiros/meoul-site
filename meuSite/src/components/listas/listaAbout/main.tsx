import styles from "./style.module.css";

type LinkAbout = {
  rotulo: string;
  url: string;
};

type About = {
  titulo: string;
  nome: string;
  resumo: string;
  links: LinkAbout[];
};

type ListaAboutProps = {
  about: About;
};

export function ListaAbout({ about }: ListaAboutProps) {
  return (
    <article className={styles.aboutLayout}>
      <aside className={styles.profileCard}>
        <div className={styles.avatarFrame}>
          <img
            className={styles.avatar}
            src="/dasilva.png"
            alt={`Illustration of ${about.nome}`}
          />
        </div>

        <h3 className={styles.jobTitle}>Software Engineering Student</h3>
        <div className={styles.focusInfo}>
          <span>Focus</span>
          <strong>Full-stack development</strong>
        </div>

        <div className={styles.profileStatus}>
          <span aria-hidden="true" />
          Open to new opportunities
        </div>
      </aside>

      <section className={styles.aboutCopy}>
        <p className={styles.eyebrow}>ABOUT ME.TXT</p>
        <h1 className={styles.eyebrow}>Hi! I’m Victor i...</h1>
        <ul className={styles.bioList}>
          <li>build web applications and back-end systems,</li>
          <li>work with databases and embedded systems, and</li>
          <li>enjoy turning ideas into real projects.</li>
        </ul>
        <div className={styles.details}>
          <p className={styles.summary}>{about.resumo}</p>

          <dl className={styles.quickFacts}>
            <div>
              <dt>Name</dt>
              <dd>{about.nome}</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>{about.titulo}</dd>
            </div>
          </dl>
        </div>

        <nav className={styles.links}>
          {about.links.map((link) => {
            const externo = !link.url.startsWith("mailto:");

            return (
              <a
                key={link.url}
                href={link.url}
                target={externo ? "_blank" : undefined}
                rel={externo ? "noreferrer" : undefined}
              >
                {link.rotulo}
              </a>
            );
          })}
        </nav>
      </section>
    </article>
  );
}
