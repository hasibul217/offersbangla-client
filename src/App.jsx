import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import OfferDetails from "./components/Offer Details/OfferDetails";
import blogRoute from "./components/Blog Page/BlogRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/offer_details",
    element: <OfferDetails />,
  },
  ...blogRoute, 
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
