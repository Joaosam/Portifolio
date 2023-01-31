import styled, { keyframes } from "styled-components";
import { PropsThemeDefault } from "../Home/styles";
import { RippleButtonContainer } from "./components/Ripple/styles";

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

  h1 {
    color: ${(props) => props.theme.white};
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    padding: 10rem 3rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 10rem 6rem;
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

export const Sidebar = styled.div`
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
  border-radius: 0 0 10px 10px;
  color: transparent;

  ${RippleButtonContainer} {
    color: ${(props) => props.theme["bg-body"]};
    padding: 0.5rem 1.5rem;
    border-radius: 2rem;
  }

  @media (max-width: 1024px) {
    bottom: -15%;
    background-color: ${(props) => props.theme["bg-components"]};
    color: ${(props) => props.theme.white};
    z-index: 99;
  }
`;

export const ImageViewRepos = styled.img`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
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

  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
  }

  @media (min-width: 1440px) {
    padding-inline: 12rem;
  }
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
      text-transform: uppercase;
      font-weight: 700;
      position: absolute;
      top: 25%;
      right: 50%;
      transform: translate(50%, 50%);
      font-size: 2rem;
      color: ${(props) => props.theme.white};
    }

    &:hover p {
      display: none;
    }
  }

  &:hover ${Sidebar} {
    bottom: -15%;
    background-color: ${(props) => props.theme["bg-components"]};
    color: ${(props) => props.theme.white};
    z-index: 99;

    ${RippleButtonContainer} {
      text-decoration: none;
      transition: 0.5s;
      opacity: 0.8;
      animation: ${scaleUpTop} 0.8s 0.5s forwards;
      border: 1px solid ${(props) => props.theme["secundary-color"]};
      cursor: pointer;

      &:hover {
        opacity: 1;
        filter: brightness(1.1);
      }
    }
  }
  @media (max-width: 1024px) {
    width: 100%;

    &:hover {
      transform: scale(1);
    }
  }
`;

export const LoadingData = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  ${ProjectsContainer} h1 {
    display: none;
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  color: ${(props) => props.theme.danger};

  h3 {
    color: ${(props) => props.theme["text-default"]};
    font-size: 2rem;
  }
`;

export const BackProject = styled.div`
  width: 100%;
  height: 30rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transition: 0.3s;
  background-color: ${(props) => props.theme["bg-components-2"]};
  color: ${(props) => props.theme["text-default"]};
  padding-inline: 1.2rem;
  display: grid;
  place-items: center;
  border: 1px solid ${(props) => props.theme["secundary-color"]};
  border-bottom: none;

  span {
    font-size: 1.4rem;
  }

  .containerBtnBackProject {
    width: 100%;
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
      color: #fff;
      background-image: linear-gradient(
        90deg,
        rgba(123, 50, 241, 0.8) 0.1%,
        rgba(102, 16, 242, 0.648) 100%
      );
      padding: 0.5rem 1.5rem;
      border-radius: 2rem;
      opacity: 1;
      transition: 0.3s;

      &:hover {
        background-image: linear-gradient(
          90deg,
          rgba(123, 50, 241, 0.9) 0.1%,
          rgba(102, 16, 242, 0.848) 100%
        );
      }
    }
  }
`;
