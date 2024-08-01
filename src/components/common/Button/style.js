import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.$padding};
  margin: ${(props) => props.$margin};
  border-radius: ${(props) => props.$radius};
  background: ${(props) => props.$background};
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
