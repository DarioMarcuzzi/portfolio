import React from 'react';
import "./Landing.css";
import Nav from "../nav/Navbar.jsx";

const Landing = () => {
  return (
    <div className="contenedor">
      <Nav />
      <div className="contenedor-divs">
        <div className="contenedor__arriba">
          <div className="contenedor-texto">
            <h1>Bienvenido!</h1>
            <p>Somos Dario y Daiana</p>
          </div>
          <div className="flip">
              <div className="content">
                <div className="front">
                  <h2>Desarrolladores Front</h2>
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>JavaScript</p>
                  <p>React</p>
                </div>
                <div className="back">
                  <h2>Desarrolladores Back</h2>
                  <p>Node</p>
                  <p>Express</p>
                  <p>Sequelize</p>
                  <p>PostgreSQL</p>
                </div>
              </div>
            </div>
        </div>
        <div className="contenedor-img">
          {/* <img src="https://i.ibb.co/0nQqZ3r/Logo.png" alt="Logo" border="0" /> */}
        </div>
      </div>
    </div>
  );
};

export default Landing;