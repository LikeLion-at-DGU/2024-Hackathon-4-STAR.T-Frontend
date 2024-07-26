import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import Mainpage from "./pages/Mainpage/Mainpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Mainpage />,
      },
    ],
    // errorElement: <NotFound />,
  },
]);

export default router;
