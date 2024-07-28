import React from "react";
import * as S from "./styled";

const Modal = ({ children, onClose }) => {
  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default Modal;
