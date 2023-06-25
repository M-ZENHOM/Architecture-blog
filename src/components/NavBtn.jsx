import { Link } from "gatsby";
import React from "react";

const NavBtn = (props) => {
  return (
    <Link
      className="bg-[#1e1e1e] p-2 rounded-md hover:bg-[#c2bd9e] hover:text-black transition-all duration-700 w-[90%]"
      to={props.location}
    >
      {props.title}
    </Link>
  );
};

export default NavBtn;
