import React, { useEffect, useState } from "react";
import "./Landing.css";
import { GrReactjs } from "react-icons/gr";
import { TbBrandJavascript } from "react-icons/tb";
import { DiCss3 } from "react-icons/di";
import { TiHtml5 } from "react-icons/ti";
import { FaNode } from "react-icons/fa";
import { SiSequelize, SiPostgresql } from "react-icons/si";

const Landing = () => {
  const [title, setTitle] = useState("dario");
  // const [testigo, setTestigo] = useState(0);

  // useEffect(()=> {
  //   const maquinaEscribir = (text, tiempo=100,setTitle) =>{
  //     let arrayCaracteres = text.split("");
  //     setTitle("")
  //   }
  // },[])
  useEffect(() => {
    const maquina = document.getElementById("maquina");
    const maquinaEscribir = (title, tiempo = 100, etiqueta = "") => {
      let arrayCaracteres = title.split("");
      etiqueta.innerHTML = "";
      let cont = 0;
      let escribir = setInterval(() => {
        etiqueta.innerHTML += arrayCaracteres[cont];
        cont++;
        if (cont === arrayCaracteres.length) {
          clearInterval(escribir);
        }
      }, tiempo);
    };
    maquinaEscribir(title, 300, maquina);
  });

  return (
    <div className="parent">
      <div className="div2">
        <p id="maquina">{title} </p>
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
