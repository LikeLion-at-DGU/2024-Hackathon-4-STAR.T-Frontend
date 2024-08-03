import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1rem;
  margin-bottom: 8rem;
  width: 100%;

  .backBtn {
    display: flex;
    width: 160px;
    height: 32px;
    padding: 6px;
    color: white;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 15px;
    background-color: #78a1b5;
  }

  .title {
    color: #fff;
    align-self: flex-start;
    padding: 1rem;
    font-family: "AppleSDGothicNeoM";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .content {
    color: white;
    margin-bottom: 2rem;
    text-align: left;
    display: flex;
    width: 100%;
    justify-content: start;
  }
`;
