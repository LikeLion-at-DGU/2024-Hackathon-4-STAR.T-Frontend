import React from "react";
import RoutineBox from "../../components/SubRoutineBox/SubRoutineBox";
import CategoryTitle from "../../components/CategoryTitle/CategoryTitle";
import ImageSlider from "../../components/ImgSlider/ImgSlider";
import * as S from "./styled";
import Logo1 from "../../assets/images/MainLogoImg.svg";
import Logo2 from "../../assets/images/MainLogoImg(2).svg";
import { useMainData } from "@/hooks/useMain";

function Mainpage() {
  const { mainData } = useMainData();
  return (
    <>
      <S.MainTitle>
        <S.ImageFame src={Logo1} />
        <S.ImageFame src={Logo2} />
      </S.MainTitle>
      <ImageSlider ThemeImg={[mainData.theme]} />
      <S.MainContainer>
        {mainData.map((title, index) => (
          <div key={index}>
            <S.CategoryWrapper>
              <CategoryTitle section={title} fontSize="20px" />
            </S.CategoryWrapper>
            <S.RoutineBoxWrapper>
              {title.map((data) => (
                <RoutineBox
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  star={data.celeb_name}
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
