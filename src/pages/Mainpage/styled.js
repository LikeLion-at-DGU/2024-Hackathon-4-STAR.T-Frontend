import { styled } from "styled-components";

export const MainTitle = styled.div`
  display: flex;
  align-self: flex-start;
  padding-top: 1rem;
  font-size: 2rem;
  margin-left: 2rem;
  font-family: "Playfair Display", serif;
  font-style: normal;
  font-weight: 600;
`;
export const RoutineBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-left: 0.5rem;
  overflow-y: hidden;
  overflow-x: auto;
  white-space: nowrap;
  scroll-snap-type: x mandatory; /* 가로 방향 스크롤 스냅 설정 */

  /* 스크롤바 숨김 */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Edge */
  }
`;
export const MainContainer = styled.div`
  width: 95%;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 7.5rem;
`;
