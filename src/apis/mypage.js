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

export const patchroutineCategory = async (prefer_routine) => {
  try {
    const response = await instance.patch("/api/accounts/custom-routines/", {
      prefer_routine,
    });
    if (response.status == 200) {
      return true;
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getRoutineCategory = async () => {
  try {
    const res = await instance.get(`/api/accounts/custom-routines`);
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
