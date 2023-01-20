import styled from "styled-components";

export const BtnMobile = styled.div`
  display: none;
`;

export const NavLinkStyled = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;

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

  @media (max-width: 768px) {
    transition: 0.5s linear;
    visibility: hidden;
    transform: translateX(-100%);
    z-index: 50;
    position: absolute;
    transition: transform 600ms linear;
  }
`;

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

  @media (max-width: 768px) {
    padding: 1rem 3rem;

    a {
      display: none;
    }

    .logo a {
      display: initial;
    }

    ${BtnMobile} {
      display: block;
      border: none;
      width: 6rem;
      height: 5rem;

      input {
        height: 7rem;
        width: 7rem;
        position: absolute;
        top: 0;
        right: 5%;
        display: block;
        opacity: 0;
        z-index: 1;
      }

      .btn {
        width: 5rem;
        height: 5rem;
        position: relative;
      }

      .btn:before {
        content: "";
        position: absolute;
        top: 30%;
        width: 100%;
        height: 8%;
        border-radius: 2rem;
        background-color: ${(props) => props.theme["text-default"]};
        transition: 1s ease;
      }

      .btn:after {
        content: "";
        position: absolute;
        top: 60%;
        left: 45%;
        width: 50%;
        height: 8%;
        border-radius: 2rem;
        background-color: ${(props) => props.theme["text-default"]};
        transition: 1s ease;
      }

      #btn:checked ~ label .btn:before {
        transform: rotate(225deg);
        top: 45%;
      }

      #btn:checked ~ label .btn:after {
        transform: rotate(-585deg);
        top: 45%;
        left: 0;
        width: 100%;
      }
    }

    nav.inactive ${NavLinkStyled} {
      transition: 0.5s linear;
      visibility: hidden;
      transform: translateX(-100%);
      z-index: 50;
      position: absolute;
      transition: transform 600ms linear;

      li {
        transform: translateX(-100%);
      }
    }

    nav.active ${NavLinkStyled} {
      position: absolute;
      width: 100vw;
      height: 100vh;
      top: 100%;
      left: 0;
      background-color: ${(props) => props.theme["bg-secundary"]};
      text-align: center;
      visibility: visible;
      z-index: 0;
      display: block;
      transform: translateX(0%);

      a {
        display: block;
        margin-top: 5rem;
        font-size: 3rem;
        display: inline-block;
      }

      li:nth-child(1) {
        transform: translateX(0%);
        transition: transform 1.2s ease-in-out;
      }
      li:nth-child(2) {
        transform: translateX(0%);
        transition: transform 1.35s ease-in-out;
      }
      li:nth-child(3) {
        transform: translateX(0%);
        transition: transform 1.5s ease-in-out;
      }
      li:nth-child(4) {
        transform: translateX(0%);
        transition: transform 1.6s ease-in-out;
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 1rem 3rem;
  }
`;
