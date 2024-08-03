import { atom } from "recoil";

export const todoStatus = atom({
  key: "todoStatus",
  default: false,
});

export const day = atom({
  key: "day",
  default: "",
});
