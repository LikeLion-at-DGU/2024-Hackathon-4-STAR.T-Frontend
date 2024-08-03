import { useState, useEffect } from "react";
import { getMyPContent } from "../apis/mypage";

export const useMyInfo = async () => {
  const [myinfo, setMyinfo] = useState(null);

  try {
    const res = await getMyPContent();
    console.log("myinfo:", res);
    setMyinfo(res);
  } catch (err) {
    console.log(err);
  }

  return { myinfo };
};
