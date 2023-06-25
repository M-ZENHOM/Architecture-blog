import React from "react";
import useGraphql from "../Hooks/useGraphql";
import { BsFacebook, BsInstagram } from "react-icons/bs";
const Footer = () => {
  const { metaData } = useGraphql();
  return (
    <>
      <div className="flex text-white w-5/6 mx-auto py-20 justify-around items-baseline md:flex-col">
        <div className="md:mb-5">
          <h2 className="font-bold text-2xl">ARCH.</h2>
          <p className="text-[#8a8672] mt-5">Address</p>
          <p className="w-[500px] md:w-[300px]">
            Office & Showroom: Villa 9, South Academy District, New Cairo, Egypt
            Headquarters: Office 311, 5th Floor, Hyde Park Business Plaza,
            90St., New Cairo
          </p>
        </div>
        <div className="md:mb-5">
          <h2 className="font-bold text-2xl mb-5">Contact</h2>
          <p>arch@arch.com</p>
          <p>+201045045253</p>
          <p>+205045045773</p>
        </div>
        <div>
          <h2 className="font-bold text-2xl mb-5">Follow</h2>
          <div className="flex space-x-5 justify-center">
            <BsFacebook />
            <BsInstagram />
          </div>
        </div>
      </div>
      <h2 className="text-center text-white py-6 md:text-sm bg-[#1e1e1e]">
        {metaData.copyright}
      </h2>
    </>
  );
};

export default Footer;
