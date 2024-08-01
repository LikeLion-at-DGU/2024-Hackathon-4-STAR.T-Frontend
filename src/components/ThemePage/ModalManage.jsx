
import DateRangeCalendar from "../DateRangeCalendar/DateRangeCalendar";
import { useState } from "react";
import { CheckUp } from "../CheckUp/CheckUp";
import Modal from "../Modal/Modal";

export const ModalManage = ({
  isCalendarVisible,
  isCheckVisible,
  closeAll,
  handleCalendarConfirm: handleCalendarConfirmProp,
  openCheck,
}) => {
  const [routineData, setRoutineData] = useState([]);

  const handleCalendarConfirm = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const differenceInTime = end.getTime() - start.getTime();
    const term = differenceInTime / (1000 * 3600 * 24) + 1;

    setRoutineData({
      start_date: startDate,
      end_date: endDate,
      duration_days: term,
    });

    openCheck();
  };

  return (
    <>
      {isCalendarVisible && (
        <Modal onClose={closeAll}>
          <DateRangeCalendar
            onConfirm={(startDate, endDate) => {
              handleCalendarConfirm(startDate, endDate);
              handleCalendarConfirmProp(startDate, endDate);
            }}
          />
        </Modal>
      )}
      {isCheckVisible && (
        <Modal onClose={closeAll}>
          <CheckUp onClose={closeAll} routineData={routineData} />
        </Modal>
      )}
    </>
  );
};

