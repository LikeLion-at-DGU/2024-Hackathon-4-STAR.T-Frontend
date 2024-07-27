import { styled } from "styled-components";
import diet from "../../assets/BannerImg(1).svg";

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;

  overflow: hidden;
  margin: 1rem;
`;

export const Slide = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

export const SlideContent = styled.div`
  min-width: 85%;
  margin: 0 7px;
  transition: filter 0.5s ease-in-out;
  filter: ${({ $active }) => ($active ? "none" : "blur(2px)")};
  display: flex;
  height: 200px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  transform: ${({ $active }) => ($active ? "scale(1)" : "scale(0.8)")};
  transition: transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 146px;

  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const SlideTitle = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 1rem;
  color: #333;
`;

export const SlideRoutineTitle = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 0.7rem;
  color: rgba(0, 0, 0, 0.5);
`;

export const images = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy1Qh1wxZdS3QDFdjpSPK0FysKm0EHjxmsXg&s",
    title: "멋쟁이 사자처럼 중앙 해커톤",
    Routinetitle: "4조",
  },
  {
    src: "https://i.namu.wiki/i/n2LztcrML9hzPww_iKNeMuh34vg48dkmZmGuMEC_e-DSpNoPGwch9nR9FZz9WfVx6nvv5aSDxqlxEG8iA9tcLQ.webp",
    title: "토마토마토마토마토",
    Routinetitle: "4조",
  },
  {
    src: "https://www.dongguk.edu/resources/images/site/contents/img_ethic01.jpg",
    title: "동대",
    Routinetitle: "4조",
  },
  {
    src: diet,
    title: "일주일 다이어트 식단",
    Routinetitle: "전효성다이어트 아이유다이어트",
  },
];
