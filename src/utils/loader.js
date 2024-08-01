import { redirect } from "react-router-dom";

export const loader = () => {
  console.log(Cookies.get());
  console.log(accessToken);

  if (!accessToken) {
    // return redirect("/login");
    return null;
  }
  return null;
};
