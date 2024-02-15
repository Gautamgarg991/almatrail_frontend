import { createBrowserRouter } from "react-router-dom";
import * as pages from "../pages/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <pages.Layout />,
    children: [
      {
        path: "/",
        element: <pages.Home />,
      },
      {
        path: "*",
        element: <pages.NotFound />,
      },
    ],
  },
  {
    path: "*",
    element: <pages.NotFound />,
  },
]);