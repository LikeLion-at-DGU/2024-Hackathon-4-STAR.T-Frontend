import { useRecoilState } from "recoil";
import { routines, schedules } from "@/stores/todo";
import { useEffect } from "react";
import { getTodayData } from "@/apis/calendar";

export const useDailyRoutine = (date) => {
  const [routineData, setRoutineData] = useRecoilState(routines);
  const [scheduleData, setScheduleData] = useRecoilState(schedules);

  const fetchData = async () => {
    try {
      const response = await getTodayData(date);
      console.log(response);
      if (response.routines.length > 0) {
        setRoutineData(response.routines);
      } else {
        setRoutineData([]);
      }
      if (response.schedules.length > 0) {
        setScheduleData(response.schedules);
      } else {
        setScheduleData([]);
      }
    } catch (error) {
      console.error("데이터 가져오기 오류:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [date]);

  return { routineData, scheduleData, fetchData };
};
