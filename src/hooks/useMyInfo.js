import { useState, useEffect } from "react";
import { getMyPContent } from "../apis/mypage";

export const useMyInfo = () => {
  const [myinfo, setMyinfo] = useState(null);
  const fetchMyInfo = async () => {
    try {
      const res = await getMyPContent();
      console.log("myinfo:", res);
      setMyinfo(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMyInfo();
  }, []);

  return { myinfo };
};
