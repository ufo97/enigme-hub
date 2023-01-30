import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blogs from './components/init/Blogs';
import Russie from './components/russie/Russie.jsx';
import NoPage from './components/common/NoPage.jsx';
import ThisIsNotAWebsite from "./components/thisisnotawebsite/thisisnotawebsite.jsx";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
