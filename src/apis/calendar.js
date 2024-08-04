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

export const postPersonal = async (title, description, date) => {
  console.log(date);
  try {
    const res = await instance.post(`/api/calendar/daily/${date}/`, {
      title,
      description,
    });
    console.log(res);
  } catch (err) {
    throw err;
  }
};
