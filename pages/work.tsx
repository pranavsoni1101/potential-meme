import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { Text, Heading, Box, 
         Button, 
} from '@chakra-ui/react';
import Section from '../components/Section';
import SectionContent from '../components/Section/SectionContent';
import WorkCard from '../components/Work/WorkCard';

const Work: NextPage = () => {
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
                            Self Brewed Projects
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
                    <Box
                        marginTop="5%"
                    >
                        <Text
                            color="rgba(42,238,234)"
                            fontSize="1.4em"
                            fontFamily="'Waiting for the Sunrise', cursive"
                        >
                            &lt;/body&gt;
                        </Text>
                        <Text
                            color="rgba(42,238,234)"
                            fontSize="1.4em"
                            marginLeft="-2em"
                            fontFamily="'Waiting for the Sunrise', cursive"
                        >
                            &lt;/html&gt;
                        </Text>
                    </Box>
                </SectionContent>
            </Section>
        </>
    )
}

export default Work;