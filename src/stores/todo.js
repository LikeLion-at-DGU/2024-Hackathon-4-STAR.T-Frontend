import { atom } from "recoil";

export const routines = atom({
  key: "routines",
  default: [],
});

export const schedules = atom({
  key: "schedules",
  default: [],
});
