import styles from "./style.module.css";

type Contact = {
  links: LinkContact[];
};

type LinkContact = {
  titulo: string;
  acao: string;
  url: string;
  valor: string;
};

type ListaContactProps = {
  contact: Contact;
};

//colocar um href no link do email

export function ListaContact({ contact }: ListaContactProps) {
  return (
    <address className={styles.contactList}>
      {contact.links.map((link) => {
        const externo = link.url.startsWith("http");

        return (
          <section className={styles.contactCard} key={link.url}>
            <h2>{link.titulo}</h2>
            <p>{link.valor}</p>
            <a
              href={link.url}
              target={externo ? "_blank" : undefined}
              rel={externo ? "noreferrer" : undefined}
              aria-label={`${link.acao}: ${link.valor}`}
            >
              {link.acao}
            </a>
          </section>
        );
      })}
    </address>
  );
}
