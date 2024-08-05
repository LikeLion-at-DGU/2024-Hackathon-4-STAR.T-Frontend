import React from "react";
import styled, { keyframes } from "styled-components";

const randomMove = keyframes`
  0% { transform: translate(0, 0); }
  25% { transform: translate(30vw, -30vh); }
  50% { transform: translate(-50vw, 30vh); }
  75% { transform: translate(80vw, 30vh); }
  100% { transform: translate(0, 0); }
`;

const GradientBackgroundContainer = styled.div`
  width: 100%;
  min-height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  background: linear-gradient(135deg, #e0f7fa, #a2c9cf);
  transition: opacity 1s ease;
  opacity: ${(props) => (props.$showContent ? 1 : 0)};
  z-index: -1;
`;

const GradientsContainer = styled.div`
  filter: blur(40px);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Circle = styled.div`
  position: absolute;
  background: radial-gradient(
      circle at center,
      rgba(${(props) => props.color}, 0.8) 0,
      rgba(${(props) => props.color}, 0) 50%
    )
    no-repeat;
  mix-blend-mode: hard-light;
  width: ${(props) => props.$size || "100%"};
  height: ${(props) => props.$size || "100%"};
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};
  right: ${(props) => props.$right};
  bottom: ${(props) => props.$bottom};
  animation: ${randomMove} ${(props) => props.$duration} linear infinite;
  opacity: ${(props) => props.$opacity};
`;

const GradientBackground = ({ showContent }) => {
  return (
    <GradientBackgroundContainer $showContent={showContent}>
      <GradientsContainer>
        {/* 원 크게 변경 가능합니다아*/}
        <Circle
          color="255, 255, 255"
          $top="20%"
          $left="20%"
          $duration="14s"
          $opacity="1"
        />
        <Circle
          color="120, 161, 181"
          $size="160%"
          $top="40%"
          $left="40%"
          $duration="14s"
          $opacity="1"
        />
        <Circle
          color="196, 217, 226"
          $size="80%"
          $top="60%"
          $left="60%"
          $duration="14s"
          $opacity="1"
        />
        <Circle
          color="255, 255, 255"
          $size="80%"
          $right="20%"
          $bottom="20%"
          $duration="15s"
          $opacity="0.7"
        />
        <Circle
          color="120, 161, 181"
          $size="160%"
          $top="10%"
          $left="10%"
          $duration="14s"
          $opacity="1"
        />
        <Circle
          color="196, 217, 226"
          $top="-50%"
          $left="-50%"
          $duration="10s"
          $opacity="0.7"
        />
        <Circle
          color="120, 161, 181"
          $size="120%"
          $top="10%"
          $left="10%"
          $duration="9s"
          $opacity="1"
        />
        <Circle
          color="255, 255, 255"
          $size="80%"
          $top="50%"
          $left="50%"
          $duration="15s"
          $opacity="0.7"
        />
        <Circle
          color="120, 161, 181"
          $size="100%"
          $bottom="10%"
          $right="10%"
          $duration="12s"
          $opacity="0.8"
        />
        <Circle
          color="196, 217, 226"
          $size="120%"
          $bottom="30%"
          $right="30%"
          $duration="15s"
          $opacity="0.9"
        />
      </GradientsContainer>
    </GradientBackgroundContainer>
  );
};

export default GradientBackground;
