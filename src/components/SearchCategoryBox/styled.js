import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 48px;
  padding: 14px 17.999px 13.974px 24px;
  justify-content: space-between;
  align-items: flex-start;
  gap: 191px;
  align-self: stretch;
  border-radius: 15px;
  background: url(${(props) => props.src}) lightgray no-repeat;
  cursor: pointer;
  background-size: cover;
  color: white;

  .Icon {
    margin-left: auto;
  }
`;
