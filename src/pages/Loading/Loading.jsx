import React from "react";
import styled, { keyframes } from "styled-components";
import { CSSTransition } from "react-transition-group";

// 애니메이션 정의
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-15px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

// 로더 컨테이너 스타일
const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  gap: 1.5rem;
`;

const LoadingText = styled.div`
  color: #78a1b5;
  font-family: AppleSDGothicNeoL;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const LoadingZone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 점 스타일
const Dot = styled.div`
  width: 15px;
  height: 15px;
  background-color: #78a1b5;
  border-radius: 50%;
  margin: 0 5px;
  animation: ${bounce} 1.2s infinite;
  &.dot-enter {
    opacity: 0;
    fill: rgba(120, 161, 181, 0.3);
  }
  &.dot-enter-active {
    opacity: 1;
    transition: opacity 300ms;
    fill: rgba(120, 161, 181, 0.5);
  }
  &.dot-exit {
    opacity: 1;
    fill: rgba(120, 161, 181, 0.75);
  }
  &.dot-exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }
`;

// 로더 컴포넌트
export const Loading = () => {
  return (
    <LoaderContainer>
      <LoadingText>로딩중</LoadingText>
      <LoadingZone>
        <CSSTransition in={true} timeout={300} classNames="dot" appear>
          <Dot style={{ animationDelay: "-0.4s" }} />
        </CSSTransition>
        <CSSTransition in={true} timeout={300} classNames="dot" appear>
          <Dot style={{ animationDelay: "-0.3s" }} />
        </CSSTransition>
        <CSSTransition in={true} timeout={300} classNames="dot" appear>
          <Dot style={{ animationDelay: "-0.2s" }} />
        </CSSTransition>
        <CSSTransition in={true} timeout={300} classNames="dot" appear>
          <Dot style={{ animationDelay: "-0.1s" }} />
        </CSSTransition>
      </LoadingZone>
    </LoaderContainer>
  );
};
