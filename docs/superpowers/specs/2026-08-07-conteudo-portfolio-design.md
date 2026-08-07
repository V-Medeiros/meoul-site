# Conteúdo das janelas do portfólio

## Objetivo

Substituir o texto provisório das cinco janelas do portfólio por conteúdo baseado no perfil público de Victor (`V-Medeiros`) no GitHub, mantendo a identidade visual inspirada em interfaces clássicas do Windows.

## Fontes e limites

O conteúdo será derivado do README do perfil e dos repositórios públicos apresentados no GitHub. Não serão inventados empresas, cargos, formação acadêmica, datas ou resultados que não estejam publicados. Quando faltarem informações, o texto será propositalmente geral e fácil de editar depois.

## Apresentação

As descrições deixarão de ser strings simples e passarão a aceitar conteúdo React. Cada janela terá seções compactas, listas, etiquetas e links com aparência coerente com um painel de propriedades do Windows clássico. A estrutura existente de atalhos, abertura, minimização, maximização e arraste será preservada.

## Conteúdo por janela

### Sobre mim

Apresentará Victor como desenvolvedor de software interessado em aplicações web e projetos práticos. Incluirá uma descrição breve do conjunto de tecnologias visível no GitHub e links de contato publicados no perfil.

### Projetos

Destacará Vesta e CampusTrack com as descrições publicadas no README. Também listará Caminho dos Reis, Explain My Error e JSON Visualizer conforme aparecem nos repositórios públicos. Links serão adicionados somente quando o destino público puder ser determinado com segurança.

### Experiência

Resumirá a experiência demonstrável por projetos: desenvolvimento de aplicações web, interfaces, lógica de negócio, bancos de dados e uso de ferramentas de versionamento. O texto não afirmará vínculo empregatício, senioridade ou duração de experiência.

### Habilidades

Organizará as tecnologias publicadas no GitHub em três grupos:

- Linguagens: Java, TypeScript, JavaScript, PHP, HTML, CSS, SQL e Python.
- Frameworks e bibliotecas: React, Spring Boot, Tailwind CSS e Bootstrap.
- Ferramentas e dados: MySQL, Node.js, Vite, Maven, Git e XAMPP.

### Currículo

Funcionará como um resumo rápido, reunindo perfil profissional, competências principais, projetos em destaque e formas de contato. Indicará claramente que detalhes de formação e experiência profissional podem ser complementados posteriormente.

## Componentes e dados

`Atalho` e `Janela` aceitarão `ReactNode` na propriedade de descrição. O conteúdo será mantido próximo à configuração dos atalhos para evitar arquitetura desnecessária nesta etapa. Classes específicas cuidarão apenas da hierarquia visual do conteúdo, sem alterar a moldura ou o comportamento das janelas.

## Tratamento de links e conteúdo incompleto

Links externos abrirão em nova aba e usarão os atributos de segurança apropriados. Informações ausentes não provocarão estados de erro: serão omitidas ou apresentadas como campos que o autor poderá complementar.

## Verificação

A mudança será validada por lint e build do projeto `meu`. Também será feita uma conferência visual das cinco janelas em tamanhos normal e maximizado, verificando legibilidade, rolagem e funcionamento dos links.
