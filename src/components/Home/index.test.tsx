import { render, screen } from "@testing-library/react";
import { Home } from ".";

describe("Home component", () => {
  it("should render home", () => {
    render(<Home />);

    expect(screen.getByText("Linkedin")).toBeInTheDocument();
    expect(screen.getByText("Github")).toBeInTheDocument();
  });

  it("should image es present developer.svg", () => {
    render(<Home />);
    const developerImg = screen.getByRole("img", {
      name: "ilustração de homem programando em seu computador",
    });

    expect(developerImg).toBeInTheDocument();
  });
});
