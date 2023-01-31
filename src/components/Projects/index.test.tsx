import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Projects } from ".";
import { useProjects } from "../../services/useProjects";

import { RotatingLines } from "react-loader-spinner";
import { Warning } from "phosphor-react";

export interface UseProjectsProps {
  isLoading: boolean;
  data: {
    id: number;
    name: string;
    created_at: string;
    default_branch: string;
    homepage: string;
    description: string;
    html_url: string;
  }[];
  isError: boolean;
}

jest.mock("phosphor-react", () => {
  return {
    Warning: jest.fn(),
  };
});

jest.mock("react-loader-spinner", () => {
  return {
    RotatingLines: jest.fn(),
  };
});

jest.mock("../../services/useProjects", () => ({
  useProjects: jest.fn<UseProjectsProps, []>().mockReturnValue({
    isLoading: false,
    data: [
      {
        id: 1,
        name: "Teste",
        created_at: "2023-09-10T00:00:00Z",
        default_branch: "main",
        homepage: "https://joaosam.com",
        description: "Descrição do projeto",
        html_url: "https://joaosam.com",
      },
    ],
    isError: false,
  }),
}));

describe("Projects component", () => {
  const useProjectsMocked = jest.mocked(useProjects);

  beforeEach(() => {
    useProjectsMocked.mockReturnValue({
      isLoading: false,
      data: [
        {
          id: 1,
          name: "Teste",
          created_at: "2023-09-10T00:00:00Z",
          default_branch: "main",
          homepage: "https://joaosam.com",
          description: "Descrição do projeto",
          html_url: "https://joaosam.com",
        },
      ],
      isError: false,
    });
  });
  it("should render the projects component", async () => {
    render(<Projects />);

    expect(screen.getByText("Projetos")).toBeInTheDocument();
    expect(screen.getByText("Teste")).toBeInTheDocument();

    await userEvent.hover(screen.getByTestId("project"));

    await waitFor(() => {
      expect(screen.getByText("09 de setembro de 2023")).toBeVisible();
      expect(screen.getByText("Ver mais")).toBeVisible();
    });
  });

  it("should render with error", () => {
    useProjectsMocked.mockReturnValue({
      isError: true,
    });
    render(<Projects />);

    expect(Warning).toHaveBeenCalled();
    expect(
      screen.getByText(
        "Falha ao buscar os projetos. Tente novamente mais tarde!"
      )
    ).toBeInTheDocument();
  });

  it("should render with loading", () => {
    useProjectsMocked.mockReturnValue({
      isLoading: true,
    });
    render(<Projects />);

    expect(RotatingLines).toHaveBeenCalled();
    expect(screen.getByText("Carregando...")).toBeInTheDocument();
  });

  it("should render back card", async () => {
    render(<Projects />);

    expect(screen.getByText("Descrição do projeto")).not.toBeVisible();
    const button = screen.getByRole("button", {
      name: /ver mais/i,
    });

    await userEvent.hover(screen.getByTestId("project"));
    await userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("Descrição do projeto")).toBeVisible();
    });

    await userEvent.click(button);
  });
});
