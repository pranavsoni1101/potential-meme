import React from 'react';
import { Text, Heading, Box, Button } from '@chakra-ui/react';
import { NextPage } from 'next';
import Section from '../components/Section';
import SectionContent from '../components/Section/SectionContent';
import Head from 'next/head';

const Home: NextPage = () => {
    return(
        <>
            <Head>
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
                        marginTop = "10%" 
                        marginBottom= "1em"
                    >
                        <Text
                            color      = "rgba(42,238,234)"
                            fontSize   = "1.4em"
                            fontFamily = "'Waiting for the Sunrise', cursive"
                        >
                            &lt;h1&gt;
                        </Text>
                        <Heading 
                            as        = "h1"
                            size      = "4xl"
                            display   = "inline-block"
                            fontSize  = "8xl"
                        >
                            Hi, 
                            <br />
                            I'm Pranav,
                            <br /> 
                            Full Stack Developer.
                        </Heading>
                        <Text
                            color      = "rgba(42,238,234)"
                            display    = "inline-block"
                            fontSize   = "1.4em"
                            marginLeft = "4%"
                            fontFamily = "'Waiting for the Sunrise', cursive"
                        >
                            &lt;/h1&gt;
                        </Text>
                    </Box>
                    <Text
                        color      = "rgba(42,238,234)"
                        fontSize   = "1.4em"
                        fontFamily = "'Waiting for the Sunrise', cursive"
                    >
                        &lt;p&gt;
                    </Text>
                    <Box>
                        <Text
                            color      = "gray"
                            // fontWeight = "bold"
                            fontSize   = '2xl'
                        >
                            Designing Web Applications using MERN Stack. 
                        </Text>
                    </Box>
                    <Text
                        color      = "rgba(42,238,234)"
                        fontSize   = "1.4em"
                        fontFamily = "'Waiting for the Sunrise', cursive"
                    >
                        &lt;p&gt;
                    </Text>
                    <Button
                        color        = "#8fc866"
                        width        = "xs"
                        variant      = "outline"
                        marginTop    = "1em"
                        fontWeight   = "500"
                        borderColor  = "#8fc866"
                        transition   = "0.25s ease-in-out"
                        borderRadius = "none"
                        _hover       = {{
                            boxShadow: "inset -10em 0 0 0 #66c887, inset 10em 0 0 0 #66c887",
                            borderColor: "#66c887",
                            color: "white"
                        }}
                    >
                        Contact Me 
                    </Button>
                    <Box
                        marginTop = "5%"
                    >
                        <Text
                            color      = "rgba(42,238,234)"
                            fontSize   = "1.4em"
                            fontFamily = "'Waiting for the Sunrise', cursive"
                        >
                            &lt;/body&gt;
                        </Text>
                        <Text
                            color      = "rgba(42,238,234)"
                            fontSize   = "1.4em"
                            marginLeft = "-2em"
                            fontFamily = "'Waiting for the Sunrise', cursive"
                        >
                            &lt;/html&gt;
                        </Text>
                    </Box>
                </SectionContent>
            </Section>
        </>
    )
}

export default Home;