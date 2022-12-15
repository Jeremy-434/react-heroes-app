
// NO usado en este proyecto

import { createBrowserRouter, Navigate } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { DcPage } from "../heroes/pages/DcPage";
import { MarvelPage } from "../heroes/pages/MarvelPage";

export const PathRoutes = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
    children: [
      {
        path: "/marvel",
        element: <MarvelPage/>,
      },
      // {
      //   path: "dc",
      //   element: <DcPage/>,
      // },
      // {
      //   path: "login",
      //   element: <LoginPage/>,
      // },
    ]
  },
  

]);
