import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Homes from "../componnets/pages/home/home/Homes";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Homes />
            }
        ]
    }
])
export default router