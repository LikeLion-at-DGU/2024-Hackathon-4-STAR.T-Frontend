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

export const patchroutineCategory = async (preferred_routine_categories) => {
  console.log("patchroutineCategory 호출됨");
  console.log(
    "전달되는 preferred_routine_categories:",
    preferred_routine_categories
  );
  try {
    const response = await instance.patch("/api/accounts/custom-routines/", {
      preferred_routine_categories,
    });

    console.log("서버 응답:", response);
    if (response.status == 200) {
      console.log("PATCH 요청 성공");
      return true;
    } else {
      console.log("PATCH 요청 실패: 응답 상태 코드:", response.status);
      return false;
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
