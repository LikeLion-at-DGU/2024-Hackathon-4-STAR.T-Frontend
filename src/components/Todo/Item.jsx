import * as S from "./style";
import NON_CHECK_IMG from "@/assets/images/non-check.svg";
import CHECK_IMG from "@/assets/images/check.svg";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { patchPersonal, patchRoutine } from "@/apis/calendar";
import { nowItems } from "@/stores/todo";
import { starMonth } from "@/stores/calendar";
import { Link } from "react-router-dom";

export const Item = ({ item, isRoutine, date }) => {
  const [checkItems, setCheckItems] = useRecoilState(nowItems);
  const [star, setStar] = useRecoilState(starMonth);
  // 컴포넌트가 마운트될 때 completed 상태를 Recoil 상태에 반영
  useEffect(() => {
    const isItemChecked = checkItems.some(
      (checkItem) => checkItem.id === item.id && checkItem.date === date
    );

    if (!isItemChecked) {
      setCheckItems((prevItems) => [
        ...prevItems,
        { id: item.id, date, isCompeted: item.completed },
      ]);
    }
  }, [item, date, checkItems, setCheckItems]);

  const handleSubmit = async (isRoutine, id, currentStatus) => {
    try {
      // API 호출
      let res;
      if (isRoutine) {
        res = await patchRoutine(id, currentStatus, date);
      } else {
        res = await patchPersonal(id, currentStatus, date);
      }
      if (res.data.today_completed) {
        star.add(date);
        setStar(star);
      } else {
        star.delete(date);
        setStar(star);
      }
      // 상태 업데이트
      setCheckItems((prevItems) => {
        const itemIndex = prevItems.findIndex(
          (checkItem) => checkItem.id === id && checkItem.date === date
        );

        // 항목이 이미 존재하면 업데이트, 없으면 추가
        if (itemIndex > -1) {
          const updatedItems = [...prevItems];
          updatedItems[itemIndex] = { id, date, isCompeted: currentStatus };
          return updatedItems;
        } else {
          return [...prevItems, { id, date, isCompeted: currentStatus }];
        }
      });

      console.log(res);
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  // 현재 체크 상태
  const isChecked = checkItems.some(
    (checkItem) =>
      checkItem.id === item.id &&
      checkItem.date === date &&
      checkItem.isCompeted
  );

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
          {isRoutine ? (
            <Link to={`/star/${item.celebrity_id}`}>{item.celebrity_name}</Link>
          ) : (
            item.description
          )}
        </S.SubTitleView>
      </S.TextFrame>
    </S.ListFrame>
  );
};
