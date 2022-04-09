import React from 'react';
import Head from 'next/head';
import { Text, Heading, Box} from '@chakra-ui/react';
import Section from '../components/Section';
import SectionContent from '../components/Section/SectionContent';
import { NextPage } from 'next';

const About: NextPage = () => {
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
                            Me, Myself &amp; I
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
                        color="rgba(42,238,234)"
                        fontSize="1.4em"
                        fontFamily="'Waiting for the Sunrise', cursive"
                    >
                        &lt;p&gt;
                    </Text>
                    <Box width= "50%">
                        <Text
                            fontSize='xl'
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui porttitor, hendrerit risus eget, dapibus sapien. 
                            Aliquam ultrices nibh nibh, quis rhoncus augue dictum vel. Proin commodo lorem quam, id faucibus nulla eleifend vel. 
                            Cras vitae mollis eros. Mauris nec congue libero, laoreet tincidunt magna. 
                            Nulla ligula ligula, pellentesque quis nunc sed, elementum consequat lorem. 
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
                    <Text
                        color="rgba(42,238,234)"
                        fontSize="1.4em"
                        fontFamily="'Waiting for the Sunrise', cursive"
                    >
                        &lt;p&gt;
                    </Text>
                    <Box
                        marginTop ="4%"
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

export default About;