import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getStarContent } from "../apis/starP";

export const useMoveonStarP = () => {
  const [starP, setstarP] = useState(null);
  const { id } = useParams();
  const fetchStarData = async () => {
    try {
      const res = await getStarContent(id);
      console.log("response:", res);
      setstarP(res);
    } catch (error) {
      console.error("error:", error);
    }
  };

  useEffect(() => {
    fetchStarData();
  }, []);

  return { starP }; //객체로 담아서 전달해주기
};
