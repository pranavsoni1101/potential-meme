import React,  { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface TabPanelContentProps {
    children: ReactNode | ReactNode[]; 
}

const TabPanelContent = ({children}: TabPanelContentProps) => {
    const variants = {
        hidden : { opacity: 0 },
        enter  : { opacity: 1},
        exit   : { opacity: 0},
    } 
    return (
        <>
            <motion.div
                exit       = "exit"
                animate    = "enter"
                initial    = "hidden"
                variants   = {variants}
                transition = {{type: "linear", delay: 0.15}}  
            >
                {children}
            </motion.div>
        </>
    )
}

export default TabPanelContent;