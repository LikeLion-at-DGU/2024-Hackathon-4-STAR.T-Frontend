import styled from "styled-components";

export const Container = styled.div`
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
  gap: 20px;

  #confirm-logout,
  #cancel-logout {
    color: #78a1b5;
    border-radius: 10px;
    border: 1px solid #78a1b5;
    padding: 0.5rem;
    background-color: #78a1b5;
    color: white;
  }

  .ConfirmButton {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 20px;
  }
`;
