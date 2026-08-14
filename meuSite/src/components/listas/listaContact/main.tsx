type Contact = {
  introducao: string;
  atividades: string[];
};

type ListaContactProps = {
  contact: Contact;
};

//colocar um href no link do email

export function ListaContact({ contact }: ListaContactProps) {
  return (
    <>
      <div>
        <p>{contact.introducao}</p>

        <div>
          {contact.atividades.map((atividade: string) => (
            <li key={atividade}>{atividade}</li>
          ))}
        </div>
      </div>
    </>
  );
}
