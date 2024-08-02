import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import Mainpage from "./pages/Mainpage/Mainpage";
import { Calendar } from "./pages/Calendar/Calendar";
import { Login } from "./pages/User/Login";
import { SignUp } from "./pages/User/SignUp";
import ThemePage from "./pages/ThemePage/ThemePage";
import StarPage from "./pages/StarPage/StarPage";
import { RandomDice } from "./pages/RandomDice/RandomDice";
import SearchPage from "./pages/SearchPage/SearchPage";
import MyPage from "./pages/MyPage/MyPage";
import SubCategoryPage from "./pages/SubCategoryPage/SubCategoryPage";
import { Loading } from "./pages/Loading/Loading";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/info",
        element: <Loading />,
      },
      {
        path: "",
        element: <Mainpage />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },

      {
        path: "/theme/:theme_id",
        element: <ThemePage />,
      },
      {
        path: "/star/:id",
        element: <StarPage />,
      },
      {
        path: "/mypage",
        element: <MyPage />,
      },
      {
        path: "/randomDice",
        element: <RandomDice />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/subcategory/:sectionId/:subCategoryId",
        element: <SubCategoryPage />,
      },
    ],
    // errorElement: <NotFound />,
  },
]);

export default router;
