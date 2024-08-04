import styled from "styled-components";

export const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 1;

  .react-calendar {
    width: 350px;
    max-width: 100%;
    background: white;
    /* border: 1px solid #a0a096; */
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
  }

  .react-calendar--doubleView {
    width: 700px;
  }

  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }

  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }

  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }

  .react-calendar button:enabled:hover {
    cursor: pointer;
  }

  .react-calendar__navigation {
    display: flex;
    height: 44px;
    margin-bottom: 1em;
  }

  .react-calendar__navigation button {
    min-width: 44px;
    background: none;
  }

  .react-calendar__navigation button:disabled {
    background-color: #f0f0f0;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #e6e6e6;
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font: inherit;
    font-size: 0.75em;
    font-weight: bold;
  }

  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
  }

  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font: inherit;
    font-size: 0.75em;
    font-weight: bold;
  }

  .react-calendar__month-view__days__day--weekend {
    color: #d10000;
  }

  .react-calendar__month-view__days__day--neighboringMonth,
  .react-calendar__decade-view__years__year--neighboringDecade,
  .react-calendar__century-view__decades__decade--neighboringCentury {
    color: #757575;
  }

  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  }

  .react-calendar__tile {
    max-width: 100%;
    padding: 5px;
    background: none;
    text-align: center;
    line-height: 16px;
    font: inherit;
    font-size: 0.833em;
  }

  .react-calendar__tile:disabled {
    background-color: #f0f0f0;
    color: #ababab;
  }

  .react-calendar__month-view__days__day--neighboringMonth:disabled,
  .react-calendar__decade-view__years__year--neighboringDecade:disabled,
  .react-calendar__century-view__decades__decade--neighboringCentury:disabled {
    color: #cdcdcd;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    position: relative;
    z-index: 1;
    text-align: center;
  }

  .react-calendar__tile:enabled:hover:before,
  .react-calendar__tile:enabled:focus:before {
    content: "";
    position: absolute;
    left: 25%;
    bottom: 0;
    height: 1px;
    width: 50%; /* or 100px */
    /* border-bottom: 2px solid #78a1b5 !important; */
  }

  .react-calendar__tile--now {
    /* background: #ffff76; */
    /* border-bottom: 10px solid #78a1b5; */
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    /* background: #ffffa9; */
    /* border-bottom: 0.5px solid #78a1b5; */
  }

  .react-calendar__tile--hasActive {
    background: #76baff;
  }

  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #a9d4ff;
  }

  .react-calendar__tile--active {
    position: relative;
    z-index: 1;
    text-align: center;
  }

  .react-calendar__tile--active:before {
    content: "";
    position: absolute;
    left: 25%;
    bottom: 0;
    height: 1px;
    width: 50%; /* or 100px */
    border-bottom: 2px solid #78a1b5 !important;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    /* background: transparent; */
  }

  .react-calendar--selectRange .react-calendar__tile--hover {
    /* background-color: #e6e6e6; */
  }

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
    row-gap: 1rem;
  }

  .react-calendar__month-view__days__day {
    margin-top: 5px; /* 각 일(day) 요소의 위 간격 */
    margin-bottom: 5px; /* 각 일(day) 요소의 아래 간격 */
  }

  .react-calendar__tile {
    width: 50px;
    height: 50px;
    background-color: transparent;
    color: black;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    /* background-color: transparent; */
    /* border-bottom: 1px solid #78a1b5 !important; */
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
    background-repeat: no-repeat;
    border: none;
  }
`;
