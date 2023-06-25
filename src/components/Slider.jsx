import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation } from "swiper";
import ImgOne from "../assets/SliderImages/SliderImg.jpg";
import ImgTwo from "../assets/SliderImages/SliderImg2.jpg";
import ImgThree from "../assets/SliderImages/SliderImg3.jpg";
import ImgFour from "../assets/SliderImages/SliderImg4.jpg";

const Slider = () => {
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      loop={true}
      spaceBetween={10}
      navigation={true}
      modules={[FreeMode, Navigation]}
      className="mySwiper2 h-[50vh] w-full"
    >
      <SwiperSlide>
        <Slide
          title="PURE ARCHITECTURE, TRANSFORMING THE BUILT-UP ENVIRONMENT"
          img={ImgOne}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide title="AESTHETIC INTERIOR SPACES" img={ImgTwo} />
      </SwiperSlide>
      <SwiperSlide>
        <Slide title="PUNCTUAL CONSTRUCTION MANAGEMENT" img={ImgThree} />
      </SwiperSlide>
      <SwiperSlide>
        <Slide title="BRILLIANT COMFORT SPACES" img={ImgFour} />
      </SwiperSlide>
    </Swiper>
  );
};
export const Slide = (props) => {
  return (
    <>
      <img className="relative w-full h-[50vh] object-cover" src={props.img} />
      <p
        className={`absolute top-0 text-white  text-4xl md:text-xl md:px-10 font-bold text-center bg-[#0000003f] w-full h-full flex justify-center items-center`}
      >
        {props.title}
      </p>
    </>
  );
};

export default Slider;
