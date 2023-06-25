import { Link } from "gatsby";
import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import NavBtn from "./NavBtn";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className=" h-[8vh]  flex justify-between items-center text-[#a19f9c]  p-3 text-xl">
      <h3>ARCH.</h3>
      <div className="hidden md:flex">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <ul
        className={`absolute  ${
          isOpen ? "md:top-[50px] top-[-100%]" : "top-[-100%]"
        }  left-0 w-full h-[50vh] flex flex-col justify-center items-center bg-[#121212] space-y-2 transition-all uppercase duration-700   `}
      >
        <NavBtn title="Home" location="/" />
        {/* <NavBtn title="Projects" location="/" />
        <NavBtn title="studio" location="/" /> */}
        <NavBtn title="Blog" location="/blog" />
        <Link
          className="bg-[#c2bd9e] text-black p-3 rounded-md hover:bg-[#c2bd9e] hover:text-black transition-all duration-700 w-[90%]"
          to="/about"
        >
          Get in touch
        </Link>
      </ul>
      {/* Main Nav */}
      <ul className="space-x-5 uppercase md:hidden text-[18px]">
        <NavBtn title="Home" location="/" />
        {/* <NavBtn title="Services" location="/" />
        <NavBtn title="Projects" location="/" />
        <NavBtn title="studio" location="/" /> */}
        <NavBtn title="Blog" location="/blog" />
        <Link
          className="bg-[#c2bd9e] text-black p-3 rounded-md hover:bg-[#c2bd9e] hover:text-black transition-all duration-700"
          to="/Contact-us"
        >
          Get in touch
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
