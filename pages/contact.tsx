import { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import { Text, Heading, Box, 
         FormControl, FormLabel, Input, 
         InputGroup, InputLeftElement, Textarea, Button
} from '@chakra-ui/react';
import { MdOutlineEmail, MdOutlineMessage } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import Section from '../components/Section';
import SectionContent from '../components/Section/SectionContent';

const Contact: NextPage = () => {
    return(
        <>
            <Head>
                <title>Contact Me!!</title>
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
                            display = "inline-block"
                        >
                            Get in Touch
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
                    <Box
                        width = "md"
                    >
                        <Text
                            color        = "rgba(42,238,234)"
                            fontSize     = "1.4em"
                            fontFamily   = "'Waiting for the Sunrise', cursive"
                            marginBottom = "0.5em"
                        >
                            &lt;form&gt;
                        </Text>
                        <FormControl
                            marginBottom= "1em"
                        >
                            <FormLabel htmlFor='name'>Name</FormLabel>
                            <InputGroup>
                                <InputLeftElement children = {<BsFillPersonFill />} />
                                <Input 
                                    type         = "text"
                                    name         = 'name'
                                    placeholder  = 'Name'
                                    autoComplete = 'off'
                                    _hover       = {{
                                        borderColor: "#DB6C79",
                                    }}
                                    _focus       = {{
                                        borderColor: "#DB6C79",
                                    }}
                                />
                            </InputGroup>
                        </FormControl>
                        <FormControl
                            marginBottom= "1em"
                        >   
                            <FormLabel htmlFor='email'>Email</FormLabel> 
                            <InputGroup>
                                <InputLeftElement children = {<MdOutlineEmail />} />
                                <Input 
                                    type         = "text"
                                    name         = 'email'
                                    placeholder  = 'Email'
                                    autoComplete = 'off'
                                    _hover       = {{
                                        borderColor: "#DB6C79",
                                    }}
                                    _focus       = {{
                                        borderColor: "#DB6C79",
                                    }}
                                />
                            </InputGroup>
                        </FormControl>
                        <FormControl
                            marginBottom = "1em"
                        >
                            <FormLabel htmlFor='message'>Message</FormLabel>
                            <Textarea 
                                name        = 'message'
                                rows        = {5}
                                placeholder = 'Message'
                                resize      = "none"
                                _hover       = {{
                                    borderColor: "#DB6C79"
                                }}
                                _focus       = {{
                                    borderColor: "#DB6C79"
                                }}
                            />
                        </FormControl>
                        <Button
                            width        = "2xs"
                            color        = "#8fc866"
                            variant      = "outline"
                            marginTop    = "1em"
                            borderColor  = "#8fc866"
                            transition   = "0.25s ease-in-out"
                            borderRadius = "none"
                            _hover       = {{
                                boxShadow: "inset -10em 0 0 0 #66c887, inset 10em 0 0 0 #66c887",
                                borderColor: "#66c887",
                                color: "white"
                            }}
                            _focus      = {{
                                boxShadow: "inset -10em 0 0 0 #66c887, inset 10em 0 0 0 #66c887",
                                borderColor: "#66c887",
                                color: "white"
                            }}
                        >
                            Submit
                        </Button>
                        <Text
                            color      = "rgba(42,238,234)"
                            fontSize   = "1.4em"
                            fontFamily = "'Waiting for the Sunrise', cursive"
                            marginTop  = "0.5em"
                        >
                            &lt;/form&gt;
                        </Text>
                    </Box>
                    <Box
                        marginTop ="2%"
                    >
                        <Text
                            color      ="rgba(42,238,234)"
                            fontSize   ="1.4em"
                            fontFamily ="'Waiting for the Sunrise', cursive"
                        >
                            &lt;/body&gt;
                        </Text>
                        <Text
                            color      ="rgba(42,238,234)"
                            fontSize   ="1.4em"
                            marginLeft ="-2em"
                            fontFamily ="'Waiting for the Sunrise', cursive"
                        >
                            &lt;/html&gt;
                        </Text>
                    </Box>
                </SectionContent>
            </Section>
        </>
    )
}

export default Contact;