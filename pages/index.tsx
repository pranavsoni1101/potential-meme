import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { NextPage } from 'next';
import Section from '../components/Section';
import SectionContent from '../components/Section/SectionContent';

const Home: NextPage = () => {
    return(
        <>
            <Section>
                <SectionContent>
                    <Heading>
                        Hi, I'm Pranav, Full Stack Developer
                    </Heading>
                </SectionContent>
            </Section>
        </>
    )
}

export default Home;