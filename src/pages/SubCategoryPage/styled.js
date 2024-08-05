import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  justify-content: space-around;
  gap: 5px;

  @media (min-height: 720px) {
    justify-content: flex-start;
    gap: 40px;
    height: 640px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-bottom: 8rem;
`;
export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
`;
