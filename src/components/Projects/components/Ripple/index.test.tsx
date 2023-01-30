import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RippleButton } from ".";

describe("Ripple component", () => {
  it("should render ripple", () => {
    render(<RippleButton children="Ver mais" />);

    expect(screen.getByText("Ver mais")).toBeInTheDocument();
  });

  it("should have ripple effect when clicked", async () => {
    const { container } = render(<RippleButton children="Ver mais" />);
    const button = container.firstElementChild;

    await userEvent.click(screen.getByText("Ver mais"));
    expect(button?.querySelector(".ripple")).not.toBe(null);

    await waitFor(() => {
      expect(button?.querySelector(".ripple")).toBe(null);
    });
  });
});
