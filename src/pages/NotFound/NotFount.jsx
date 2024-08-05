import { ThemeProvider, withTheme } from "styled-components";
import * as S from "./style";
import BACKGROUND from "@/assets/images/notFound.svg";
import { theme } from "@/style/theme";
import { GlobalStyle } from "@/style/globalStyle";
import { NOT_FOUND_TEXT } from "@/constants/NotFound.js/data";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  const handleInit = () => {
    if (sessionStorage.getItem("signed")) {
      navigate("/");
    } else {
      navigate("/login");
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <S.Frame>
        <S.Wrapper>
          <S.Content>
            <S.Layout $url={BACKGROUND}>
              <div>
                <p
                  style={{
                    color: "white",
                    fontSize: "80px",
                    fontFamily: "AppleSDGothicNeoB",
                    fontWeight: "700",
                    lineHeight: "20px",
                  }}
                >
                  {NOT_FOUND_TEXT[0]}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <p
                  style={{
                    color: "white",
                    fontSize: "25px",
                    fontFamily: "AppleSDGothicNeoB",
                    fontWeight: "700",
                    lineHeight: "20px",
                  }}
                >
                  {NOT_FOUND_TEXT[1]}
                </p>
                <p
                  style={{
                    color: "white",
                    fontSize: "25px",
                    fontFamily: "AppleSDGothicNeoB",
                    fontWeight: "700",
                    lineHeight: "20px",
                  }}
                >
                  {NOT_FOUND_TEXT[2]}
                </p>
              </div>
              <div>
                <p
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontFamily: "AppleSDGothicNeoL",
                    fontWeight: "200",
                    lineHeight: "20px",
                    marginTop: "1rem",
                  }}
                >
                  {NOT_FOUND_TEXT[3]}
                </p>
              </div>
              <button
                style={{
                  color: "black",
                  background: "white",
                  width: "50%",
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.6rem 0",
                  fontSize: "16px",
                  fontFamily: "AppleSDGothicNeoL",
                  fontWeight: "400",
                  lineHeight: "20px",
                  marginTop: "1rem",
                }}
                onClick={handleInit}
              >
                처음으로
              </button>
            </S.Layout>
          </S.Content>
        </S.Wrapper>
      </S.Frame>
    </ThemeProvider>
  );
};
