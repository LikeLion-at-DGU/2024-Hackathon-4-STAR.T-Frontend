import { instance } from "./instance";

export const getStarContent = async (id) => {
  try {
    const res = await instance.get(`/api/celeb/${id}/`);
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
