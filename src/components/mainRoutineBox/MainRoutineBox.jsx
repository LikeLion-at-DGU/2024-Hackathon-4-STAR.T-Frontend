import React from "react";
import * as S from "./styled";
import plusButton from "../../assets/plusButton.svg";

function MainRoutineBox({ title, subtitle, content, onPlusButtonClick }) {
  return (
    <S.BoxContainer>
      <S.RoutineBoxImg />

      <S.TitleContainer>
        <S.MainTitleContainer>
          <S.MainTitle>{title}</S.MainTitle>
          <img
            src={plusButton}
            alt="Plus Button"
            style={{ width: "24px", height: "24px" }}
            onClick={onPlusButtonClick}
          />
        </S.MainTitleContainer>
        <S.SubTitle>{subtitle}</S.SubTitle>
      </S.TitleContainer>
      <S.BoxContent dangerouslySetInnerHTML={{ __html: content }} />
    </S.BoxContainer>
  );
}
export default MainRoutineBox;
