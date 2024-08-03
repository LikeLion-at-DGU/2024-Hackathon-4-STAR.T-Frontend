import styled from "styled-components";
import Back from "../../assets/background.svg";
export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url(${Back});
  background-repeat: none;
  background-size: cover;

  .backBtn {
    border-radius: 15px;
    background: var(--Main-Color, #78a1b5);
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
