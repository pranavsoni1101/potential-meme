import React, { ReactNode } from 'react';
import { Box, Text } from '@chakra-ui/react';

interface SectionContentProps {
    children: ReactNode | ReactNode[]
}

const SectionContent = ({ children }: SectionContentProps) => (
  <>
    <Box width="100%">
      <Box
        marginBottom= "4%"
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
          marginTop="4%"
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
