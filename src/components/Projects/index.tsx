import {
  Description,
  Modal,
  Project,
  ProjectsContainer,
  ProjectsContent,
  Title,
} from "./styles";
import axios from "axios";
import { useQuery } from "react-query";

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

  data.map((bla: any) => console.log(bla));

  return (
    <ProjectsContainer id="projects">
      <Title>
        <h1>
          Projetos<span>.</span>
        </h1>
      </Title>
      <ProjectsContent>
        <Project>
          <div className="imgContainer">
            <p>HUBKUT</p>
            <img
              src="https://raw.githubusercontent.com/Joaosam/todo-list/master/.github/preview-todolist.png"
              alt="Imagem ilustrativa do Hubkut"
            />
          </div>
          <Modal>
            <p>06 de Janeiro de 2023</p>
            <p>Ver mais</p>
          </Modal>

          <a href="https://joaosam.github.io/Hubkut/" target="_blank"></a>
          <Description>
            <h3>Hubkut</h3>
            <p>
              Neste projeto a ideia é unir o layout do Orkut consumindo a API do
              Github, carregando assim as informações do usuário do Github
              pesquisado na página de login.
            </p>
            <div className="goToRepos">
              <a href="https://joaosam.github.io/Hubkut/" target="_blank">
                Visualizar Projeto
              </a>
            </div>
          </Description>
        </Project>
      </ProjectsContent>
    </ProjectsContainer>
  );
}
