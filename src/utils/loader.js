<<<<<<< HEAD
export const loader = () => {
  if (true) {
    // return redirect("/login");
    return null;
  }
=======
import { redirect } from "react-router-dom";

export const loader = () => {
  if (sessionStorage.getItem("signed")) {
    return null;
  }
  return redirect("/login");
>>>>>>> 04817d95703f91847fc7e3bcc5a68b969228d5a0
};
