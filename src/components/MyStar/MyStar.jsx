import React from "react";
import * as S from "./styled";

export const MyStar = ({ src, star, career, count }) => {
  return (
    <>
      <S.Container>
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
