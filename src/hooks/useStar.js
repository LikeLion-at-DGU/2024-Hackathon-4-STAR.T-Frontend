import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getStarContent } from "../apis/starP";
import { useSetRecoilState } from "recoil";
import { isLoading } from "@/stores/loading";

export const useMoveonStarP = () => {
  const setLoading = useSetRecoilState(isLoading);
  const [starP, setStarP] = useState(null);
  const { id } = useParams();

  const fetchStarData = async () => {
    setLoading(true);
    try {
      const res = await getStarContent(id);
      setStarP(res);
    } catch (error) {
      console.error("Error fetching star data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchStarData();
    }
  }, [id]);

  return { starP }; // 객체로 담아서 전달해주기
};
