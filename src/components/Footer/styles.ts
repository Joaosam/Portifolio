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

  @media (max-width: 768px) {
    padding: 2rem 3rem;

    p {
      font-size: 1.5rem;
    }
  }
`;
