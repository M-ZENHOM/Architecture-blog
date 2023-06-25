import { Link } from "gatsby";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const Card = (props) => {
  return (
    <div className="flex flex-col items-start justify-center w-[580px] h-[207px] md:w-[300px] md:h-[170px] md:items-center  rounded-xl text-[#8a8672] uppercase bg-[#1e1e1e] p-5 hover:border-2 hover:border-[#383831]  ">
      <h6 className="text-sm">{props.point}</h6>
      <h2 className="text-white text-3xl mb-10">{props.title}</h2>
      <Link to={props.location} className="flex items-center">
        <div className="bg-[#262624] w-[30px] h-[30px]  rounded-full border-[1px] border-[#383831] flex items-center justify-center mr-3 hover:bg-[#c2bd9e] hover:text-black transition-all duration-500">
          <BsArrowUpRight />
        </div>
        details
      </Link>
    </div>
  );
};

export default Card;
