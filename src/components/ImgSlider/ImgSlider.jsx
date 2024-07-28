import React, { useState, useEffect, useRef } from "react";
import * as S from "./styled";
import { Bannerimages } from "../../constants/HomePage/dummy";
import { Link } from "react-router-dom";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const images = Bannerimages;
  const count = images.length;
  const slideWidth = 356 + 14; // px
  const sliderContainerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % count);
    }, 5000);
    return () => clearInterval(interval);
  }, [count]);
  //화면 조정될 때마다 다시 이미지 중앙 맞추기
  const updateTranslateX = () => {
    if (sliderContainerRef.current) {
      const containerWidth = sliderContainerRef.current.offsetWidth;
      const centerPosition = containerWidth / 2 - slideWidth / 2;
      setTranslateX(-(current * slideWidth) + centerPosition);
    }
  };

  useEffect(() => {
    updateTranslateX();
    window.addEventListener("resize", updateTranslateX); // 윈도우 크기 변경될 때마다 중앙으로 설정
    return () => window.removeEventListener("resize", updateTranslateX); // (메모리누수방지기능)
  }, [current]);

  return (
    <S.SliderContainer ref={sliderContainerRef}>
      <S.Slide
        style={{
          transform: `translateX(${translateX}px)`,
          transition: "transform 0.5s ease-out",
        }}
      >
        {images.map((image, index) => (
          <Link
            to={`/theme/${index}`}
            key={index}
            style={{ textDecoration: "none" }}
          >
            <S.SlideContent $active={index === current}>
              <S.SlideImage src={image.src} alt={`slide-${index}`} />
              <S.SlideTitle>{image.title}</S.SlideTitle>
              <S.SlideRoutineTitle>{image.Routinetitle}</S.SlideRoutineTitle>
            </S.SlideContent>
          </Link>
        ))}
      </S.Slide>
    </S.SliderContainer>
  );
};

export default ImageSlider;
