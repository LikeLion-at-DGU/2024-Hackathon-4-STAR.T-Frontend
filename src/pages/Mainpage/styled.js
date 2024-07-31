import { styled } from "styled-components";

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 99%;
// `;
export const MainTitle = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  padding-left: 1rem;
  padding-top: 1rem;
`;

export const ImageFame = styled.img``;

export const RoutineBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  gap: 1rem;

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
  width: 90%;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 7.5rem;
`;
export const CategoryWrapper = styled.div`
  margin-top: 1.5rem;
`;
