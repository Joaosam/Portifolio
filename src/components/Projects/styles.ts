import styled, { keyframes } from "styled-components";

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

const trackingInExpand = keyframes`
  0% {
    letter-spacing: -1.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
`;

export const ProjectsContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .imgContainer {
    transition: 0.3s;

    &:hover img {
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

  img {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    width: 100%;
    height: 30rem;
    border-bottom: 5px solid ${(props) => props.theme["default-blue"]};
    transition: 0.5s;
    opacity: 0.5;

    &:hover {
      transform: scale(1.1);
      opacity: 1;
    }
    &:hover .modal {
      display: flex;
      width: 100%;
    }
  }
`;

export const Project = styled.div`
  width: 48%;
  position: relative;
  margin-top: 2.4rem;
`;

export const Modal = styled.div`
  transition: 0.5s;
  width: 100%;
  display: flex;
  position: absolute;
  top: 58%;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem;
  background-color: #212121;
  border-radius: 0 0 1rem 1rem;
  color: ${(props) => props.theme.white};

  &:hover {
    transform: scale(1.1);
  }

  p:nth-child(2) {
    background-color: ${(props) => props.theme["secundary-color"]};
    padding: 0.5rem 1.5rem;
    border-radius: 2rem;
  }
`;

export const Description = styled.div`
  color: ${(props) => props.theme["text-default"]};
  font-size: 2rem;
  margin-top: 2rem;

  h3 {
    text-align: center;
    color: ${(props) => props.theme["text-default"]};
  }
`;
