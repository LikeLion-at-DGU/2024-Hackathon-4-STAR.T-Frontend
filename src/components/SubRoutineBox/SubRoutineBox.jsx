import React from "react";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";

function RoutineBox({ id, title, star, img }) {
  const navigate = useNavigate();

  const handleStarClick = () => {
    console.log(`Navigating to star with id: ${id}`);
    navigate(`/star/${id}`);
  };

  return (
    <S.RoutineBoxContainer>
      <S.RoutineBoxImg src={img} />
      <S.RoutineBoxContent>
        <S.RoutineBoxTitle>{title}</S.RoutineBoxTitle>
        <S.RoutineBoxStar onClick={handleStarClick}>{star}</S.RoutineBoxStar>
      </S.RoutineBoxContent>
    </S.RoutineBoxContainer>
  );
}
export default RoutineBox;
