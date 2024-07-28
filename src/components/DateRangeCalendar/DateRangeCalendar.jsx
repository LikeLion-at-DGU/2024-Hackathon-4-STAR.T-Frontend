// src/components/DateRangeCalendar.jsx

import React, { useState } from "react";
import PropTypes from "prop-types";
import * as S from "./styled";

const DateRangeCalendar = ({
  onDateRangeSelected = () => {},
  onConfirm = () => {},
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

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

  const handleMonthChange = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const handleConfirm = () => {
    if (selectedStartDate && selectedEndDate) {
      console.log(
        `${selectedStartDate.toLocaleDateString()}~${selectedEndDate.toLocaleDateString()}`
      );
      onDateRangeSelected(selectedStartDate, selectedEndDate); //props에 저장
    } else if (selectedStartDate) {
      console.log(`${selectedStartDate.toLocaleDateString()}~`);
      onDateRangeSelected(selectedStartDate, null);
    } else {
      console.log("No date selected");
    }
    onConfirm(selectedStartDate, selectedEndDate);
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
