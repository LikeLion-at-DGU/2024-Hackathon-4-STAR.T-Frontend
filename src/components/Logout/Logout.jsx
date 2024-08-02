import React from "react";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";
export const Logout = ({ onClose }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
    sessionStorage.removeItem("signed");
  };
  return (
    <S.Container>
      <div className="ment"> 로그아웃 하시겠습니까?</div>
      <div className="ConfirmButton">
        <button id="confirm-logout" onClick={handleLogout}>
          네
        </button>
        <button id="cancel-logout" onClick={onClose}>
          아니요
        </button>
      </div>
    </S.Container>
  );
};
