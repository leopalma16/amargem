import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap-icons/font/bootstrap-icons.css";

//routes
import Home from "./assets/routes/Home";
import AmargemSingle from "./assets/routes/AmargemSingle";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <AmargemSingle />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
