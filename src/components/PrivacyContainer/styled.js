import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  gap: 1rem;
  padding-bottom: 1rem;

  .label {
    display: flex;
    gap: 8px;
    flex-grow: 8;
    cursor: pointer;
  }
  .arrow {
    display: flex;
    margin-left: auto;
  }

  .text {
    color: white;
    margin-top: 2.5px;
  }
`;
