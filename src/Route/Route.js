import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Accommodation from "../Pages/Accommodation/Accommodation";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "Accommodation",
        element: <Accommodation />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);
