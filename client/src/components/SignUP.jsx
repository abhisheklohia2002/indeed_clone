import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
export default function SignUP() {
  const [show, setshow] = useState(false);
  const [name,setname] = useState("");
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");
  const [loading,setloading] = useState(false)
  const [confirmPassword,setconfirmPassword] = useState("");
  const [pic,setpic] = useState()
  const [errmessage,seterrmessage] = useState(null)



const SubmitHandlder = async(e)=>{
  e.preventDefault();
  // console.log(name,email,password,confirmPassword,pic);
  if( name!=="" || email !== ""){

    try {
      if(password === confirmPassword){
seterrmessage(null);
const serverCall = await fetch("http://localhost:8080/api/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json", // Fix the typo here
  },
  body: JSON.stringify({
   name,
   email,
   password
  }),
});
const res  = await serverCall.json();
if(res.status===201){
  console.log(res)
  seterrmessage("Successfully Registered")
}
else {

  seterrmessage('User Already Registered')
}

      }else {
seterrmessage("Wrong Password")

      }
    }
    catch (error) {
      console.log(error)
    }
  }
  else{
    seterrmessage("fill all field")

  }
}
  return (
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


        <FormControl id="confirmPassword">
          <FormLabel>password</FormLabel>
          <InputGroup>
            <Input
            value = {confirmPassword}
            onChange={(e)=>setconfirmPassword(e.target.value)}
              type={show ? "text" : "password"}
              placeholder="Enter Your confirm password"
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

        <FormControl id="pic">
          <FormLabel>Upload Your Picture</FormLabel>
          <Input value={pic} onChange={(e)=>setpic(e.target.files[0])} type="file" p={1.5} accept="image/*" />
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
      </VStack>
    </>
  );
}
