import { useState, useEffect } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link, } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


/**
 * @description 导航菜单
 */


const items: MenuProps['items'] = [
    {
        label: (
            <Link to='/'>首页</Link>
        ),
        key: 'home',
    },
    {
        label: (
            <Link to='/shop' > 商城</Link>
        ),
        key: 'shop',
    },
    {
        label: (
            <Link to='/signin'>登录</Link>
        ),
        key: 'signin',
    },
    {
        label: (
            <Link to='/signup' > 注册</Link>
        ),
        key: 'signup',
    },
];



const Menus = () => {
    const [current, setCurrent] = useState('');
    // const routers = useSelector<Appstate, RouterState>(state => state.router)
    const history = useLocation()


    useEffect(() => {
        if (history.pathname === '/shop') {
            setCurrent('shop')
        } else if (history.pathname === '/') {
            setCurrent('home')
        } else if (history.pathname === '/signin') {
            setCurrent('signin')
        } else if (history.pathname === '/signup') {
            setCurrent('signup')
        }
    }, [history])

    return <Menu selectedKeys={[current]} mode="horizontal" items={items} />

}
export default Menus