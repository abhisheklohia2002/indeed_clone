import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import {
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  Divider,
} from "@chakra-ui/react";

import { GrLocation } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";
import "./job.css";
import JobCart from "../components/JobCart";
export default function JobSeeker() {
  const [showjob, setshowjob] = useState([]);

  const show_focus = useRef(null);
  const inputfocus = useRef(null);

  const GetAll_job = async () => {
    try {
      const server = await fetch(`http://localhost:8080/api/job`);
      const res = await server.json();
      const msg = res.msg;
      setshowjob(msg);
      console.log(showjob);
    } catch (error) {
      console.log(error);
    }
  };

  const FindJobHandler = async () => {
    const searches = show_focus.current.value || inputfocus.current.value;
    console.log(searches);
    try {
      const searchurl = await fetch(`http://localhost:8080/api/search?query=${searches}`);
      const server_res = await searchurl.json();
      console.log(server_res);
      show_focus.current.focus();
      inputfocus.current.focus();
      setshowjob(server_res.alladd)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetAll_job();
  }, []);
  return (
    <>


      <Header />


      <div
        className="flex w-4/6 m-auto mt-10 pl-16 pr-16 h-20 pt-3 "
        style={{
          border: "2px solid lightgray",
          borderRight: "0px",
          borderLeft: "0px",
          
        }}
      >
        <InputGroup marginRight={2}>
          <InputLeftElement pointerEvents="none">
            <BsSearch size={20} className="mt-3" color="gray.300" />
          </InputLeftElement>
          <Input
            bg={"ButtonFace"}
            className="cursor-pointer"
            border={"ButtonHighlight"}
            ref={show_focus}
            width={400}
            placeholder="Job title,Keywords or company"
            size="lg"
          />
        </InputGroup>
        <InputGroup marginRight={2}>
          <InputLeftElement pointerEvents="none">
            <GrLocation size={20} className="mt-3" />
          </InputLeftElement>
          <Input
            bg={"ButtonFace"}
            className="cursor-pointer"
            border={"ButtonHighlight"}
            ref={inputfocus}
            width={400}
            placeholder="City,State,or pin code"
            size="lg"
          />
        </InputGroup>
        <Button
          onClick={FindJobHandler}
          bg={"Highlight"}
          color={""}
          height={45}
          width={200}
          marginLeft={0}
        >
          Find Job
        </Button>
      </div>

      <div className="flex justify-evenly mt-20 font-semibold text-2xl">
        <div className="cursor-pointer new_job">Your News Jobs</div>
        <div className="cursor-pointer new_job">Recent Search</div>
      </div>
      <Divider mt={2} width="100%" borderColor="gray" />

      <div className="mt-5">
        {showjob.map((e, i) => (
          <JobCart
          key = {i}
            id={e._id}
            role={e.role}
            company={e.company}
            location={e.location}
            packages={e.package}
            profile={e.profile}
            date={e.date}
          />
        ))}
      </div>
    </>
  );
}
