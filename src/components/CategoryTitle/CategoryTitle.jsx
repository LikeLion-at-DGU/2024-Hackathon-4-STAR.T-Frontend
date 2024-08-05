import React from "react";
import * as S from "./styled";

function CategoryTitle({ section, fontSize }) {
  return (
    <S.CategoryWrapper>
      <S.CategoryLine />

      <S.CategorySection fontSize={fontSize}>{section}</S.CategorySection>
    </S.CategoryWrapper>
  );
}

export default CategoryTitle;
