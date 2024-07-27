import React from "react";
import * as S from "./styled";
import plusButton from "../../assets/plusButton.svg";

function RountineContent() {
  return (
    <>
      <ul>
        <li>
          다이어트식단
          <ol>
            <li>아침: 사과 1개</li>
            <li>점심: 고구마 2개 혹은 바나나 1개</li>
            <li>저녁: 단백질 쉐이크 한 잔 (저지방 우유)</li>
          </ol>
        </li>
        <li>다이어트기간</li>
      </ul>
    </>
  );
}
function MainRoutineBox() {
  return (
    <S.BoxContainer>
      <S.RoutineBoxImg />

      <S.TitleContainer>
        <S.MainTitleContainer>
          <S.MainTitle>아이유다이어트</S.MainTitle>
          <img
            src={plusButton}
            alt="Plus Button"
            style={{ width: "16px", height: "16px" }}
          />
        </S.MainTitleContainer>
        <S.SubTitle>짧고 굵게 할 수 있는 극단적인 식단 다이어트</S.SubTitle>
      </S.TitleContainer>
      <S.BoxContent>
        <RountineContent />
      </S.BoxContent>
    </S.BoxContainer>
  );
}
export default MainRoutineBox;
