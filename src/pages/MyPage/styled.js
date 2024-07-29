import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  gap: 1rem;

  @media (min-height: 720px) {
    justify-content: flex-start;
    gap: 40px;
    height: 640px;
  }

  .MyStar {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .Privacy {
    display: flex;
    width: 100%;
    font-size: 1.2rem;
    border-bottom: 1px solid black;
    padding-bottom: 1rem;
  }

  .emptytext {
    display: flex;
    font-size: 1.2rem;
    font-weight: 600;
    justify-self: center;
    align-self: center;
  }
`;

export const MypageWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 1.5rem;
`;
