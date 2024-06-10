import React from "react";
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Blog from "./components/Blog/Blog.jsx";
import Ourstory from './components/OurStory/OurStory.jsx'
import Contact from './components/Contact/Contact.jsx'
import Shop from "./components/Shop/Shop.jsx";
import Sale from "./components/Sale/Sale.jsx";
import Help from "./components/Help/Help.jsx";
import Faqs from "./components/Help/Faqs.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='' element={<Layout />} >
    <Route path='/' element={<Home />}/>
    <Route path='/Shop' element={<Shop />}/>
    <Route path='/Blog' element={<Blog />}/>
    <Route path='OurStory' element={<Ourstory />}/>
    <Route path='Sale' element={<Sale />}/>
    <Route path='Contact' element={<Contact />}/>
    <Route path='Help' element={<Help/>}/>
    <Route path='Faqs' element={<Faqs/>}/>
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
)