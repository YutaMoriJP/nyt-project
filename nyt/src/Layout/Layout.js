import React, { useMemo } from "react";
import GlobalStyled from "../GlobalStyle/GlobalStyled";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";
import {
  ThemeProvider as ThemeProviderMaterial,
  createMuiTheme,
} from "@material-ui/core/styles";
import { themeStyled, themeMaterial } from "../GlobalStyle/themes";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useGlobalContext } from "../Components/ContextProvider/GlobalContext";

const Layout = ({ children }) => {
  const { isDark } = useGlobalContext();
  const materialTheme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary: { main: isDark ? themeMaterial.dark : themeMaterial.light },
          type: isDark ? "dark" : "light",
        },
      }),
    [isDark]
  );
  return (
    <ThemeProviderStyled theme={isDark ? themeStyled.dark : themeStyled.light}>
      <ThemeProviderMaterial theme={materialTheme}>
        <GlobalStyled />
        <CssBaseline />
        <Container>
          <main>{children}</main>
        </Container>
      </ThemeProviderMaterial>
    </ThemeProviderStyled>
  );
};

export default Layout;
