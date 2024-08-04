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
  console.log(day);
  return (
    <S.ModalLayout>
      <S.ModalTitle>
        <S.ModalTitleInput
          placeholder="제목"
          value={task}
          onChange={handleTaskChange}
        />
        <S.ModalSubInput
          placeholder="소제목"
          value={details}
          onChange={handleDetailsChange}
        />
      </S.ModalTitle>
      <S.ModalBtn onClick={handleSumbit}>확인</S.ModalBtn>
    </S.ModalLayout>
  );
};
