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
  min-width: 300px;
  margin: 0 5px;
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
    width: 80%;
    overflow: hidden;
  }
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
  font-family: "AppleSDGothicNeoL";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SlideRoutineTitle = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 0.7rem;
  color: rgba(0, 0, 0, 0.5);

  font-family: "AppleSDGothicNeoM";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const PrevButton = styled.button`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NextButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;
