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
        <span className={styles.profileBadge}>DISPONÍVEL</span>

        <div className={styles.avatarFrame}>
          <img
            className={styles.avatar}
            src="/dasilva.png"
            alt={`Ilustração de ${about.nome}`}
          />
        </div>

        <h2>{about.nome}</h2>
        <p className={styles.jobTitle}>Engenheiro de software</p>
        <div className={styles.profileStatus}>
          <span aria-hidden="true" />
          Aberto a novas oportunidades
        </div>
      </aside>

      <section className={styles.aboutCopy}>
        <p className={styles.eyebrow}>ABOUT ME.TXT</p>
        <h1>Olá! frase bonita .</h1>
        <p className={styles.summary}>{about.resumo}</p>

        <dl className={styles.quickFacts}>
          <div>
            <dt>Nome</dt>
            <dd>{about.nome}</dd>
          </div>
          <div>
            <dt>Atuação</dt>
            <dd>{about.titulo}</dd>
          </div>
        </dl>

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
                <span aria-hidden="true"> ↗</span>
              </a>
            );
          })}
        </nav>
      </section>
    </article>
  );
}
