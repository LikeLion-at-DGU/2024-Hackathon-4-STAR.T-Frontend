import { useState, useEffect } from "react";
import { getSearchContent } from "@/apis/search";
import { useParams } from "react-router-dom";

export const useSearchResult = () => {
  console.log("useSearchResult훅 불러오기 성공");
  const [search, setSearch] = useState(null);
  const { data } = useParams();
  console.log("data 값", data);
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
    if (data) {
      fetchSearchData();
    }
  }, [data]);

  return { search }; //객체로 담아서 전달해주기
};
