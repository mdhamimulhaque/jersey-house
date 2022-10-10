import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import Shop from "../components/Shop/Shop";
import Cart from "../components/Cart/Cart";
import Contacts from "../components/Contacts/Contacts";
import Main from "../layout/Main";

const router = createBrowserRouter([{
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    loader: () => fetch('products.json'),
    children: [
        { path: "/", element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/shop", element: <Shop /> },
        { path: "/cart", element: <Cart /> },
        { path: "/contacts", element: <Contacts /> },
    ]
}]);

export default router;