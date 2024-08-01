import React, { useState } from "react";
import * as S from "./styled";
import {
  routineStart,
  routineEnd,
  CalendarVisible,
  CheckVisible,
} from "../../stores/routineRegister";
import { useRecoilState } from "recoil";
import { postRoutineRegister } from "../../apis/Theme";

const DateRangeCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  // const [selectedStartDate, setSelectedStartDate] = useState(null);
  // const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [selectedStartDate, setSelectedStartDate] =
    useRecoilState(routineStart);
  const [selectedEndDate, setSelectedEndDate] = useRecoilState(routineEnd);
  const [, setIsCalendarVisible] = useRecoilState(CalendarVisible);
  const [, setIsCheckVisible] = useRecoilState(CheckVisible);

  //루틴 목표날짜 startdate,enddate에 넣기
  const handleDateClick = (date) => {
    if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    } else if (
      selectedStartDate &&
      !selectedEndDate &&
      date > selectedStartDate
    ) {
      setSelectedEndDate(date);
    } else {
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    }
  };

  //루틴 목표날짜 지정
  const renderDays = () => {
    const days = [];
    const startOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const endOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );

    for (let i = 0; i < startOfMonth.getDay(); i++) {
      days.push(<S.EmptyDay key={`empty-${i}`} />);
    }

    for (let day = 1; day <= endOfMonth.getDate(); day++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      const isSelectedStart =
        selectedStartDate &&
        date.toDateString() === selectedStartDate.toDateString();
      const isSelectedEnd =
        selectedEndDate &&
        date.toDateString() === selectedEndDate.toDateString();
      const isInRange =
        selectedStartDate &&
        selectedEndDate &&
        date > selectedStartDate &&
        date < selectedEndDate;

      days.push(
        <S.Day
          key={day}
          className={`${isSelectedStart ? "selected-start" : ""} ${
            isSelectedEnd ? "selected-end" : ""
          } ${isInRange ? "in-range" : ""}`}
          onClick={() => handleDateClick(date)}
        >
          {day}
        </S.Day>
      );
    }

    return days;
  };

  //월 이동
  const handleMonthChange = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const handleConfirm = async () => {
    if (selectedStartDate && selectedEndDate) {
      console.log(
        `${selectedStartDate.toLocaleDateString()}~${selectedEndDate.toLocaleDateString()}`
      );
      try {
        const start_date = selectedStartDate.toISOString().split("T")[0];
        const end_date = selectedEndDate.toISOString().split("T")[0];
        const response = await postRoutineRegister(start_date, end_date);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
      setIsCalendarVisible(false);
      setIsCheckVisible(true);
    } else if (selectedStartDate) {
      console.log(`${selectedStartDate.toLocaleDateString()}~`);
      // const start_date = selectedStartDate.toISOString().split("T")[0];
    } else {
      console.log("No date selected");
    }
  };
  return (
    <S.CalendarContainer>
      <S.CalendarHeader>
        <S.Headertitle>목표기간설정</S.Headertitle>
        <S.HeaderContainer>
          <S.CalendarHeaderButton onClick={() => handleMonthChange(-1)}>
            &lt;
          </S.CalendarHeaderButton>
          <S.CalendarHeaderTitle>
            {currentDate.toLocaleString("default", { month: "long" })}{" "}
          </S.CalendarHeaderTitle>
          <S.CalendarHeaderButton onClick={() => handleMonthChange(1)}>
            &gt;
          </S.CalendarHeaderButton>
        </S.HeaderContainer>
      </S.CalendarHeader>

      <S.CalendarBody>
        <S.DayName style={{ color: "#F00" }}>일</S.DayName>
        <S.DayName>월</S.DayName>
        <S.DayName>화</S.DayName>
        <S.DayName>수</S.DayName>
        <S.DayName>목</S.DayName>
        <S.DayName>금</S.DayName>
        <S.DayName style={{ color: "#78A1B5" }}>토</S.DayName>
        {renderDays()}
      </S.CalendarBody>
      <S.ConfirmButton onClick={handleConfirm}>확인</S.ConfirmButton>
    </S.CalendarContainer>
  );
};

export default DateRangeCalendar;
