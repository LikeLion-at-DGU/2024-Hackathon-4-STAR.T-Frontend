import { useState } from "react";
export const useDateRange = () => {
  const [dateRange, setDateRange] = useState("");
  const [term, setTerm] = useState(0);

  const handleCalendarConfirm = (startDate, endDate) => {
    const formattedStartDate = startDate.toLocaleDateString();
    const formattedEndDate = endDate.toLocaleDateString();
    setDateRange(`${formattedStartDate} ~ ${formattedEndDate}`);
    const differenceInTime = endDate.getTime() - startDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24) + 1;
    setTerm(differenceInDays);
  };

  return {
    term,
    dateRange,
    handleCalendarConfirm,
  };
};
