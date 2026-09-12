import styles from "./style.module.css";
import { useIdioma } from "../../../hooks/useIdioma";

type Contact = {
  links: LinkContact[];
};

type LinkContact = {
  id: "email" | "phone";
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
  const { traduzir } = useIdioma();

  return (
    <address className={styles.contactList}>
      {contact.links.map((link) => {
        const externo = link.url.startsWith("http");

        return (
          <section className={styles.contactCard} key={link.url}>
            <h2>{traduzir(link.id)}</h2>
            <p>{link.valor}</p>
            <a
              href={link.url}
              target={externo ? "_blank" : undefined}
              rel={externo ? "noreferrer" : undefined}
              aria-label={`${traduzir(
                link.id === "email" ? "sendEmail" : "sendMessage",
              )}: ${link.valor}`}
            >
              {traduzir(link.id === "email" ? "sendEmail" : "sendMessage")}
            </a>
          </section>
        );
      })}
    </address>
  );
}
