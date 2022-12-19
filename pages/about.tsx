import React from 'react'
import { Box, Heading, Flex } from "@chakra-ui/react";

function about() {
  return (
    <Box>
        <Flex align={'center'} justify='center'>
            <Heading fontWeight={"bold"} as={'h1'}>Hello from About</Heading>
        </Flex>
    </Box>
  )
}

export default about