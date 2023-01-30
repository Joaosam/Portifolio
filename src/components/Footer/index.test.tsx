import { render, screen } from "@testing-library/react";
import { Footer } from ".";

describe("Footer component", () => {
  it("should render footer", () => {
    render(<Footer />);

    expect(screen.getByText("Desenvolvido por")).toBeInTheDocument();
  });

  it("should return current year", () => {
    render(<Footer />);
    const date = new Date();
    const currentYear = date.getFullYear();

    expect(screen.getByText(`© ${currentYear} Joaosam`)).toBeInTheDocument();
  });
});
