import * as S from "./style";
import NON_CHECK_IMG from "@/assets/images/non-check.svg";
import { useRecoilState } from "recoil";
import { routines, schedules } from "@/stores/todo";
import { useEffect } from "react";
import { getTodayData } from "@/apis/calendar";
// 날짜 받아오기
export const Todo = ({ day }) => {
  const [routineData, setRoutineData] = useRecoilState(routines);
  const [scheduleData, setScheduleData] = useRecoilState(schedules);
  const fetchData = async () => {
    const res = await getTodayData("2024-08-03");
    console.log(res);
  };
  const submitData = async () => {};
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <S.TodoLayout>
      <S.ListFrame>
        <S.CheckFrame>
          <S.ButtonView onClick={submitData}>
            <S.ImgView src={NON_CHECK_IMG} />
          </S.ButtonView>
        </S.CheckFrame>
        <S.TextFrame>
          <S.TitleView>타이틀변수</S.TitleView>
          <S.SubTitleView>서브타이틀변수</S.SubTitleView>
        </S.TextFrame>
      </S.ListFrame>
    </S.TodoLayout>
  );
};
// List 수만큼 돌리기
