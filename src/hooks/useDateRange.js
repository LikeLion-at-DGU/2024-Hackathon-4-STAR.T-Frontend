import { useState } from "react";
export const useDateRange = () => {
  const [term, setTerm] = useState(0);

  const handleCalendarConfirm = (startDate, endDate) => {
    const differenceInTime = endDate.getTime() - startDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24) + 1;
    setTerm(differenceInDays);
  };

  return {
    term,
    handleCalendarConfirm,
  };
};
