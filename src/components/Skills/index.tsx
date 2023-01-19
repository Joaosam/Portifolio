import { useState } from "react";
import data from "./data.json";
import {
  ContainerDescriptionSkills,
  Description,
  ListSkills,
  ListSkillsContainer,
  SkillsContainer,
  List,
} from "./style";
import { Fade } from "react-awesome-reveal";

interface SkillProps {
  description: string;
  title: string;
}

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
        {data.map((skill: SkillProps) => (
          <ListSkills key={skill.title}>
            <Fade direction="left">
              <List
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
                <img
                  src={`/src/assets/logo-${skill.title}.svg`}
                  alt={`Ícone ${skill.title}`}
                />
              </List>
            </Fade>
          </ListSkills>
        ))}
      </ListSkillsContainer>
      <ContainerDescriptionSkills>
        <Fade direction="right" cascade delay={1} damping={0.3}>
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
