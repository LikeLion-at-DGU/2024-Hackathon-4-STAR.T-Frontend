import React from "react";
import * as S from "./style";
import NON_CHECK_IMG from "@/assets/images/non-check.svg";
import CHECK_IMG from "@/assets/images/check.svg";

export const Item = ({ item, isRoutine }) => (
  <S.ListFrame key={item.id}>
    <S.CheckFrame>
      <S.ButtonView>
        <S.ImgView src={item.completed ? CHECK_IMG : NON_CHECK_IMG} />
      </S.ButtonView>
    </S.CheckFrame>
    <S.TextFrame>
      <S.TitleView>{isRoutine ? item.routine_title : item.title}</S.TitleView>
      <S.SubTitleView>
        {isRoutine ? item.routine_content : item.description}
      </S.SubTitleView>
    </S.TextFrame>
  </S.ListFrame>
);
