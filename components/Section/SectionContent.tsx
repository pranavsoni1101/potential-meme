import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Box, Text } from '@chakra-ui/react';

interface SectionContentProps {
    children: ReactNode | ReactNode[]
}

const SectionContent = ({ children }: SectionContentProps) => (
  <>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Waiting+for+the+Sunrise&display=swap" rel="stylesheet" />
    </Head>
    <Box width="100%">
      <Box
        marginBottom= "5%"
      >
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
      </Box>
      {children}
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
    </Box>
  </>
);

export default SectionContent;
