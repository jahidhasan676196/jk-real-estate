import {createBrowserRouter,} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Page/Home";
import Contract from "../Page/Contract";
import About from "../Page/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
          loader:()=>fetch('pakages.json')
        },
        {
          path:"/contract",
          element:<Contract></Contract>
        },
        {
          path:"/about",
          element:<About></About>
        }
      ]
    },
  ]);
  

export default router;