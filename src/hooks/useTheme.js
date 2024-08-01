import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getThemeContent } from "../apis/Theme";

export const useMoveonTheme = () => {
  const [theme, setTheme] = useState([]);
  const { theme_id } = useParams();
  const fetchThemeData = async () => {
    try {
      const res = await getThemeContent(theme_id);
      console.log("response:", res);
      setTheme(res);
    } catch (error) {
      console.error("error:", error);
    }
  };

  useEffect(() => {
    fetchThemeData();
  }, []);

  return theme;
};
