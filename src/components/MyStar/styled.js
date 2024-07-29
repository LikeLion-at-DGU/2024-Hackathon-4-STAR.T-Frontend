import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
`;

export const StarImg = styled.img`
  display: flex;
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  object-fit: cover;
  border-radius: 10px;
  background: lightgray 0px -9.133px / 100% 150.476% no-repeat;
`;

export const info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  flex-grow: 2;
`;
