import { instance } from "./instance";

export const getMainContent = async () => {
  try {
    const res = await instance.get("/api/main");
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
