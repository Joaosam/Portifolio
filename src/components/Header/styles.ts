import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme["bg-secundary"]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.white};
  padding: 2.4rem 15rem;
  position: fixed;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3rem);
  -webkit-backdrop-filter: blur(3rem);
  z-index: 999;
  box-shadow: 3px 3px 7px #000,
    -3px -3px 7px ${(props) => props.theme["default-blue"]};

  div > a {
    font-size: 2.5rem;
    text-decoration: none;
    color: ${(props) => props.theme["default-blue"]};
    transition: 0.5s;

    &:hover {
      color: ${(props) => props.theme["secundary-color"]};
      cursor: pointer;
    }
  }
  nav {
    display: flex;
    gap: 2rem;
  }
`;

export const NavLinkStyled = styled.ul`
  list-style: none;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.white};
    font-size: 1.5rem;
    transition: 0.5s;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }

    &::after {
      content: "";
      display: block;
      width: 0;
      height: 0.2rem;
      background: linear-gradient(
        to right,
        ${(props) => props.theme["default-blue"]},
        ${(props) => props.theme["secundary-color"]}
      );
      transition: 0.5s;
    }

    &:hover:after {
      width: 100%;
    }
  }

  .active {
    opacity: 1;

    &::after {
      width: 100%;
    }
  }
`;
