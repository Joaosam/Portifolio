import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Skills } from ".";

const skills = [
  "HTML",
  "CSS",
  "TypeScript",
  "ReactJS",
  "Styled-components",
  "Jest",
];

describe("Skills component", () => {
  it("should render skills", () => {
    render(<Skills />);
    let skillImg;
    for (const skill of skills) {
      skillImg = screen.getByRole("img", {
        name: `Ícone ${skill}`,
      });
    }

    expect(skillImg).toBeInTheDocument();
    expect(screen.getByText("Conhecimetos")).toBeInTheDocument();
    expect(
      screen.getByText("/*Passe o cursor do mouse no card*/")
    ).toBeInTheDocument();
  });

  it("should display description for the skill", async () => {
    render(<Skills />);

    await userEvent.hover(screen.getAllByTestId("list")[5]);

    expect(
      screen.getByText(
        "Jest é um poderoso Framework de Testes em JavaScript com um foco na simplicidade."
      )
    ).toBeInTheDocument();
  });

  it("should display description default", async () => {
    render(<Skills />);

    await userEvent.unhover(screen.getAllByTestId("list")[5]);

    expect(
      screen.getByText("/*Passe o cursor do mouse no card*/")
    ).toBeInTheDocument();
  });
});
