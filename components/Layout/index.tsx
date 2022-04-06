import React, { ReactNode } from 'react';
import SideNavbar from './SideNavbar';

interface LayoutProps {
    children : ReactNode | ReactNode[]
}

const Layout = ({children}: LayoutProps) =>{
    return(
        <>
            <SideNavbar />
            {children}
        </>
    )
}

export default Layout;