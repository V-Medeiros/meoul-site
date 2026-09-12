import styles from "./style.module.css";
import { useIdioma } from "../../../hooks/useIdioma";

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
  const { traduzir } = useIdioma();

  return (
    <article className={styles.aboutLayout}>
      <aside className={styles.profileCard}>
        <div className={styles.avatarFrame}>
          <img
            className={styles.avatar}
            src="/dasilva.png"
            alt={`${traduzir("about")}: ${about.nome}`}
          />
        </div>

        <h3 className={styles.jobTitle}>{traduzir("job")}</h3>
        <div className={styles.focusInfo}>
          <span>{traduzir("focus")}</span>
          <strong>{traduzir("focusValue")}</strong>
        </div>

        <div className={styles.profileStatus}>
          <span aria-hidden="true" />
          {traduzir("availability")}
        </div>
      </aside>

      <section className={styles.aboutCopy}>
        <p className={styles.eyebrow}>{traduzir("aboutFile")}</p>
        <h1 className={styles.eyebrow}>{traduzir("greeting")}</h1>
        <ul className={styles.bioList}>
          <li>{traduzir("bioOne")}</li>
          <li>{traduzir("bioTwo")}</li>
          <li>{traduzir("bioThree")}</li>
        </ul>
        <div className={styles.details}>
          <p className={styles.summary}>{about.resumo}</p>

          <dl className={styles.quickFacts}>
            <div>
              <dt>{traduzir("name")}</dt>
              <dd>{about.nome}</dd>
            </div>
            <div>
              <dt>{traduzir("role")}</dt>
              <dd>{traduzir("softwareDeveloper")}</dd>
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
