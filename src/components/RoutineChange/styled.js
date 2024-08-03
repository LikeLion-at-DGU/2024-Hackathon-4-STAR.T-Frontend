import styled from "styled-components";
import BACKGROUND from "../../assets/background.svg";

export const RoutineLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url(${BACKGROUND});
  background-repeat: none;
  background-size: cover;
  gap: 3rem;
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
  padding: 2rem;
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
