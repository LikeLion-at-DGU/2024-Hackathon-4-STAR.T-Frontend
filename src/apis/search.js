import { instance } from "./instance";

export const getSearchContent = async (data) => {
  try {
    const res = await instance.get(`/api/search?data=${data}`);
    console.log("getSearchContent에서 가져온 데이터:", res); //여기가 콘솔에 안뜸...
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
