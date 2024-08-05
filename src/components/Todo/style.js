import styled from "styled-components";

export const TodoLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 1rem;
  margin-bottom: 1rem;
`;

export const ListFrame = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const CheckFrame = styled.div``;

export const ButtonView = styled.button``;

export const ImgView = styled.img`
  cursor: pointer;
`;

export const TextFrame = styled.div``;

export const TitleView = styled.p`
  font-family: AppleSDGothicNeoL;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SubTitleView = styled.p`
  font-family: AppleSDGothicNeoL;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const PlusBtnFrame = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
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
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
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

export const ModalTitleInput = styled.input`
  width: 100%;
  text-align: left;

  font-family: AppleSDGothicNeoL;
  height: 30px;
  font-size: 24px;
  color: black;
  &::placeholder {
    color: black;
  }
`;

export const ModalSubInput = styled.input`
  width: 100%;
  /* padding: 1rem; */
  text-align: left;
  font-family: AppleSDGothicNeoL;
  /* padding-left: 0.2rem; */

  height: 20px;
  font-size: 16px;
  color: rgba(42, 42, 42, 0.7);
  &::placeholder {
    color: rgba(42, 42, 42, 0.7);
  }
`;

export const AddTextFrame = styled.div`
  display: flex;
  justify-content: center;
`;
