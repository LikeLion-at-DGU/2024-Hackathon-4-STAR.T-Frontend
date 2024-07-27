import { styled } from "styled-components";

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  height: 362px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(196, 217, 226, 0.5);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
`;

export const RoutineBoxImg = styled.div`
  width: 266px;
  height: 140px;
  flex-shrink: 0;
  border-radius: 10px;
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy1Qh1wxZdS3QDFdjpSPK0FysKm0EHjxmsXg&s")
    lightgray 0px -37.078px / 100% 288.584% no-repeat;
  background-size: contain;
  background-position: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 5px 7px 0px 7px;
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 252px;
  margin: 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;
export const MainTitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const MainTitle = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: 400;
`;

export const SubTitle = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  font-weight: 400;
`;

export const BoxContent = styled.div`
  display: flex;
  width: 247px;
  margin: 1rem;
  flex-direction: column;
  align-items: flex-start;
  font-size: 12px;
`;
