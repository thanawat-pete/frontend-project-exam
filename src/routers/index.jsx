import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/mainLayout";
import Home from "../pages/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
]);

export default router;