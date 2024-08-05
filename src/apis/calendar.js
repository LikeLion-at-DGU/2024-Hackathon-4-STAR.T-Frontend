import { instance } from "./instance";

export const getMonthCalendar = async (month) => {
  try {
    const res = await instance.get(`/api/calendar/check_star/${month}/`);
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
    return res;
  } catch (err) {
    throw err;
  }
};

export const patchPersonal = async (personalID, isCompleted, date) => {
  try {
    const res = await instance.patch(`/api/calendar/daily/${date}/`, {
      id: personalID,
      completed: isCompleted,
    });
    console.log(res);
    return res;
  } catch (err) {
    throw err;
  }
};

export const patchRoutine = async (routineID, isCompleted, date) => {
  try {
    const res = await instance.patch(
      `/api/calendar/daily/${date}/update_routine/`,
      {
        routine_id: routineID,
        completed: isCompleted,
      }
    );
    console.log(res);
    return res;
  } catch (err) {
    throw err;
  }
};
