import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import OfferDetails from "./components/Offer Details/OfferDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/offer_details",
    element: <OfferDetails/>
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
