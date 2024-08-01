import Modal from "../../components/Modal";
import DateRangeCalendar from "../DateRangeCalendar/DateRangeCalendar";
import { CheckUp } from "../CheckUp/CheckUp";

export const ModalManage = ({
  isCalendarVisible,
  isCheckVisible,
  closeAll,
  handleCalendarConfirm,
  openCheck,
  dateRange,
  term,
}) => (
  <>
    {isCalendarVisible && (
      <Modal onClose={closeAll}>
        <DateRangeCalendar
          onConfirm={(startDate, endDate) => {
            handleCalendarConfirm(startDate, endDate);
            openCheck();
          }}
        />
      </Modal>
    )}
    {isCheckVisible && (
      <Modal onClose={closeAll}>
        <CheckUp dateRange={dateRange} term={term} onClose={closeAll} />
      </Modal>
    )}
  </>
);
