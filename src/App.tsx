import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { PageDefault } from "./components/@PageDefault";
import { GlobalStyle } from "./styles/global";
import { themeDefault } from "./styles/themes/default";
import { themeLight } from "./styles/themes/light";
import { ThemeSwitcher } from "./styles/themes/ThemeSwitcher";

import { ThemeSwitcherContainer } from "./styles/themes/ThemeSwitcher/style";

export function App() {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    const themeStorage = localStorage.getItem("theme");
    themeStorage && setTheme(JSON.parse(themeStorage));
  }, []);

  function handleThemeChange() {
    setTheme(!theme);
    localStorage.setItem("theme", JSON.stringify(!theme));
  }

  return (
    <ThemeProvider theme={theme ? themeDefault : themeLight}>
      <GlobalStyle />
      <ThemeSwitcherContainer
        title={`Alternar entre modo claro e escuro ${
          theme ? "- atualmente modo escuro" : "- atualmente modo claro"
        }`}
        onClick={handleThemeChange}
      >
        <ThemeSwitcher iconTheme={theme} />
      </ThemeSwitcherContainer>
      <PageDefault />
    </ThemeProvider>
  );
}
