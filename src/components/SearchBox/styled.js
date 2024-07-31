import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 90%;
  /* height: 40px; */
  padding: 0px 10px;
  align-items: center;
  justify-content: space-between;
  gap: 2.778px;
  border-radius: 10px;
  border: 1px solid #c4d9e2;
  background: #fff;
  .SearchInput {
    flex-grow: 1;
    /* padding: 1.5rem 0; */
    height: 3rem;
  }
  .SearchIcon {
    margin-left: auto;
  }
  button {
    cursor: pointer;
  }
`;
