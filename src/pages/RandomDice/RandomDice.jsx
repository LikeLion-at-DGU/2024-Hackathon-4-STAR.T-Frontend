import React, { useState, useEffect } from "react";
import * as S from "./styled";
import { Header } from "../../components/common/Header/Header";
import DiceBackground from "../../assets/DiceBackground.svg";
import star1 from "../../assets/star1.svg";
import { useNavigate } from "react-router-dom";
import GradientBackground from "../../components/GradientBackground/GradientBackground";
import { getRandomRoutine } from "../../apis/random";
// 이미지 배열 (실제 이미지 URL 또는 소스 파일을 사용)
const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy1Qh1wxZdS3QDFdjpSPK0FysKm0EHjxmsXg&s",
  "https://i.namu.wiki/i/n2LztcrML9hzPww_iKNeMuh34vg48dkmZmGuMEC_e-DSpNoPGwch9nR9FZz9WfVx6nvv5aSDxqlxEG8iA9tcLQ.webp",
  "https://www.dongguk.edu/resources/images/site/contents/img_ethic01.jpg",
  star1,
];

export const RandomDice = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(DiceBackground);
  const [rolling, setRolling] = useState(false);
  const [data, setData] = useState({});
  const [showContent, setShowContent] = useState(false);
  const [containerStyle, setContainerStyle] = useState({
    justifyContent: "center",
    alignItems: "center",
  });
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setContainerStyle({
          justifyContent: "center",
          alignItems: "center",
        });
      } else {
        setContainerStyle({
          justifyContent: "flex-start", // 예시: 작은 화면에서는 flex-start로 정렬
          alignItems: "center",
        });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let interval;
    if (rolling) {
      interval = setInterval(() => {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        setCurrentImage(randomImage);
      }, 100); //0.1초 마다 이미지 변경

      // 3초 후에 이미지 결정
      setTimeout(async () => {
        clearInterval(interval);
        try {
          const res = await getRandomRoutine();
          const randomImage = res.image;
          setCurrentImage(randomImage);
          setData(res);
        } catch (err) {
          throw err;
        }
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

  //다시 돌리기 기능
  const handleAgainClick = () => {
    navigate("/randomDice");
    window.location.reload();
  };

  return (
    <S.Layout>
      <GradientBackground showContent={showContent} />
      <Header
        $margin={"1rem 0 0 0"}
        $padding={"1rem 1rem 0 1rem"}
        color={textColor}
      >
        랜덤 루틴
      </Header>
      <S.Container
        style={{
          justifyContent: containerStyle.justifyContent,
          alignItems: containerStyle.alignItems,
        }}
      >
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
            <div className="title">{data.title}</div>
            <div className="description">{data.content}</div>
          </div>
        )}
        {!showContent ? (
          <S.ThrowButton onClick={handleRollClick}>주사위 돌리기</S.ThrowButton>
        ) : (
          <div className="buttons">
            <button className="Add" onClick={() => navigate("/calendar")}>
              내 캘린더에 추가
            </button>
            <button className="Again" onClick={handleAgainClick}>
              다시 돌리기
            </button>
          </div>
        )}
      </S.Container>
    </S.Layout>
  );
};
