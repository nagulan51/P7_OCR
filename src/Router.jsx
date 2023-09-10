import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Demo from "./pages/demo";
import About from "./pages/About";
import Logement, { loader as logementLoader } from "./pages/logement";
import NotFound from "./pages/Not_found";

export const routers = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/demo",
        element: <Demo />,
      },
      {
        path: "/logement/:id",
        element: <Logement />,
        loader: logementLoader,
      },
    ],
  },
]);
const Router = () => <RouterProvider router={routers} />;
export default Router;
