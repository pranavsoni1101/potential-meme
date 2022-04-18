import React, { ReactNode } from "react";
import { Box, Text } from "@chakra-ui/react"

interface PProps {
    children: ReactNode | ReactNode[]
}

const P = ({children} : PProps ) => {
    return(
        <>
            <Box>
                <Text
                    color      = "rgba(42,238,234)"
                    fontSize   = "1.4em"
                    fontFamily = "'Waiting for the Sunrise', cursive"
                >
                    &lt;p&gt;
                </Text>
                {children}
                <Text
                    color      = "rgba(42,238,234)"
                    fontSize   = "1.4em"
                    fontFamily = "'Waiting for the Sunrise', cursive"
                >
                    &lt;/p&gt;
                </Text>
            </Box>
        </>
    )
}

export default P;