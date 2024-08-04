import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import * as S from "./style";
import { Item } from "./Item";
import { useDailyRoutine } from "@/hooks/useDailyRoutine";
import { AddModal } from "./AddModal";
import PLUS_BTN from "@/assets/images/plusBtn.svg";
import Modal from "@/components/Modal/Modal";
import { day } from "@/stores/calendar";

export const Todo = ({ top, openTodo }) => {
  const today = useRecoilValue(day);
  const { routineData, scheduleData } = useDailyRoutine(today);
  const [height, setHeight] = useState(window.screen.availHeight);
  const [modalStatus, setModalStatus] = useState(false);
  const startRef = React.useRef(null);
  const onClose = () => {
    setModalStatus(false);
  };
  React.useEffect(() => {
    setHeight(window.screen.availHeight);
    if (top) {
      startRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [top, height]);
  return (
    <S.TodoLayout top={top} ref={startRef} height={height}>
      <S.TitleFrame>
        <S.TitleView
          style={{
            cursor: "pointer",
            color: "#78A1B5",
          }}
          onClick={() => openTodo(false)}
        >
          close
        </S.TitleView>
      </S.TitleFrame>
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
