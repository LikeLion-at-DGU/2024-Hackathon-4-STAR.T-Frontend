import { useState, useEffect } from "react";
import { ThemeContent } from "../apis/Theme";
import { useParams } from "react-router-dom";

export const useMoveonTheme = () => {
  const [theme, setTheme] = useState(null);
  const { theme_id } = useParams();

  useEffect(() => {
    const fetchThemeData = async () => {
      try {
        const res = await ThemeContent(theme_id);
        console.log("response:", res.data);
        setTheme(res.data || {});
      } catch (error) {
        console.error("error:", error);
      }
    };

    fetchThemeData();
  }, [theme_id]);

  return theme;
};
