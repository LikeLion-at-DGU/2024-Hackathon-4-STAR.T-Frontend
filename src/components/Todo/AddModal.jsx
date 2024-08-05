import * as S from "./style";
import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { postPersonal } from "@/apis/calendar";
import { starMonth } from "@/stores/calendar";
import { modalStatus } from "@/stores/calendar";

export const AddModal = ({ day, onClose, refreshData }) => {
  // refreshData를 추가
  const [task, setTask] = useState("");
  const [details, setDetails] = useState("");
  const [star, setStar] = useRecoilState(starMonth);
  const setShowModal = useSetRecoilState(modalStatus);

  const handleShowModal = () => {
    setShowModal(true);
    setTimeout(() => setShowModal(false), 2000);
  };

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleDetailsChange = (e) => {
    setDetails(e.target.value);
  };

  const handleSumbit = async () => {
    const data = await postPersonal(task, details, day);
    onClose();
    handleShowModal();
    const res = await refreshData(); // 데이터 갱신을 위해 호출
    if (res.today_completed) {
      star.add(day);
      setStar(star);
    } else {
      star.delete(day);
      setStar(star);
    }
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
