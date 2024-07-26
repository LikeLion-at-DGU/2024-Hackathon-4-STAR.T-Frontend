import React from "react";
import styled from "styled-components";

const CategoryWrapper = styled.div`
  width: 280px;
  height: 20px;
  display: flex;
  flex-direction: row;
`;

const CategoryLine = styled.svg`
  width: 20px;
  height: 20px;

  flex-shrink: 0;
  stroke-width: 3px;
  stroke: var(--Main-Color, #78a1b5);
`;

const CategorySection = styled.div`
  color: var(--Font-Color, #2a2a2a);

  /* Korean H2 */
  font-family: AppleSDGothicNeoM00;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

function CategoryTitle({ section }) {
  return (
    <CategoryWrapper>
      <CategoryLine
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3 24"
        fill="none"
      >
        <path
          d="M1.5 2L1.5 22"
          stroke="#78A1B5"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </CategoryLine>
      <CategorySection>{section}</CategorySection>
    </CategoryWrapper>
  );
}

export default CategoryTitle;
