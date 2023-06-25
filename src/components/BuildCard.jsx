import React from "react";

const BuildCard = (props) => {
  return (
    <div
      className={`${props.flex} w-full h-full justify-between items-center bg-[#1e1e1e] md:flex-col md:py-5`}
    >
      <div className="flex flex-col h-full w-full justify-center items-center text-white md:my-10 ">
        <h2 className=" text-[#8a8672] font-bold mb-5 uppercase text-4xl ">
          {props.title}
        </h2>
        <p className="w-[300px] text-center">{props.desc}</p>
      </div>
      <img src={props.img} alt="arch-img" />
    </div>
  );
};

export default BuildCard;
