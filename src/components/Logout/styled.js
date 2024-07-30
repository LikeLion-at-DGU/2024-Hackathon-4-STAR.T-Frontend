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
  .ment {
    color: #000;
    text-align: center;
    font-size: 16px;
  }
  #confirm-logout,
  #cancel-logout {
    display: flex;
    width: 80px;
    height: 32px;
    padding: 9px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 15px;
    background-color: #c7c7c7;
  }
  #confirm-logout:hover {
    color: white !important;
    background-color: #78a1b5 !important;
  }
  #cancel-logout:hover {
    color: white !important;
    background-color: #78a1b5 !important;
  }
  .ConfirmButton {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 20px;
  }
`;
