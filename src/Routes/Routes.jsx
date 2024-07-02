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
import NotFound from '../components/Pages/NotFound/NotFound'
import Landscape from "../components/Similar/Catagories/Landscape";
import Portrait from "../components/Similar/Catagories/Portrait";
import WaterColor from "../components/Similar/Catagories/WaterColor";
import Charcoal from "../components/Similar/Catagories/Charcoal";
import Cartoon from "../components/Similar/Catagories/Cartoon";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement:<NotFound></NotFound>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('https://shariar-craft.vercel.app/crafts')
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
          loader: ({ params }) => fetch(`https://shariar-craft.vercel.app/craft/${params.id}`)
        },
        {
          path:'/allArts',
          element:<AllArts></AllArts>,
          loader:()=>fetch('https://shariar-craft.vercel.app/crafts')
        },
        {
          path:'/craft/:id',
          element:<PrivateRoutes><ArtDetails></ArtDetails></PrivateRoutes>,
          loader:()=>fetch('https://shariar-craft.vercel.app/crafts')
        },
        {
          path:'/craft/categories/LandScape',
          element:<Landscape></Landscape>,
          loader:()=>fetch('https://shariar-craft.vercel.app/crafts')
        },
        {
          path:'/craft/categories/Portrait',
          element:<Portrait></Portrait>,
          loader:()=>fetch('https://shariar-craft.vercel.app/crafts')
        },
        {
          path:'/craft/categories/Watercolour',
          element:<WaterColor></WaterColor>,
          loader:()=>fetch('https://shariar-craft.vercel.app/crafts')
        },
        {
          path:'/craft/categories/oil',
          element:<WaterColor></WaterColor>,
          loader:()=>fetch('https://shariar-craft.vercel.app/crafts')
        },
        {
          path:'/craft/categories/oil',
          element:<WaterColor></WaterColor>,
          loader:()=>fetch('https://shariar-craft.vercel.app/crafts')
        },
        {
          path:'/craft/categories/Charcoal',
          element:<Charcoal></Charcoal>,
          loader:()=>fetch('https://shariar-craft.vercel.app/crafts')

        },
        {
          path:'/craft/categories/Cartoon',
          element:<Cartoon></Cartoon>,
          loader:()=>fetch('https://shariar-craft.vercel.app/crafts')

        },

        
      ]
    },
  ]);

  export default router;