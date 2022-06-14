import { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import { Text, Box, Heading, 
         Grid, GridItem, Stack, 
         Button, Tabs, TabList, 
         Tab, TabPanels, TabPanel,
       } from '@chakra-ui/react';
import Section from '../components/Section';
import SectionContent from '../components/Section/SectionContent';
// Decoratvie styling tags hehe
import H1 from '../components/StylingTags/H1';
import P from '../components/StylingTags/P';
import SkillBadge from '../components/Skills/SkillsBadge';
import { AnimatePresence } from 'framer-motion';

import { databases, programmingSkills, libraries, tools } from '../components/Skills/dataHelper';
import TabPanelContent from '../components/Skills/TabPanelContent';

const Skills: NextPage = () => {

    return(
        <>
            <Head>
                <title>
                    Skills & Experience
                </title>
            </Head>
            <Section>
                <SectionContent>
                    <H1>
                        <Heading
                            as      = "h1"
                            size    = "3xl"
                            color   = "#DB6C79"
                        >
                            Skills & Experience
                        </Heading>
                    </H1>
                    <Grid
                            templateColumns = "repeat(12, 1fr)"
                            gap={4}
                    >
                        <GridItem
                            colSpan={6}
                            colStart={1}
                            colEnd   = {7} 
                        >
                            <P>
                                <Text
                                    fontSize='lg'
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui porttitor, hendrerit risus eget, dapibus sapien. 
                                    Aliquam ultrices nibh nibh, quis rhoncus augue dictum vel. Proin commodo lorem quam, id faucibus nulla eleifend vel. 
                                    Cras vitae mollis eros. Mauris nec congue libero, laoreet tincidunt magna. 
                                    Nulla ligula ligula, pellentesque quis nunc sed, elementum consequat lorem. 
                                    <br /> <br /> 
                                    Etiam erat felis, varius ultricies elit sit amet, facilisis imperdiet ipsum. 
                                    Quisque suscipit mi quis facilisis scelerisque. Vivamus porta massa eleifend dapibus finibus. 
                                    In hac habitasse platea dictumst. Proin semper ultrices fermentum.
                                </Text>
                            </P>
                        </GridItem>
                        <GridItem
                            colEnd   = {12} 
                            colStart = {8}
                        >
                                <Tabs
                                    isLazy      = {true}
                                    colorScheme = "cyan"
                                >
                                    <TabList>
                                        <Tab
                                            _focus={{
                                                boxShadow: "none",
                                            }}
                                            _active={{
                                                bg: "none"
                                            }}
                                        >
                                            Programming Languages
                                        </Tab>
                                        <Tab
                                            _focus={{
                                                boxShadow: "none",
                                            }}
                                            _active={{
                                                bg: "none"
                                            }}
                                        >
                                            Libraries / Framework
                                        </Tab>
                                        <Tab
                                            _focus={{
                                                boxShadow: "none",
                                            }}
                                            _active={{
                                                bg: "none"
                                            }}
                                        >
                                            Tools
                                        </Tab>
                                        <Tab
                                            _focus={{
                                                boxShadow: "none",
                                            }}
                                            _active={{
                                                bg: "none"
                                            }}
                                        >
                                            Databases
                                        </Tab>
                                    </TabList>
                                        <TabPanels p="12px">
                                            <TabPanel>
                                                <TabPanelContent>
                                                    <Box>
                                                        {programmingSkills.map((skill, index) => (
                                                            <Box
                                                                key     = {index} 
                                                                display = "inline-block"
                                                            >
                                                                <SkillBadge>
                                                                    {skill.icon}
                                                                </SkillBadge>
                                                                {(index+1) % 5  === 0 ? <br /> : null} 
                                                            </Box>
                                                        ))}
                                                    </Box> 
                                                </TabPanelContent>
                                            </TabPanel>
                                            <TabPanel>
                                                <TabPanelContent>
                                                    <Box>
                                                        {libraries.map((skill, index) => (
                                                            <Box
                                                            key     = {index}
                                                                display="inline-block"
                                                            >
                                                                <SkillBadge>
                                                                    {skill.icon}
                                                                </SkillBadge>
                                                                {(index+1) % 4  === 0 ? <br /> : null} 
                                                            </Box>
                                                        ))}
                                                    </Box> 
                                                </TabPanelContent>
                                            </TabPanel>
                                            <TabPanel>
                                                <TabPanelContent>
                                                    <Box>
                                                        {tools.map((skill, index) => (
                                                            <Box
                                                            key     = {index}
                                                                display="inline-block"
                                                            >
                                                                <SkillBadge>
                                                                    {skill.icon}
                                                                </SkillBadge>
                                                                {(index+1) % 5  === 0 ? <br /> : null} 
                                                            </Box>
                                                        ))}
                                                    </Box> 
                                                </TabPanelContent>
                                            </TabPanel>
                                            <TabPanel>
                                                <TabPanelContent>
                                                    <Box>
                                                        {databases.map((skill, index) => (
                                                        <Box
                                                            key     = {index}
                                                            display = "inline-block"
                                                        >
                                                            <SkillBadge>
                                                                {skill.icon}
                                                            </SkillBadge>
                                                            {(index+1) % 5  === 0 ? <br /> : null} 
                                                        </Box>
                                                        ))}
                                                    </Box> 
                                                </TabPanelContent>
                                            </TabPanel>
                                        </TabPanels>
                                </Tabs>
                        </GridItem>
                    </Grid>
                </SectionContent>
            </Section>
        </>
    )
}

export default Skills