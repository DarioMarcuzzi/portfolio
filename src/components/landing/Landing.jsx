import React from 'react';
import "./Landing.css";
import Nav from "../nav/Navbar.jsx";
import {GrReactjs} from "react-icons/gr";
import {TbBrandJavascript} from "react-icons/tb";
import {DiCss3} from "react-icons/di";
import {TiHtml5} from "react-icons/ti";
import {FaNode} from "react-icons/fa";
import {SiSequelize, SiPostgresql} from "react-icons/si";

const Landing = () => {
  return (
    <div class="parent">
      <div class="div1">
        
        <Nav />
      </div>
      <div class="div2">
        <h1>Bienvenido!</h1>
        <p>Somos Dario y Daiana</p>
      </div>
      <div class="div3">
        <div className="flip">
          <div className="content">
            <div className="front">
              <h2>Desarrolladores Front</h2>
              <p>
                HTML <TiHtml5 />
              </p>
              <p>
                CSS <DiCss3 />
              </p>
              <p>
                JavaScript <TbBrandJavascript />
              </p>
              <p>
                React <GrReactjs />
              </p>
            </div>
            <div className="back">
              <h2>Desarrolladores Back</h2>
              <p>
                Node <FaNode />
              </p>
              <p>Express</p>
              <p>
                Sequelize <SiSequelize />
              </p>
              <p>
                PostgreSQL <SiPostgresql />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="div4">
      </div>
    </div>
  );
};

export default Landing;