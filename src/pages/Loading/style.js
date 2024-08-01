import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${(props) => props.$url});
  background-color: transparent;
  background-repeat: none;
  background-size: cover;
`;
