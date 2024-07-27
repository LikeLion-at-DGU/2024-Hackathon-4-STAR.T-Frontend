import React, { useState, useEffect } from "react";
import * as S from "./styled";
import { Bannerimages } from "../../constants/HomePage/dummy";
import { Link } from "react-router-dom";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const images = Bannerimages;
  const count = images.length;

  const slideWidth = 356 + 14; // px

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % count);
    }, 3000);
    return () => clearInterval(interval);
  }, [count]);

  const translateX = -(current * slideWidth) + 420 / 2 - slideWidth / 2;

  return (
    <S.SliderContainer>
      <S.Slide
        style={{
          transform: `translateX(${translateX}px)`,
        }}
      >
        {images.map((image, index) => (
          <Link to="/theme" key={index} style={{ textDecoration: "none" }}>
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
