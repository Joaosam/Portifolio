import styled from "styled-components";

export const ModalContainer = styled.div`
  background-color: ${(props) => props.theme["bg-components"]};
  padding: 5rem;
  position: fixed;
  z-index: 99;
`;
