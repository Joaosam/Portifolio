import {
  ImageViewRepos,
  Modal,
  Project,
  ProjectsContainer,
  ProjectsContent,
  Title,
} from "./styles";
import axios from "axios";
import { useQuery } from "react-query";
import { format } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR/index.js";

interface dataAPIProps {
  id: string;
  name: string;
  created_at: any;
  default_branch: string;
  homepage: string;
}

export function Projects() {
  const { isLoading, data } = useQuery(
    "/repos",
    () =>
      axios
        .get(
          "https://api.github.com/users/joaosam/repos?sort=created&per_page=4"
        )
        .then((response) => response.data),
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <ProjectsContainer id="projects">
      <Title>
        <h1>
          Projetos<span>.</span>
        </h1>
      </Title>
      <ProjectsContent>
        {data.map((projectCurrent: dataAPIProps) => (
          <Project key={projectCurrent.id}>
            <a href={projectCurrent.homepage} target="_blank">
              <div className="imgContainer">
                <p>{projectCurrent.name}</p>
                <ImageViewRepos
                  src={`https://raw.githubusercontent.com/Joaosam/${projectCurrent.name}/${projectCurrent.default_branch}/.github/preview-${projectCurrent.name}.png`}
                  alt={`Imagem ilustrativa de ${projectCurrent.name}`}
                />
              </div>
              <Modal>
                {
                  <p>
                    {format(
                      new Date(projectCurrent.created_at),
                      "dd 'de' MMMM 'de' yyyy",
                      {
                        locale: ptBR,
                      }
                    )}
                  </p>
                }
                <p>Ver mais</p>
              </Modal>
            </a>
          </Project>
        ))}
      </ProjectsContent>
    </ProjectsContainer>
  );
}
