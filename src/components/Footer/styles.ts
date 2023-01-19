import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 2.4rem 15rem;

  p {
    color: ${(props) => props.theme["text-default"]};
    font-size: 2rem;
  }

  code {
    color: ${(props) => props.theme["default-blue"]};
  }
`;
