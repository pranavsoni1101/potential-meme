import React from 'react';
import Head from 'next/head';
import { Text, Heading, Box} from '@chakra-ui/react';
import Section from '../components/Section';
import SectionContent from '../components/Section/SectionContent';
import { NextPage } from 'next';
import H1 from '../components/StylingTags/H1';
import P from '../components/StylingTags/P';

const About: NextPage = () => {
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
                            display = "inline-block"
                        >
                            Me, Myself &amp; I
                        </Heading>
                    </H1>                   
                    <P>
                        <Box width= "50%">
                            <Text
                                fontSize='xl'
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui porttitor, hendrerit risus eget, dapibus sapien. 
                                Aliquam ultrices nibh nibh, quis rhoncus augue dictum vel. Proin commodo lorem quam, id faucibus nulla eleifend vel. 
                                Cras vitae mollis eros. Mauris nec congue libero, laoreet tincidunt magna. 
                                <br /> <br /> 
                                Nulla tincidunt ex non ipsum pharetra, a finibus augue sodales. 
                                Etiam erat felis, varius ultricies elit sit amet, facilisis imperdiet ipsum. 
                                Quisque suscipit mi quis facilisis scelerisque. Vivamus porta massa eleifend dapibus finibus. 
                                In hac habitasse platea dictumst. Proin semper ultrices fermentum.
                                <br /> <br /> 
                                Etiam erat felis, varius ultricies elit sit amet, facilisis imperdiet ipsum. 
                                Quisque suscipit mi quis facilisis scelerisque. Vivamus porta massa eleifend dapibus finibus. 
                                In hac habitasse platea dictumst. Proin semper ultrices fermentum.
                            </Text>
                        </Box>
                    </P>
                </SectionContent>
            </Section>
        </>
    )
}

export default About;