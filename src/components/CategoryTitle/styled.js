import React from "react";
import styled from "styled-components";

export const CategoryWrapper = styled.div`
  width: 280px;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  margin-left: 1rem;
  margin-top: 2rem;
`;

export const CategoryLine = styled.svg`
  width: 20px;
  height: 20px;

  flex-shrink: 0;
  stroke-width: 3px;
  stroke: var(--Main-Color, #78a1b5);
`;

export const CategorySection = styled.div`
  color: var(--Font-Color, #2a2a2a);

  /* Korean H2 */
  font-family: AppleSDGothicNeoM00;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
