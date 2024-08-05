import React, { useEffect } from "react";
import * as S from "./style";
import NON_CHECK_IMG from "@/assets/images/non-check.svg";
import CHECK_IMG from "@/assets/images/check.svg";
import { patchPersonal, patchRoutine } from "@/apis/calendar";
import { nowItems } from "@/stores/todo";
import { useRecoilState } from "recoil";

export const Item = ({ item, isRoutine, date }) => {
  const [checkItems, setCheckItems] = useRecoilState(nowItems);

  // 컴포넌트가 마운트될 때 completed 상태를 Recoil 상태에 반영
  useEffect(() => {
    const isItemChecked = checkItems.some(
      (checkItem) => checkItem.id === item.id && checkItem.date === date
    );

    if (item.completed && !isItemChecked) {
      setCheckItems((prevItems) => [...prevItems, { id: item.id, date }]);
    }
  }, [item, date, checkItems, setCheckItems]);

  const handleSubmit = async (isRoutine, id, isChecked) => {
    try {
      let res;
      if (isRoutine) {
        res = await patchRoutine(id, isChecked, date);
      } else {
        res = await patchPersonal(id, isChecked, date);
      }

      // 서버 응답이 성공적일 경우 상태 업데이트
      setCheckItems((prevItems) =>
        isChecked
          ? [...prevItems, { id, date }]
          : prevItems.filter(
              (checkItem) => !(checkItem.id === id && checkItem.date === date)
            )
      );

      console.log(res);
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const isItemChecked = checkItems.some(
    (checkItem) => checkItem.id === item.id && checkItem.date === date
  );

  return (
    <S.ListFrame>
      <S.CheckFrame>
        <S.ButtonView
          onClick={() => handleSubmit(isRoutine, item.id, !isItemChecked)}
        >
          <S.ImgView src={isItemChecked ? CHECK_IMG : NON_CHECK_IMG} />
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
