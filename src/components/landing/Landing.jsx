import React, { useEffect, useState } from "react";
import "./Landing.css";
import { GrReactjs } from "react-icons/gr";
import { TbBrandJavascript } from "react-icons/tb";
import { DiCss3 } from "react-icons/di";
import { TiHtml5, TiLeaf } from "react-icons/ti";
import { FaNode } from "react-icons/fa";
import { SiSequelize, SiPostgresql } from "react-icons/si";

const Landing = () => {
  useEffect(() => {
    typeWriter();
  }, []);

  let i = 0;

  const text = "Bienvenido!";
  const textB = `Bienvenido Somos Daiana y Dario "Desarrolladores FullStack Web Developers" `;
  const speed = 80;
  const speed2 = 200;

  function typeWriter() {
    if (i < textB.length && i > 10) {
      console.log("i", i);
      document.getElementById("saludo1").innerHTML += textB.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else if (i < 11) {
      console.log("i", i);
      document.getElementById("saludo").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed2);
    }
  }
  return (
    <div className="parent">
      <div className="div2">
        <p id="saludo1">
          <p id="saludo"></p>
        </p>
      </div>
      <div className="div3">
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
    </div>
  );
};

export default Landing;
