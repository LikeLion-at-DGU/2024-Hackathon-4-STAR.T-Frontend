import Calendar from "react-calendar";
import { useState, useEffect } from "react";
import { format, addHours } from "date-fns";
import * as S from "./style";
import { getMonthCalendar } from "../../apis/calendar";

export const CustomCalendar = () => {
  const [value, setValue] = useState(new Date());
  const [month, setMonth] = useState(format(new Date(), "yyyy-MM"));
  const [data, setData] = useState([]);

  const getActiveMonth = (activeStartDate) => {
    const zonedDate = addHours(activeStartDate, 9); // 9시간 더하기
    setMonth(format(zonedDate, "yyyy-MM"));
  };

  const getData = async () => {
    try {
      const res = await getMonthCalendar(month);
      if (res.completed_days.length > 0) {
        setData(res.completed_days);
        console.log(res.completed_days);
      }
    } catch (err) {
      console.error("Error fetching calendar data:", err);
    }
  };

  useEffect(() => {
    getData();
  }, [month]);

  return (
    <S.CalendarContainer>
      <Calendar
        onActiveStartDateChange={({ activeStartDate }) =>
          getActiveMonth(activeStartDate)
        }
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
          if (view === "month") {
            // 한국 시간대 적용
            const zonedDate = addHours(date, 9);
            const formattedDate = format(zonedDate, "yyyy-MM-dd");
            if (data.includes(formattedDate)) {
              return "highlight";
            }
          }
        }}
      />
    </S.CalendarContainer>
  );
};
