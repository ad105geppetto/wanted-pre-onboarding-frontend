import { createBrowserRouter } from "react-router-dom";
import App from "../app";
import ErrorPage from "../pages/404";
import Signup from "../pages/signup";
import Signin from "../pages/signin";
import Todo from "../pages/todo";

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "signin",
    element: <Signin />,
  },
  {
    path: "todo",
    element: <Todo />,
  },
]);
