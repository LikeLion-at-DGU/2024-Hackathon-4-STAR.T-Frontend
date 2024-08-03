import * as S from "./style";
import NON_CHECK_IMG from "@/assets/images/non-check.svg";
import CHECK_IMG from "@/assets/images/check.svg";
import { useRecoilState } from "recoil";
import { routines, schedules } from "@/stores/todo";
import { useEffect } from "react";
import { getTodayData } from "@/apis/calendar";
// 날짜 받아오기
export const Todo = ({ day }) => {
  const [routineData, setRoutineData] = useRecoilState(routines);
  const [scheduleData, setScheduleData] = useRecoilState(schedules);
  const fetchData = async () => {
    try {
      const res = await getTodayData("2024-08-03");
      console.log(res);
      if (res.routines.length > 0) {
        setRoutineData(res.routines);
      }
      if (res.schedules.length > 0) {
        setScheduleData(res.schedules);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const submitData = () => {
    console.log("test");
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <S.TodoLayout>
      {routineData &&
        routineData.map((routine) => (
          <S.ListFrame key={routine.id}>
            <S.CheckFrame>
              <S.ButtonView onClick={submitData}>
                {routine.completed ? (
                  <S.ImgView src={CHECK_IMG} />
                ) : (
                  <S.ImgView src={NON_CHECK_IMG} />
                )}
              </S.ButtonView>
            </S.CheckFrame>
            <S.TextFrame>
              <S.TitleView>{routine.routine_title}</S.TitleView>
              <S.SubTitleView>{routine.routine_content}</S.SubTitleView>
            </S.TextFrame>
          </S.ListFrame>
        ))}
      {scheduleData &&
        scheduleData.map((schedule) => (
          <S.ListFrame key={schedule.id}>
            <S.CheckFrame>
              <S.ButtonView onClick={submitData}>
                {schedule.completed ? (
                  <S.ImgView src={CHECK_IMG} />
                ) : (
                  <S.ImgView src={NON_CHECK_IMG} />
                )}
              </S.ButtonView>
            </S.CheckFrame>
            <S.TextFrame>
              <S.TitleView>{schedule.title}</S.TitleView>
              <S.SubTitleView>{schedule.description}</S.SubTitleView>
            </S.TextFrame>
          </S.ListFrame>
        ))}
    </S.TodoLayout>
  );
};
// List 수만큼 돌리기
