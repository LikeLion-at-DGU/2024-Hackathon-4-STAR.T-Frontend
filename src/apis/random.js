import { instance } from "./instance";

export const getRandomRoutine = async () => {
  try {
    const res = await instance.get("/api/routine/recommend");
    return res.data;
  } catch (err) {
    throw err;
  }
};
