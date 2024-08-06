import { useState, useEffect } from "react";
import { getMyPContent } from "../apis/mypage";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { isLoading } from "@/stores/loading";

export const useMyInfo = () => {
  const setLoading = useSetRecoilState(isLoading);
  const [myinfo, setMyinfo] = useState(null);
  const navigate = useNavigate();

  const fetchMyInfo = async () => {
    setLoading(true);
    try {
      const res = await getMyPContent();
      console.log("myinfo:", res);
      setMyinfo(res);
    } catch (err) {
      console.log(err);
      // navigate("/error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyInfo();
  }, []);

  return { myinfo };
};
