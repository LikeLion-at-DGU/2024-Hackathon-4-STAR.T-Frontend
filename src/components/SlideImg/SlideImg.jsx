import React, { useState, useEffect } from "react";
import * as S from "./styled";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0); // Current image index
  const slideWidth = 90; // Each slide takes up 100% of the container width
  const images = S.images;
  const count = images.length;

  // Extended images array including clones

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % count); // Loop through images including clones
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
