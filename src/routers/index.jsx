import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/mainLayout";
import Home from "../pages/home";
import Register from "../pages/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
