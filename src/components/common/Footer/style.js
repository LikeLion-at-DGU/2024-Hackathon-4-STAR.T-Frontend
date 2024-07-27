import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 420px;
  height: 122px;

  position: fixed;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.9) 30.1%
  );
  backdrop-filter: blur(3px);
  z-index: 2;
`;

export const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ItemBox = styled.div`
  display: flex;
  width: 15%;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;
