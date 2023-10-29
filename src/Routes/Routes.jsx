import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Layout/Home";
import Login from "../Layout/Login";
import SignUp from "../Layout/SignUp";
import CheckOut from "../Layout/CheckOut";
import Checking from "../Layout/Checking";
import PrivetRoute from "./PrivetRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/signUp", element: <SignUp></SignUp> },
      {
        path: "/checkOut/:id",
        element: <CheckOut></CheckOut>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/checking",
        element: (
          <PrivetRoute>
            <Checking></Checking>{" "}
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default router;
