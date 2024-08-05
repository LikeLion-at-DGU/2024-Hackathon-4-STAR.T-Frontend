import styled from "styled-components";

export const CheckContainer = styled.div`
  width: 330px;
  height: 180px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  border: 1px solid #78a1b5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const ConfirmButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 1rem;
  border: none;
  border-radius: 20px;
  background-color: #78a1b5;
  color: white;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #c4d9e2;
  }
`;
