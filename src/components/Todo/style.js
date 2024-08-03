import styled from "styled-components";

export const TodoLayout = styled.div`
  margin-top: 1rem;
  min-height: ${(props) => `${props.height / 2}px`};
  width: 95%;
  border-radius: 15px;
  padding: 1rem;
  border: 1px solid #c4d9e2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 10;
  left: 2.5%;
  position: absolute;
  background-color: white;
  /* margin-bottom: ${(props) => `${props.height / 2}px`}; */
  top: ${(props) => `${props.top}px`};
  @media (min-height: 800px) {
    top: ${(props) => `${props.top - 25}px`};
    /* margin-bottom: ${(props) => `${props.height / 2}px`}; */
  }
`;

export const ListFrame = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  height: 50px;
`;

export const CheckFrame = styled.div``;

export const ButtonView = styled.button``;

export const ImgView = styled.img`
  cursor: pointer;
`;

export const TextFrame = styled.div``;

export const TitleView = styled.p`
  font-family: AppleSDGothicNeoL00;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SubTitleView = styled.p`
  font-family: AppleSDGothicNeoM00;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const PlusBtnFrame = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1rem 0;
`;

export const TitleFrame = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ModalLayout = styled.div`
  width: 300px;
  height: 200px;
  background: #fff;
  border-radius: 15px;
  border: 1px solid #78a1b5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1.5rem;
  gap: 1rem;
`;

export const ModalTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ModalBtn = styled.button`
  display: flex;
  width: 108px;
  height: 32px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: #78a1b5;
  color: white;
  font-family: AppleSDGothicNeoL00;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ModalInput = styled.input`
  width: 100%;
  padding: 1rem;
  text-align: center;
  ::placeholder {
    text-align: center;
    color: gray;
  }
`;
