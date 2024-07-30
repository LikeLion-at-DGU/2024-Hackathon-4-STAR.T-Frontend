import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  gap: 5px;

  @media (min-height: 720px) {
    justify-content: flex-start;
    gap: 40px;
    height: 640px;
  }
`;
