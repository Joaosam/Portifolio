import { useState } from "react";

import {
  BackProject,
  ErrorContainer,
  ImageViewRepos,
  LoadingData,
  Project,
  ProjectsContainer,
  ProjectsContent,
  Sidebar,
  Title,
} from "./styles";
import { useProjects } from "../../services/useProjects";

import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { RotatingLines } from "react-loader-spinner";
import { Warning } from "phosphor-react";

import { RippleButton } from "./components/Ripple";
import ReactCardFlip from "react-card-flip";
import { Fade, Slide } from "react-awesome-reveal";
interface dataAPIProps {
  id: number;
  name: string;
  created_at: string;
  default_branch: string;
  homepage: string;
  description: string;
  html_url: string;
}

export function Projects() {
  const [isFlipped, setIsFlipped] = useState(0);
  const { isLoading, data, isError } = useProjects();

  function handleClick(projectCurrent: dataAPIProps) {
    isFlipped !== projectCurrent.id
      ? setIsFlipped(projectCurrent.id)
      : setIsFlipped(0);
  }

  return (
    <ProjectsContainer id="projects">
      <Slide direction="down" cascade delay={1}>
        <Title>
          <h1>
            Projetos<span>.</span>
          </h1>
        </Title>
      </Slide>
      <Fade delay={450} cascade damping={1e-1}>
        <ProjectsContent>
          {isLoading && (
            <LoadingData>
              <RotatingLines
                strokeColor="#00AEEF"
                strokeWidth="5"
                animationDuration="1"
                width="50"
                visible={true}
              />
              <h1>Carregando...</h1>
            </LoadingData>
          )}
          {isError && (
            <ErrorContainer>
              <Warning size={50} />
              <h3>Falha ao buscar os projetos. Tente novamente mais tarde!</h3>
            </ErrorContainer>
          )}
          {data?.map((projectCurrent: dataAPIProps) => (
            <Project data-testid="project" key={projectCurrent.id}>
              <div className="imgContainer">
                <p>{projectCurrent.name}</p>
                <ReactCardFlip
                  isFlipped={isFlipped === projectCurrent.id}
                  flipDirection="horizontal"
                  flipSpeedBackToFront={2}
                  flipSpeedFrontToBack={2}
                >
                  <ImageViewRepos
                    src={`https://raw.githubusercontent.com/Joaosam/${projectCurrent.name}/${projectCurrent.default_branch}/.github/preview-${projectCurrent.name}.png`}
                    alt={`Imagem ilustrativa de ${projectCurrent.name}`}
                  />
                  <BackProject>
                    <span>{projectCurrent.description}</span>
                    <div className="containerBtnBackProject">
                      <a href={projectCurrent.html_url} target="_blank">
                        Acessar repositório
                      </a>
                      <a href={projectCurrent.homepage} target="_blank">
                        Acessar projeto
                      </a>
                    </div>
                  </BackProject>
                </ReactCardFlip>
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
                <div onClick={() => handleClick(projectCurrent)}>
                  <RippleButton>Ver mais</RippleButton>
                </div>
              </Sidebar>
            </Project>
          ))}
        </ProjectsContent>
      </Fade>
    </ProjectsContainer>
  );
}
