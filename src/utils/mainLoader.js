import { redirect } from "react-router-dom";
import Cookies from "js-cookie";
const accessToken = Cookies.get("access_token");

export const mainLoader = () => {
  if (!accessToken) {
    return redirect("/login");
  }
  return null;
};
