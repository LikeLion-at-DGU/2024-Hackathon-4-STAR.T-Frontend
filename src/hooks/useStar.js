import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getStarContent } from "../apis/starP";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { isLoading } from "@/stores/loading";

export const useMoveonStarP = () => {
  const setLoading = useSetRecoilState(isLoading);
  const [starP, setstarP] = useState(null);
  const { id } = useParams();
  const fetchStarData = async () => {
    setLoading(true);
    try {
      const res = await getStarContent(id);
      console.log("response:", res);
      setstarP(res);
    } catch (error) {
      console.error("error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStarData();
  }, []);

  return { starP }; //객체로 담아서 전달해주기
};
