import { useState, useEffect } from "react";
import { ThemeContent } from "../apis/Theme";
import { useParams } from "react-router-dom";

export const useMoveonTheme = () => {
  const [theme, setTheme] = useState(null);
  const { theme_id } = useParams();

  useEffect(() => {
    const fetchThemeData = async () => {
      try {
        const res = await ThemeContent();
        console.log("response:", res);
        setTheme(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchThemeData();
  }, [theme_id]);

  return theme;
};
