import { Box, Container,Text } from '@chakra-ui/react'
import React from 'react'
import "./message.css"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import LOgin from '../components/LOgin'
import SignUP from '../components/SignUP'
import Header from '../components/Header'
export default function Messages() {
  return (
    <>
   <Header/>
    <Container  
    className='App'
    maxW={"xl"} centerContent
    >
      <Box
    d="flex"
    justifyContent={"center"}
    p={3}
    bg={'white'}
    w={"100%"}
    m={"15px 0 15px 0"}
    borderRadius={'lg'}
    borderWidth={"1px"}
      >
<Text pl={"40%"} display={"flex"} color={"black"} fontSize={"xl"} fontFamily={"sans-serif"} textAlign={"center"}>
Talk to HR
</Text>
      </Box>
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
