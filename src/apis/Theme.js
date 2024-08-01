import { instance } from "./instance";

export const ThemeContent = async (theme_id) => {
  return await instance.get(`/api/theme/${theme_id}`);
};

export const postRoutineDate = async (startDate, endDate, term) => {
  try {
    await instance.post(`/api/add_routine/${id}`, {
      start_date: startDate,
      end_date: endDate,
      duration_days: term,
    });
  } catch (error) {
    console.log(error);
  }
};
