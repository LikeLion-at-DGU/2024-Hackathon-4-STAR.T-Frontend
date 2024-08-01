import { useEffect, useState } from "react";
import { getUserStatus } from "../apis/signup";
import { useNavigate } from "react-router-dom";

export const useCheckUser = () => {
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const res = await getUserStatus();
      if (res && res.data[0].is_new_user) {
        setStatus(true);
      } else {
        sessionStorage.setItem("signed", "true");
        navigate("/");
      }
    } catch (error) {
      console.error("Error fetching user status:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return status;
};
