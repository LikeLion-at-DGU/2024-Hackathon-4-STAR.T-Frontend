import { useState, useEffect } from "react";
import { getSearchContent } from "@/apis/search";
import { useParams } from "react-router-dom";

export const useSearchResult = () => {
  const [search, setSearch] = useState(null);
  const { data } = useParams();
  const fetchSearchData = async () => {
    try {
      const res = await getSearchContent(data);
      console.log("response:", res);
      setSearch(res);
    } catch (error) {
      console.error("error:", error);
    }
  };

  useEffect(() => {
    fetchSearchData();
  }, []);

  return { search }; //객체로 담아서 전달해주기
};
