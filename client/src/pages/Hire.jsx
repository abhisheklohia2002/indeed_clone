import React, { useRef, useState } from "react";
import Header from "../components/Header";
import {
  Input,
  Select,
  Box,
  Stack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  Grid
} from "@chakra-ui/react";
import "./job.css";
import {ImLocation} from "react-icons/im"
import {BiUser} from "react-icons/bi"
import {MdRememberMe} from "react-icons/md"
import {BsFillBuildingFill} from "react-icons/bs"
import { useNavigate } from "react-router-dom";
import {AiTwotonePhone} from "react-icons/ai"
import {RiMoneyDollarCircleLine} from "react-icons/ri"
export default function Hire() {

const text_btn = useRef(null)
const [inputtext,setinputtext] = useState({
company:"",
profile:"",
pack:"",
role:"",
location:""
})
  const nav = useNavigate();
  const [next,setnext] = useState(true)
  const [errorMessage, seterrorMessage] = useState(null);
  const [isSignInForm, setisSignInForm] = useState(true);

let name,value;

  const HandleChangeText = (e)=>{
name = e.target.name,
value = e.target.value
setinputtext({
  ...inputtext,[name]:value
})
console.log(inputtext)
  }

const HandleClickPost = async()=>{
  
   
try{
  setnext(false);
    
 let text = "Submit"
 if(text === text_btn.current.textContent){
if(inputtext.company !== "" || inputtext.location !== "" || inputtext.pack !== "" || inputtext.role !== "" || inputtext.profile !== "" ){
seterrorMessage(null);
const serverCall = await fetch("http://localhost:8080/api/hiring", {
  method: "POST",
  headers: {
    "Content-Type": "application/json", // Fix the typo here
  },
  body: JSON.stringify({
    profile: inputtext.profile,
    company: inputtext.company,
    location: inputtext.location,
    package: inputtext.pack,
    role: inputtext.role,
  }),
});

const res = await serverCall.json();
console.log(res);
if(res.status==200){
  nav("/jobseeker")
}
}
else {
  seterrorMessage("Please fill all field")
}

 }
}
catch(e){
console.log(e)
}
  
 
  }
 
  return (
    <>
      <Header />
      <img
        className="absolute h-screen w-screen"
        src="https://www.protocol.com/media-library/indeed-logo-against-a-blue-background.png?id=30053958&width=1245&height=700&quality=85&coordinates=0%2C0%2C1%2C0"
        alt=""
      />
     
<Stack className="absolute" ml={"20%"} pt={20} >
  <Box mb={10} className="text-black font-semibold text-2xl pr-24">
  You haven't posted a job before, so you'll need to create an employer account.

  </Box>
  {
    next === true ?(<Grid templateColumns="repeat(2, 1fr)" gap={5}>
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <BsFillBuildingFill />
      </InputLeftElement>
      <Input  required color={"CaptionText"} type="text" onChange={HandleChangeText} value = {inputtext.company} name = "company" placeholder="Your Company Name" />
    </InputGroup>
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <MdRememberMe />
      </InputLeftElement>
      <Input required color={"CaptionText"} type="text" placeholder="Member Number" />
    </InputGroup>
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <BiUser />
      </InputLeftElement>
      <Input required color={"CaptionText"} type="text" placeholder="Enter Your Name" />
    </InputGroup>
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <AiTwotonePhone />
      </InputLeftElement>
      <Input required color={"CaptionText"} type="number" placeholder="Enter Your Number" />
    </InputGroup>:
  
  
  </Grid>):<Grid templateColumns="repeat(2, 1fr)" gap={5}>
  <InputGroup>
    <InputLeftElement pointerEvents="none">
      <BsFillBuildingFill />
    </InputLeftElement>
    <Input  color={"CaptionText"} onChange={HandleChangeText} value={inputtext.profile} type="text" name = "profile" placeholder="Your Job title" />
  </InputGroup>
  <InputGroup>
    <InputLeftElement pointerEvents="none">
      <RiMoneyDollarCircleLine />
    </InputLeftElement>
    <Input  value={inputtext.pack} onChange={HandleChangeText} color={"CaptionText"} type="text" name = "pack"  placeholder="Salary pack" />
  </InputGroup>
  <InputGroup>
    <InputLeftElement pointerEvents="none">
      <BiUser />
    </InputLeftElement>
    <Input value={inputtext.role} onChange={HandleChangeText}   color={"CaptionText"} type="text" name = "role" placeholder="Part Time/Full Time" />
  </InputGroup>
  <InputGroup>
    <InputLeftElement pointerEvents="none">
      <ImLocation />
    </InputLeftElement>
    <Input onChange={HandleChangeText} value = {inputtext.location}  color={"CaptionText"} type="text" name="location" placeholder="Enter location" />
  </InputGroup>:


</Grid>
  }
  <h3 className="text-red-700 font-bold">
    {
      seterrorMessage==null ?"":errorMessage
    }
  </h3>
<Grid templateColumns="repeat(2, 1fr)" gap={5}>
  <Button
  bg={"Highlight"}
  onClick={()=>setnext(true)}
  >
    Previous Page
  </Button>
<Button
bg={"Highlight"}
ref={text_btn}
onClick={()=>HandleClickPost()}
>
  {next? "Next Page":"Submit"}
</Button>
</Grid>
</Stack>
  

         </>
  );
}
