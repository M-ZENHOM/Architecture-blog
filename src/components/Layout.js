import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../Index.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
