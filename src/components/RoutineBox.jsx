import React from "react";
import styled from "styled-components";

const RoutineBoxContainer = styled.div`
  display: flex;
  width: 133px;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

const RoutineBoxImg = styled.div`
  height: 100px;
  align-self: stretch;
  border-radius: 10px;
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy1Qh1wxZdS3QDFdjpSPK0FysKm0EHjxmsXg&s")
    lightgray 50% / cover no-repeat;
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.25);
  background-color: darkgray;
`;

const RoutineBoxTitle = styled.div`
  color: var(--Font-Color, #2a2a2a);

  /* Korean Body */
  font-family: AppleSDGothicNeoL00;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const RoutineBoxStar = styled.div`
  color: rgba(42, 42, 42, 0.7);

  /* Korean Minimal */
  font-family: AppleSDGothicNeoM00;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const RoutineBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  align-self: stretch;
`;

function RoutineBox({ title, star }) {
  return (
    <RoutineBoxContainer>
      <RoutineBoxImg></RoutineBoxImg>
      <RoutineBoxContent>
        <RoutineBoxTitle>{title}</RoutineBoxTitle>
        <RoutineBoxStar>{star}</RoutineBoxStar>
      </RoutineBoxContent>
    </RoutineBoxContainer>
  );
}
export default RoutineBox;
