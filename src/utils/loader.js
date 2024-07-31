import { redirect } from "react-router-dom";
import Cookies from "js-cookie";
const accessToken = Cookies.get("access_token");

export const loader = () => {
  console.log(Cookies.get());
  console.log(accessToken);

  if (!accessToken) {
    // return redirect("/login");
    return null;
  }
  return null;
};
