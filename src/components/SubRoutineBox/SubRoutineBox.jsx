import React from "react";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";

function RoutineBox({ url, title, star, img }) {
  const navigate = useNavigate();

  const handleStarClick = (url) => {
    navigate(`/star/${url}`);
  };

  return (
    <S.RoutineBoxContainer onClick={() => handleStarClick(url)}>
      <S.RoutineBoxImg src={img} />
      <S.RoutineBoxContent>
        <S.RoutineBoxTitle>{title}</S.RoutineBoxTitle>
        <S.RoutineBoxStar>{star}</S.RoutineBoxStar>
      </S.RoutineBoxContent>
    </S.RoutineBoxContainer>
  );
}
export default RoutineBox;
