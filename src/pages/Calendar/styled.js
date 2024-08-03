import styled from "styled-components";

export const Layout = styled.div`
  margin-bottom: 8rem;
  position: relative;
  width: 90%;
  @media (min-height: 800px) {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    position: relative;
    width: 90%;
  }
`;
