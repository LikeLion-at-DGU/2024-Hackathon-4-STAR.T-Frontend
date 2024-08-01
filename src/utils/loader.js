import { redirect } from "react-router-dom";

export const loader = () => {
  if (sessionStorage.getItem("signed")) {
    return null;
  }
  return redirect("/login");
};
