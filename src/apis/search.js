import { instance } from "./instance";

export const getSearchContent = async (data) => {
  try {
    const res = await instance.get(`/api/search?data=${data}`);
    console.log("getSearchContent에서 가져온 데이터:", res);
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
