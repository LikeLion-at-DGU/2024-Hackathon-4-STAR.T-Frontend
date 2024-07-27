import React from "react";
import RoutineBox from "../../components/RoutineBox/RoutineBox";
import CategoryTitle from "../../components/CategoryTitle/CategoryTitle";
import ImageSlider from "../../components/ImgSlider/ImgSlider";
import * as S from "./styled";
import { DUMMY_DATE, sectionTitle } from "../../constants/HomePage/dummy";

function Mainpage() {
  return (
    <>
      <S.MainTitle>STAR.T</S.MainTitle>
      <ImageSlider />
      <S.MainContainer>
        {sectionTitle.map((title) => (
          <div key={title.id}>
            <CategoryTitle section={title.section} />
            <S.RoutineBoxWrapper>
              {DUMMY_DATE.map((data) => (
                <RoutineBox key={data.id} title={data.title} star={data.star} />
              ))}
            </S.RoutineBoxWrapper>
          </div>
        ))}
      </S.MainContainer>
    </>
  );
}

export default Mainpage;
