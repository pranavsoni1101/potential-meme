import { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import { Text, Box, Heading, 
         Grid,
         GridItem,
         Progress,
         Stack, 
       } from '@chakra-ui/react';
import Section from '../components/Section';
import SectionContent from '../components/Section/SectionContent';

const Skills: NextPage = () => {
    return(
        <>
            <Head>
                <title>
                    Skills & Experience
                </title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Waiting+for+the+Sunrise&display=swap" rel="stylesheet" />
            </Head>
            <Section>
                <SectionContent>
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
                    <Box
                        marginTop = "5%"
                        marginBottom="1em"
                    >
                        <Text
                            color      = "rgba(42,238,234)"
                            fontSize   = "1.4em"
                            fontFamily = "'Waiting for the Sunrise', cursive"
                        >
                            &lt;h1&gt;
                        </Text>
                        <Heading
                            as      = "h1"
                            size    = "3xl"
                            color   = "#DB6C79"
                        >
                            Skills & Experience
                        </Heading>
                        <Text
                            color      = "rgba(42,238,234)"
                            fontSize   = "1.4em"
                            fontFamily = "'Waiting for the Sunrise', cursive"
                        >
                            &lt;/h1&gt;
                        </Text>
                    </Box>
                    <Grid
                            templateColumns = "repeat(12, 1fr)"
                            gap={4}
                    >
                        <GridItem
                            colSpan={6}
                            colStart={1}
                            colEnd   = {7} 
                        >
                            <Text
                                color="rgba(42,238,234)"
                                fontSize="1.4em"
                                fontFamily="'Waiting for the Sunrise', cursive"
                            >
                                &lt;p&gt;
                            </Text>
                            <Text
                                fontSize='lg'
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui porttitor, hendrerit risus eget, dapibus sapien. 
                                Aliquam ultrices nibh nibh, quis rhoncus augue dictum vel. Proin commodo lorem quam, id faucibus nulla eleifend vel. 
                                Cras vitae mollis eros. Mauris nec congue libero, laoreet tincidunt magna. 
                                Nulla ligula ligula, pellentesque quis nunc sed, elementum consequat lorem. 
                                <br /> <br /> 
                                Etiam erat felis, varius ultricies elit sit amet, facilisis imperdiet ipsum. 
                                Quisque suscipit mi quis facilisis scelerisque. Vivamus porta massa eleifend dapibus finibus. 
                                In hac habitasse platea dictumst. Proin semper ultrices fermentum.
                            </Text>
                            <Text
                                color="rgba(42,238,234)"
                                fontSize="1.4em"
                                fontFamily="'Waiting for the Sunrise', cursive"
                            >
                                &lt;/p&gt;
                            </Text>
                        </GridItem>
                        <GridItem
                            colEnd   = {12} 
                            // colSpan  = {5}
                            colStart = {8}
                        >
                            <Stack
                                paddingTop = "1em"
                                spacing ={5}
                            >
                                <Box>
                                    <Heading
                                        size = "sm"
                                        marginBottom = "8px" 
                                    >
                                        Frontend
                                    </Heading>
                                    <Progress 
                                        bg     = "#444"
                                        value  = {90}
                                        height = "2px"
                                        colorScheme = "purple"
                                    />
                                </Box>
                                {/* React Progress */}
                                <Box>
                                    <Heading
                                        size = "sm"
                                        marginBottom = "8px" 
                                    >
                                        ReactJS
                                    </Heading>
                                    <Progress 
                                        bg     = "#444"
                                        value  = {80}
                                        height = "2px"
                                        colorScheme = "pink"
                                    />
                                </Box>
                                {/* Backend Progress */}
                                <Box>
                                    <Heading
                                        size = "sm"
                                        marginBottom = "8px" 
                                    >
                                        Backend
                                    </Heading>
                                    <Progress 
                                        bg     = "#444"
                                        value  = {70}
                                        height = "2px"
                                        colorScheme = "cyan"
                                    />
                                </Box>
                                {/* NextJS Progress */}
                                <Box>
                                    <Heading
                                        size = "sm"
                                        marginBottom = "8px" 
                                    >
                                        NextJS
                                    </Heading>
                                    <Progress 
                                        bg     = "#444"
                                        value  = {60}
                                        height = "2px"
                                        colorScheme = "yellow"
                                    />
                                </Box>
                            </Stack>
                        </GridItem>
                    </Grid>
                    <Box
                        marginTop="5%"
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
                </SectionContent>
            </Section>
        </>
    )
}

export default Skills