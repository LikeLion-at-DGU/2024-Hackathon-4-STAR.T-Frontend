import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #78a1b5;
  margin-bottom: 7rem;
  padding: 2rem;
  .backBtn {
    border-radius: 15px;

    display: flex;
    width: 160px;
    height: 32px;
    padding: 6px;
    color: black;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    margin-bottom: 2rem;
    border: 1px solid #c4d9e2;
    background: rgba(196, 217, 226, 0.5);
  }

  .title {
    color: #fff;
    align-self: center;
    padding: 1rem;
    font-family: "AppleSDGothicNeoM";
    font-size: 20px;
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
