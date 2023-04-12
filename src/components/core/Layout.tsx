import React, { FC } from 'react'

interface Props {
    children: React.ReactNode
}
/**
 * @description 布局
 * @param children 加载内容
 */
const Layout: FC<Props> = ({ children }) => {
    return <div>
        {children}
    </div>
}
export default Layout