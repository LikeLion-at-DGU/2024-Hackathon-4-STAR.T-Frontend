import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;

  @media (min-height: 720px) {
    justify-content: center;
    gap: 40px;
    height: 640px;
  }
`;
