import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MainRoutineBox from "../../components/mainRoutineBox/MainRoutineBox";
import { Bannerimages } from "../../constants/HomePage/dummy";
import CategoryTitle from "../../components/CategoryTitle/CategoryTitle";
import * as S from "./styled";
import { Routinetitle } from "../../constants/ThemePage/dummy";
import DateRangeCalendar from "../../components/DateRangeCalendar/DateRangeCalendar";
import Modal from "../../components/Modal/Modal";
import { CheckUp } from "../../components/CheckUp/CheckUp";
const ThemePage = () => {
  const { imageIndex } = useParams();
  const index = parseInt(imageIndex, 10);
  const selectedImage = Bannerimages[index];
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
        {selectedImage.src ? (
          <S.Bannerimage src={selectedImage.src} alt={selectedImage.title} />
        ) : (
          <div>이미지가 없습니다</div>
        )}
        <S.BannerTitle>{selectedImage.title} </S.BannerTitle>
      </S.Header>
      <S.descriptionContainer>
        <CategoryTitle section={selectedImage.description} fontSize="15px" />
      </S.descriptionContainer>
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

export default ThemePage;
