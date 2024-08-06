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
    try {
      setLoading(true);
      const res = await getMyPContent();
      console.log("myinfo:", res);
      setMyinfo(res);
    } catch (err) {
      console.log(err);
      navigate("/error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/error");
    }, 10000); // 10초 후 타임아웃 처리

    fetchMyInfo().then(() => clearTimeout(timer)); // 요청 완료 시 타이머 취소

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 취소
  }, []);

  return { myinfo };
};
