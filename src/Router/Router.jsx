import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import About from './../pages/About/About';
import Services from "../pages/Services/Services";
import Blog from './../pages/Blog/Blog';
import Contact from './../pages/Contact/Contact';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/services",
                element:<Services/>
            },
            {
                path:"/blog",
                element:<Blog/>
            },
            {
                path:"/contact",
                element:<Contact/>
            }
        ]
    }
])
export default Router