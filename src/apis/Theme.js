import { instance } from "./instance";

export const ThemeContent = async (theme_id) => {
  return await instance.get(`/api/theme/${theme_id}`);
};
