import React from 'react';
import { Text, Heading, Box, Button, Link } from '@chakra-ui/react';
import { NextPage } from 'next';
import Section from '../components/Section';
import SectionContent from '../components/Section/SectionContent';
import Head from 'next/head';
// Decorative style tags hehe
import H1 from '../components/StylingTags/H1';
import P from '../components/StylingTags/P';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Pranav Soni</title>
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
                    <P>
                        <Box>
                            <Text
                                color="gray"
                                fontSize='2xl'
                            >
                                Designing Web Applications using MERN Stack.
                            </Text>
                        </Box>
                    </P>
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