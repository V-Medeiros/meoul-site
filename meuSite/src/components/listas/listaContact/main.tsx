type Contact = {
  links: string;
};

type ListaContactProps = {
  contact: Contact;
};

//colocar um href no link do email

export function ListaContact({ contact }: ListaContactProps) {
  return (
    <>
      <div>
        <p>{contact.links}</p>
        </div>
    </>
  );
}
