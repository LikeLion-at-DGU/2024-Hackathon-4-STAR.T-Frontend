import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { postRoutineDate } from "../../apis/Theme";

export const CheckUp = ({ onClose, routineData }) => {
  const [routine, setRoutine] = useState(null);

  useEffect(() => {
    if (routineData) {
      const registerRoutine = async () => {
        try {
          const { start_date, end_date, duration_days } = routineData;
          const res = await postRoutineDate(
            start_date,
            end_date,
            duration_days
          );
          setRoutine(res.data); // Update routine state with response data
        } catch (error) {
          console.error("Error posting routine date:", error);
        }
      };

      registerRoutine(); // Call the async function
    }
  }, [routineData]);
  return (
    <S.CheckContainer>
      {routine ? (
        <>
          <div>
            {routine.start_date}~{routine.end_date}
          </div>
          <div>{routine.duration_days}일 간 루틴 설정이 완료되었습니다.</div>
        </>
      ) : (
        <div>Loading...</div>
      )}

      <S.ConfirmButton onClick={onClose}>확인</S.ConfirmButton>
    </S.CheckContainer>
  );
};
