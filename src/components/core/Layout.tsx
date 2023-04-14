import React, { FC } from 'react'
import Menus from './Menu'

interface Props {
    children: React.ReactNode

}

/**
 * @description 布局
 * @param children 加载内容
 */
const Layout: FC<Props> = ({ children }) => {
    return <div>
        <Menus />
        {children}
    </div>
}
export default Layout