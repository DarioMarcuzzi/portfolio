import React from "react";

import Landing from "./landing/Landing";
import Navbar from "./nav/Navbar";
import Home from "./home/Home";
import About from "./about/About";
import "./pages.css";
import Footer from "./footer/Footer";
import Separador from "./separador/Separador";

const Pages = () => {
  let textA = "Sobre Nosotros";
  let textB = "Menu";
  return (
    <div className="contenedor-de-pages">
      <div class="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <Navbar />
        <div className="landing">
          <Landing />
        </div>
        <div className="separador">
          <Separador text={textA} />
        </div>
        <div className="about">
          <About />
        </div>
        <div className="separador">
          <Separador text={textB} />
        </div>
        <div className="home">
          <Home />
        </div>{" "}
        *
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Pages;
