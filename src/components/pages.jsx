import React, { useEffect, useState } from "react";

import Landing from "./landing/Landing";
import Navbar from "./nav/Navbar";
import Home from "./home/Home";
import About from "./about/About";
import "./pages.css";
import Footer from "./footer/Footer";
import Separador from "./separador/Separador";

const Pages = () => {
  const [particulas, setParticulas] = useState([]);

  let textA = "Sobre Nosotros";
  let textB = "Menu";

  useEffect(() => {
    crearParticulas(40);
  }, []);

  function crearParticulas(num) {
    let array = [];

    for (let i = 0; i < num; i++) {
      array.push("*");
    }

    setParticulas(array);
  }

  return (
    <div className="contenedor-de-pages">
      <div class="background">
        {particulas?.map((e) => {
          return <span key={particulas[e]}></span>;
        })}
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
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Pages;
