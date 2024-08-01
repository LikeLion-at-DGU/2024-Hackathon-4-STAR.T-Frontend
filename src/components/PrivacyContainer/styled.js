import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  padding: 1rem;

  .Checkbox {
    display: none;
  }
  .arrow {
    display: flex;
    margin-left: auto;
  }
  .label {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
  .text {
    color: white;
    cursor: "pointer";
  }
`;
