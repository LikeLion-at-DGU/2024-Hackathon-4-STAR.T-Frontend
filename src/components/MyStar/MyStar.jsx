import React from "react";
import * as S from "./styled";
import UserScore from "../UserScore/UserScore";
export const MyStar = ({ src, star, career }) => {
  return (
    <>
      <S.Container>
        <S.StarImg src={src} />
        <S.info>
          <div>{star}</div>
          <div>{career}</div>
        </S.info>
        <UserScore />
      </S.Container>
    </>
  );
};
