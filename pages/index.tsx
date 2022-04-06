import React from 'react';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import Section from '../components/Section';
import SectionContent from '../components/Section/SectionContent';

const Home: NextPage = () => {
    return(
        <>
            <Section>
                <SectionContent>
                    Hello From Home
                </SectionContent>
            </Section>
        </>
    )
}

export default Home;