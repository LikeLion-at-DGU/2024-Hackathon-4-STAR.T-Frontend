import * as S from "./styled";
import { Header } from "../../components/common/Header/Header";
import { CustomCalendar } from "../../components/CustomCalendar/CustomCalendar";
import { Todo } from "@/components/Todo/Todo";
import { useRecoilState } from "recoil";
import { todoStatus } from "@/stores/calendar";
import { useState, useEffect, useRef } from "react";

export const Calendar = () => {
  const startRef = useRef(null);
  const [status, setStatus] = useRecoilState(todoStatus);
  const [weekPosition, setWeekPosition] = useState(0); // 주의 위치를 저장하는 상태
  const [bottomMargin, setBottomMargin] = useState(0);
  useEffect(() => {
    if (weekPosition) {
      // setBottomMargin(startRef.current?.getBoundingClientRect().bottom);
      startRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      setBottomMargin(startRef.current?.offsetHeight || 0);
    }
  }, [top, weekPosition]);

  const handleModalClose = (event) => {
    setStatus(false);
    event.stopPropagation(); // 여기서 이벤트 전파를 중지
  };

  return (
    <S.Layout
      $isModalOpen={status}
      style={{
        marginBottom: bottomMargin,
      }}
    >
      <Header $margin={"1rem 0 0 0"} $padding={"1rem 1rem 0 1rem"}>
        캘린더
      </Header>
      <CustomCalendar setWeekPosition={setWeekPosition} />
      {status && (
        <S.TodoWrapper top={weekPosition} ref={startRef}>
          <S.TitleFrame>
            <S.ButtonView
              style={{
                cursor: "pointer",
                color: "#78A1B5",
              }}
              onClick={handleModalClose}
            >
              close
            </S.ButtonView>
          </S.TitleFrame>
          <Todo />
        </S.TodoWrapper>
      )}
    </S.Layout>
  );
};
