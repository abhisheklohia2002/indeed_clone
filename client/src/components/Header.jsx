import React from "react";
import "./header.css";
import { Button, Divider } from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


export default function Header({btnRef,onOpen,onClose}) {
  const nav = useNavigate();
  return (
    <div className="bg-black flex h-20 justify-between items-center">
      <div
        style={{ width: "35rem", border: "" }}
        className="flex text-white justify-around align-middle h-16-"
      >
        <svg
        onClick={()=>nav("/")}
          className="w-32 fill-blue-700"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 213.3"
          focusable="false"
          aria-hidden="true"
        >
          <path
            className="st0"
            d="M795.9 36.9c-2.8-3.2-6.6-4.8-11.7-4.8s-9 1.7-11.8 5.2c-2.7 3.4-4.1 8.5-4.1 15.1v48.2c-6.3-6.8-12.8-11.6-19.5-14.9-4.1-2-9-3.5-14.5-4.2-3.2-.4-6.4-.6-10-.6-16.6 0-30.1 5.7-40.4 17.2-10.2 11.4-15.3 27.3-15.3 47.7 0 9.6 1.3 18.6 3.9 26.9 2.6 8.2 6.3 15.4 11.3 21.6 5 6.1 11 10.8 17.8 14.2 6.8 3.3 14.2 5 22.3 5 3.7 0 7.2-.3 10.4-.9 2.2-.3 4.2-.9 6.3-1.5 5.1-1.7 9.9-4.1 14.2-7.2 4.5-3.2 8.9-7.3 13.4-12.3v3.2c0 6 1.5 10.6 4.5 13.9 3.1 3.2 6.9 4.9 11.4 4.9 4.7 0 8.5-1.6 11.4-4.6 2.9-3.2 4.5-7.8 4.5-14.1V50.7c0-6-1.4-10.7-4.1-13.8zM762.1 170c-2.9 6.1-6.9 10.7-11.6 13.7-4.9 3-10.2 4.4-16.1 4.4h-.1c-5.9 0-11.2-1.6-16.1-4.6-4.9-3.2-8.8-7.8-11.6-14-2.8-6.2-4.2-13.8-4.2-22.6 0-8.4 1.3-15.8 4-22 2.6-6.3 6.4-11.2 11.2-14.6 4.9-3.5 10.3-5.1 16.5-5.1h.3c5.8 0 11.1 1.7 16 5s8.8 8.1 11.7 14.3c2.9 6.2 4.3 13.8 4.3 22.4 0 9.2-1.4 16.9-4.3 23.1zm-105.6 1.4c-2.1-1.8-4.9-2.7-8.4-2.7-3.2 0-5.5.8-7.3 2.1-4.2 3.8-7.6 6.9-10.2 9.1-2.6 2.1-5.5 4.2-8.7 6.2-3 1.9-6.3 3.4-9.6 4.2-3.4.9-7 1.4-11 1.4-.9 0-1.7 0-2.5-.1-5-.3-9.7-1.7-13.9-4.2-5-2.9-8.9-7.1-12-12.6-2.9-5.7-4.5-12.3-4.6-19.7H634c8.8 0 15.6-1.3 20.4-3.6 4.9-2.5 7.3-7.8 7.3-16 0-8.9-2.4-17.6-7.1-26.1-4.7-8.5-11.6-15.5-21.1-20.8-9.4-5.4-20.6-8-33.7-8h-1c-9.7.1-18.6 1.7-26.5 4.7-8.3 3.2-15.2 7.7-21 13.5-5.5 5.9-9.9 13-12.8 21.3S534 137.4 534 147c0 20.5 6 36.6 17.9 48.6 11.3 11.3 26.9 17.3 46.8 17.9 1.1.1 2.3.1 3.5.1 9.3 0 17.7-1.2 25-3.6 7.3-2.4 13.3-5.4 18.1-9 4.8-3.7 8.4-7.5 10.7-11.4 2.4-3.9 3.6-7.4 3.6-10.3.2-3.5-.9-6.2-3.1-7.9zm-78.2-59.8c5.3-5.6 12.2-8.4 20.6-8.4h.1c8.7 0 15.8 2.7 21.1 8.2 5.3 5.5 8.5 13.9 9.2 25.1h-60.8c1.1-11 4.3-19.3 9.8-24.9zm-64.5 57c-3.3 0-5.6.8-7.4 2.1-4.1 3.8-7.6 6.9-10.2 9.1-2.6 2.1-5.4 4.2-8.6 6.2-3.1 1.9-6.3 3.4-9.7 4.2-3.3.9-7 1.4-11 1.4-.9 0-1.7 0-2.5-.1-5-.3-9.7-1.7-13.9-4.2-4.9-2.9-8.9-7.1-11.8-12.6-3.1-5.7-4.6-12.3-4.7-19.7h65.6c8.7 0 15.5-1.3 20.4-3.6 4.8-2.5 7.2-7.8 7.2-16 0-8.9-2.3-17.6-7-26.1s-11.7-15.5-21.1-20.8c-9.4-5.4-20.7-8-33.7-8h-1.1c-9.7.1-18.5 1.7-26.5 4.7-8.3 3.2-15.2 7.7-20.9 13.5-5.6 5.9-10 13-12.9 21.3-3 8.3-4.5 17.3-4.5 26.9 0 20.5 6.1 36.6 18 48.6 11.3 11.3 26.8 17.3 46.7 17.9 1.2.1 2.3.1 3.5.1 9.4 0 17.7-1.2 25-3.6 7.3-2.4 13.3-5.4 18-9 4.9-3.7 8.4-7.5 10.8-11.4 2.4-3.9 3.6-7.4 3.6-10.3 0-3.3-1.1-5.9-3.2-7.7-1.9-2-4.8-2.9-8.1-2.9zm-70-57c5.3-5.6 12.2-8.4 20.6-8.4h.1c8.7 0 15.8 2.7 21.1 8.2 5.4 5.5 8.5 13.9 9.3 25.1H434c1.2-11 4.5-19.3 9.8-24.9zm-374 80.1v-77.9c2.3.2 4.5.3 6.7.3 10.9 0 21.1-2.9 29.8-7.9v85.5c0 7.3-1.7 12.7-5.1 16.3-3.4 3.6-7.8 5.4-13.3 5.4-5.3 0-9.6-1.8-13-5.5-3.3-3.7-5.1-9-5.1-16.2zM385.6 36.9c-2.8-3.2-6.7-4.8-11.6-4.8-5.1 0-9 1.7-11.8 5.2-2.8 3.4-4.1 8.5-4.1 15.1v48.2c-6.3-6.8-12.8-11.6-19.5-14.9-4.2-2-9-3.5-14.4-4.2-3.1-.4-6.4-.6-10-.6-16.6 0-30.2 5.7-40.4 17.2-10.2 11.4-15.3 27.3-15.3 47.7 0 9.6 1.3 18.6 3.8 26.9 2.6 8.2 6.4 15.4 11.4 21.6 5 6.1 11 10.8 17.8 14.2 6.9 3.3 14.2 5 22.3 5 3.6 0 7.1-.3 10.4-.9 2.2-.3 4.2-.9 6.3-1.5 5.1-1.7 9.9-4.1 14.2-7.2 4.5-3.2 8.8-7.3 13.4-12.3v3.2c0 6 1.5 10.6 4.5 13.9 2.9 3.2 6.9 4.9 11.4 4.9s8.4-1.6 11.3-4.6c2.9-3.2 4.3-7.8 4.3-14.1V50.7c0-6-1.3-10.7-4-13.8zM351.9 170c-2.9 6.1-6.9 10.7-11.7 13.7-4.8 3-10.2 4.4-16 4.4h-.1c-5.9 0-11.2-1.6-16.1-4.6-5-3.2-8.8-7.8-11.6-14-2.8-6.2-4.2-13.8-4.2-22.6 0-8.4 1.3-15.8 3.9-22 2.7-6.3 6.4-11.2 11.3-14.6 4.8-3.5 10.3-5.1 16.4-5.1h.4c5.8 0 11.1 1.7 15.9 5 5 3.3 8.9 8.1 11.8 14.3 2.8 6.2 4.3 13.8 4.3 22.4 0 9.2-1.5 16.9-4.3 23.1zm-192-71.3v4c6-7.6 12.4-13.1 19.3-16.7 7.1-3.5 15.1-5.3 24.2-5.3 8.8 0 16.7 1.9 23.7 5.6 7 3.7 12.1 9 15.5 15.9 2.3 4 3.7 8.4 4.3 13 .6 4.5 1 10.5 1 17.7v60.6c0 6.6-1.6 11.5-4.7 14.8-3 3.4-7.1 5.1-12 5.1-5 0-9-1.7-12.2-5.2-3.2-3.4-4.7-8.3-4.7-14.7v-54.3c0-10.8-1.5-19-4.6-24.7-3-5.7-9.2-8.6-18.4-8.6-6 0-11.4 1.8-16.3 5.2-4.9 3.5-8.6 8.2-10.9 14.4-1.6 4.9-2.4 13.9-2.4 27.3v40.7c0 6.7-1.6 11.5-4.8 14.9-3.2 3.3-7.2 5-12.2 5-4.9 0-8.8-1.7-12-5.2-3.2-3.4-4.7-8.3-4.7-14.7V99.2c0-6.2 1.4-10.9 4.2-13.9 2.7-3.1 6.5-4.7 11.4-4.7 2.9 0 5.5.6 7.9 2 2.4 1.4 4.3 3.4 5.8 6.1 2 2.9 2.6 6.2 2.6 10zM70 5c22.6-7.9 48.4-7.5 67.7 8.8 3.6 3.3 7.7 7.4 9.3 12.3 2 6.1-6.8-.6-8.1-1.5-6.3-4-12.6-7.4-19.7-9.7-38-11.4-74 9.2-96.4 41.3-9.2 14.1-15.3 29-20.3 45.4-.5 1.8-1 4.1-2 5.7-1 1.8-.4-4.8-.4-5.1.8-6.8 2.2-13.3 3.9-19.9C14.4 47.5 37.2 18.4 70 5zm43.8 62.8c0 14.8-12 26.9-26.8 26.9s-26.8-12-26.8-26.9 12-26.9 26.8-26.9 26.8 12 26.8 26.9z"
          ></path>
        </svg>
        <h3 className="pt-8 custom-button h-20">Post a job</h3>
        <h3 className="pt-8 custom-button h-20">Find CVs</h3>
        <h3 className="pt-8 custom-button h-20">Products</h3>
        <h3 className="pt-8 custom-button h-20">Resources</h3>
      </div>
      <div className="flex">
        <Button onClick={()=>nav('/message')} bg={"ButtonFace"} color={""} mr={5}>
          Messages
        </Button>
        <Divider
          orientation="vertical"
          borderColor="gray.300" // Customize the color
          borderWidth="2px" // Customize the width
          height="auto"
        />
        <h3 className="text-white mr-5 ml-5 pt-2">Help Center</h3>
        <Divider
          orientation="vertical"
          borderColor="gray.300" // Customize the color
          borderWidth="2px" // Customize the width
          height="auto"
        />
        <AiOutlineUser
         ref={btnRef} onClick={()=>nav("/sign")}
          color="white"
          size={35}
          className="ml-5 mr-5 pt-2 cursor-pointer"
        />
      </div>
    </div>
  );
}
