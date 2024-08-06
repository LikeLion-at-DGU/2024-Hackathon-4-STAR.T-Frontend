import React from "react";
import * as S from "./styled";
import { useRecoilValue } from "recoil";
import { routineStart, routineEnd } from "@/stores/routineRegister";
import { format } from "date-fns";
import { addHours } from "date-fns";
export const CheckUp = ({ term, onClose }) => {
  const startDay = useRecoilValue(routineStart);
  const endDay = useRecoilValue(routineEnd);
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
      <S.ConfirmButton onClick={onClose}>확인</S.ConfirmButton>
    </S.CheckContainer>
  );
};
