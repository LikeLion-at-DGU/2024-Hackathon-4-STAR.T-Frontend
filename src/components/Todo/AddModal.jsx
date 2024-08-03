import * as S from "./style";
import { useState } from "react";
import { postPersonal } from "@/apis/calendar";

export const AddModal = ({ day, onClose }) => {
  const [task, setTask] = useState("");
  const [details, setDetails] = useState("");

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleDetailsChange = (e) => {
    setDetails(e.target.value);
  };
  const handleSumbit = async () => {
    onClose();
    await postPersonal(task, details, day);
  };
  return (
    <S.ModalLayout>
      <S.ModalTitle>
        <S.ModalInput
          placeholder="할 일을 입력하세요."
          value={task}
          onChange={handleTaskChange}
        />
        <S.ModalInput
          placeholder="상세 정보를 입력하세요."
          value={details}
          onChange={handleDetailsChange}
        />
      </S.ModalTitle>
      <S.ModalBtn onClick={handleSumbit}>확인</S.ModalBtn>
    </S.ModalLayout>
  );
};
