import { instance } from "./instance";

export const getThemeContent = async (theme_id) => {
  try {
    const res = await instance.get(`/api/theme/${theme_id}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const postRoutineRegister = async (start_date, end_date) => {
  try {
    const res = await instance.post(`/api/add_routine/${id}`, {
      start_date: start_date,
      end_date: end_date,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
