import React from "react";
import * as S from "./styled";
export const Logout = ({ onClose }) => {
  return (
    <S.Container>
      <div>정말 로그아웃 하시겠습니까?</div>
      <div className="ConfirmButton">
        <button id="confirm-logout">네</button>
        <button id="cancel-logout" onClick={onClose}>
          아니요
        </button>
      </div>
    </S.Container>
  );
};
