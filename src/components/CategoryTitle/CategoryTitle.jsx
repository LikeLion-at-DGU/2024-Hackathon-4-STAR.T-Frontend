import React from "react";
import * as S from "./styled";

function CategoryTitle({ section }) {
  return (
    <S.CategoryWrapper>
      <S.CategoryLine
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3 24"
        fill="none"
      >
        <path
          d="M1.5 2L1.5 22"
          stroke="#78A1B5"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </S.CategoryLine>
      <S.CategorySection>{section}</S.CategorySection>
    </S.CategoryWrapper>
  );
}

export default CategoryTitle;
