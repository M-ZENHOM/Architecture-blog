import React from "react";
import Layout from "../components/layout";
import Seo from "../components/Seo";

const ContactUs = () => {
  return (
    <Layout>
      <div className="flex w-full md:flex-col mx-auto h-[100vh] bg-[#1e1e1e] justify-evenly items-center text-white">
        <h2 className="w-[400px] text-4xl md:text-xl md:text-center md:w-[300px]">
          FILL THE FORM TO GET A CALL, INQUIRY OR SCHEDULE A MEETING.
        </h2>
        <form className="space-y-5 md:flex md:flex-col ">
          <div className="space-x-5 md:flex md:flex-col md:items-baseline">
            <input
              className="w-[300px] outline-none  bg-transparent border-b-2 p-2"
              type="text"
              placeholder="Name"
            />
            <input
              className="w-[300px] outline-none  bg-transparent  border-b-2 p-2"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="space-x-5 md:flex md:flex-col md:items-baseline">
            <input
              className="w-[300px] outline-none  bg-transparent  border-b-2 p-2"
              type="text"
              placeholder="Phone"
            />
            <input
              className="w-[300px] outline-none  bg-transparent  border-b-2 p-2"
              type="text"
              placeholder="Unit or Plot Location?"
            />
          </div>
          <input
            className="w-[620px] md:w-[300px] outline-none  bg-transparent  border-b-2 p-2 md:ml-[20px]"
            type="text"
            placeholder="Special Requests?"
          />
          <div className="space-x-5 text-white md:flex md:flex-col md:items-baseline">
            <input
              className="w-[300px] outline-none bg-transparent  border-b-2 p-2"
              type="date"
            />
            <input
              className="w-[300px] outline-none  bg-transparent  border-b-2 p-2"
              type="time"
              placeholder="At what time?"
            />
          </div>
          <div className="flex items-center space-x-3 md:items-baseline ml-[20px] ">
            <input type="checkbox" />
            <p className="md:text-sm">
              I agree to be called an Architect from Arch.
            </p>
          </div>
          <input
            type="submit"
            className="w-[300px] p-2 bg-[#c2bd9e] rounded-md ml-[20px]"
          />
        </form>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Contact Page" />;
export default ContactUs;
