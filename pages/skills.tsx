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
// Decoratvie styling tags hehe
import H1 from '../components/StylingTags/H1';
import P from '../components/StylingTags/P';

const Skills: NextPage = () => {
    return(
        <>
            <Head>
                <title>
                    Skills & Experience
                </title>
            </Head>
            <Section>
                <SectionContent>
                    <H1>
                        <Heading
                            as      = "h1"
                            size    = "3xl"
                            color   = "#DB6C79"
                        >
                            Skills & Experience
                        </Heading>
                    </H1>
                    <Grid
                            templateColumns = "repeat(12, 1fr)"
                            gap={4}
                    >
                        <GridItem
                            colSpan={6}
                            colStart={1}
                            colEnd   = {7} 
                        >
                            <P>
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
                            </P>
                        </GridItem>
                        <GridItem
                            colEnd   = {12} 
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
                </SectionContent>
            </Section>
        </>
    )
}

export default Skills