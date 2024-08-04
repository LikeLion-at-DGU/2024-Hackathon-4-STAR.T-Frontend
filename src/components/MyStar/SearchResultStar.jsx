import React from "react";
import * as S from "./styled";
import Arrow from "@/assets/Arrow.svg";
export const SearchResultStar = ({ src, name, profession, id, type }) => {
  const handleClick = () => {
    let url = "";
    switch (type) {
      case "celeb":
      case "routine":
        url = `/star/${id}`;
        break;
      case "theme":
        url = `/theme/${id}`;
        break;
      default:
        break;
    }
    navigate(url);
  };
  return (
    <>
      <S.Container onClick={handleClick}>
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
