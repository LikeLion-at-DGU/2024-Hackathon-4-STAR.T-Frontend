import { instance } from "./instance";

export const getMyPContent = async () => {
  try {
    const res = await instance.get(`/api/accounts/mypage/`);
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
