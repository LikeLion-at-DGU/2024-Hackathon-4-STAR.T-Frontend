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
  background: url(${(props) => props.src}) lightgray 0px -32.406px / 100% 389.193%
    no-repeat;
  cursor: pointer;

  .Icon {
    margin-left: auto;
  }
`;
