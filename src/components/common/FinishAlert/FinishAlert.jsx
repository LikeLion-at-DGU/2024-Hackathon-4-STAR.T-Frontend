import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { CSSTransition } from "react-transition-group";

const slideDown = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const slideUp = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  transform: translateX(-50%);
  z-index: 1000;
  width: 70%;
  max-width: 350px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 16px;
  animation: ${(props) => (props.state === "entering" ? slideDown : slideUp)}
    0.5s forwards;

  &.modal-enter {
    animation: ${slideDown} 0.5s forwards;
  }

  &.modal-exit {
    animation: ${slideUp} 0.5s forwards;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const AlertModal = ({ show, onClose }) => (
  <CSSTransition in={show} timeout={500} classNames="modal" unmountOnExit>
    <div>
      <Overlay onClick={onClose} />
      <ModalContainer state={show ? "entering" : "exiting"}>
        <p>작업이 완료되었습니다.</p>
      </ModalContainer>
    </div>
  </CSSTransition>
);
