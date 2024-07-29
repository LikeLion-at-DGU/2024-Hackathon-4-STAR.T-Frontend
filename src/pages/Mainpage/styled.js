import { styled } from "styled-components";

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 99%;
// `;
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
  align-items: flex-start;
  flex-direction: row;
  gap: 1rem;
  margin-left: 1rem;
  overflow-y: hidden;
  overflow-x: auto;
  white-space: nowrap;
  scroll-snap-type: x mandatory;

  -ms-overflow-style: none;
  scrollbar-width: none;
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
