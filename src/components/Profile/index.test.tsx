import { render, screen } from "@testing-library/react";
import { Profile } from ".";

describe("Profile component", () => {
  it("should render Profile", () => {
    render(<Profile />);
    const profileImg = screen.getByRole("img", {
      name: "Imagem de perfil",
    });

    expect(screen.getByText("Sobre mim")).toBeInTheDocument();
    expect(screen.getByTestId("aboutMe")).toBeInTheDocument();
    expect(profileImg).toBeInTheDocument();
  });
});
