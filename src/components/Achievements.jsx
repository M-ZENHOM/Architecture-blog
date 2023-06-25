import { useInView } from "framer-motion";
import React, { useRef } from "react";
import CountUp from "react-countup";

const Achievements = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex flex-col justify-center items-center text-white uppercase">
      <h4 className="text-[#8a8672] text-sm">{props.title}</h4>
      <h2 ref={ref} className="text-6xl">
        <CountUp end={isInView && props.goals} />
        {props.signal}
      </h2>
    </div>
  );
};

export default Achievements;
