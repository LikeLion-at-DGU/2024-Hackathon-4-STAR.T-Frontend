import React, { useState, useEffect, useRef } from "react";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";

const ImageSlider = ({ ThemeImg }) => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const count = ThemeImg.length;
  const slideWidth = 260; // px
  const sliderContainerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % count);
    }, 5000);
    return () => clearInterval(interval);
  }, [count]);

  const updateTranslateX = () => {
    if (sliderContainerRef.current) {
      const containerWidth = sliderContainerRef.current.offsetWidth;
      const centerPosition = containerWidth / 2 - slideWidth / 2;
      setTranslateX(-(current * slideWidth) + centerPosition);
    }
  };
  //화면 조정 될때마다 다시 translateX 갱신
  useEffect(() => {
    updateTranslateX(); // 처음 마운트될 때 중앙으로 설정
    window.addEventListener("resize", updateTranslateX);
    return () => window.removeEventListener("resize", updateTranslateX); // 메모리 누수 방지
  }, [current]);

  useEffect(() => {
    updateTranslateX();
  }, [current]);

  const handleNextSlide = () => {
    setCurrent((prev) => (prev + 1) % count);
  };

  const handlePrevSlide = () => {
    setCurrent((prev) => (prev - 1 + count) % count);
  };

  const handleMoveonTheme = (url) => {
    console.log(`Navigating to theme with theme_id: ${url}`);
    navigate(`/theme/${url}`);
  };

  return (
    <S.SliderContainer ref={sliderContainerRef}>
      <S.PrevButton onClick={handlePrevSlide}>{"<"}</S.PrevButton>
      <S.NextButton onClick={handleNextSlide}>{">"}</S.NextButton>
      <S.Slide
        style={{
          transform: `translateX(${translateX}px)`,
          transition: "transform 0.5s ease-out",
        }}
      >
        {ThemeImg.map((item, index) => (
          <S.SlideContent
            key={item.url || index + 1}
            $active={index === current}
            onClick={() => handleMoveonTheme(item.url)}
          >
            <S.SlideImage src={item.image} alt={`slide-${index}`} />
            <S.SlideTitle>{item.title}</S.SlideTitle>
            <div className="routineTitle">
              <S.SlideRoutineTitle>
                {item.routine_title.slice(0, 2).join(", ")}
                {item.routine_title.length > 2 && "..."}
              </S.SlideRoutineTitle>
            </div>
          </S.SlideContent>
        ))}
      </S.Slide>
    </S.SliderContainer>
  );
};

export default ImageSlider;
