import React, { useState, useEffect } from "react";
import * as S from "./styled";
import { Bannerimages } from "../../constants/HomePage/dummy";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const images = Bannerimages;
  const count = images.length;

  // Assuming the width of each slide is 356px (image width) + 14px (margin: 7px on each side)
  const slideWidth = 356 + 14; // px

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % count);
    }, 3000);
    return () => clearInterval(interval);
  }, [count]);

  // Calculating translateX to center the current slide within the Wrapper
  const translateX = -(current * slideWidth) + 420 / 2 - slideWidth / 2;

  return (
    <S.SliderContainer>
      <S.Slide
        style={{
          transform: `translateX(${translateX}px)`,
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
