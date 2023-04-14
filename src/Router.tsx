import { useRoutes } from "react-router-dom"
import Home from "./components/core/Home"
import Shop from "./components/core/Shop"
import Signin from "./components/core/Signin"
import Signup from "./components/core/Signup"

/**
 * @description 路由页面
 * 
 */

const Routers = () => {
    const route = useRoutes([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/shop',
            element: <Shop />
        },
        {
            path: '/signin',
            element: <Signin />
        },
        {
            path: '/signup',
            element: <Signup />
        }
    ])
    return route
}
export default Routers