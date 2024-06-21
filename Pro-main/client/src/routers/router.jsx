import {
  
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import HomePage from "../homePage/HomePage";
import About from "../routes/About";
import Courses from "../routes/Course";
import Shop from "../routes/Shop";
import Sign from "../routes/Signin";
import Contact from "../routes/Contact";
import ShopMen from "../routes/ShopMen";
import ShopItem from "../routes/ShopItem";
import ShopWomen from "../routes/ShopWomen";
import ProductDetail from "../routes/ProductDetail";
import ProductMen from "../routes/ProductMen";
import ProductWomen from "../routes/ProductWomen";
import AddToCart from "../routes/AddToCart";
import Signin from "../routes/Signin";
import Login from "../routes/Login";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:"/",
            element:<HomePage/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
          path:"/course",
          element:<Courses/>
      },
      {
        path:"/shop",
        element:<Shop/>
    },
    {
      path:"/shop/Men",
      element:<ShopMen/>
    },
    {
      path:"/shop/Item",
      element:<ShopItem/>
  },
  {
    path:"/shop/Women",
    element:<ShopWomen/>
},
{
  path:"/product/:id",
  element:<ProductDetail/>
},
{
  path:"/productMen/:id",
  element:<ProductMen/>
},
{
  path:"/productWomen/:id",
  element:<ProductWomen/>
},
  
    {
      path:"/sign",
      element:<Sign/>
  },
  {
    path:"/contact",
    element:<Contact/>
},
{
  path:"/addToCart",
  element:<AddToCart/>
},
{
  path:"/register",
  element:<Signin/>
},
{
  path:"/login",
  element:<Login/>
}


      ]
    },
  ]);

export default router;