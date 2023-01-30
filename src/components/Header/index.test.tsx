import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from ".";

describe("Header component", () => {
  it("should render navlink", () => {
    render(<Header />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Sobre mim")).toBeInTheDocument();
    expect(screen.getByText("Conhecimentos")).toBeInTheDocument();
    expect(screen.getByText("Projetos")).toBeInTheDocument();
  });

  it("shold be able open navlink in mobile", async () => {
    render(<Header />);

    await userEvent.click(screen.getByTestId("inputMobile"));

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Sobre mim")).toBeInTheDocument();
    expect(screen.getByText("Conhecimentos")).toBeInTheDocument();
    expect(screen.getByText("Projetos")).toBeInTheDocument();
  });
});
