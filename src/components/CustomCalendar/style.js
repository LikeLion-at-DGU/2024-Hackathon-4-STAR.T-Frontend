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

  .react-calendar__tile {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: transparent;
    color: black;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background-color: transparent;
  }

  abbr {
    font-size: 1rem;
  }

  .react-calendar__navigation button:disabled {
    background-color: white;
  }

  .react-calendar__navigation button:disabled > span {
    color: black;
  }

  .react-calendar__month-view__weekdays__weekday--weekend abbr[title="일요일"] {
    color: red;
  }

  .react-calendar__month-view__weekdays__weekday--weekend abbr[title="토요일"] {
    color: blue;
  }

  .react-calendar__navigation button:enabled:hover {
    background-color: transparent;
  }
  .highlight {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2231%22%20viewBox%3D%220%200%2032%2031%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M16%2025.6119L23.7598%2030.3052C25.1808%2031.1653%2026.9198%2029.8938%2026.5458%2028.2858L24.489%2019.4602L31.3512%2013.5142C32.604%2012.4297%2031.9309%2010.3728%2030.2855%2010.242L21.2542%209.47533L17.7202%201.13592C17.0845-0.378639%2014.9155-0.378639%2014.2798%201.13592L10.7458%209.45663L1.71455%2010.2233C0.069104%2010.3541-0.604033%2012.411%200.648749%2013.4955L7.511%2019.4415L5.4542%2028.2671C5.08023%2029.8751%206.81917%2031.1466%208.24023%2030.2865L16%2025.6119Z%22%20fill%3D%22%23FFDA16%22%20fill-opacity%3D%220.5%22%2F%3E%3C%2Fsvg%3E");
    background-size: contain;
    border: none;
  }
  /* 
 
    루틴 완료 시 해당 스타일 넣어주기
 */
`;
