import React from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
const WorkCard = () => {
    return(
        <>
            <Box
                p            = "1em"
                bg           = "#333"
                width        = "md"
                height       = "2xs"
                borderRadius = "md"
            >
                <Heading
                    size = "lg"
                >
                    Lorem Ipsum
                </Heading>  
                <br />
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu orci vitae nibh condimentum convallis. 
                    Sed quis molestie ligula. Cras vestibulum, nibh lacinia lacinia feugiat, leo mauris tempor dui, vel.
                </Text> 
                <Button
                    float         = "right"
                    color         = "rgba(42,238,234)"
                    variant       = "ghost"
                    fontSize      = "sm"
                    marginTop     = "1.3em"
                    fontWeight    = "500"
                    textTransform = "uppercase"
                    _hover        = {{
                        bg: "#00000020"
                    }}
                    _focus        = {{
                        bg: "#00000020",
                        boxShadow: "none",
                    }}
                >
                    Read More
                </Button>
            </Box>
        </>
    )
}

export default WorkCard;