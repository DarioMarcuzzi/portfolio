import React from "react";
import Navbar from "./nav/Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Footer from "./footer/Footer";

const Pages = () => {
  return (
    <div className="flex flex-col gap-8" id="pages">
      <div className="">
        <Navbar />
      </div>
      <div className="flex flex-col gap-10 ">
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
          <Footer />
      </div>
    </div>
  );
};

export default Pages;
