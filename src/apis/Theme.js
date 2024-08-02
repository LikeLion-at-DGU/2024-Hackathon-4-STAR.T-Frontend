import { instance } from "./instance";

export const getThemeContent = async (theme_id) => {
  try {
    const res = await instance.get(`/api/theme/${theme_id}`);
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
