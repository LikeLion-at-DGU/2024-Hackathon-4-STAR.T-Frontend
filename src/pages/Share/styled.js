import { styled } from "styled-components";
import Back from "../../assets/background.svg";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  flex-direction: column;
  background-image: url(${Back});
  background-size: cover;
  margin-bottom: 7.3rem;
  .Containr {
    min-height: 100%;
  }
`;
export const Header = styled.div`
  position: relative;
  width: 100%;
`;
export const BannerImage = styled.img`
  display: block;
  width: 100%;
  height: 282px;
  object-fit: cover;
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 60%,
    rgba(0, 0, 0, 0) 100%
  );
  position: relative;
`;
export const BannerTitle = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;

  bottom: 70px;
  left: 10px;
  z-index: 2;
  font-size: 1.8rem;
  color: white;
  font-weight: 600;
  .profession {
    color: var(--naver-text, #fff);
    font-family: "AppleSDGothicNeoL";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const RoutineBoxContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 2rem;
`;

export const ClearCantainr = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const ClearMain = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: white;

  .imgContainr {
    position: relative;
    display: flex;
    width: 100%;
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;
  }

  .icon2 {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);
  }
  .textOverlay {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 5;
    font-weight: bold;
    text-align: center;
    color: white;
    transform: translate(-50%, -50%);
  }

  .text {
    color: var(--naver-text, #fff);
    text-align: center;
    font-family: "AppleSDGothicNeoL";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const shareBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 196.505px;
  height: 39.301px;
  color: black;
  border-radius: 19px;
  border: 1.228px solid #c4d9e2;
  background: rgba(196, 217, 226, 0.5);
  padding: 6px;

  .ImgSave {
    display: flex;

    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    text-align: center;
  }
`;
export const shareContainr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  .backBtn {
    display: flex;
    width: 160px;
    height: 32px;
    padding: 6px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 0.5rem 0;
    color: black;
    flex-shrink: 0;
    text-align: center;
    border-radius: 15px;
    border: 1px solid #c4d9e2;
    background: rgba(196, 217, 226, 0.5);
  }
`;
