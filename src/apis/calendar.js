import { instance } from "./instance";

export const getMonthCalendar = async (month) => {
  try {
    const res = await instance.get(`/api/calendar/monthly/${month}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const getTodayData = async (day) => {
  try {
    const res = await instance.get(`/api/calendar/daily/${day}/`);
    return res.data;
  } catch (err) {
    throw err;
  }
};
