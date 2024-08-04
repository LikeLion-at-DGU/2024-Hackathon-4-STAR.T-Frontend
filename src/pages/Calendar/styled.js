import styled from "styled-components";

export const Layout = styled.div`
  pointer-events: ${(props) => props.$isModalOpen && "all"};

  margin-bottom: 8rem;
  position: relative;
  width: 90%;
  @media (min-height: 800px) {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    position: relative;
    width: 90%;
  }
`;

export const TodoWrapper = styled.div`
  margin-top: 1rem;
  min-height: ${(props) => `${props.height / 2}px`};
  width: 95%;
  border-radius: 15px;
  padding: 1rem;
  border: 1px solid #c4d9e2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 100;
  left: 2.5%;
  position: absolute;
  background-color: white;
  top: ${(props) => `${props.top}px`};
  @media (min-height: 800px) {
    top: ${(props) => `${props.top - 25}px`};
  }
`;

export const TitleFrame = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonView = styled.button``;
