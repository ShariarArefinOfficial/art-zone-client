import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Pages/Home/Home";
import LogIn from "../components/Pages/LogIn/LogIn";
import Register from "../components/Pages/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<LogIn></LogIn>
        },
        {
          path:'/register',
          element:<Register></Register>
        }

        
      ]
    },
  ]);

  export default router;