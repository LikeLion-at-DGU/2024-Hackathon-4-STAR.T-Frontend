import { useState } from "react";

export const useModal = () => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [isCheckVisible, setIsCheckVisible] = useState(false);

  const OpenCalendar = () => setIsCalendarVisible(true);
  const onClose = () => {
    setIsCalendarVisible(false);
    setIsCheckVisible(false);
  };
  const OpenCheck = () => setIsCheckVisible(true);

  return {
    isCalendarVisible,
    isCheckVisible,
    OpenCalendar,
    onClose,
    OpenCheck,
  };
};
