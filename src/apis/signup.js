import { redirect } from "react-router-dom";
import { instance } from "./instance";

export const getUserStatus = async () => {
  try {
    return await instance.get("/api/accounts/user");
  } catch (err) {
    throw err;
  }
};

export const postSetInfo = async (nickname) => {
  try {
    const res = await instance.post("/api/accounts/info/", {
      nickname,
    });
    if (res.status == 200 || res.status == 201) {
      return true;
    }
  } catch (err) {
    console.log(err);
    // throw err;
  }
};

export const postAddRoutines = async (preferred_routine_categories) => {
  try {
    const res = await instance.post("/api/accounts/custom-routines/", {
      preferred_routine_categories,
    });
    if (res.status == 200 || res.status == 201) {
      sessionStorage.setItem("signed", "true");
      return true;
    }
  } catch (err) {
    throw err;
  }
};
