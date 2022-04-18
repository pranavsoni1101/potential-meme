import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { Text, Heading, Box, 
         Button, 
} from '@chakra-ui/react';
import Section from '../components/Section';
import SectionContent from '../components/Section/SectionContent';
import WorkCard from '../components/Work/WorkCard';
import H1 from '../components/StylingTags/H1';

const Work: NextPage = () => {
    return(
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Waiting+for+the+Sunrise&display=swap" rel="stylesheet" />
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
                    <Text
                        color      = "rgba(42,238,234)"
                        display    = "inline-block"
                        fontSize   = "1.4em"
                        fontFamily = "'Waiting for the Sunrise', cursive"
                    >
                        &lt;main&gt;
                    </Text>
                    <Box>
                        <WorkCard />
                    </Box>
                    <Text
                        color      = "rgba(42,238,234)"
                        display    = "inline-block"
                        fontSize   = "1.4em"
                        fontFamily = "'Waiting for the Sunrise', cursive"
                    >
                        &lt;/main&gt;
                    </Text>
                </SectionContent>
            </Section>
        </>
    )
}

export default Work;