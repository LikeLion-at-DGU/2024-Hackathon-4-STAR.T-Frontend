import React from "react";
import * as S from "./style";
import NON_CHECK_IMG from "@/assets/images/non-check.svg";
import CHECK_IMG from "@/assets/images/check.svg";
import { patchPersonal, patchRoutine } from "@/apis/calendar";

export const Item = ({ item, isRoutine, date }) => {
  const handleSubmit = async (isRoutine, id, isCompleted) => {
    try {
      if (isRoutine) {
        const res = await patchRoutine(id, !isCompleted, date);
      } else {
        const response = await patchPersonal(id, !isCompleted, date);
      }
    } catch (error) {
      console.error("Error updating personal item:", error);
    }
  };

  return (
    <S.ListFrame>
      <S.CheckFrame>
        <S.ButtonView
          onClick={() => handleSubmit(isRoutine, item.id, item.completed)}
        >
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
};
