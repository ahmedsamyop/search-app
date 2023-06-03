import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Pages/Home";
import AllSearch from "../Pages/AllSearch";
import Images from "../Pages/Images";
import Erorr from "../Pages/Erorr";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Erorr />,
  },
  {
    path: "/search",
    element: <Layout />,
    errorElement: <Erorr />,
    children: [
      {
        index: true,
        element: <AllSearch />,
      },
      {
        path: "images",
        element: <Images />,
      },
    ],
  },
]);

export default router;
