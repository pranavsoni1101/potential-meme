import { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import { Text, Box, Heading, 
         Grid, GridItem, Stack,
       } from '@chakra-ui/react';
import { FaNodeJs, FaReact, FaPython } from "react-icons/fa";
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
                                <Box
                                    p            = "16px" 
                                    color        = "cyan"
                                    border       = "4px solid green"   
                                    width        = "fit-content"
                                    fontSize     = "2em"
                                    borderRadius = "1000px"
                                >
                                    <FaNodeJs />
                                </Box>
                                <Box
                                    p            = "16px" 
                                    color        = "cyan"
                                    border       = "4px solid green"   
                                    width        = "fit-content"
                                    fontSize     = "2em"
                                    borderRadius = "1000px"
                                >
                                    <FaReact />
                                </Box><Box
                                    p            = "16px" 
                                    color        = "cyan"
                                    border       = "4px solid green"   
                                    width        = "fit-content"
                                    fontSize     = "2em"
                                    borderRadius = "1000px"
                                >
                                    <FaPython />
                                </Box><Box
                                    p            = "16px" 
                                    color        = "cyan"
                                    border       = "4px solid green"   
                                    width        = "fit-content"
                                    fontSize     = "2em"
                                    borderRadius = "1000px"
                                >
                                    <FaNodeJs />
                                </Box><Box
                                    p            = "16px" 
                                    color        = "cyan"
                                    border       = "4px solid green"   
                                    width        = "fit-content"
                                    fontSize     = "2em"
                                    borderRadius = "1000px"
                                >
                                    <FaNodeJs />
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