import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/about",
      element: <App />,
    },
    {
      path: "/pricing",
      element: <App />,
    },
    {
      path: "/process",
      element: <App />,
    },
    {
      path: "/blog",
      element: <App />,
    },
  ]);

  return router;
};

export default Router;
