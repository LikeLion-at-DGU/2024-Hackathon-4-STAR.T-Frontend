import React, { useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./styled";
import { DUMMY_DATA } from "../../constants/HomePage/dummy";
import CategoryTitle from "../../components/CategoryTitle/CategoryTitle";
import MainRoutineBox from "../../components/mainRoutineBox/MainRoutineBox";
import DateRangeCalendar from "../../components/DateRangeCalendar/DateRangeCalendar";
import Modal from "../../components/Modal/Modal";
import { CheckUp } from "../../components/CheckUp/CheckUp";
import { Routinetitle } from "../../constants/ThemePage/dummy"; //메인루틴박스 데이터
import UserScore from "../../components/UserScore/UserScore";

const StarPage = () => {
  const { id } = useParams();
  const selectedStar = DUMMY_DATA.find((star) => star.id === id);

  if (!selectedStar) {
    return <div>스타 정보를 찾을 수 없습니다.</div>;
  }

  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [isCheckVisible, setIsCheckVisible] = useState(false);
  const [dateRange, setDateRange] = useState("");
  const [term, setTerm] = useState(0);

  const handlePlusButtonClick = () => {
    setIsCalendarVisible(true);
  };

  const handleCloseModal = () => {
    setIsCalendarVisible(false);
    setIsCheckVisible(false);
  };

  const handleCalendarConfirm = (startDate, endDate) => {
    setIsCalendarVisible(false);
    setIsCheckVisible(true);
    const formattedStartDate = startDate.toLocaleDateString();
    const formattedEndDate = endDate.toLocaleDateString();
    setDateRange(`${formattedStartDate} ~ ${formattedEndDate}`);
    const differenceInTime = endDate.getTime() - startDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24) + 1;
    setTerm(differenceInDays);
  };

  return (
    <>
      <S.Header>
        {selectedStar.src ? (
          <S.BannerImage src={selectedStar.src} alt={selectedStar.title} />
        ) : (
          <div>이미지가 없습니다</div>
        )}
        <S.BannerTitle>{selectedStar.star}</S.BannerTitle>
      </S.Header>
      <S.ScoreContainer>
        <CategoryTitle section={"나의 점수"} fontSize="15px" />
        <S.Ranking>
          <UserScore />
          <div className="Percentage">(상위10%)</div>
        </S.Ranking>
      </S.ScoreContainer>
      <S.RoutineBoxContainer>
        {Routinetitle.map((item) => (
          <MainRoutineBox
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            content={item.content}
            onPlusButtonClick={handlePlusButtonClick}
          />
        ))}
      </S.RoutineBoxContainer>
      {isCalendarVisible && (
        <Modal onClose={handleCloseModal}>
          <DateRangeCalendar onConfirm={handleCalendarConfirm} />
        </Modal>
      )}
      {isCheckVisible && (
        <Modal onClose={handleCloseModal}>
          <CheckUp
            dateRange={dateRange}
            term={term}
            onClose={handleCloseModal}
          />
        </Modal>
      )}
    </>
  );
};

export default StarPage;
