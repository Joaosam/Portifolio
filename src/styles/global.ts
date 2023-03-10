import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-family:"Saira";
        font-size: 62.5%;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    body {
        width: 100vw;
        height: 100vh;
        background-color: ${(props) => props.theme["bg-body"]};
    }

    ::-webkit-scrollbar {
        width: 1rem;
        background-color: ${(props) => props.theme["bg-body"]};
}

::-webkit-scrollbar-thumb {
  background-color: ${(props) => props.theme["default-blue"]};
  border-radius: .5rem;
}
`;
