// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { 
  RouterProvider,
  Route
 } from 'react-router-dom'

 import { Toaster } from 'react-hot-toast'
import { router } from './routes/Routes';




createRoot(document.getElementById('root')).render(
 <>
  <RouterProvider 
  router={router}/>
  <Toaster></Toaster>
 </>
);
