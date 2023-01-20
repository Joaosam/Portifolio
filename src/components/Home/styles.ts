import styled, { keyframes } from "styled-components";
import { themeDefault } from "../../styles/themes/default";

export type PropsThemeDefault = typeof themeDefault;

interface SocialProps {
  theme: PropsThemeDefault;
  linkedin?: boolean;
  github?: boolean;
}

const scrollDown = keyframes`
  from {
      opacity: 0;
    }
    to {
      transform: translateY(40%);
      opacity: 1;
    }
`;

export const HomeContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15rem;

  .caretDown {
    display: none;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding-inline: 3rem;
    height: 95vh;

    .caretDown {
      display: initial;
      position: absolute;
      bottom: 10%;
      color: ${(props) => props.theme["default-blue"]};
      animation: ${scrollDown} 1s ease-in-out alternate infinite;
    }
  }

  @media (max-width: 1024px) {
    padding-inline: 3rem;
  }

  @media (min-width: 1440px) {
    height: 90vh;
  }
`;

const textFocusIn = keyframes`
    0% {
      filter: blur(1.2rem);
      opacity: 0;
    }
    100% {
      filter: blur(0px);
      opacity: 1;
    }
`;
const typing = (width: string) => keyframes`
  from {
    width: 0;
  }
  to {
    width: ${width};
  }

`;
const blinkCursor = (props: SocialProps) => keyframes`
  from {
    border-right-color: ${props.theme["secundary-color"]};
  }
  to {
    border-right-color: transparent;
  }
`;

export const Hello = styled.div`
  color: ${(props) => props.theme["text-default"]};
  animation: ${textFocusIn} 1.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;

  h1 {
    text-transform: uppercase;
    color: ${(props) => props.theme["default-blue"]};
    font-size: 5rem;
    animation: ${blinkCursor} 500ms steps(12) infinite normal,
      ${typing("76%")} 2.5s 0.2s steps(12) normal;
    white-space: nowrap;
    overflow: hidden;
    border-right: 2px solid ${(props) => props.theme["secundary-color"]};
    width: 76%;
  }

  h2 {
    font-size: 3.2rem;
    font-weight: 500;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    h1 {
      width: 68%;
      font-size: 3rem;
      animation: ${blinkCursor} 500ms steps(12) infinite normal,
        ${typing("68%")} 2.5s 0.2s steps(12) normal;
    }

    h2 {
      font-size: 2.5rem;
    }
  }

  @media (min-width: 1440px) {
    h1 {
      width: 72%;
      font-size: 6rem;
      animation: ${blinkCursor} 500ms steps(12) infinite normal,
        ${typing("72%")} 2.5s 0.2s steps(12) normal;
    }

    h2 {
      font-size: 4rem;
    }
  }
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 3.2rem;

  @media (max-width: 768px) {
    justify-content: flex-start;
    gap: 2rem;
  }
`;

const shadowInsetCenter = (props: SocialProps) => keyframes`
    0% {
      box-shadow: inset 0px 0 15px 0 ${
        props.linkedin
          ? props.theme["default-blue"]
          : props.theme["secundary-color"]
      };
    }
    100% {
      box-shadow: inset 0 0 65px 0 rgba(0, 0, 0, 0.5);
    }
  `;

export const SocialMedia = styled.div<SocialProps>`
  width: 15rem;
  border-radius: 1rem;
  box-shadow: inset 0px 0 12px 0
    ${(props) =>
      props.linkedin
        ? props.theme["default-blue"]
        : props.theme["secundary-color"]};

  &:hover {
    animation: ${shadowInsetCenter} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both reverse;
  }
`;

export const SocialLink = styled.a`
  font-size: 2rem;
  padding: 1.2rem;
  border-radius: 1rem;
  text-decoration: none;
  color: ${(props) => props.theme["text-default"]};
  transition: 0.5s;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  .btnSocial {
    color: ${(props) => props.theme["default-blue"]};
  }
`;

const pulse = keyframes`
from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
`;

export const DeveloperIlustration = styled.div`
  img {
    width: 40rem;
    animation: ${pulse} 1.5s linear alternate infinite;
  }

  @media (max-width: 768px) {
    img {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    img {
      width: 28rem;
    }
  }

  @media (min-width: 1440px) {
    img {
      width: 50rem;
    }
  }
`;
