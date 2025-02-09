import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
 

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/home/home.jsx";
import Header from "./component/header/header.jsx";
import Contack from "./component/contact/contack.jsx";
import Service from "./component/sirvies/service.jsx";
import About from "./component/about'/about.jsx";
import User from "./component/users/user.jsx";
import Userdetails from "./component/post/post.jsx";
import Post from "./component/post/post.jsx";
import Posts from "./component/posts/posts.jsx";
import Click from "./component/click/click.jsx";
import Useid from "./component/userid/useid.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      { path: "/header", element: <Header></Header> },
      { path: "/Contack", element: <Contack></Contack> },
      { path: "/Service", element: <Service></Service> },
      { path: "/about", element: <About></About> },
       

      {path:"/user" ,
         loader:()=>fetch('https://jsonplaceholder.typicode.com/users') ,
        element : <User></User>},
        {path:"/user/:userId" ,
          loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`) ,
         element :  <Useid></Useid>}, 
        {path:"/posts" ,
          loader:()=>fetch('https://jsonplaceholder.typicode.com/posts') ,
         element : <Posts></Posts>},
        {path:"/post/:postId" ,
          loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`) ,
         element :<Click></Click>},
         
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);