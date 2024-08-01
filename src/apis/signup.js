import { redirect } from "react-router-dom";
import { instance } from "./instance";

export const getUserStatus = async () => {
  try {
    return await instance.get("/api/accounts/user");
  } catch (err) {
    throw err;
  }
};

export const postAddRoutines = async (preferred_routine_categories) => {
  try {
    const res = await instance.post("/api/accounts/custom-routines/", {
      preferred_routine_categories,
    });
    console.log(res);
    return redirect("/");
  } catch (err) {
    throw err;
  }
};
