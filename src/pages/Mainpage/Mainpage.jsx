import React from "react";
import RoutineBox from "../../components/RoutineBox/RoutineBox";
import CategoryTitle from "../../components/CategoryTitle/CategoryTitle";
import ImageSlider from "../../components/ImgSlider/ImgSlider";
import * as S from "./styled";

const routineDatas = [
  {
    id: "1",
    title: "일주일에 한권 책읽기",
    star: "BTS RM",
  },
  { id: "2", title: "아이유다이어트", star: "아이유" },
  { id: "3", title: "아이유다이어트", star: "아이유" },
  { id: "4", title: "아이유다이어트", star: "아이유" },
];

const sectionTitles = [
  { id: "1", section: "도전중인 챌린지" },
  { id: "2", section: "최근 업데이트" },
  { id: "3", section: "채민님을 위한 맞춤형 루틴" },
  { id: "4", section: "주간 HOT 루틴" },
];

function Mainpage() {
  return (
    <>
      <S.MainTitle>STAR.T</S.MainTitle>
      <ImageSlider />
      <S.MainContainer>
        {sectionTitles.map((sectionTitle) => (
          <div key={sectionTitle.id}>
            <CategoryTitle section={sectionTitle.section} />
            <S.RoutineBoxWrapper>
              {routineDatas.map((routineData) => (
                <RoutineBox
                  key={routineData.id}
                  title={routineData.title}
                  star={routineData.star}
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
