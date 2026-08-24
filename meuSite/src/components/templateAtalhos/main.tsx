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
        top={228}
        left={632}
        width="clamp(22rem, 55vw, 41.25rem)"
        height="clamp(20rem, 60dvh, 30rem)"
        descricao={<ListaAbout about={portfolio.about} />}
      />
      <Atalho
        id="projects"
        nome="Projects"
        top={45}
        left={143}
        width="clamp(20rem, 35vw, 26rem)"
        height="clamp(22rem, 60dvh, 38.5rem)"
        descricao={<ListaProjetos projetos={portfolio.projects} />}
      />
      <Atalho
        id="contact"
        nome="Contact"
        top={638}
        left={48}
        width="clamp(20rem, 35vw, 26.25rem)"
        height="clamp(16rem, 35dvh, 17.5rem)"
        descricao={<ListaContact contact={portfolio.contact} />} 
      />
      <Atalho
        id="tools"
        nome="Tools"
        top={568}
        left={1461}
        width="clamp(20rem, 40vw, 30rem)"
        height="clamp(18rem, 45dvh, 23.4375rem)"
        descricao={<ListaTools tools={portfolio.tools} />}
      />
      <Atalho
        id="resume"
        nome="Resume"
        top={65}
        left={1349}
        width="clamp(22rem, 60vw, 46.25rem)"
        height="clamp(20rem, 55dvh, 27.5rem)"
        descricao={<ListaResume resume={portfolio.resume} />} 
      />
    </>
  );
}
