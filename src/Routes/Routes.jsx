import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Layout/Home";
import Login from "../Layout/Login";
import SignUp from "../Layout/SignUp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/signUp", element: <SignUp></SignUp> },
    ],
  },
]);

export default router;
