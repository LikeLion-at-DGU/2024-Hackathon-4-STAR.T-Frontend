import { styled } from "styled-components";

export const CalendarContainer = styled.div`
  width: 330px;
  height: 470px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  border: 1px solid #78a1b5;
  display: flex;
  flex-direction: column;
`;

export const CalendarHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Headertitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2a2a2a;
  font-size: 1.2rem;
  margin-top: 1rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  background-color: #fff;
  color: black;
`;

export const CalendarHeaderButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: black;
  width: 40px;
  height: 40px;
`;

export const CalendarHeaderTitle = styled.span`
  font-size: 1.3rem;
`;

export const CalendarBody = styled.div`
  margin-top: 1rem;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(7, 1fr);
  background-color: #fff;
  color: black;
  text-align: center;
`;

export const DayName = styled.div`
  font-weight: bold;
  color: #555;
`;

export const Day = styled.div`
  padding: 10px;
  margin-bottom: 7px;

  cursor: pointer;

  &.selected-start {
    background-color: #c4d9e380;
    border-radius: 50% 0 0 50%;
    color: black;
  }

  &.selected-end {
    background-color: #c4d9e380;
    border-radius: 0 50% 50% 0;
    color: black;
  }

  &.in-range {
    background-color: #c4d9e380;
  }
`;

export const EmptyDay = styled.div`
  padding: 10px;
  background-color: #fff;
`;

export const ConfirmButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 1rem;
  border: none;
  border-radius: 20px;
  background-color: #78a1b5;
  color: white;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #328ef0;
  }
`;
