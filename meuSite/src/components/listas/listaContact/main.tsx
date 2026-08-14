type Contact = {
  introducao: string;
  atividades: string[];
};

type ListaContactProps = {
  contact: Contact;
};

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
