import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../../Pages/Home/Home";
import Details from "../../Pages/Details/Details";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>

        },
        {
          path:"/details",
          element:<Details></Details>
        }
    ]
  },
]);
export default router;
