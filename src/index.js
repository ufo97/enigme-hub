import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const Blogs = lazy(()=> import('./components/init/Blogs'));
const Russie = lazy(()=> import('./components/russie/Russie.jsx'));
const NoPage = lazy(()=> import('./components/common/NoPage.jsx'));
const Japon = lazy(()=> import('./components/japon/Japon.jsx'));
const ThisIsNotAWebsite = lazy(()=> import('./components/thisisnotawebsite/thisisnotawebsite.jsx'));
const Amerindien = lazy(()=> import('./components/amerindien/Amerindien.jsx'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Blogs />,
    errorElement: <NoPage />,
  },
  {
    path: "/russie",
    element: <Russie />,
    errorElement: <NoPage />,
  },
  {
    path: "/notawebsite",
    element: <ThisIsNotAWebsite />,
    errorElement: <NoPage />
  },
  {
    path: "/japon",
    element: <Japon />,
    errorElement: <NoPage />
  },
  {
    path: "/amerindien",
    element: <Amerindien />,
    errorElement: <NoPage />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <RouterProvider router={router} />
  </React.Fragment>
);
