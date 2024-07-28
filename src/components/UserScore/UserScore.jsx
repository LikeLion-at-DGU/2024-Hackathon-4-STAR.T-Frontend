import React from "react";
import Ranking from "../../assets/Ranking.svg";
import * as S from "./styled";

function UserScore() {
  return (
    <>
      <S.ScoreContainer>
        <img src={Ranking}></img>
        <div>1000점</div>
      </S.ScoreContainer>
    </>
  );
}

export default UserScore;
