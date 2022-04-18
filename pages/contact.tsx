import { NextPage } from 'next';
import React, { useState } from 'react';
import Head from 'next/head';
import { Text, Heading, Box, 
         FormControl, FormLabel, Input, 
         InputGroup, InputLeftElement, Textarea, Button
} from '@chakra-ui/react';
import { MdOutlineEmail, MdOutlineMessage } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import Section from '../components/Section';
import SectionContent from '../components/Section/SectionContent';
// Decorative styling tags
import H1 from '../components/StylingTags/H1';
import Form from '../components/StylingTags/Form';

type ContactState = {
    name: string | undefined,
    email: string | undefined,
    message: string | undefined,
    [key: string]: string | undefined,
}

const Contact: NextPage = () => {

    const [state, setState] = useState<ContactState>({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (event: any) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    return(
        <>
            <Head>
                <title>Contact Me!!</title>
            </Head>
            <Section>
                <SectionContent>
                    <H1>
                        <Heading
                            as      = "h1"
                            size    = "3xl"
                            color   = "#DB6C79"
                        >
                            Get in Touch
                        </Heading>
                    </H1>
                    <Box
                        width = "md"
                    >
                        <Form>
                            <FormControl
                                marginBottom= "1em"
                            >
                                <FormLabel htmlFor='name'>Name</FormLabel>
                                <InputGroup>
                                    <InputLeftElement children = {<BsFillPersonFill />} />
                                    <Input 
                                        type         = "text"
                                        name         = 'name'
                                        value        = {state.name}
                                        onChange     = {handleChange}
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
                                        value        = {state.email}
                                        onChange     = {handleChange}
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
                                    resize      = "none"
                                    value        = {state.message}
                                    onChange     = {handleChange}
                                    placeholder = 'Message'
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
                                marginBottom = "8px"
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
                        </Form>
                    </Box>
                </SectionContent>
            </Section>
        </>
    )
}

export default Contact;