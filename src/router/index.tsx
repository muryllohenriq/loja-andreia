import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ClothingDetails from "../pages/ClothingDetials/ClothingDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/clothing",
        element: <ClothingDetails />,
    }
]);

export default router;