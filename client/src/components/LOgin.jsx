import { Box, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function LOgin() {
    const [show, setshow] = useState(false);
    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [errmessage,seterrmessage] = useState(null)
    const SubmitHandlder = async(e)=>{
e.preventDefault();
if(name!== "" || email !== "" || password !== ""){
  try {
    seterrmessage(null);
const serverCall = await fetch("http://localhost:8080/api/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json", // Fix the typo here
  },
  body: JSON.stringify({
   email,
   password
  }),
});
const res = await serverCall.json();
if(res.auth){
seterrmessage(res.msg)
}else{
seterrmessage(res.msg)
}
  } catch (error) {
    console.log(error)
  }
}
else {
  seterrmessage("fill all field")
}
    }
return(

    <>
      <VStack spacing={"5px"}>
        <FormControl id="first-name">
          <FormLabel>Name</FormLabel>
          <Input value = {name} onChange={(e)=>setname(e.target.value)}  placeholder="Enter Your Name" />
        </FormControl>

        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input value = {email} onChange={(e)=>setemail(e.target.value)} placeholder="Enter Your email" />
        </FormControl>

        <FormControl id="password">
          <FormLabel>password</FormLabel>
          <InputGroup>
            <Input

            value = {password}
            onChange={(e)=>setpassword(e.target.value)}
              type={show ? "text" : "password"}
              placeholder="Enter Your password"
            />

            <InputRightElement>
              <Button
                h="2.5rem"
                w={"3.5rem"}
                size={"sm"}
                onClick={() => setshow(!show)}
              >
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>


        <Box color={"red.700"} display={"flex"} justifyContent={"right"}>
  {errmessage}
 </Box>

  
        <Button
        colorScheme="blue"
        width={"100%"}
        style={{marginTop:15}}

        onClick={SubmitHandlder}
        >
            Sign Up
        </Button>

        <Button
         colorScheme="red"
onClick={()=>{
    setemail("guest@example.com");
    setpassword("123456")
}}
         width={"100%"}
         style={{marginTop:15}}
        >
        Get Guest User Credentails
        </Button>
      </VStack>


    
    </>
)
}
