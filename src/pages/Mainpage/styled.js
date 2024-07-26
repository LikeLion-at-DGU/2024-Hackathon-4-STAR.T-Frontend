import { styled } from "styled-components";

export const MainTitle = styled.div`
  display: flex;
  align-self: flex-start;
  padding-top: 1rem;
  font-size: 2rem;
  margin-left: 2rem;

  font-style: normal;
  font-weight: 500;
`;
export const RoutineBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow-y: hidden; /* 세로 스크롤을 숨깁니다 */
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: thin;
`;
export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
