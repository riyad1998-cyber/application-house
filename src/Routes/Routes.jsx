import { createBrowserRouter } from "react-router";
import RootLayout from "../LayOuts/RootLayout";
import Home from "../Pages/Home";
import Applications from "../Pages/Applications";
import Installation from "../Pages/Installation";
import ErrorPage from "../Pages/ErrorPage";
import ApplicationsDetail from "../Pages/ApplicationsDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/applications",
        element: <Applications />,
      },
      {
        path: "/installation",
        element: <Installation />,
      },
      {
        path: "*",               
        element: <ErrorPage />,
      },
      {
        path : "/application/:id",
        element : <ApplicationsDetail/>
      }
    ],
  },
]);

export default router;
