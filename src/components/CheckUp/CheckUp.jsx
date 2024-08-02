import React from "react";
import * as S from "./styled";
export const CheckUp = ({ startDay, endDay, term, onClose }) => {
  return (
    <S.CheckContainer>
      <div>
        {startDay}~{endDay}
      </div>
      <div>{term}일 간 루틴 설정이 완료되었습니다.</div>
      <S.ConfirmButton onClick={onClose}>확인</S.ConfirmButton>
    </S.CheckContainer>
  );
};
