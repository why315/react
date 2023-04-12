import { useRoutes } from "react-router-dom"
import Home from "./components/core/Home"
import Shop from "./components/core/Shop"

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
        }
    ])
    return route
}
export default Routers