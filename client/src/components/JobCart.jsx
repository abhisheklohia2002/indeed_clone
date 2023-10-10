import React from "react";
import "./jobcart.css";
import { CiSaveDown2 } from "react-icons/ci";
import { SlOptionsVertical } from "react-icons/sl";
import { Button } from "@chakra-ui/react";
export default function JobCart({
  id,
  role,
  company,
  location,
  packages,
  profile,
  date,
}) {
  const randomStarsCount = Math.floor(Math.random() * 5) + 1;

  const stars = Array.from({ length: randomStarsCount }, (_, index) => (
    <span key={index}>&#9733;</span>
  ));
  return (
    <div className="main_cart pl-5 pt-2 p-3 mb-3" key={id}>
      <div className="flex justify-between align-middle">
        <h3 className="text-sm text-red-500">new</h3>
        <SlOptionsVertical size={22} className="pt-1" />
      </div>
      <div className="font-bold text-lg mt-1">{profile}</div>
      <div className="text-md mt-0">
        {company} {stars}
      </div>
      <div className="text-md mt-0">{location}</div>
      <div className="text-md mt-2">
        <Button height={8} bgColor={"ButtonHighlight"}>
          $ {packages} a year
        </Button>
        <Button height={8} ml={5}>
          {role}
        </Button>
      </div>

      <div className="mt-3 pl-3 pr-3">
        <ul>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
            cupiditate dolorum architecto, necessitatibus quisquam nulla et qui
            laboriosam quam aspernatur!
          </li>
        </ul>
      </div>

      <div className="flex justify-between mt-3 mb-2 pr-2">
        <h3 className="flex">
          <span className="pt-2 font-bold cursor-pointer">Save to Later</span>
          <CiSaveDown2 size={20} fontWeight={600} className="mt-3" />
        </h3>
        <Button bgColor={"Highlight"}>Apply on Company</Button>
      </div>
      <div className="text-sm">{date} day By Posted</div>
    </div>
  );
}
