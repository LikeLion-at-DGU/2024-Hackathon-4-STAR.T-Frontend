import styled from "styled-components";

export const CategoryWrapper = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr;
  align-items: center;
`;

export const CategoryLine = styled.svg`
  width: 20px;
  height: auto;
  flex-shrink: 0;
  stroke-width: 3px;
  stroke: var(--Main-Color, #78a1b5);
`;

export const CategorySection = styled.div`
  color: #2a2a2a;

  font-family: "AppleSDGothicNeoM";
  font-size: ${(props) => props.fontSize || "16px"} !important;
  display: flex;
  align-items: center;
`;
