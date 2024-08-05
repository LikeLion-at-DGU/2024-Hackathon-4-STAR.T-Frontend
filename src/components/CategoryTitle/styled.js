import styled from "styled-components";

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const CategoryLine = styled.div`
  display: flex;
  width: 2px;
  background-color: #78a1b5;
  border-radius: 15px;
  flex-shrink: 0;
`;

export const CategorySection = styled.div`
  color: #2a2a2a;

  font-family: "AppleSDGothicNeoM";
  font-size: ${(props) => props.fontSize || "16px"} !important;
  display: flex;
  align-items: center;
`;
