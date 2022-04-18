import React, { ReactNode } from "react";
import { Box, Text } from "@chakra-ui/react"

interface H1Props {
    children: ReactNode | ReactNode[]
}

const MainTag = ({children} : H1Props ) => {
    return(
        <>
            <Box
                marginBottom="1em"
            >
                <Text
                    color      = "rgba(42,238,234)"
                    fontSize   = "1.4em"
                    fontFamily = "'Waiting for the Sunrise', cursive"
                >
                    &lt;main&gt;
                </Text>
                {children}
                <Text
                    color      = "rgba(42,238,234)"
                    fontSize   = "1.4em"
                    fontFamily = "'Waiting for the Sunrise', cursive"
                >
                    &lt;/main&gt;
                </Text>
            </Box>
        </>
    )
}

export default MainTag;