import React, { useState } from "react";
import { useParams } from "react-router-dom"; // useParams 훅을 임포트
import MainRoutineBox from "../../components/mainRoutineBox/MainRoutineBox";
import { Bannerimages } from "../../constants/HomePage/dummy";
import CategoryTitle from "../../components/CategoryTitle/CategoryTitle";
import * as S from "./styled";
import { Routinetitle } from "../../constants/ThemePage/dummy";
import DateRangeCalendar from "../../components/DateRangeCalendar/DateRangeCalendar";
import Modal from "../../components/Modal/Modal";

const ThemePage = () => {
  const { imageIndex } = useParams();
  const index = parseInt(imageIndex, 10);
  const selectedImage = Bannerimages[index];
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  const handlePlusButtonClick = () => {
    setIsCalendarVisible(true);
  };

  const handleCloseModal = () => {
    setIsCalendarVisible(false);
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
      <CategoryTitle section={selectedImage.description} fontSize="15px" />
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
          <DateRangeCalendar />
        </Modal>
      )}
    </>
  );
};

export default ThemePage;
