import React, { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface SectionContentProps {
    children: ReactNode | ReactNode[]
}

const SectionContent = ({ children }: SectionContentProps) => (
  <Box width="100%">
    {children}
  </Box>
);

export default SectionContent;
