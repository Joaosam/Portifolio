import { ThemeProvider } from "styled-components";
import { PageDefault } from "./components/@PageDefault";
import { GlobalStyle } from "./styles/global";
import { themeDefault } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyle />
      <PageDefault />
    </ThemeProvider>
  );
}
