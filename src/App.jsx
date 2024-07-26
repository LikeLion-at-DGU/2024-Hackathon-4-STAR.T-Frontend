import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RoutineBox from "./components/RoutineBox";
import CategoryTitle from "./components/CategoryTitle";

function App() {
  const routineData = {
    title: "일주일에 한권 책읽기",
    star: "BTS RM",
    section: "도전중인 챌린지",
  };
  return (
    <>
      <RoutineBox title={routineData.title} star={routineData.star} />
      <CategoryTitle section={routineData.section}></CategoryTitle>
    </>
  );
}

export default App;
