import React from "react";
import * as S from "./style";
import NON_CHECK_IMG from "@/assets/images/non-check.svg";
import { useState } from "react";
import CHECK_IMG from "@/assets/images/check.svg";
import { patchPersonal, patchRoutine } from "@/apis/calendar";
// 백에서 갯수 만큼 false true처럼 넣어야 할듯
export const Item = ({ item, isRoutine, date }) => {
  const [isCompleted, setIsCompletd] = useState(item.completed);
  const handleSubmit = async (isRoutine, id) => {
    setIsCompletd(!isCompleted);
    try {
      if (isRoutine) {
        const res = await patchRoutine(id, !isCompleted, date);
        console.log(res);
      } else {
        const response = await patchPersonal(id, !isCompleted, date);
        console.log(response);
      }
    } catch (error) {
      console.error("Error updating personal item:", error);
    }
  };

  return (
    <S.ListFrame>
      <S.CheckFrame>
        <S.ButtonView onClick={() => handleSubmit(isRoutine, item.id)}>
          <S.ImgView src={isCompleted ? CHECK_IMG : NON_CHECK_IMG} />
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
};
