import styled, { keyframes } from "styled-components";
import { PropsThemeDefault } from "../Home/styles";

interface ThemeProps {
  theme: PropsThemeDefault;
}

export const ProjectsContainer = styled.section`
  background-color: ${(props) => props.theme["bg-secundary"]};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15rem;

  .title {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
  }
  .title > h1 {
    color: ${(props) => props.theme.white};
    font-size: 4rem;
  }
`;

export const Title = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    color: ${(props) => props.theme.white};
    font-size: 4rem;
  }

  span {
    color: ${(props) => props.theme["default-blue"]};
  }
`;

export const Modal = styled.div`
  transition: 0.7s;
  width: 100%;
  display: flex;
  position: absolute;
  z-index: -10;
  bottom: 5%;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem;
  background-color: transparent;
  border-radius: 0 0 1rem 1rem;
  color: transparent;

  p:nth-child(2) {
    padding: 0.5rem 1.5rem;
    border-radius: 2rem;
  }
`;

export const ImageViewRepos = styled.img`
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  width: 100%;
  height: 30rem;
  border-bottom: 5px solid ${(props) => props.theme["default-blue"]};
  transition: 0.5s;
  opacity: 0.5;
`;

const scaleUpTop = (props: ThemeProps) => keyframes`
  to {
    background-color:${props.theme["secundary-color"]};
    transform:scale(1.1)
    }
`;

export const ProjectsContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Project = styled.div`
  width: 48%;
  position: relative;
  margin: 2.5rem 0 5rem 0;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  &:hover .imgContainer ${ImageViewRepos} {
    opacity: 1;
    border-color: ${(props) => props.theme["secundary-color"]};
  }

  &:hover .imgContainer p {
    display: none;
  }
  .imgContainer {
    &:hover ${ImageViewRepos} {
      opacity: 1;
      border-color: ${(props) => props.theme["secundary-color"]};
    }

    p {
      font-weight: 700;
      position: absolute;
      top: 25%;
      left: 40%;
      z-index: 2;
      font-size: 2rem;
      color: ${(props) => props.theme.white};
    }

    &:hover p {
      display: none;
    }
  }

  &:hover ${Modal} {
    bottom: -15%;
    background-color: ${(props) => props.theme["bg-components"]};
    color: ${(props) => props.theme.white};

    p:nth-child(2) {
      animation: ${scaleUpTop} 0.8s 0.5s forwards;
      border: 1px solid ${(props) => props.theme["secundary-color"]};
    }
  }
`;
