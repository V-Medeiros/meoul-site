import { Atalho } from "../atalho/main";
import { ListaProjetos } from "../listaProjetos/main";
import { portfolio } from "../../data/portifolio";
import { ListaResume } from "../listas/listaResume/main";
import { ListaTools } from "../listas/listaTools/main";
import { ListaAbout } from "../listas/listaAbout/main";
import { ListaContact } from "../listas/listaContact/main";

export function TemplateAtalhos() {
  return (
    <>
      <Atalho
        id="about"
        nome="about"
        top={150}
        left={1500}
        width={660}
        height={480}
        descricao={<ListaAbout about={portfolio.about} />}
      />
      <Atalho
        id="projects"
        nome="Projects"
        top={600}
        left={1600}
        width={360}
        height={680}
        descricao={<ListaProjetos projetos={portfolio.projects} />}
      />
      <Atalho
        id="contact"
        nome="Contact"
        top={500}
        left={890}
        width={420}
        height={280}
        descricao={<ListaContact contact={portfolio.contact} />} 
      />
      <Atalho
        id="tools"
        nome="Tools"
        top={140}
        left={200}
        width={480}
        height={375}
        descricao={<ListaTools tools={portfolio.tools} />}
      />
      <Atalho
        id="resume"
        nome="Resume"
        top={70}
        left={700}
        width={740}
        height={440}
        descricao={<ListaResume resume={portfolio.resume} />} 
      />
    </>
  );
}
