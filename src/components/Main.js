import React from 'react';
import { Box } from '@chakra-ui/react';

const Main = ({ children }) => {
  return (
    <Box as="main" my={32}>
      {children}
    </Box>
  );
};

export default Main;