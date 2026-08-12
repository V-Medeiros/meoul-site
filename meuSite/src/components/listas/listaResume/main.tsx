type ListaResumeProps = {
  resume: string;
};

export function ListaResume({ resume }: ListaResumeProps) {
  return (
    <div>
      {resume}
    </div>
  );
}
