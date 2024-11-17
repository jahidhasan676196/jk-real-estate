import {createBrowserRouter,} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Page/Home";
import Contract from "../Page/Contract";
import About from "../Page/About";
import Details from "../Component/Details";

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
        }
      ]
    },
  ]);
  

export default router;