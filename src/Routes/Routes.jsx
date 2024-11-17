import {createBrowserRouter,} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Page/Home";
import Contract from "../Page/Contract";
import About from "../Page/About";
import Details from "../Component/Details";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path:"*",
          element:<h2>element pai nai</h2>
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
          element:<Details></Details>,
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