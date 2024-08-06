import React from "react";
import * as S from "./styled";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  routineStart,
  routineEnd,
  CheckVisible,
} from "@/stores/routineRegister";
import { format } from "date-fns";
import { addHours } from "date-fns";
export const CheckUp = ({ term }) => {
  const [startDay, setStartDay] = useRecoilState(routineStart);
  const [endDay, setEndDay] = useRecoilState(routineEnd);
  const setIsCheckVisible = useSetRecoilState(CheckVisible);
  const handleClick = () => {
    setIsCheckVisible(false);
    setStartDay(null);
    setEndDay(null);
  };
  const formatDate = (date) => {
    const zonedDate = addHours(new Date(date), 9); // 한국 시간으로 변환
    return format(zonedDate, "yyyy.MM.dd"); // 포맷팅
  };
  return (
    <S.CheckContainer>
      <div>
        {formatDate(startDay)}~{formatDate(endDay)}
      </div>
      <div>{term}일 간 루틴 설정이 완료되었습니다.</div>
      <S.ConfirmButton onClick={handleClick}>확인</S.ConfirmButton>
    </S.CheckContainer>
  );
};
