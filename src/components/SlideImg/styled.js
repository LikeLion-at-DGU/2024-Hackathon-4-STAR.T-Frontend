import { styled } from "styled-components";

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;
  overflow: hidden;
  padding: 1rem;
`;

export const Slide = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

export const SlideImage = styled.div`
  min-width: 85%;
  margin-right: 15px;
  transition: opacity 0.5s ease-in-out;
  opacity: ${({ active }) => (active ? 1 : 0.3)};
  background-image: url(${({ src }) => src});
  background-size: cover;
  /* background-repeat: no-repeat; */
  background-position: center;
  height: 146px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy1Qh1wxZdS3QDFdjpSPK0FysKm0EHjxmsXg&s",
  "https://i.namu.wiki/i/n2LztcrML9hzPww_iKNeMuh34vg48dkmZmGuMEC_e-DSpNoPGwch9nR9FZz9WfVx6nvv5aSDxqlxEG8iA9tcLQ.webp",
  "https://www.dongguk.edu/resources/images/site/contents/img_ethic01.jpg",
];
