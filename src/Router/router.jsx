import React from "react";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "../layouts/Rootlayout";
import Home from './../pages/Home/Home';
import Coverage from './../pages/Coverage/Coverage';


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
        {
            index:true,
            Component: Home
        },
       {
  path: "coverage",
  element: <Coverage />,   // React Router v6+ uses `element`, not `Component`
  loader: () =>
    fetch("/Warehouse.json")
      .then(res => res.json())
      .catch(() => []), // fallback to empty array if fetch fails
}
    ]
  },
]);


export default router;

