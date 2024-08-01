import React, { useState, useEffect } from "react";
import * as S from "./styled";
import CategoryTitle from "../../components/CategoryTitle/CategoryTitle";
import { useMoveonTheme } from "../../hooks/useTheme";
import MainRoutineBox from "../../components/mainRoutineBox/MainRoutineBox";
import Modal from "../../components/Modal/Modal";
import DateRangeCalendar from "../../components/DateRangeCalendar/DateRangeCalendar";
import { CheckUp } from "../../components/CheckUp/CheckUp";
import { useRecoilValue } from "recoil";
import { useRecoilState } from "recoil";

import {
  routineStart,
  routineEnd,
  CalendarVisible,
  CheckVisible,
} from "../../stores/routineRegister";

const ThemePage = () => {
  const startDay = useRecoilValue(routineStart);
  const endDay = useRecoilValue(routineEnd);
  console.log(startDay, endDay);
  const [isCalendarVisible, setIsCalendarVisible] =
    useRecoilState(CalendarVisible);
  const [isCheckVisible, setIsCheckVisible] = useRecoilState(CheckVisible);
  const { theme } = useMoveonTheme();
  console.log("{theme}:", { theme });
  console.log("theme:", theme);
  const themeData = theme.data;
  console.log("themeData:", themeData);

  const [term, setTerm] = useState(0);

  const handlePlusButtonClick = () => {
    setIsCalendarVisible(true);
  };

  const handleCloseModal = () => {
    setIsCalendarVisible(false);
    setIsCheckVisible(false);
  };

  useEffect(() => {
    if (startDay && endDay) {
      const differenceInTime = endDay.getTime() - startDay.getTime();
      const differenceInDays = differenceInTime / (1000 * 3600 * 24) + 1;
      setTerm(differenceInDays);
    }
  }, [startDay, endDay]);

  if (!themeData) {
    return <p>데이터를 불러오는 중입니다...</p>; // theme이 null인 경우 처리
  }

  return (
    <>
      <S.Header>
        <S.Bannerimage
          src={themeData.theme_image}
          alt={themeData.theme_title}
        />
        <S.BannerTitle>{themeData.theme_title} </S.BannerTitle>
      </S.Header>
      <S.descriptionContainer>
        <CategoryTitle section={themeData.theme_content} fontSize="15px" />
      </S.descriptionContainer>
      <S.RoutineBoxContainer>
        {themeData.routine ? (
          themeData.routine.map((item) => (
            <MainRoutineBox
              src={item.image ? item.image : item.video_url}
              key={item.id}
              title={item.title}
              subtitle={item.sub_title}
              content={item.content}
              onPlusButtonClick={handlePlusButtonClick}
            />
          ))
        ) : (
          <p>데이터를 불러오는 중입니다...</p>
        )}
      </S.RoutineBoxContainer>
      {isCalendarVisible && (
        <Modal onClose={handleCloseModal}>
          <DateRangeCalendar />
        </Modal>
      )}
      {isCheckVisible && (
        <Modal onClose={handleCloseModal}>
          <CheckUp term={term} />
        </Modal>
      )}
    </>
  );
};

export default ThemePage;
