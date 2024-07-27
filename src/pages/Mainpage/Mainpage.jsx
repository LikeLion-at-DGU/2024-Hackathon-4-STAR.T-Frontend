import React from "react";
import RoutineBox from "../../components/SubRoutineBox/SubRoutineBox";
import CategoryTitle from "../../components/CategoryTitle/CategoryTitle";
import ImageSlider from "../../components/ImgSlider/ImgSlider";
import * as S from "./styled";
import { DUMMY_DATA, sectionTitle } from "../../constants/HomePage/dummy";

function Mainpage() {
  return (
    <>
      <S.MainTitle>STAR.T</S.MainTitle>
      <ImageSlider />
      <S.MainContainer>
        {sectionTitle.map((title) => (
          <div key={title.id}>
            <CategoryTitle section={title.section} fontSize="20px" />
            <S.RoutineBoxWrapper>
              {DUMMY_DATA.map((data) => (
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
