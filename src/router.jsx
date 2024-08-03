import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import { loader } from "./utils/loader";
import { Calendar } from "./pages/Calendar/Calendar";
import { Login } from "./pages/User/Login";
import { SignUp } from "./pages/User/SignUp";
import { Loading } from "./pages/Loading/Loading";
import { RandomDice } from "./pages/RandomDice/RandomDice";
import Mainpage from "./pages/Mainpage/Mainpage";
import ThemePage from "./pages/ThemePage/ThemePage";
import StarPage from "./pages/StarPage/StarPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import MyPage from "./pages/MyPage/MyPage";
import SubCategoryPage from "./pages/SubCategoryPage/SubCategoryPage";
import SharePage from "@/pages/Share/Share";
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
        loader: loader,
      },
      {
        path: "/calendar",
        element: <Calendar />,
        loader: loader,
      },

      {
        path: "/theme/:theme_id",
        element: <ThemePage />,
        loader: loader,
      },
      {
        path: "/star/:id",
        element: <StarPage />,
        loader: loader,
      },
      {
        path: "/mypage",
        element: <MyPage />,
        loader: loader,
      },
      {
        path: "/randomDice",
        element: <RandomDice />,
        loader: loader,
      },
      {
        path: "/search",
        element: <SearchPage />,
        loader: loader,
      },
      {
        path: "/subcategory/:sectionId/:subCategoryId",
        element: <SubCategoryPage />,
        loader: loader,
      },
      {
        path: "/share",
        element: <SharePage />,
      },
    ],
    // errorElement: <NotFound />,
  },
]);

export default router;
