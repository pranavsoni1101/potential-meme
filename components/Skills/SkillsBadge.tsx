import React, { ReactNode } from 'react';
import { Box } from "@chakra-ui/react";
import {randomNeonColor1, randomNeonColor2} from "../randomNeonColor";

interface SkillBadgeProps {
    children: ReactNode | ReactNode[]
}

const SkillBadge = ({children} : SkillBadgeProps) => { 
    return(
        <Box
            p            = "16px" 
            mx           = "5px"
            mb           = "5px"
            color        = {randomNeonColor1()}
            width        = "fit-content"
            border       = {`4px solid ${randomNeonColor2()}`}   
            display      = "inline-block"
            fontSize     = "2em"
            transition   = "width 2s"
            borderRadius = "1000px"
        >
            {children}
        </Box>
    )
}

export default SkillBadge;