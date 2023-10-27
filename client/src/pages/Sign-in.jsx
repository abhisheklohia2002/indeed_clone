import React from 'react'
import Header from '../components/Header'
import { Box, Container,Text } from '@chakra-ui/react'

import "./message.css"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import SignUP from '../components/SignUP'
import LOgin from '../components/LOgin'

export default function Signin() {
  return (
   <>
   <Header/>
   <Container
   className='App'
   mt={10}
   >

   
   <Box
      bg={"white"} w={"100%"} p={4} borderRadius={"lg"} borderWidth={"1px"}
      >


<Tabs variant='soft-rounded' >
  <TabList mb={"1em"}>
    <Tab
    width={"50%"}
    >Login</Tab>
    <Tab
      width={"50%"}
    >Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
     <LOgin/>
    </TabPanel>
    <TabPanel>
    <SignUP/>
    </TabPanel>
  </TabPanels>
</Tabs>


      </Box>
      </Container>
   </>
  )
}
