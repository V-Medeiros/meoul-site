/* @vitest-environment jsdom */

import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { ConteudoPortfolio } from "./main";

afterEach(cleanup);

describe("ConteudoPortfolio", () => {
  it.each([
    ["sobre", "Desenvolvedor de software"],
    ["projetos", "Projetos em destaque"],
    ["experiencia", "Experiência prática"],
    ["habilidades", "Linguagens"],
    ["curriculo", "Resumo profissional"],
  ] as const)("renderiza o painel %s", (tipo, tituloEsperado) => {
    render(<ConteudoPortfolio tipo={tipo} />);

    expect(
      screen.getByRole("heading", { name: tituloEsperado }),
    ).toBeInTheDocument();
  });

  it("apresenta os projetos publicados no perfil", () => {
    render(<ConteudoPortfolio tipo="projetos" />);

    expect(screen.getByRole("heading", { name: "Vesta" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "CampusTrack" }),
    ).toBeInTheDocument();
  });

  it("apresenta React entre as habilidades", () => {
    render(<ConteudoPortfolio tipo="habilidades" />);

    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("abre o GitHub em uma nova aba com isolamento", () => {
    render(<ConteudoPortfolio tipo="sobre" />);

    const link = screen.getByRole("link", { name: /github/i });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer");
  });
});
