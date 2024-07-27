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

export const RoutineBoxImg = styled.div`
  width: 320px;
  height: 160px;
  flex-shrink: 0;
  border-radius: 10px;
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy1Qh1wxZdS3QDFdjpSPK0FysKm0EHjxmsXg&s")
    lightgray 0px -37.078px / 100% 288.584% no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 5px 7px 0px 7px;
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
  ul {
    list-style-type: disc; /* 점 모양 */
    margin: 0;
  }
`;
