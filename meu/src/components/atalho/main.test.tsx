/* @vitest-environment jsdom */

import "@testing-library/jest-dom/vitest";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Atalho } from "./main";

afterEach(cleanup);

describe("Atalho", () => {
  it("mantém os controles da janela ao renderizar conteúdo React", () => {
    render(
      <Atalho
        nome="Teste"
        top={10}
        left={10}
        width={400}
        height={300}
        descricao={<strong>Conteúdo React</strong>}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: "Abrir Teste" }));
    expect(screen.getByText("Conteúdo React")).toBeInTheDocument();

    const maximizar = screen.getByRole("button", { name: "Maximizar Teste" });
    fireEvent.click(maximizar);
    expect(
      screen.getByRole("button", { name: "Restaurar Teste" }),
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Restaurar Teste" }));

    fireEvent.click(screen.getByRole("button", { name: "Minimizar Teste" }));
    expect(screen.queryByText("Conteúdo React")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Restaurar Teste" }));
    fireEvent.click(
      within(screen.getByRole("dialog")).getByRole("button", {
        name: "Fechar Teste",
      }),
    );
    expect(screen.queryByText("Conteúdo React")).not.toBeInTheDocument();
  });
});
