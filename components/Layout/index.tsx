import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import SideNavbar from './SideNavbar';

interface LayoutProps {
    children : ReactNode | ReactNode[]
}

const Layout = ({children}: LayoutProps) =>{

    const variants = {
        hidden : { opacity: 0 },
        enter  : { opacity: 1},
        exit   : { opacity: 0},
    } 

    return(
        <>
            <SideNavbar />
            <motion.div
                exit       = "exit"
                animate    = "enter"
                initial    = "hidden"
                variants   = {variants}
                transition = {{type: "linear"}}
            >
                {children}
            </motion.div>
        </>
    )
}

export default Layout;