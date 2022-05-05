import { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import { Text, Box, Heading, 
         Grid, GridItem, Stack,
       } from '@chakra-ui/react';
import { SiJavascript, SiTypescript } from "react-icons/si";
import { FaNodeJs, FaReact, FaPython, FaGithub } from "react-icons/fa";
import Section from '../components/Section';
import SectionContent from '../components/Section/SectionContent';
// Decoratvie styling tags hehe
import H1 from '../components/StylingTags/H1';
import P from '../components/StylingTags/P';

const Skills: NextPage = () => {

    const skills = [
        {
            name: "NodeJS",
            icon: <FaNodeJs />
        },
        {
            name: "React",
            icon: <FaReact />
        },
        {
            name: "Python",
            icon: <FaPython />
        },
        {
            name: "GitHub",
            icon: <FaGithub />
        },
        {
            name: "Typescript",
            icon: <FaNodeJs />
        }
    ]

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
                                spacing ={5}
                                direction = {['column', 'row']}
                                paddingTop = "1em"
                            >

                                    <Box>
                                        {skills.map((skill, index) => (
                                            <Box
                                            key          = {skill.name}
                                            >
                                                <Box
                                                    p            = "16px" 
                                                    mx           = "5px"
                                                    mb           = "5px"
                                                    color        = "cyan"
                                                    width        = "fit-content"
                                                    border       = "4px solid green"   
                                                    display      = "inline-block"
                                                    fontSize     = "2em"
                                                    transition   = "width 2s"
                                                    borderRadius = "1000px"
                                                >
                                                    {skill.icon}
                                                </Box>
                                                {(index+1) % 5  === 0 ? <br /> : null} 
                                            </Box>
                                        ))}
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