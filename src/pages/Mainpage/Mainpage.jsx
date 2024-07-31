import React from "react";
import RoutineBox from "../../components/SubRoutineBox/SubRoutineBox";
import CategoryTitle from "../../components/CategoryTitle/CategoryTitle";
import ImageSlider from "../../components/ImgSlider/ImgSlider";
import * as S from "./styled";
import { DUMMY_DATA, sectionTitle } from "../../constants/HomePage/dummy";
import Logo1 from "../../assets/images/MainLogoImg.svg";
import Logo2 from "../../assets/images/MainLogoImg(2).svg";
function Mainpage() {
  return (
    <>
      <S.MainTitle>
        <S.ImageFame src={Logo1} />
        <S.ImageFame src={Logo2} />
      </S.MainTitle>
      <ImageSlider />
      <S.MainContainer>
        {sectionTitle.map((title) => (
          <div key={title.id}>
            <S.CategoryWrapper>
              <CategoryTitle section={title.section} fontSize="20px" />
            </S.CategoryWrapper>
            <S.RoutineBoxWrapper>
              {DUMMY_DATA.map((data) => (
                <RoutineBox
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  star={data.star}
                />
              ))}
            </S.RoutineBoxWrapper>
          </div>
        ))}
      </S.MainContainer>
    </>
  );
}

export default Mainpage;
