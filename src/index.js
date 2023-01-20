import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blogs from './components/init/Blogs.js';
import Russie from './components/russie/Russie';
import NoPage from './components/common/NoPage';

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
