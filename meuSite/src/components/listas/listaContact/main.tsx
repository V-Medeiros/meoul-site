import styles from "./style.module.css";

type Contact = {
  links: LinkContact[];
};

type LinkContact = {
  rotulo: string;
  url: string;
  email: string;
};

type ListaContactProps = {
  contact: Contact;
};

//colocar um href no link do email

export function ListaContact({ contact }: ListaContactProps) {
  return (
    <>
      <nav className={styles.links}>
        {contact.links.map((link) => {
          const externo = !link.url.startsWith("mailto:");

          return (
            <div className={styles.contact}>
              <p>{link.email}</p>
              <a
                key={link.url}
                href={link.url}
                target={externo ? "_blank" : undefined}
                rel={externo ? "noreferrer" : undefined}
              >
                {link.rotulo}
              </a>
            </div>
          );
        })}
      </nav>
    </>
  );
}
