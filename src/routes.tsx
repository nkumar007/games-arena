import { createBrowserRouter } from "react-router-dom";
import GameDetails from "./pages/GameDetails";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "games/:id",
        element: <GameDetails />,
      },
    ],
  },
]);

export default router;
