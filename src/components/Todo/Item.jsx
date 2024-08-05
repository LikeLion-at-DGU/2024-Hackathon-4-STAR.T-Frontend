import React, { useState } from "react";
import * as S from "./style";
import NON_CHECK_IMG from "@/assets/images/non-check.svg";
import CHECK_IMG from "@/assets/images/check.svg";
import { patchPersonal, patchRoutine } from "@/apis/calendar";

export const Item = ({ item, isRoutine, date }) => {
  const [checkItems, setCheckItems] = useState(new Set());

  const handleSubmit = async (isRoutine, id, isChecked) => {
    const updatedCheckItems = new Set(checkItems);

    if (isChecked) {
      updatedCheckItems.add(id);
    } else {
      updatedCheckItems.delete(id);
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

  return (
    <S.ListFrame>
      <S.CheckFrame>
        <S.ButtonView
          onClick={() =>
            handleSubmit(isRoutine, item.id, !checkItems.has(item.id))
          }
        >
          <S.ImgView
            src={checkItems.has(item.id) ? CHECK_IMG : NON_CHECK_IMG}
          />
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
