import { theme } from "./style/theme";
import { GlobalStyle } from "./style/globalStyle";
import { ThemeProvider } from "styled-components";

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <h1>STAR.T</h1>
      </ThemeProvider>
    </>
  );
};
