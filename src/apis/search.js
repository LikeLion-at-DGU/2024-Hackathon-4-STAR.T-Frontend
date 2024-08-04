import { instance } from "./instance";

export const getSearchContent = async (data) => {
  try {
    const encodedData = encodeURIComponent(data);
    const res = await instance.get(`/api/search?data=${encodedData}`);
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
