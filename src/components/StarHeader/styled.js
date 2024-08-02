import styled from "styled-components";

export const layout = styled.div`
  display: flex;
  flex-direction: row;
  width: 98%;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;
  .progress {
    display: flex;
    flex-direction: row;
    gap: 5px;
    margin-left: 1rem;
  }
`;

export const ProgressingBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  max-width: 115px;
`;
export const ProgressContainr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
`;

export const ShareContainr = styled.div`
  display: flex;
  gap: 5px;
  margin-right: 1rem;
`;
