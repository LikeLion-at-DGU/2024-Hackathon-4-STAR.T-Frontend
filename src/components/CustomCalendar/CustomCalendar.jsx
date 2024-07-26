import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import * as S from "./style";

export const CustomCalendar = () => {
  const [value, setValue] = useState(new Date());

  return (
    <S.CalendarContainer>
      <Calendar
        onChange={setValue}
        value={value}
        minDate={new Date(2024, 0, 1)}
        calendarType="gregory"
        prev2Label={null}
        next2Label={null}
        showNeighboringMonth={false}
        view="month"
      />
    </S.CalendarContainer>
  );
};
