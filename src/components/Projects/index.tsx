import {
  ImageViewRepos,
  Project,
  ProjectsContainer,
  ProjectsContent,
  Sidebar,
  Title,
} from "./styles";
import axios from "axios";
import { useQuery } from "react-query";
import { format } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR/index.js";
import { Modal } from "./components/Modal";
import { useState } from "react";

export interface dataAPIProps {
  id: string;
  name: string;
  created_at: any;
  default_branch: string;
  homepage: string;
}

export function Projects() {
  const [openModal, setOpenModal] = useState(false);
  const { isLoading, data } = useQuery(
    "/repos",
    () =>
      axios
        .get(
          "https://api.github.com/users/joaosam/repos?sort=created&per_page=6"
        )
        .then((response) => response.data),
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) {
    return <h1>Carregando...</h1>;
  }
  function toggleModal(openModal: boolean) {
    setOpenModal(openModal);
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
          <Project key={projectCurrent.id} onClick={() => toggleModal(true)}>
            {openModal && (
              <Modal onToggleModal={toggleModal} stateOpenModal={openModal} />
            )}
            <div className="imgContainer">
              <p>{projectCurrent.name}</p>
              <ImageViewRepos
                src={`https://raw.githubusercontent.com/Joaosam/${projectCurrent.name}/${projectCurrent.default_branch}/.github/preview-${projectCurrent.name}.png`}
                alt={`Imagem ilustrativa de ${projectCurrent.name}`}
              />
            </div>
            <Sidebar>
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
            </Sidebar>
          </Project>
        ))}
      </ProjectsContent>
    </ProjectsContainer>
  );
}
