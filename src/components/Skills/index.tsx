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

interface SkillProps {
  description: string;
  title: string;
}

export function Skills() {
  const [descriptionSkill, setDescriptionSkill] = useState("");

  function displayDescription(title: string) {
    data.filter((skill) => {
      if (skill.title === title) {
        setDescriptionSkill(skill.description);
      }
    });
  }

  function clearDescription() {
    setDescriptionSkill("/*Passe o cursor do mouse no card para ler*/");
  }

  return (
    <SkillsContainer id="skills">
      <ListSkillsContainer>
        {data.map((skill: SkillProps) => (
          <ListSkills key={skill.title}>
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
          </ListSkills>
        ))}
      </ListSkillsContainer>
      <ContainerDescriptionSkills>
        <div className="title">
          <h3>
            Conhecimetos<span>.</span>
          </h3>
        </div>
        <Description>{descriptionSkill}</Description>
      </ContainerDescriptionSkills>
    </SkillsContainer>
  );
}
