// src/pages/Mainpage/Mainpage.js
import React from "react";
import RoutineBox from "../../components/SubRoutineBox/SubRoutineBox";
import CategoryTitle from "../../components/CategoryTitle/CategoryTitle";
import ImageSlider from "@/components/ImgSlider/ImgSlider";
import * as S from "./styled";
import Logo1 from "../../assets/images/MainLogoImg.svg";
import Logo2 from "../../assets/images/MainLogoImg(2).svg";
import { useMainData } from "@/hooks/useMain";
import { useRecoilValue } from "recoil";
import { isLoading } from "@/stores/loading";
import { Loading } from "../Loading/Loading";

function Mainpage() {
  const loadingStatus = useRecoilValue(isLoading);
  const { mainData } = useMainData();
  const themeData = mainData?.theme; // mainData가 존재하는지 확인
  const filteredKeys = mainData
    ? Object.keys(mainData).filter((key) => key !== "theme")
    : [];

  if (loadingStatus) {
    return <Loading />;
  }

  return (
    <>
      <S.MainTitle>
        <S.ImageFame src={Logo1} />
        <S.ImageFame src={Logo2} />
      </S.MainTitle>
      {themeData && <ImageSlider ThemeImg={themeData} />}
      <S.MainContainer>
        {filteredKeys.map((key, index) => (
          <div key={index}>
            <S.CategoryWrapper>
              <CategoryTitle section={key} fontSize="20px" />
            </S.CategoryWrapper>
            <S.RoutineBoxWrapper>
              {mainData[key].map((data) => (
                <RoutineBox
                  key={data.id}
                  id={data.id}
                  img={data.image}
                  title={data.title}
                  star={data.celeb_name}
                  url={data.url}
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
