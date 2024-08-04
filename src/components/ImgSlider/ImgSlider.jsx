import React, { useState, useEffect, useRef } from "react";
import * as S from "./styled";
import { Link } from "react-router-dom";

const ImageSlider = ({ ThemeImg }) => {
  const [current, setCurrent] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  console.log("ThemeImg:", ThemeImg);
  const count = ThemeImg.length;
  console.log(count);
  const slideWidth = 356 + 14; // px
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

  return (
    <S.SliderContainer ref={sliderContainerRef}>
      <S.Slide
        style={{
          transform: `translateX(${translateX}px)`,
          transition: "transform 0.5s ease-out",
        }}
      >
        {ThemeImg.map((item, index) => (
          <Link
            to={`/api/theme/${item.id}`}
            key={item.id}
            style={{ textDecoration: "none" }}
          >
            <S.SlideContent $active={index === current}>
              <S.SlideImage src={item.image} alt={`slide-${index}`} />
              <S.SlideTitle>{item.title}</S.SlideTitle>
              <div className="routineTitle">
                {item.routine_title.map((title, titleIndex) => (
                  <S.SlideRoutineTitle key={titleIndex}>
                    {title}
                  </S.SlideRoutineTitle>
                ))}
              </div>
            </S.SlideContent>
          </Link>
        ))}
      </S.Slide>
    </S.SliderContainer>
  );
};

export default ImageSlider;
