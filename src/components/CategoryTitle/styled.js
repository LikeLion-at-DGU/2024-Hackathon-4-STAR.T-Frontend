import styled from "styled-components";

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  align-items: cen;
`;

export const CategoryLine = styled.svg`
  width: 20px;
  height: 25px;
  flex-shrink: 0;
  stroke-width: 3px;
  stroke: var(--Main-Color, #78a1b5);
`;

export const CategorySection = styled.div`
  color: #2a2a2a;

  font-family: "AppleSDGothicNeoM00";
  font-size: ${(props) => props.fontSize || "16px"} !important;
  display: flex;
  align-items: center;
`;
