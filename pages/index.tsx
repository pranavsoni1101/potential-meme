import React from 'react';
import { Text, Heading, Box, Button, Link } from '@chakra-ui/react';
import { NextPage } from 'next';
import Section from '../components/Section';
import SectionContent from '../components/Section/SectionContent';
import Head from 'next/head';
import H1 from '../components/StylingTags/H1';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Waiting+for+the+Sunrise&display=swap" rel="stylesheet" />
            </Head>
            <Section>
                <SectionContent>
                    <H1>
                        <Heading
                            as="h1"
                            size="4xl"
                            fontSize="8xl"
                        >
                            Hi,
                            <br />
                            I&apos;m Pranav,
                            <br />
                            Full Stack Developer.
                        </Heading>
                    </H1>
                    <Text
                        color="rgba(42,238,234)"
                        fontSize="1.4em"
                        fontFamily="'Waiting for the Sunrise', cursive"
                    >
                        &lt;p&gt;
                    </Text>
                    <Box>
                        <Text
                            color="gray"
                            fontSize='2xl'
                        >
                            Designing Web Applications using MERN Stack.
                        </Text>
                    </Box>
                    <Text
                        color="rgba(42,238,234)"
                        fontSize="1.4em"
                        fontFamily="'Waiting for the Sunrise', cursive"
                    >
                        &lt;p&gt;
                    </Text>
                    <Button
                        as             = {Link}
                        href           = "/contact"
                        width          = "xs"
                        color          = "#8fc866"
                        variant        = "outline"
                        marginTop      = "1em"
                        transition     = "0.25s ease-in-out"
                        borderColor    = "#8fc866"
                        borderRadius   = "none"
                        textDecoration = "none"
                        _hover={{
                            boxShadow: "inset -10em 0 0 0 #66c887, inset 10em 0 0 0 #66c887",
                            borderColor: "#66c887",
                            textDecoration: "none",
                            color: "white"
                        }}
                        _focus      = {{
                            boxShadow: "inset -10em 0 0 0 #66c887, inset 10em 0 0 0 #66c887",
                            borderColor: "#66c887",
                            color: "white"
                        }}
                    >
                        Contact Me
                    </Button>
                </SectionContent>
            </Section>
        </>
    )
}

export default Home;