import React from "react";
import * as S from "./styled";
import Arrow from "@/assets/Arrow.svg";
export const SearchResultStar = ({ src, name, profession, onClick }) => {
  return (
    <>
      <S.Container onClick={onClick}>
        <S.StarImg src={src} />
        <S.info>
          <div>{name}</div>
          <div>{profession.join(", ")}</div>
        </S.info>
        <img src={Arrow} />
      </S.Container>
    </>
  );
};
