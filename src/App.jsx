import { theme } from "./style/theme";
import { GlobalStyle } from "./style/globalStyle";
import { ThemeProvider } from "styled-components";
import CategoryTitle from "./components/CategoryTitle";
import RoutineBox from "./components/RoutineBox";

export const App = () => {
  const routineData = {
    title: "일주일에 한권 책읽기",
    star: "BTS RM",
    section: "도전중인 챌린지",
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <h1>STAR.T</h1>
        <RoutineBox title={routineData.title} star={routineData.star} />
        <CategoryTitle section={routineData.section}></CategoryTitle>
      </ThemeProvider>
    </>
  );
};
