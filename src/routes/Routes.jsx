import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Homes from "../componnets/pages/home/home/Homes";
import Colege from "../componnets/pages/colege/Colege";
import Admition from "../componnets/pages/admition/Admition";
import MyColege from "../componnets/pages/myColege/MyColege";
import ColegeDtails from "../componnets/pages/colege/ColegeDtails";
import Login from "../componnets/pages/shered/login/Login";
import Sinup from "../componnets/pages/shered/sinup/Sinup";
import PrivateRoute from "./PrivateRoute";
import AddRevew from "../componnets/pages/myColege/AddRevew";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Homes />
            },
            {
                path: '/coleges',
                element: <Colege />
            },
            {
                path: '/admition',
                element: <PrivateRoute ><Admition /></PrivateRoute>
            },
            {
                path: '/mycolge',
                element: <MyColege />
            },
            {
                path: '/mycolege/:id',
                element: <PrivateRoute ><ColegeDtails /></PrivateRoute>
            },
            {
                path: '/login',
                element:<Login />

            },
            {
                path:'/sinup',
                element:<Sinup />
            },
            {
                path:'/addRevew',
                element:<AddRevew />
            }

        ]
    }
])
export default router