import { styled } from "styled-components";
export const Layout = styled.div`
  display: flex;
  position: relative;
  overflow-y: auto;
  z-index: 1;
  min-height: 100vh;
  background-color: transparent;
  width: 100%;
  flex-direction: column;
  transition: background-color 1.8s ease;
  gap: 1rem;

  @media (min-height: 750px) {
    justify-content: flex-start;
    gap: 40px;
  }
`;

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  z-index: 2;
  margin-bottom: 1rem;
  @media (min-height: 800px) {
    justify-content: center;
    align-items: flex-start;
  }

  .celebrity {
    display: flex;
    font-size: 1.2rem;
    font-weight: 600;
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
    white-space: nowrap;
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
    display: flex;
    width: 180px;
    height: 32px;
    padding: 6px 108px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 15px;
    background: var(--Main-Color, #78a1b5);
    font-size: 1rem;
  }

  .Again {
    display: flex;
    width: 180px;
    height: 32px;
    padding: 6px 108px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 15px;
    border: 1px solid #c4d9e2;
    background: rgba(196, 217, 226, 0.5);
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
