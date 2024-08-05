import { styled } from "styled-components";

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  overflow: hidden;
  margin-top: 1rem;
`;

export const Slide = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

export const SlideContent = styled.div`
  min-width: 260px;
  transition: filter 0.5s ease-in-out;
  filter: ${({ $active }) => ($active ? "none" : "blur(2px)")};
  display: flex;
  height: 220px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  transform: ${({ $active }) => ($active ? "scale(1)" : "scale(0.8)")};
  transition: transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;

  .routineTitle {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 135px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const SlideTitle = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 1rem;
  color: #333;
  font-family: "AppleSDGothicNeoL";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SlideRoutineTitle = styled.div`
  margin-top: 4px;

  font-size: 0.7rem;
  color: rgba(0, 0, 0, 0.5);

  font-family: "AppleSDGothicNeoM";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
