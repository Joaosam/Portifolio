import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "./App";

describe("App component", () => {
  it("should be able to change theme and save it to localStorage", async () => {
    render(<App />);
    const themeSwitcher = screen.getByTitle(
      /Alternar entre modo claro e escuro/
    );

    expect(screen.getByTitle(/atualmente modo escuro/)).toBeInTheDocument();
    expect(localStorage.getItem("theme")).toBe(null);

    await userEvent.click(themeSwitcher);

    expect(screen.getByTitle(/atualmente modo claro/)).toBeInTheDocument();
    expect(localStorage.getItem("theme")).toBe("false");
  });

  it("should be able get current theme the localStorage", () => {
    localStorage.setItem("theme", "true");
    render(<App />);
    expect(screen.getByTitle(/atualmente modo escuro/)).toBeInTheDocument();
  });
});
