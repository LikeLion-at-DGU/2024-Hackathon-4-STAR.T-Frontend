import styled from "styled-components";

export const RoutineLayout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background-image: url(${(props) => props.$url});
  background-color: transparent;
  background-repeat: none;
  background-size: cover;
  transition: background-color 1.8s ease;
`;
export const TitleView = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 7.5%;
  gap: 1rem;
`;

export const CategoryView = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;
export const CutomTitle = styled.p`
  font-family: "AppleSDGothicNeoSB";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: black;
`;
export const SelectView = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  margin-top: 25%;
`;
export const CustomP = styled.p`
  font-family: "AppleSDGothicNeoL";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${(props) => props.color};
`;
