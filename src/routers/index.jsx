import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/mainLayout";
import Home from "../pages/home";
import Login from "../pages/login";

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
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
