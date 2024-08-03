import React from "react";
import * as S from "./style";
import { Item } from "./Item";
import { useDailyRoutine } from "@/hooks/useDailyRoutine";

export const Todo = ({ day, weekPosition }) => {
  const { routineData, scheduleData } = useDailyRoutine(day);

  return (
    <S.TodoLayout style={{ top: `${weekPosition}px` }}>
      {routineData.map((routine) => (
        <Item key={routine.id} item={routine} isRoutine={true} />
      ))}
      {scheduleData.map((schedule) => (
        <Item key={schedule.id} item={schedule} isRoutine={false} />
      ))}
    </S.TodoLayout>
  );
};
