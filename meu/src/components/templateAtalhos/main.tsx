import { Atalho } from "../atalho/main";
import { ListaProjetos } from "../listaProjetos/main";
import { portfolio } from "../../data/portifolio";

export function TemplateAtalhos() {
  return (
    <>
      <Atalho nome="Sobre mim" top={140} left={200} width={480} height={320}
        descricao="alou" />
      <Atalho nome="Projetos" top={600} left={1600} width={360} height={480}
        descricao={<ListaProjetos projetos={portfolio.projetos} />} />
      <Atalho nome="Experiência" top={150} left={1500} width={600} height={400}
        descricao="alou" />
      <Atalho nome="Habilidades" top={500} left={890} width={420} height={280}
        descricao="alou" />
      <Atalho nome="Curriculo" top={70} left={700} width={640} height={440}
        descricao="alou" />
    </>
  );
}
