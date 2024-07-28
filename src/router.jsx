import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import Mainpage from "./pages/Mainpage/Mainpage";
import { Calendar } from "./pages/Calendar/Calendar";
import ThemePage from "./pages/ThemePage/ThemePage";
import StarPage from "./pages/StarPage/StarPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Mainpage />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },
      {
        path: "/theme/:imageIndex",
        element: <ThemePage />,
      },
      {
        path: "/star/:id",
        element: <StarPage />,
      },
    ],
    // errorElement: <NotFound />,
  },
]);

export default router;
