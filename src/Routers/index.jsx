import { createBrowserRouter } from "react-router-dom";

import Error from "../Components/404";
import Home from "../App/Home";
import ClassRoom from "../App/Class";

const paths = [
  {
    index: true,
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/class/:id",
    element: <ClassRoom />,
    errorElement: <Error />,
  },
];

const Router = createBrowserRouter(paths);

export default Router;
