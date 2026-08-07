import styles from "./style.module.css";

export type TipoConteudo =
  | "sobre"
  | "projetos"
  | "experiencia"
  | "habilidades"
  | "curriculo";

type ConteudoPortfolioProps = { tipo: TipoConteudo };

const linguagens = [
  "Java", "TypeScript", "JavaScript", "PHP", "HTML5", "CSS3", "SQL", "Python",
];
const frameworks = ["React", "Spring Boot", "Tailwind CSS", "Bootstrap"];
const ferramentas = ["MySQL", "Node.js", "Vite", "Maven", "Git", "XAMPP"];

function LinkExterno({ href, children }: { href: string; children: string }) {
  return (
    <a className={styles.link} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function Etiquetas({ itens }: { itens: string[] }) {
  return (
    <ul className={styles.tags}>
      {itens.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

function Sobre() {
  return (
    <article className={styles.painel}>
      <p className={styles.caminho}>C:\Portfolio\Sobre-mim.txt</p>
      <h2>Desenvolvedor de software</h2>
      <p>
        Olá! Eu sou Victor. Transformo ideias em aplicações e uso meus
        projetos para explorar soluções web, interfaces e novas tecnologias.
      </p>
      <div className={styles.status}>
        <span className={styles.luz} aria-hidden="true" />
        Projetos e tecnologias publicados no GitHub.
      </div>
      <nav className={styles.acoes} aria-label="Links de contato">
        <LinkExterno href="https://github.com/V-Medeiros">Abrir GitHub</LinkExterno>
        <a className={styles.link} href="mailto:victorme2806@gmail.com">Enviar e-mail</a>
      </nav>
    </article>
  );
}

function Projetos() {
  return (
    <article className={styles.painel}>
      <p className={styles.caminho}>C:\Portfolio\Projetos</p>
      <h2>Projetos em destaque</h2>
      <div className={styles.listaProjetos}>
        <section className={styles.projeto}>
          <h3>Vesta</h3>
          <p>
            SaaS de foco gamificado que transforma o tempo de concentração em
            uma fogueira virtual que cresce.
          </p>
          <LinkExterno href="https://github.com/V-Medeiros/Vesta">Ver repositório</LinkExterno>
        </section>
        <section className={styles.projeto}>
          <h3>CampusTrack</h3>
          <p>
            Sistema web para gerenciar instituições, espaços de campus,
            usuários, níveis de acesso, mapas interativos e eventos.
          </p>
          <LinkExterno href="https://github.com/luis-sandri/CampusTrack">Ver repositório</LinkExterno>
        </section>
      </div>
      <h3 className={styles.subtitulo}>Outros projetos públicos</h3>
      <ul className={styles.listaLinks}>
        <li><LinkExterno href="https://github.com/V-Medeiros/Caminho-dos-reis-jogo">Caminho dos Reis — jogo em Python</LinkExterno></li>
        <li><LinkExterno href="https://github.com/V-Medeiros/explain-my-error">Explain My Error — JavaScript</LinkExterno></li>
        <li><LinkExterno href="https://github.com/V-Medeiros/json-visualizer">JSON Visualizer — JavaScript</LinkExterno></li>
      </ul>
    </article>
  );
}

function Experiencia() {
  return (
    <article className={styles.painel}>
      <p className={styles.caminho}>C:\Portfolio\Experiencia.log</p>
      <h2>Experiência prática</h2>
      <p>
        Minha trajetória está registrada nos projetos que desenvolvo e publico
        no GitHub. Neles, pratico diferentes partes da construção de software:
      </p>
      <ul className={styles.listaMarcada}>
        <li>desenvolvimento de aplicações e interfaces web;</li>
        <li>organização de regras de negócio e níveis de acesso;</li>
        <li>integração com bancos de dados e ferramentas de projeto;</li>
        <li>versionamento e evolução contínua do código com Git.</li>
      </ul>
      <p className={styles.observacao}>
        Este espaço pode receber depois suas experiências profissionais,
        formação e datas.
      </p>
    </article>
  );
}

function Habilidades() {
  return (
    <article className={styles.painel}>
      <p className={styles.caminho}>C:\Portfolio\Skills.ini</p>
      <section className={styles.grupo}>
        <h2>Linguagens</h2>
        <Etiquetas itens={linguagens} />
      </section>
      <section className={styles.grupo}>
        <h2>Frameworks e bibliotecas</h2>
        <Etiquetas itens={frameworks} />
      </section>
      <section className={styles.grupo}>
        <h2>Banco de dados e ferramentas</h2>
        <Etiquetas itens={ferramentas} />
      </section>
    </article>
  );
}

function Curriculo() {
  return (
    <article className={styles.painel}>
      <p className={styles.caminho}>C:\Portfolio\Curriculo.doc</p>
      <h2>Resumo profissional</h2>
      <dl className={styles.ficha}>
        <div><dt>Nome</dt><dd>Victor</dd></div>
        <div><dt>Área</dt><dd>Desenvolvimento de software</dd></div>
        <div><dt>Competências</dt><dd>Aplicações web, interfaces, lógica e bancos de dados</dd></div>
        <div><dt>Destaques</dt><dd>Vesta e CampusTrack</dd></div>
      </dl>
      <nav className={styles.acoes} aria-label="Acessos do currículo">
        <LinkExterno href="https://github.com/V-Medeiros">Ver portfólio no GitHub</LinkExterno>
        <a className={styles.link} href="mailto:victorme2806@gmail.com">Entrar em contato</a>
      </nav>
      <p className={styles.observacao}>
        Formação, experiências profissionais e um currículo para download
        podem ser adicionados aqui quando estiverem disponíveis.
      </p>
    </article>
  );
}

export function ConteudoPortfolio({ tipo }: ConteudoPortfolioProps) {
  const conteudos = {
    sobre: <Sobre />,
    projetos: <Projetos />,
    experiencia: <Experiencia />,
    habilidades: <Habilidades />,
    curriculo: <Curriculo />,
  } satisfies Record<TipoConteudo, React.ReactNode>;

  return conteudos[tipo];
}
