import { styled } from "styled-components";

export const RoutineBoxContainer = styled.div`
  display: flex;
  min-width: 133px;

  flex-direction: column;
  scroll-snap-align: start;
  align-items: flex-start;
  align-self: flex-start;
  margin-left: 1.5rem;
  margin-top: 1rem;
  gap: 5px;
`;

export const RoutineBoxImg = styled.div`
  height: 100px;
  align-self: stretch;
  border-radius: 10px;
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy1Qh1wxZdS3QDFdjpSPK0FysKm0EHjxmsXg&s")
    lightgray 50% / cover no-repeat;
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.25);
  background-color: darkgray;
`;

export const RoutineBoxTitle = styled.div`
  color: var(--Font-Color, #2a2a2a);

  /* Korean Body */
  font-family: AppleSDGothicNeoL00;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const RoutineBoxStar = styled.div`
  color: rgba(42, 42, 42, 0.7);

  /* Korean Minimal */
  font-family: AppleSDGothicNeoM00;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const RoutineBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  align-self: stretch;
`;
