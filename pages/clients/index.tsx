 import { Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
 
 function Clients() {
   return (
     <Box>
        <Heading as={'h1'} fontWeight={"bold"}>Hello from Clients</Heading>
        <UnorderedList>
          <ListItem>
            <Link href="/clients/Max">Max</Link>
          </ListItem>
        </UnorderedList>
     </Box>
   )
 }
 
 export default Clients