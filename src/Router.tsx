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
// function App() {
//   return
//   // return (
//   //   <BrowserRouter>
//   //     <Route>
//   //       <Route path="/" element={<Home />} />
//   //       <Route path="/about" element={<About />} />
//   //       <Route
//   //         path="/demo"
//   //         element={<Demo />}
//   //       />
//   //       <Route
//   //         path="/logement/:id"
//   //         element={<logement />}
//   //         loader={async () => {
//   //           console.log("loader logement");
//   //           return null

//   //         }}
//   //       />
//   //       {/* <Route
//   //         path="/card"
//   //         element={
//   //           <Cards
//   //             image="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
//   //             title="test"
//   //           />
//   //         }
//   //       /> */}
//   //     </Route>
//   //   </BrowserRouter>
//   // );
// }

export default Router;
