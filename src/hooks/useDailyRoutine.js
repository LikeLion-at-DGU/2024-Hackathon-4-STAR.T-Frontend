import { useRecoilState } from "recoil";
import { routines, schedules } from "@/stores/todo";
import { useEffect } from "react";
import { getTodayData } from "@/apis/calendar";

export const useDailyRoutine = (date) => {
  const [routineData, setRoutineData] = useRecoilState(routines);
  const [scheduleData, setScheduleData] = useRecoilState(schedules);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTodayData(date);
        if (response.routines.length > 0) {
          setRoutineData(response.routines);
        }
        if (response.schedules.length > 0) {
          setScheduleData(response.schedules);
        }
      } catch (error) {
        console.error("데이터 가져오기 오류:", error);
      }
    };
    fetchData();
  }, [date, setRoutineData, setScheduleData]);

  return { routineData, scheduleData };
};
