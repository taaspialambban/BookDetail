import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Components/Dashboard/Dashboard";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Pages/Home"
import BookDetails from "../Pages/BookDetails";

import PageRead from "../Pages/PageRead";

import ListBook from "../Pages/ListBook"
import ReadPages from "../Components/ReadPages/ReadPages";
import WishLists from "../Components/WishList/WishLists";


export const router = createBrowserRouter([
    {
      path:"/",
      element: <Dashboard></Dashboard>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
          loader:()=> fetch('Book.json'),
        },
        {
          path:"/books/:id",
          element:<BookDetails></BookDetails>,
          loader:async ({ params }) => {
            const res = await fetch('Book.json');
            const books = await res.json();
            const book = books.find(b => b.id === Number(params.id)); 
            return book; 
          }
        },
        {
            path: "/listBook",
            element: <ListBook></ListBook>,
            children: [
                {
                    index: true, 
                    element: <ReadPages></ReadPages>,  
                  },
                {
                  path: "wishlist",
                  element: <WishLists></WishLists>,
                },
                
              ] 
        },
        {
        path:"/readPage",
        element:<PageRead></PageRead>
        }
      ],
      
    }
   ]);