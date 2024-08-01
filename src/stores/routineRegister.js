import { atom } from "recoil";

export const routineStart = atom({
  key: "routineStart",
  default: null,
});

export const routineEnd = atom({
  key: "routineEnd",
  default: null,
});

export const CalendarVisible = atom({
  key: "CalendarVisible",
  default: false,
});

export const CheckVisible = atom({
  key: "CheckVisible",
  default: false,
});
