import React, { useState, useEffect } from "react";
import * as S from "./styled";
import { Header } from "../../components/common/Header/Header";
import star1 from "../../assets/star1.svg";
import { useNavigate } from "react-router-dom";

// 이미지 배열 (실제 이미지 URL 또는 소스 파일을 사용)
const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy1Qh1wxZdS3QDFdjpSPK0FysKm0EHjxmsXg&s",
  "https://i.namu.wiki/i/n2LztcrML9hzPww_iKNeMuh34vg48dkmZmGuMEC_e-DSpNoPGwch9nR9FZz9WfVx6nvv5aSDxqlxEG8iA9tcLQ.webp",
  "https://www.dongguk.edu/resources/images/site/contents/img_ethic01.jpg",
  star1,
];

export const RandomDice = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [rolling, setRolling] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#fff");
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let interval;
    if (rolling) {
      interval = setInterval(() => {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        setCurrentImage(randomImage);
      }, 100); //0.1초 마다 이미지 변경

      // 3초 후에 이미지 결정
      setTimeout(() => {
        clearInterval(interval);
        const randomImage = images[Math.floor(Math.random() * images.length)];
        setCurrentImage(randomImage);
        setBackgroundColor("#78A1B5");
        setRolling(false);
        setShowContent(true);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [rolling]);

  const handleRollClick = () => {
    setRolling(true);
    setShowContent(false);
  };

  const textColor = !showContent ? "black" : "white";
  return (
    <S.Layout
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <Header
        $margin={"1rem 0 0 0"}
        $padding={"1rem 1rem 0 1rem"}
        color={textColor}
      >
        랜덤 루틴
      </Header>
      <S.Container>
        <S.Gif
          style={{
            backgroundImage: `url(${currentImage})`,
          }}
        />
        {!showContent ? (
          <div className="coment">
            <div className="line">당신의 건강한 생활을 도와줄</div>
            <div className="line">루틴을 뽑아보세요!</div>
          </div>
        ) : (
          <div className="content">
            <div className="title">송혜교 다이어트</div>
            <div className="description">
              아침, 점심은 일반식으로 살이찌기 쉬운 저녁은 칼로리 낮은 두부 섭취
              장기 다이어트용 식단
            </div>
          </div>
        )}
        {!showContent ? (
          <S.ThrowButton onClick={handleRollClick}>주사위 돌리기</S.ThrowButton>
        ) : (
          <div className="buttons">
            <button className="Add" onClick={() => navigate("/calendar")}>
              내 캘린더에 추가
            </button>
            <button className="Again">다시 돌리기</button>
          </div>
        )}
      </S.Container>
    </S.Layout>
  );
};
