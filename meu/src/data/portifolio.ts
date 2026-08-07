export type LinkExterno = {
  rotulo: string;
  url: string;
};

export type Projeto = {
  nome: string;
  descricao: string;
  tecnologias: string[];
  repositorio?: string;
  demonstracao?: string;
};

export const portfolio = {
  sobre: {
    titulo: "Desenvolvedor de software",
    nome: "Victor",
    resumo:
      "Desenvolvo aplicações e uso meus projetos para explorar soluções web, interfaces e novas tecnologias.",
    links: [
      {
        rotulo: "GitHub",
        url: "https://github.com/V-Medeiros",
      },
      {
        rotulo: "E-mail",
        url: "mailto:victorme2806@gmail.com",
      },
    ],
  },

  projetos: [
    {
      nome: "Vesta",
      descricao:
        "SaaS de foco gamificado que transforma o tempo de concentração em uma fogueira virtual.",
      tecnologias: ["TypeScript"],
      repositorio: "https://github.com/V-Medeiros/Vesta",
    },
    {
      nome: "CampusTrack",
      descricao:
        "Sistema para gerenciar instituições, espaços, usuários, mapas e eventos.",
      tecnologias: ["Java", "Spring Boot", "React"],
      repositorio: "https://github.com/luis-sandri/CampusTrack",
    },
  ] satisfies Projeto[],

  experiencia: {
    introducao:
      "Experiência prática adquirida por meio do desenvolvimento de projetos.",
    atividades: [
      "Desenvolvimento de aplicações web",
      "Construção de interfaces",
      "Implementação de regras de negócio",
      "Integração com bancos de dados",
      "Versionamento com Git",
    ],
  },

  habilidades: {
    linguagens: [
      "Java",
      "TypeScript",
      "JavaScript",
      "PHP",
      "Python",
      "HTML",
      "CSS",
      "SQL",
    ],
    frameworks: [
      "React",
      "Spring Boot",
      "Tailwind CSS",
      "Bootstrap",
    ],
    ferramentas: [
      "MySQL",
      "Node.js",
      "Vite",
      "Maven",
      "Git",
      "XAMPP",
    ],
  },

  curriculo: {
    perfil: "Desenvolvedor de software",
    competencias: [
      "Aplicações web",
      "Interfaces",
      "Lógica de negócio",
      "Bancos de dados",
    ],
    formacao: [],
    experienciasProfissionais: [],
    projetosDestacados: ["Vesta", "CampusTrack"],
  },
};