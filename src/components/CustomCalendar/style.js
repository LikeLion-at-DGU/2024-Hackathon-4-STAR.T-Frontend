import styled from "styled-components";

export const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  abbr {
    text-decoration: none;
  }
  .react-calendar__navigation {
    /* height: 60px; */
  }
  .react-calendar__navigation__arrow {
    /* min-width: 60px; */
    font-size: 1.5rem;
  }
  .react-calendar__navigation__label {
    padding-top: 0.5rem;
  }
  .react-calendar__navigation__label__labelText {
    font-size: 1.2rem;
  }
  .react-calendar {
    border: 0;
  }
  .react-calendar__month-view__days {
    margin-top: 20px; /* 위 간격 */
    margin-bottom: 20px; /* 아래 간격 */
  }

  .react-calendar__month-view__days__day {
    margin-top: 5px; /* 각 일(day) 요소의 위 간격 */
    margin-bottom: 5px; /* 각 일(day) 요소의 아래 간격 */
  }

  /* .react-calendar__tile {
    &.highlight {
      background-color: yellow; // 강조할 날짜 스타일
    }
  } */
`;
