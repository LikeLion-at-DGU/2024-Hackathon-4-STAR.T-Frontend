import Calendar from "react-calendar";
import { useSetRecoilState, useRecoilState } from "recoil";
import { useState, useEffect, useRef } from "react";
import { format, addHours } from "date-fns";
import * as S from "./style";
import { getMonthCalendar } from "../../apis/calendar";
import { todoStatus, day, starMonth } from "@/stores/calendar";

export const CustomCalendar = ({ setWeekPosition }) => {
  const [value, setValue] = useState(new Date());
  const [month, setMonth] = useState(format(new Date(), "yyyy-MM"));
  const [data, setData] = useState(starMonth);
  const setDay = useSetRecoilState(day);
  const setStatus = useSetRecoilState(todoStatus);
  const calendarRef = useRef(null);

  const getActiveMonth = (activeStartDate) => {
    const zonedDate = addHours(activeStartDate, 9); // 9시간 더하기
    setMonth(format(zonedDate, "yyyy-MM"));
  };

  const getData = async () => {
    setStatus(false);
    try {
      const res = await getMonthCalendar(month);
      if (res.completed_days.length > 0) {
        res.completed_days.forEach((star) => {
          data.add(star);
        });
        setData(data);
        console.log(data);
      }
    } catch (err) {
      setData([]);
    }
  };

  useEffect(() => {
    getData();
  }, [month]);

  // 새로운 onChange 핸들러
  const handleDateChange = (date) => {
    setValue(date);
    setStatus(true); // 날짜 클릭 시 상태를 true로 설정
    setTimeout(() => {
      const calendarNode = calendarRef.current;
      if (calendarNode) {
        const activeTile = calendarNode.querySelector(
          ".react-calendar__tile--active"
        );
        if (activeTile) {
          const rect = activeTile.getBoundingClientRect();
          const yPos = rect.top + window.scrollY; // y좌표 (상대적 위치를 절대적 위치로 변환)
          setWeekPosition(yPos + 50);
        }
      }
    }, 0);
    setDay(format(date, "yyyy-MM-dd"));
  };

  return (
    <S.CalendarContainer ref={calendarRef}>
      <Calendar
        onActiveStartDateChange={({ activeStartDate }) =>
          getActiveMonth(activeStartDate)
        }
        onChange={handleDateChange} // onChange 핸들러 추가
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
            if (data.has(formattedDate)) {
              return "highlight";
            }
          }
        }}
      />
    </S.CalendarContainer>
  );
};
