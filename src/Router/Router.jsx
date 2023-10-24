import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AddTeams from '../pages/AddTeams/AddTeams';
import AddProducts from "../pages/AddProducts/AddProducts";
import AddServices from "../pages/AddServices/AddServices";
import Cart from "../pages/Cart/Cart";
import Details from "../pages/Home/Services/Details/Details";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                loader: () => fetch("http://localhost:3000/servicesData"),
                element: <Home />
            },
            {
                path: "/addProducts",
                element: <AddProducts />
            },
            {
                path: "/addTeams",
                element: <AddTeams />
            },
            {
                path: "/addServices",
                element: <AddServices />
            },
            {
                path: "/cart/:email",
                loader:({params})=>fetch(`http://localhost:3000/cart/${params.email}`),
                element: <Cart />
            },
            {
                path: "/details/:id",
                loader: ({ params }) => fetch(`http://localhost:3000/servicesData/${params.id}`),
                element: <Details />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signUp",
                element: <SignUp />
            }
        ]
    }
])
export default Router