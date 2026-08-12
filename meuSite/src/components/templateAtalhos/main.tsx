import { Atalho } from "../atalho/main";
import { ListaProjetos } from "../listaProjetos/main";
import { portfolio } from "../../data/portifolio";

export function TemplateAtalhos() {
  return (
    <>
      <Atalho id="sobre" nome="about" top={150} left={1500} width={600} height={400} 
        descricao= "about me"/>
      <Atalho id="projetos" nome="Projects" top={600} left={1600} width={360} height={680}
        descricao={<ListaProjetos projetos={portfolio.projetos} />} />
      <Atalho id="experiencia" nome="Resume" top={70} left={700} width={740} height={440}
        descricao="alou" />
      <Atalho id="habilidades" nome="Tools"  top={140} left={200} width={480} height={320}
        descricao="alou" />
      <Atalho id="curriculo" nome="Contact"   top={500} left={890} width={420} height={280}
        descricao="alou" />
    </>
  );
}
