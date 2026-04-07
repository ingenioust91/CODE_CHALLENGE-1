import { createBrowserRouter } from "react-router-dom";
import App from "../app/App";
import { productLoader } from "../lib/loader";

const router = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        loader : productLoader
    }
])

export default router;