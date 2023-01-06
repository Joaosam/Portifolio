import styled, { keyframes } from "styled-components";

interface ListProps {
  downList: boolean;
}

export const SkillsContainer = styled.section`
  padding: 15rem;
  display: flex;
  align-items: flex-start;
`;

export const ListSkillsContainer = styled.div`
  width: 50%;
  display: grid;
  grid-template-areas:
    "li li li "
    "li li li ";
  grid-gap: 5rem;
`;

const jelloHorizontal = keyframes`
  0% {
    transform: scale3d(1, 1, 1);
  }
  30% {
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
`;

export const ListSkills = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  list-style: none;
`;

export const List = styled.li<ListProps>`
  border-radius: 1rem;
  padding: 1.2rem;
  transition: 0.5s;
  position: relative;
  background-color: #292929;
  box-shadow: 3px 3px 7px #000,
    -3px -3px 7px ${(props) => props.theme["default-blue"]};

  &:hover {
    background-color: initial;
    animation: ${jelloHorizontal} 1s both;
    box-shadow: 3px 3px 7px #000,
      -3px -3px 7px ${(props) => props.theme["secundary-color"]};
  }
  &:hover span {
    transition: 0.5s;
    display: initial;
    color: ${(props) => props.theme["text-default"]};
    font-size: 2rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.6rem 1.2rem;
    background-color: #292929;
    border-radius: 1rem;
    top: ${(props) => (props.downList ? "14rem" : "-5.5rem")};
  }

  span {
    display: none;
  }

  img {
    width: 10rem;
  }
`;

export const ContainerDescriptionSkills = styled.div`
  width: 100%;
  text-align: center;

  .title {
    color: ${(props) => props.theme.white};
    font-size: 4rem;
  }
`;

export const Description = styled.div`
  color: ${(props) => props.theme["text-default"]};
  font-size: 2rem;
  width: 50%;
  margin-left: 25%;
`;
