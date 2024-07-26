import React, { useState, useEffect } from "react";
import * as S from "./styled";

const ImageSlider = () => {
  const [current, setCurrent] = useState(1); // Current image index
  const slideWidth = 90; // Each slide takes up 100% of the container width
  const images = S.images;
  const count = images.length;

  // Extended images array including clones
  const extendedImages = [
    images[images.length - 1], // Clone of the last image
    ...images,
    ...images,
    ...images, // Original images
    images[0], // Clone of the first image
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % extendedImages.length); // Loop through images including clones
    }, 2000);
    return () => clearInterval(interval);
  }, [extendedImages.length]);

  const translateX = -(current * slideWidth - 9);

  return (
    <S.SliderContainer>
      <S.Slide
        style={{
          transform: `translateX(${translateX}%)`,
          // Total width including cloned images
        }}
      >
        {extendedImages.map((src, index) => (
          <S.SlideImage key={index} src={src} active={index === current} />
        ))}
      </S.Slide>
    </S.SliderContainer>
  );
};

export default ImageSlider;
