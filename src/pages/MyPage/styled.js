import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  justify-content: space-around;
  gap: 15px;
  margin-bottom: 10rem;
  @media (min-height: 720px) {
    justify-content: flex-start;
    gap: 40px;
    height: 640px;
    margin-bottom: 30rem;
  }

  .MyStar {
    font-size: 1.4rem;
    font-weight: 600;
    margin: 0.5rem 0;
  }

  .Privacy {
    display: flex;
    width: 100%;
    font-size: 1.2rem;
    text-align: center;
    padding: 0.5rem 0;
    border-bottom: 1px solid #78a1b5;

    color: inherit;
    font: inherit;
    cursor: pointer;
    text-decoration: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &:focus {
      outline: none;
    }

    &:active {
      color: inherit; /* 색상 변화 없도록 설정 */
    }

    &:visited {
      color: inherit; /* 방문 후 색상 변화 없도록 설정 */
    }
  }

  .emptytext {
    display: flex;
    color: #000;

    font-family: "AppleSDGothicNeoL";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    justify-self: center;
    align-self: center;
    padding: 1rem;
  }
`;

export const MypageWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 5px;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 1.5rem;
  margin-bottom: 1rem;

  .button {
    background: none;
    border: none;
    color: inherit;
    font: inherit;
    cursor: pointer;
    outline: inherit;

    &:focus {
      outline: none;
    }

    &:active {
      outline: none;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
`;

export const StarImg = styled.img`
  display: flex;
  width: 65px;
  height: 65px;
  flex-shrink: 0;
  object-fit: cover;
  border-radius: 10px;
`;

export const info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  flex-grow: 2;
  font-size: 1.3rem;
`;
export const subscribeBox = styled.div`
  width: 330px;
  height: 180px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  border: 1px solid #78a1b5;
  display: flex;

  align-items: center;
  justify-content: center;
`;
