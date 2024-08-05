import { styled } from "styled-components";
export const Layout = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background-color: transparent;
  width: 100%;
  flex-direction: column;
  transition: background-color 1.8s ease;
  gap: 1rem;
  margin-bottom: 20rem;
  @media (min-height: 720px) {
    justify-content: flex-start;
    gap: 40px;
  }
`;

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-grow: 0.5;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  z-index: 2;
  .celebrity {
    display: flex;
    font-size: 1.2rem;
  }

  .coment {
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1rem;
    line-height: 1.5;
  }

  .line {
    white-space: nowrap; /* 줄바꿈 방지 */
  }

  .description {
    width: 100%;
    font-size: 12px;
    color: white;
    text-align: center;
  }

  .content {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 19px;
  }

  .title {
    font-size: 16px;
  }
  .buttons {
    display: flex;
    flex-direction: column;
    width: 70%;
    justify-content: center;
    align-items: center;

    gap: 1rem;
  }
  .Add {
    font-size: 1rem;
    height: 30px;
    width: 80%;
    text-align: center;
    border-radius: 25px;
    background-color: #fff;
    color: black;
  }

  .Again {
    font-size: 1rem;
    height: 30px;
    width: 80%;
    text-align: center;
    border-radius: 25px;
    background-color: #fff;
    color: black;
  }
  .moveOnHome {
    font-size: 1rem;
    height: 30px;
    width: 80%;
    text-align: center;
    border-radius: 25px;
    background-color: #fff;
    color: black;
  }
`;

export const Gif = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  flex-shrink: 0;
  border-radius: 150px;
  border: 2px solid #78a1b5;
  background: lightgray 50% / cover no-repeat;
  z-index: 3;
`;
export const ThrowButton = styled.button`
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  height: 45px;
  padding: 6px 70px;
  gap: 10px;
  border-radius: 25px;
  background-color: #78a1b5;
  color: white;
`;
