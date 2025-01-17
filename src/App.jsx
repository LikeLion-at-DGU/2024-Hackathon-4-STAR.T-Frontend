import React from "react";
import { styled, ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/globalStyle";
import { theme } from "./style/theme.js";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./components/common/Footer/Footer.jsx";
import { RecoilRoot } from "recoil";
import { useRecoilValue } from "recoil";
import { isLoading } from "./stores/loading";

const Frame = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 420px;
  background-color: white;

  /* color: ${(props) => props.theme.colors.fontBrown}; */
`;

const Content = styled.div`
  flex-grow: 1;
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Layout = () => {
  const loadingStaus = useRecoilValue(isLoading);
  const location = useLocation();
  const excludePaths = [/^\/login/, /^\/signup/, /^\/error/, /^\/agree\/[0-1]/];

  const isExcludedPath = excludePaths.some((regex) =>
    regex.test(location.pathname)
  );

  return (
    <Frame>
      <Wrapper>
        <Content>
          <Outlet />
          {isExcludedPath || loadingStaus ? <></> : <Footer />}
        </Content>
      </Wrapper>
    </Frame>
  );
};

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
