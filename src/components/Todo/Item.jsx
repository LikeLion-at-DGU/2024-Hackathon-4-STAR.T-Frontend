import React, { useState } from "react";
import * as S from "./style";
import NON_CHECK_IMG from "@/assets/images/non-check.svg";
import CHECK_IMG from "@/assets/images/check.svg";
import { patchPersonal, patchRoutine } from "@/apis/calendar";

export const Item = ({ item, isRoutine, date }) => {
  const [isCompleted, setIsCompleted] = useState(item.completed);

  const handleSubmit = async (isRoutine, id) => {
    try {
      let res;
      if (isRoutine) {
        res = await patchRoutine(id, !isCompleted, date);
      } else {
        res = await patchPersonal(id, !isCompleted, date);
      }
      console.log(res);
      setIsCompleted(!isCompleted); // 상태 업데이트는 비동기 호출 이후에 수행
    } catch (error) {
      console.error("Error updating item:", error);
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
