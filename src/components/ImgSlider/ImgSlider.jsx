import React, { useState, useEffect } from "react";
import * as S from "./styled";
import { Bannerimages } from "../../constants/HomePage/dummy";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const slideWidth = 90;
  const images = Bannerimages;
  const count = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % count);
    }, 3000);
    return () => clearInterval(interval);
  }, [count]);

  const translateX = -(current * slideWidth - 6);

  return (
    <S.SliderContainer>
      <S.Slide
        style={{
          transform: `translateX(${translateX}%)`,
        }}
      >
        {images.map((image, index) => (
          <S.SlideContent key={index} $active={index === current}>
            <S.SlideImage src={image.src} alt={`slide-${index}`} />
            <S.SlideTitle>{image.title}</S.SlideTitle>
            <S.SlideRoutineTitle>{image.Routinetitle}</S.SlideRoutineTitle>
          </S.SlideContent>
        ))}
      </S.Slide>
    </S.SliderContainer>
  );
};

export default ImageSlider;
