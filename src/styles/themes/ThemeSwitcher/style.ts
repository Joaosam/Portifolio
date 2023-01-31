import styled from "styled-components";

export const ThemeSwitcherContainer = styled.div`
  position: fixed;
  top: 4.5%;
  right: 2%;
  z-index: 1000;
  color: ${(props) => props.theme["text-default"]};
  cursor: pointer;

  @media (max-width: 1024px) {
    position: absolute;
    top: 15%;
    right: 4rem;
    z-index: 10;
  }

  @media (min-width: 1440px) {
    top: 2.5%;
  }
`;
