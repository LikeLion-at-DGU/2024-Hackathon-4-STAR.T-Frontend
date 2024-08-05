import { atom } from "recoil";

export const todoStatus = atom({
  key: "todoStatus",
  default: false,
});

export const day = atom({
  key: "day",
  default: "",
});

export const pMonth = atom({
  key: "pMonth",
  default: "",
});

export const starMonth = atom({
  key: starMonth,
  default: new Set(),
});
