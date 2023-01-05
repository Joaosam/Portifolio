import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Profile } from "./components/Profile";
import { GlobalStyle } from "./styles/global";
import { themeDefault } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyle />
      <Header />
      <Home />
      <Profile />
    </ThemeProvider>
  );
}
