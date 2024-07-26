import Calendar from "react-calendar";
import { useState } from "react";
import * as S from "./style";
import { DUMMY_DATE } from "../../constants/Calendar/dummy";

export const CustomCalendar = () => {
  const [value, setValue] = useState(new Date());

  return (
    <S.CalendarContainer>
      <Calendar
        onChange={setValue}
        value={value}
        minDate={new Date(2024, 0, 1)}
        minDetail="month"
        formatDay={(locale, date) =>
          date.toLocaleString("en", { day: "numeric" })
        }
        calendarType="gregory"
        prev2Label={null}
        next2Label={null}
        showNeighboringMonth={false}
        view="month"
        tileClassName={({ date, view }) => {
          if (
            view === "month" &&
            DUMMY_DATE.includes(date.toISOString().split("T")[0])
          ) {
            return "highlight";
          }
        }}
      />
    </S.CalendarContainer>
  );
};
