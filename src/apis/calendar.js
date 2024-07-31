import { instance } from "./instance";

export const getMonthCalenar = async () => {
  const month = "2024-08";
  return await instance.get(`/api/calendar/monthly/${month}`);
};
