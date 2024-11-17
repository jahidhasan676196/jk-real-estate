import {createBrowserRouter,} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Page/Home";
import Contract from "../Page/Contract";
import About from "../Page/About";
import Details from "../Component/Details";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Error from "../NotFound/Error";
import ProtectedRoute from "../PrivteRoute/ProtectedRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path:"*",
          element:<Error></Error>
        },
        {
          path:"/",
          element:<Home></Home>,
          loader:()=>fetch('/pakages.json')
        },
        {
          path:"/contract",
          element:<Contract></Contract>
        },
        {
          path:"/about",
          element:<About></About>
        },
        {
          path:"/details/:userId",
          element:<ProtectedRoute><Details></Details></ProtectedRoute>,
          loader:()=>fetch('/pakages.json')
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        }
      ]
    },
  ]);
  

export default router;