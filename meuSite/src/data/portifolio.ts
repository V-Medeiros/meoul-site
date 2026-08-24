export type LinkExterno = {
  rotulo: string;
  url: string;
};

type Technology = {
  name: string;
};

export type Projeto = {
  nome: string;
  descricao: string;
  tecnologias: Technology[];
  repositorio?: string;
  demonstracao?: string;
};

export const portfolio = {
  about: {
    titulo: "Web Developer",
    nome: "Victor de Oliveira Medeiros",
    resumo:
      "",
    links: [
      {
        rotulo: "GitHub",
        url: "https://github.com/V-Medeiros",
      },
      {
        rotulo: "E-mail",
        url: "mailto:victorme2806@gmail.com",
      },
      {
        rotulo: "Linkedin",
        url: "mailto:victorme2806@gmail.com",
      },
    ],
  },

  projects: [
    {
      nome: "Vesta",
      descricao:
        "A gamified focus app that turns concentration time into a virtual campfire.",
      tecnologias: [
        { name: "TypeScript" },
        { name: "Java" },
        { name: "Spring Boot" },
        { name: "React" },
        { name: "CSS" },
      ],
      repositorio: "https://github.com/V-Medeiros/Vesta",
    },
    {
      nome: "CampusTrack",
      descricao:
        "A system for managing institutions, spaces, users, maps, and events.",
      tecnologias: [
        { name: "PHP" },
        { name: "Javascript" },
        { name: "SQL" },
        { name: "HTML" },
        { name: "CSS" },
      ],
      repositorio: "https://github.com/luis-sandri/CampusTrack",
    },
    {
      nome: "SPARC",
      descricao:
        "SPARC monitors and manages electrical loads in photovoltaic and off-grid environments.",
      tecnologias: [
        { name: "C++" },
        { name: "LitlleFS" },
      ],
      repositorio: "https://github.com/luis-sandri/SPARC",
    },
    {
      nome: "Rpg game",
      descricao: "A CRUD application for an RPG system with a graphical interface.",
      tecnologias: [{ name: "Java" }],
      repositorio: "https://github.com/luis-sandri/RPG",
    },
  ] satisfies Projeto[],

  contact: {
    links:
    [
      {
        rotulo: "send",
        url: "mailto:victorme2806@gmail.com",
        email: "victorme2806@gmail.com",
      }
    ]
  },

  tools: {
    linguagens: [
      "Java",
      "TypeScript",
      "JavaScript",
      "PHP",
      "C++",
      "Python",
      "HTML",
      "CSS",
      "SQL",
    ],
    frameworks: ["React", "Spring Boot", "Tailwind CSS", "Bootstrap"],
    ferramentas: ["MySQL", "Node.js", "Vite", "Maven", "Git", "XAMPP", "Docker"],
  },

  resume: 'Correndo atrás do meu money (oh shit!) Sigo empilhando dinheiro (God damn!) Correndo atrás do meu money (caralho!) Sigo empilhando dinheiro (yeah-yeah) Correndo atrás do meu money (oh shit!) Sigo empilhando dinheiro (ya-ya) Correndo atrás do meu money (oh shit!) Sigo empilhando dinheiro Na pista, baby, eu tô na pista Misturas alucinantes tem na minha bebida (oh) Você já tá frita Usa lsd pra depois sentar na minha pi– (pew-pew) Nêga, viva la vida Tá saindo craque, meu estúdio virou bica (prr) Lucrando junto com os manos Muito talento, dropa a batida, e eu Amo meu refrigerante (God damn!) Nego, o meu dentista só trabalha com diamante (oh shit!) Te faço suar, yeah, dentro da Mustang Cê toda assanhada, te deixei igual um hidrante Na net, só dá Jovem Dex (desce!) Ela me escuta quando quer sair da bad (God damn!) Trabalho com números, os falsos não competem Coleciono hit pra multiplicar meu cash Nego, aqui não passa nada (ye-yeah) Minha firma toda armada (aham) Sentindo o contrabando (aham) Cofres dentro da minha casa (ye-yeah) Sabe de nada (ye-ye-yeah) Deixo minha mãe bilionária (ye-ye-ya) Ela é uma celebridade (oh) Só vestindo peça rara (ye-yeah) Correndo atrás do meu money (pew-pew) Sigo empilhando dinheiro (oh shit!) Correndo atrás do meu money Sigo empilhando dinheiro (ahn) Correndo atrás do meu money (oh shit!) Sigo empilhando dinheiro Correndo atrás do meu money Sigo empilhando dinheiro Já disse não passa nada Meu bonde todo na bala Faço hit o dia inteiro Jovem Dex é o cara Correndo atrás do meu money Sigo empilhando dinheiro Correndo atrás do meu money Sigo empilhando dinheiro Correndo atrás do meu money Sigo empilhando dinheiro Correndo atrás do meu money Sigo empilhando dinheiro Na pista, baby eu to na pista Misturas alucinantes tem na minha bebida Você já tá frita Usa LSD pra depois sentar na minha p. Nega, viva lá vida Tá saindo crack, meu estúdio virou bica Lucrando junto com os manos Muito talento, dropa a batida E eu amo meu refrigerante Nego, meu dentista só trabalha com diamante Te faço soar, yeah Dentro da mustang Cê toda assanha te deixo igual um hidrante Na net só da Jovem Dex Ela me escuta quando quer sair da bad Trabalho com números, os falsos não competem Coleciono hit pra multiplicar meu cash Nego aqui não passa nada Minha firma toda armada Sentido contra bando Cofres dentro da minha casa Sabe de nada Deixo minha mãe bilionaria Ela é um acelebridade Só vestindo peça rara, yeah '
};
