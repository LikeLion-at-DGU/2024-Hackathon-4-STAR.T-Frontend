import React, { useState } from "react";
import * as S from "./style";
import { Item } from "./Item";
import { useDailyRoutine } from "@/hooks/useDailyRoutine";
import PLUS_BTN from "@/assets/images/plusBtn.svg";

export const Todo = ({ top, day }) => {
  const { routineData, scheduleData } = useDailyRoutine(day);
  const [height, setHeight] = useState(window.screen.availHeight);
  const startRef = React.useRef(null);
  React.useEffect(() => {
    setHeight(window.screen.availHeight);
    if (top) {
      startRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [top, height]);
  return (
    <S.TodoLayout top={top} ref={startRef} height={height}>
      <S.TitleFrame>
        <S.TitleView>{day}</S.TitleView>
      </S.TitleFrame>
      {routineData.map((routine) => (
        <Item key={routine.id} item={routine} isRoutine={true} />
      ))}
      {scheduleData.map((schedule) => (
        <Item key={schedule.id} item={schedule} isRoutine={false} />
      ))}

      <S.PlusBtnFrame>
        <S.ImgView src={PLUS_BTN} onClick={() => console.log(height)} />
      </S.PlusBtnFrame>
    </S.TodoLayout>
  );
};
