import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { Text, Heading, Box, 
         Button, 
} from '@chakra-ui/react';
import Section from '../components/Section';
import SectionContent from '../components/Section/SectionContent';
import WorkCard from '../components/Work/WorkCard';
// Decorative styling tags ehehe
import H1 from '../components/StylingTags/H1';
import MainTag from '../components/StylingTags/MainTag';

const Work: NextPage = () => {
    return(
        <>
            <Head>
                <title>Self Brewed Projects!</title>
            </Head>
            <Section>
                <SectionContent>
                    <H1>
                        <Heading
                            as      = "h1"
                            size    = "3xl"
                            color   = "#DB6C79"
                        >
                            Self Brewed Projects
                        </Heading>
                    </H1>
                    <MainTag>
                        <Box>
                            <WorkCard />
                        </Box>

                    </MainTag>
                    
                </SectionContent>
            </Section>
        </>
    )
}

export default Work;