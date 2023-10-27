import React, { useRef, useState } from 'react'
import Header from '../components/Header'
import { Button,Divider,useDisclosure } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import {
  Input,

  InputGroup,
  InputLeftElement,
 
} from "@chakra-ui/react";
import {TailSpin} from "react-loader-spinner"
import {SiMinutemailer} from "react-icons/si"
export default function Home() {
  const nav = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef();
  const [message,setmessage] = useState(null);
  const[showmessage,setshowmessage]  = useState(true)
  const [loader,setloader] = useState(true);
  const Nav = useNavigate()
  const input_val = useRef(null)
  const HandleLoader = ()=>{
  if(input_val.current.value !== ""){
    setloader(false);
    setshowmessage(true)

    setTimeout(()=>{
      setloader(true)

      Nav("/sign")
    },2000)
  }
  else {
    setshowmessage(false)
    setmessage("Field is Empty")
  }
   
  }
  return (
   <>
   <Header  
   btnRef = {btnRef} onOpen = {onOpen} onClose = {onClose}
   />


   <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
    
      >
        <DrawerOverlay />
        <DrawerContent bg={"ButtonText"} >
          <DrawerCloseButton />
          <DrawerHeader>
            <div className=''>
              <img className='w-36' src="https://s40198.pcdn.co/wp-content/uploads/2021/06/Indeed_Logo_RGB-Caroline-Monahan.png" alt="" />
            </div>
            <Divider marginTop={5}/>
<h1 className='font-semibold mt-4 text-2xl cursor-pointer text-white'>
Login/Sign up to

continue with your Applications
</h1>
            <div>
              {/* <h3 className='pt-10 font-bold text-white text-center'>
              Enter your Email Address
              </h3> */}
              <InputGroup marginRight={0} marginTop={10} marginLeft={0}>
          <InputLeftElement pointerEvents="none">
         <SiMinutemailer size={22} className="mt-3" color="black" />
          </InputLeftElement>
          <Input
          ref={input_val}
            bg={"ButtonFace"}
            className="cursor-pointer"
            border={"ButtonHighlight"}
            type='email'
            width={400}
            placeholder= "Enter your Email Address"
            size="lg"
          />
        </InputGroup>
            <h3 className='text-red-700 text-sm mt-1'>
              {showmessage ? "":message}
              </h3>  
              <Button marginTop={5} width={400}
              bg={"Highlight"}
              marginLeft={0}
             onClick = {HandleLoader}
              >
               {loader?" Send OTP":(
                <TailSpin
                height="30"
                width="50"
                color="black"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
               )}
              </Button>
            </div>
          </DrawerHeader>

          <DrawerBody >

          </DrawerBody>

          <DrawerFooter>
        
          </DrawerFooter>
        </DrawerContent>
      </Drawer>


   <div className='flex justify-around align-middle h-48 p-28'>
    <div>
<h3 className='font-bold text-6xl mb-5'>
Let's hire your next great candidate. Fast.
</h3>
<Button onClick={()=>nav("/hire")} bg={"Highlight"} fontWeight={500} color={""} mt={5} width={200}>
{true?"Post a Job":(
  <Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
)}
</Button>

<Button ml = {10} onClick={()=>nav("/jobseeker")} bg={"Highlight"} fontWeight={500} color={""} mt={5} width={200}>
{true?"Search Job":(
  <Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
)}
</Button>

    </div>
    <div className='pl-32'>
      <img className='w-4/4' src="https://img.freepik.com/free-vector/cartoon-man-giving-presentation-ecological-forum-speaker-standing-stage-during-press-conference-audience-silhouettes-flat-vector-illustration-ecology-media-concept-banner-website-design_74855-24005.jpg?w=996&t=st=1696654610~exp=1696655210~hmac=eb2eff1611ef6835a7192de73766516b05828bebed587594c2f792ffad9ee7b3" alt="" srcset="" />
    </div>
   </div>
   
   </>
  )
}
