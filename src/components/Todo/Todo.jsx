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
  const { routineData, scheduleData, fetchData } = useDailyRoutine(today); // fetchData 추가
  const [modalStatus, setModalStatus] = useState(false);

  const onClose = () => {
    setModalStatus(false);
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
      {routineData.length < 1 && scheduleData.length < 1 && (
        <S.AddTextFrame>
          <S.TitleView>새 루틴을 등록해보세요!</S.TitleView>
        </S.AddTextFrame>
      )}
      <S.PlusBtnFrame>
        <S.ImgView src={PLUS_BTN} onClick={() => setModalStatus(true)} />
      </S.PlusBtnFrame>
      {modalStatus && (
        <Modal onClose={onClose}>
          <AddModal day={today} onClose={onClose} refreshData={fetchData} />
        </Modal>
      )}
    </S.TodoLayout>
  );
};
