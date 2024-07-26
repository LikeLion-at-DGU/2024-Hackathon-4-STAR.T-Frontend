import React from "react";
import RoutineBox from "../../components/RoutineBox/RoutineBox";
import CategoryTitle from "../../components/CategoryTitle/CategoryTitle";
import ImageSlider from "../../components/SlideImg/SlideImg";
import * as S from "./styled";

const routineData = {
  title: "일주일에 한권 책읽기",
  star: "BTS RM",
  section: "도전중인 챌린지",
};

function Mainpage() {
  return (
    <>
      <S.MainTitle>STAR.T</S.MainTitle>
      <ImageSlider />
      <RoutineBox title={routineData.title} star={routineData.star} />
      <CategoryTitle section={routineData.section}></CategoryTitle>
    </>
  );
}

export default Mainpage;
