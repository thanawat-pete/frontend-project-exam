import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/mainLayout";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import DocsEditor from "../pages/docsEditor";
import LearnPage from "../pages/learnPage";
import AboutPage from "../pages/aboutPage";

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
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/docs",
        element: <DocsEditor />,
      },
      {
        path: "/learn",
        element: <LearnPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      }
    ],
  },
]);

export default router;
