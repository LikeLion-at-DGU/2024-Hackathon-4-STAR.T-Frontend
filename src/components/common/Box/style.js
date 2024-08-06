import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: ${(props) =>
    props.$select
      ? "1px #149000 solid"
      : "1px solid var(--Main-Color-2, #c4d9e2)"};
  background: rgba(196, 217, 226, 0.5);
  font-family: "AppleSDGothicNeoL";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: nowrap;
  cursor: pointer;
`;
