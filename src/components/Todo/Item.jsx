import React, { useState } from "react";
import * as S from "./style";
import NON_CHECK_IMG from "@/assets/images/non-check.svg";
import CHECK_IMG from "@/assets/images/check.svg";
import { patchPersonal, patchRoutine } from "@/apis/calendar";
import { nowItems } from "@/stores/todo";
import { useRecoilState } from "recoil";

export const Item = ({ item, isRoutine, date }) => {
  const [checkItems, setCheckItems] = useRecoilState(nowItems);

  const handleSubmit = async (isRoutine, id, isChecked) => {
    let updatedCheckItems;

    if (isChecked) {
      updatedCheckItems = [...checkItems, { id, date }];
    } else {
      updatedCheckItems = checkItems.filter(
        (checkItem) => !(checkItem.id === id && checkItem.date === date)
      );
    }

    setCheckItems(updatedCheckItems);

    try {
      let res;
      if (isRoutine) {
        res = await patchRoutine(id, isChecked, date);
      } else {
        res = await patchPersonal(id, isChecked, date);
      }
      console.log(res);
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const isItemChecked = checkItems.some(
    (checkItem) => checkItem.id === item.id && checkItem.date === date
  );

  const isChecked = isItemChecked ? true : item.completed;

  return (
    <S.ListFrame>
      <S.CheckFrame>
        <S.ButtonView
          onClick={() => handleSubmit(isRoutine, item.id, !isChecked)}
        >
          <S.ImgView src={isChecked ? CHECK_IMG : NON_CHECK_IMG} />
        </S.ButtonView>
      </S.CheckFrame>
      <S.TextFrame>
        <S.TitleView>{isRoutine ? item.routine_title : item.title}</S.TitleView>
        <S.SubTitleView>
          {isRoutine ? item.celebrity_name : item.description}
        </S.SubTitleView>
      </S.TextFrame>
    </S.ListFrame>
  );
};
