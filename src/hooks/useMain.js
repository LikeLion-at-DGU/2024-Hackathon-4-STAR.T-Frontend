// src/hooks/useMain.js
import { useState, useEffect } from "react";
import { getMainContent } from "@/apis/main";
import { isLoading } from "@/stores/loading";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

export const useMainData = () => {
  const setLoading = useSetRecoilState(isLoading);
  const navigate = useNavigate();
  const [mainData, setMainData] = useState(null);

  const fetchMainData = async () => {
    try {
      setLoading(true);
      const res = await getMainContent();
      console.log("response:", res);
      const resData = res.data;
      console.log("resData:", resData);
      setMainData(resData);
    } catch (error) {
      // console.error("error:", error);
      navigate("/error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMainData();
  }, []);

  return { mainData };
};
