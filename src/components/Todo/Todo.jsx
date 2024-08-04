import { useState } from "react";
import { useRecoilValue } from "recoil";
import * as S from "./style";
import { Item } from "./Item";
import { useDailyRoutine } from "@/hooks/useDailyRoutine";
import { AddModal } from "./AddModal";
import PLUS_BTN from "@/assets/images/plusBtn.svg";
import Modal from "@/components/Modal/Modal";
import { day } from "@/stores/calendar";

export const Todo = () => {
  const today = useRecoilValue(day);
  const { routineData, scheduleData } = useDailyRoutine(today);
  const [modalStatus, setModalStatus] = useState(false);

  const onClose = () => {
    setModalStatus(false);
  };
  const handleModalClose = (event) => {
    openTodo(false);
    event.stopPropagation(); // 여기서 이벤트 전파를 중지
  };
  return (
    <S.TodoLayout>
      {routineData.map((routine) => (
        <Item key={routine.id} item={routine} isRoutine={true} date={today} />
      ))}
      {scheduleData.map((schedule) => (
        <Item
          key={schedule.id}
          item={schedule}
          isRoutine={false}
          date={today}
        />
      ))}

      <S.PlusBtnFrame>
        <S.ImgView src={PLUS_BTN} onClick={() => setModalStatus(true)} />
      </S.PlusBtnFrame>
      {modalStatus && (
        <Modal onClose={onClose}>
          <AddModal day={today} onClose={onClose} />
        </Modal>
      )}
    </S.TodoLayout>
  );
};
