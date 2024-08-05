import React from "react";
import * as S from "./styled";

export const MyStar = ({ src, star, career, count, onClick }) => {
  return (
    <>
      <S.Container onClick={onClick}>
        <S.StarImg src={src} />
        <S.info>
          <div>{star}</div>
          <div>{career}</div>
        </S.info>
        <div className="count">{count}회</div>
      </S.Container>
    </>
  );
};
