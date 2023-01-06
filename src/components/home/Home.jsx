import React from "react";
import Nav from "../nav/Navbar.jsx";
import HomeIzq from "./home-izq/HomeIzq.jsx";
import HomeDer from "./home-der/HomeDer.jsx";

import "./home.css";

const Home = () => {
  return (
    <div className="contenedor-principal-home">
      {/* <div>
        <Nav />
      </div> */}
      <div className="contenedor-home">
        <div className="contenedor-home-izq">
          <HomeIzq />
        </div>
        <div className="contenedor-home-der">
          <HomeDer />
        </div>
      </div>
    </div>
  );
};

export default Home;
