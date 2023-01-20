import styled, { keyframes } from "styled-components";

const rippleEffect = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(10);
    opacity: 0.375;
  }
  100% {
    transform: scale(35);
    opacity: 0;
  }
`;

export const RippleButtonContainer = styled.button`
  border-radius: 2rem;
  padding: 0.5rem 1.5rem;
  background: transparent;
  border: none;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  > .ripple {
    width: 20px;
    height: 20px;
    position: absolute;
    background: ${(props) => props.theme["bg-ripple"]};
    display: block;
    content: "";
    border-radius: 9999px;
    opacity: 1;
    animation: 1s ease 1 forwards ${rippleEffect};
  }

  > .content {
    position: relative;
    z-index: 20;
  }

  @media (max-width: 1024px) {
    background: ${(props) => props.theme["secundary-color"]};
  }
`;
