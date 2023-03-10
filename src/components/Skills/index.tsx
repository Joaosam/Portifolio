import { useState } from "react";
import data from "./data.json";
import {
  ContainerDescriptionSkills,
  Description,
  ListSkills,
  SkillsContainer,
  List,
  ListSkillsContainer,
} from "./style";
import HTML from "../../assets/logo-HTML.svg";
import CSS from "../../assets/logo-CSS.svg";
import TypeScript from "../../assets/logo-TypeScript.svg";
import ReactJS from "../../assets/logo-ReactJS.svg";
import Styledcomponents from "../../assets/logo-Styled-components.svg";
import Jest from "../../assets/logo-Jest.svg";

import { Fade } from "react-awesome-reveal";

interface SkillProps {
  id: number;
  description: string;
  title: string;
}

const pathSvg = [HTML, CSS, TypeScript, ReactJS, Styledcomponents, Jest];

export function Skills() {
  const [descriptionSkill, setDescriptionSkill] = useState(
    "/*Passe o cursor do mouse no card*/"
  );

  function displayDescription(title: string) {
    data.filter((skill) => {
      skill.title === title && setDescriptionSkill(skill.description);
    });
  }

  function clearDescription() {
    setDescriptionSkill("/*Passe o cursor do mouse no card*/");
  }

  return (
    <SkillsContainer id="skills">
      <ListSkillsContainer>
        <ListSkills>
          <Fade direction="left" delay={200}>
            {data.map((skill: SkillProps) => (
              <List
                data-testid="list"
                key={skill.id}
                downList={
                  skill.title === "ReactJS" ||
                  skill.title === "Jest" ||
                  skill.title === "Styled-components"
                }
                onMouseEnter={() => {
                  displayDescription(skill.title);
                }}
                onMouseLeave={clearDescription}
              >
                <span>{skill.title}</span>
                <img src={pathSvg[skill.id]} alt={`Ícone ${skill.title}`} />
              </List>
            ))}
          </Fade>
        </ListSkills>
      </ListSkillsContainer>
      <ContainerDescriptionSkills>
        <Fade direction="right" cascade delay={200} damping={0.3}>
          <div className="title">
            <h3>
              Conhecimetos<span>.</span>
            </h3>
          </div>
          <Description>{descriptionSkill}</Description>
        </Fade>
      </ContainerDescriptionSkills>
    </SkillsContainer>
  );
}
