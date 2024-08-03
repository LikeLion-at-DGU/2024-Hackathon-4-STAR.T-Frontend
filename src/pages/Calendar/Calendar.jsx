import * as S from "./styled";
import { Header } from "../../components/common/Header/Header";
import { CustomCalendar } from "../../components/CustomCalendar/CustomCalendar";
import { Todo } from "@/components/Todo/Todo";
import { useRecoilValue } from "recoil";
import { todoStatus } from "@/stores/calendar";
import { useState } from "react";

export const Calendar = () => {
  const status = useRecoilValue(todoStatus);
  const [day, setDay] = useState("");
  const [weekPosition, setWeekPosition] = useState(0); // 주의 위치를 저장하는 상태

  return (
    <S.Layout>
      <Header $margin={"1rem 0 0 0"} $padding={"1rem 1rem 0 1rem"}>
        캘린더
      </Header>
      <CustomCalendar setWeekPosition={setWeekPosition} setDay={setDay} />
      {status && <Todo day={day} top={weekPosition} />}
    </S.Layout>
  );
};
