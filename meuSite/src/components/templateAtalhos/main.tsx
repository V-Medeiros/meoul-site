import { Atalho } from "../atalho/main";
import { ListaProjetos } from "../listaProjetos/main";
import { portfolio } from "../../data/portifolio";
import { ListaResume } from "../listas/listaResume/main";
import { ListaTools } from "../listas/listaTools/main";
import { ListaAbout } from "../listas/listaAbout/main";
import { ListaContact } from "../listas/listaContact/main";
import { useIdioma } from "../../hooks/useIdioma";
import { ListaCurriculo } from "../listas/listaCurriculo/main";

const resumeBeta = {
  nome: portfolio.about.nome,
  titulo: "Software Engineering Student / Web Developer",
  localizacao: "Curitiba, Brazil",
  resumo:
    "Developer focused on building web applications, back-end systems, databases, and embedded solutions.",
  formacao: "Software Engineering",
  ferramentas: portfolio.tools.ferramentas,
  competencias: [
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Spring Boot",
    "PostgreSQL",
    "Docker",
  ],
  projetos: portfolio.projects.slice(0, 3).map(({ nome, descricao }) => ({
    nome,
    descricao,
  })),
  email: "victorme2806@gmail.com",
  github: "https://github.com/V-Medeiros",
};

export function TemplateAtalhos() {
  const { traduzir } = useIdioma();
  const resumeTraduzido = {
    ...resumeBeta,
    titulo: traduzir("resumeTitle"),
    localizacao: traduzir("location"),
    formacao: traduzir("degree"),
  };

  return (
    <>
      <Atalho
        id="bin"
        nome={traduzir("bin")}
        top={180}
        left={380}
        width="clamp(18rem, 32vw, 24rem)"
        height="clamp(12rem, 28dvh, 16rem)"
        iconeFechado="/windows-xp-icons/Bin.png"
        iconeAberto="/windows-xp-icons/Bin.png"
        tamanhoIcone="175%"
        descricao={<p>{traduzir("empty")}</p>}
      />
      <Atalho
        id="resume"
        nome={traduzir("resume")}
        top={228}
        left={632}
        width="clamp(22rem, 60vw, 46.25rem)"
        height="clamp(20rem, 55dvh, 27.5rem)"
        descricao={<ListaResume resume={resumeTraduzido} />}
      />
      <Atalho
        id="about"
        nome={traduzir("about")}
        top={65}
        left={1349}
        width="clamp(22rem, 55vw, 41.25rem)"
        height="clamp(20rem, 60dvh, 30rem)"
        descricao={<ListaAbout about={portfolio.about} />}
      />
      <Atalho
        id="projects"
        nome={traduzir("projects")}
        top={45}
        left={143}
        width="clamp(20rem, 35vw, 26rem)"
        height="clamp(22rem, 60dvh, 38.5rem)"
        descricao={<ListaProjetos projetos={portfolio.projects} />}
      />
      <Atalho
        id="contact"
        nome={traduzir("contact")}
        top={638}
        left={48}
        width="clamp(20rem, 35vw, 26.25rem)"
        height="clamp(16rem, 35dvh, 17.5rem)"
        descricao={<ListaContact contact={portfolio.contact} />} 
      />
      <Atalho
        id="tools"
        nome={traduzir("tools")}
        top={568}
        left={1461}
        width="clamp(20rem, 40vw, 30rem)"
        height="clamp(18rem, 45dvh, 23.4375rem)"
        descricao={<ListaTools tools={portfolio.tools} />}
      />

      <Atalho
        id="curriculum"
        nome={traduzir("curriculum")}
        top={180}
        left={1461}
        width="clamp(18rem, 32vw, 24rem)"
        height="clamp(12rem, 28dvh, 16rem)"
        descricao={<ListaCurriculo />}
      />
    </>
  );
}
