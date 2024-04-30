import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Pages/Home/Home";
import LogIn from "../components/Pages/LogIn/LogIn";
import Register from "../components/Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import AddCartItem from "../components/Pages/AddCartItem/AddCartItem";
import MyArtList from "../components/Pages/MyArtLIst/MyArtList";
import UpdateCart from "../components/Pages/UpdateCart/UpdateCart";
import AllArts from "../components/Pages/AllArts/AllArts";
import ArtDetails from "../components/Pages/ArtDetails";
//import Arts from "../components/Pages/AllArts/Arts";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('http://localhost:5000/crafts')
        },
        {
          path:'/login',
          element:<LogIn></LogIn>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/addCartItem',
          element:<PrivateRoutes><AddCartItem></AddCartItem></PrivateRoutes>
        },
        {
          path:'/myArtAndCartList',
          element:<PrivateRoutes><MyArtList></MyArtList></PrivateRoutes>,
          //loader:fetch('http://localhost:5000/crafts')
        },
        {
          path:'/updateCraft/:id',
          element:<UpdateCart></UpdateCart>,
          loader: ({ params }) => fetch(`http://localhost:5000/craft/${params.id}`)
        },
        {
          path:'/allArts',
          element:<AllArts></AllArts>,
          loader:()=>fetch('http://localhost:5000/crafts')
        },
        {
          path:'/craft/:id',
          element:<PrivateRoutes><ArtDetails></ArtDetails></PrivateRoutes>,
          loader:()=>fetch('http://localhost:5000/crafts')
        }

        
      ]
    },
  ]);

  export default router;