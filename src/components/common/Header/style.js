import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 6rem;
  padding: ${(props) => props.$padding};
  margin: ${(props) => props.$margin};
  color: ${(props) => props.color || "initial"};
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: inherit;
`;
