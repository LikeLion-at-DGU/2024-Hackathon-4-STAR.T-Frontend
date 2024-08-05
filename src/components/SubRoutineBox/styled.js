import { styled } from "styled-components";

export const RoutineBoxContainer = styled.div`
  display: flex;
  min-width: 133px;

  flex-direction: column;
  scroll-snap-align: start;
  align-items: flex-start;
  align-self: flex-start;

  margin-top: 1rem;
  gap: 5px;
  cursor: pointer;
`;
export const RoutineBoxImg = styled.img`
  height: 100px;
  align-self: stretch;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.25);
  background-color: darkgray;
`;

export const RoutineBoxTitle = styled.div`
  color: var(--Font-Color, #2a2a2a);
  width: 100%;
  font-family: "AppleSDGothicNeoL";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const RoutineBoxStar = styled.div`
  color: rgba(42, 42, 42, 0.7);

  /* Korean Minimal */
  font-family: "AppleSDGothicNeoM";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

export const RoutineBoxContent = styled.div`
  display: flex;
  width: 133px;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  align-self: stretch;
`;
