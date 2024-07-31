import styled from "styled-components";

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  align-items: center;
`;

export const CategoryLine = styled.svg`
  width: 20px;
  height: 30px;
  flex-shrink: 0;
  stroke-width: 3px;
  stroke: var(--Main-Color, #78a1b5);
`;

export const CategorySection = styled.div`
  color: var(--Font-Color, #2a2a2a);
  font-size: ${(props) => props.fontSize || "16px"} !important;
`;
