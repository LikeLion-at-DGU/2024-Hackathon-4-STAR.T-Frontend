import React from "react";
import * as S from "./styled";

function RoutineBox({ title, star }) {
  return (
    <S.RoutineBoxContainer>
      <S.RoutineBoxImg></S.RoutineBoxImg>
      <S.RoutineBoxContent>
        <S.RoutineBoxTitle>{title}</S.RoutineBoxTitle>
        <S.RoutineBoxStar>{star}</S.RoutineBoxStar>
      </S.RoutineBoxContent>
    </S.RoutineBoxContainer>
  );
}
export default RoutineBox;
