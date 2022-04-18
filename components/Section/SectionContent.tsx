import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Box, Text } from '@chakra-ui/react';

interface SectionContentProps {
    children: ReactNode | ReactNode[]
}

const SectionContent = ({ children }: SectionContentProps) => {
    const variants = {
        hidden : { opacity: 0, x: -200, y: 0 },
        enter  : { opacity: 1, x: 0, y: 0 },
        exit   : { opacity: 0, x: 0, y: -100 },
    } 
    return(
        <>
            <Box width="100%">
            <Box
                marginBottom= "4%"
            >
                <Text
                    color      = "rgba(42,238,234)"
                    fontSize   = "1.4em"
                    marginLeft = "-2em"
                    fontFamily = "'Waiting for the Sunrise', cursive"
                >
                    &lt;html&gt;
                </Text>
                <Text
                    color      = "rgba(42,238,234)"
                    fontSize   = "1.4em"
                    fontFamily = "'Waiting for the Sunrise', cursive"
                >
                    &lt;body&gt;
                </Text>
            </Box>
            <motion.div
                exit       = "exit"
                animate    = "enter"
                initial    = "hidden"
                variants   = {variants}
                transition = {{type: "linear", delay: 0.2}}    
            >
                {children}
            </motion.div>
            <Box
                marginTop="4%"
            >
                <Text
                    color="rgba(42,238,234)"
                    fontSize="1.4em"
                    fontFamily="'Waiting for the Sunrise', cursive"
                >
                    &lt;/body&gt;
                </Text>
                <Text
                    color="rgba(42,238,234)"
                    fontSize="1.4em"
                    marginLeft="-2em"
                    fontFamily="'Waiting for the Sunrise', cursive"
                >
                    &lt;/html&gt;
                </Text>
            </Box>
            </Box>
        </>
        );
}

export default SectionContent;
