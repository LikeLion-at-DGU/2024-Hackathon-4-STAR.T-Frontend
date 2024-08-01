import { instance } from "./instance";

export const getUserStatus = async () => {
  try {
    return await instance.get("/api/accounts/user");
  } catch (err) {
    console.log(err);
  }
};
