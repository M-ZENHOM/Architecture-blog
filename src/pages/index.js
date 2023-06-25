import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/Seo";
import ImgBg from "../assets/images/BGArch.jpg";
import AboutBg from "../assets/images/AboutBg.jpg";
import BuildBg from "../assets/images/build.jpg";
import ExcBg from "../assets/images/exc.jpg";
import Card from "../components/Card";
import Achievements from "../components/Achievements";
import BuildCard from "../components/BuildCard";
import Slider from "../components/Slider";

const IndexPage = () => {
  return (
    <Layout>
      <div
        className="w-full h-[80vh] bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${ImgBg})` }}
      >
        <h2 className="text-white flex flex-col justify-center h-full p-10 uppercase text-8xl font-light md:text-4xl md:text-center">
          art of making<span className="font-bold mt-5">homes</span>
        </h2>
      </div>
      <div className="grid gap-5 w-full h-full place-items-center grid-cols-fluid mt-10 mx-auto md:grid-cols-1">
        <Card point="public" title="architecture" location="/" />
        <Card point="residentail" title="interior" location="/" />
        <Card point="social" title="urbanism" location="/" />
      </div>
      <div
        style={{ backgroundImage: `url(${AboutBg})` }}
        className="w-full h-[60vh] text-white mt-20 bg-no-repeat bg-cover bg-center "
      >
        <div className="w-full h-full bg-[#00000079] flex flex-col items-center justify-center mx-auto md:items-center md:text-center">
          <h2 className="text-6xl font-bold mb-5 md:text-3xl">ARCH.</h2>
          <p className="w-[700px] md:w-auto md:text-sm md:px-5">
            We’re an influential Design and Building Firm located in Cairo city.
            Our main target is to design and build what we designed; established
            in Architecture, Interior Design through Constructions and Fine
            Finishings. Since 1989, KE Architects has designed hundreds of
            projects; commercial, residential and entertainment, each design
            consists of its own concept which leads the firm to meet the
            individual needs and desires of the client.Thus, it grasps us
            special time and care to reach the utmost using of spaces that
            provide maximum functionality. That leads us to outstanding outcome
            which is;To guarantee clients excellent designs that perfectly meets
            their needs.
          </p>
        </div>
      </div>
      <div className="grid gap-5 w-full h-full place-items-center grid-cols-fluid my-20 mx-auto md:grid-cols-1 md:space-y-20">
        <Achievements title="clients" goals="150" signal="+" />
        <Achievements title="projects" goals="50" signal="+" />
        <Achievements title="happy clients" goals="100" signal="%" />
      </div>
      <>
        <BuildCard
          title="build"
          desc="Building and transformation of an administrative building into a luxury hotel."
          img={BuildBg}
          flex="flex"
        />
        <BuildCard
          title="EXCUISITE"
          desc="Design and execution of a coffee corner space, Downtown, New Cairo, EG."
          img={ExcBg}
          flex="flex flex-row-reverse"
        />
      </>
      <div className="flex flex-col justify-center items-center w-full h-[30vh] text-white">
        <h2 className="font-bold text-5xl mb-5 md:text-2xl">
          RAISE HUMAN COMFORT
        </h2>
        <p className="text-start text-[#8a8672]">By Creating Liveable Spaces</p>
      </div>
      <Slider />
      <h2 className="bg-[#8a8672] py-20 text-white text-4xl md:text-xl text-center font-bold">
        30 YEARS OF GOOD DESIGN
      </h2>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home Page" />;
