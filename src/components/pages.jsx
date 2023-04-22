import React from "react";
import Landing from "./landing/Landing";
import Navbar from "./nav/Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Footer from "./footer/Footer";


const Pages = () => {
  return (
  <div className="flex flex-col " id="pages">
        <div className="h-16">
          <Navbar />
        </div>
        <div className="flex flex-col gap-10 ">
        <div id="landing" data-aos="zoom-in"
          data-aos-duration="2000">
          <Landing />
        </div>
        <div data-aos="zoom-in"
          data-aos-duration="2000"
          id="about">
          <About />
        </div>
        <div data-aos="zoom-in"
          data-aos-duration="2000"
          id="home">
          <Home />
        </div>
        <div className="">
          <Footer />
        </div>
        </div>
      </div>
  );
};

export default Pages;
