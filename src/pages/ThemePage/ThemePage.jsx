import React, { useState } from "react";
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
  console.log({ theme });

  const [term, setTerm] = useState(0);

  const handlePlusButtonClick = () => {
    setIsCalendarVisible(true);
  };

  const handleCloseModal = () => {
    setIsCalendarVisible(false);
    setIsCheckVisible(false);
  };

  const differenceInTime = endDay.getTime() - startDay.getTime();
  const differenceInDays = differenceInTime / (1000 * 3600 * 24) + 1;
  setTerm(differenceInDays);

  if (!theme) {
    return <p>데이터를 불러오는 중입니다...</p>; // theme이 null인 경우 처리
  }

  return (
    <>
      <S.Header>
        <S.Bannerimage src={theme.theme_image} alt={theme.theme_title} />
        <S.BannerTitle>{theme.theme_title} </S.BannerTitle>
      </S.Header>
      <S.descriptionContainer>
        <CategoryTitle section={theme.theme_content} fontSize="15px" />
      </S.descriptionContainer>
      <S.RoutineBoxContainer>
        {theme.routine ? (
          theme.routine.map((item) => (
            <MainRoutineBox
              src={item.image ? item.image : item.video_url}
              key={item.id}
              title={item.title}
              subtitle={item.sub_title}
              content={item.content}
              term={item.term}
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
