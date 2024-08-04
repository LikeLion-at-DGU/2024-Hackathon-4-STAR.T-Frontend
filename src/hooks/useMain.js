import { useState, useEffect } from "react";
import { getMainContent } from "@/apis/main";

export const useMainData = () => {
  const [mainData, setMainData] = useState(null);

  const fetchMainData = async () => {
    try {
      const res = await getMainContent();
      console.log("response:", res);
      const resData = res.data;
      console.log("resData:", resData);
      setMainData(resData);
    } catch (error) {
      console.error("error:", error);
    }
  };

  useEffect(() => {
    fetchMainData();
  }, []);

  return { mainData }; //객체로 담아서 전달해주기
};