import { atom } from "recoil";

export const categoryState = atom({
  key: "categoryState",
  default: [false, false, false, false, false, false],
});
