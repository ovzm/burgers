import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../Screens/Home";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
