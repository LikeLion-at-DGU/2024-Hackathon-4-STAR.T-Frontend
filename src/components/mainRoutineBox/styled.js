import { styled } from "styled-components";

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 362px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(196, 217, 226, 0.5);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
`;

export const RoutineBoxImg = styled.img`
  width: 320px;
  height: 160px;
  flex-shrink: 0;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 12px 7px 0px 7px;
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 90%;
  margin: 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;
export const MainTitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const MainTitle = styled.div`
  color: #000;
  font-size: 18px;
  font-weight: 400;
`;

export const SubTitle = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
  font-weight: 400;
`;

export const BoxContent = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: flex-start;
  font-size: 14px;
`;
