import React, { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import cvDario from "../../CV/CVDarioMarcuzzi1.pdf";
import "./homeizq.css";

const HomeIzq = ({ scrollY, timing, screenHeight, medidasHeight }) => {
  const [transform, setTransform] = useState("");
  const [rotate] = useState("rotateY(-180deg)");
  useEffect(() => {
    switch (medidasHeight) {
      case "1300-1000":
        if (scrollY > 1600) {
          setTransform("translateX(50%)");
        } else {
          setTransform("translateX(0%)");
        }
        break;
      case "1000-700":
        if (scrollY > 1000) {
          setTransform("translateX(50%)");
        } else {
          setTransform("translateX(0%)");
        }
        break;
      default:
        break;
    }
  }, [screenHeight, scrollY]);

  return (
    <div
      className="contenedor-info"
      style={{ transform: transform, transition: timing }}
    >
      <div className="infoA">
        <div className="image-adn-carta">
          <div className="div1">
            <div className="contenedor-imagen-perfil">
              <div className="imagen"></div>
            </div>
            <h1>Dario Marcuzzi</h1>
            <div className="description">
              <p>
                Hola mi nombre es Dario Marcuzzi y me dedico al desarrollo Web.
                Con más de un año en el mundo IT adquiriendo habilidades y
                reforzando conocimientos
              </p>
            </div>
            <div className="btn-info">
              <a className="btns-info" href="/perfilDM">
                Conoceme
              </a>
              <a className="btns-info" href="mailto:dariomarcuzzi2@gmail.com">
                Mandame un email
              </a>
              <a
                className="btns-info"
                href={cvDario}
                target="_blank"
                rel="noopener noreferrer"
                download="CV-DarioMarcuzzi"
              >
                Descargar CV
              </a>
              <hr />
            </div>
            <ul className="wrapper">
              <a
                href="https://www.linkedin.com/in/dario-marcuzzi-399908224/"
                target="_blank"
                rel="noreferrer"
              >
                <li className="icon LinkedIn">
                  <a className="tooltip">LinkedIn</a>
                  <>
                    <i className="icon-faLinkedinIn">
                      <FaLinkedinIn />
                    </i>
                  </>
                </li>
              </a>
              <a
                href="https://github.com/DarioMarcuzzi"
                target="_blank"
                rel="noreferrer"
              >
                <li className="icon GitHub">
                  <a className="tooltip">GitHub</a>
                  <>
                    <i className="icon-fiGithub">
                      <FiGithub />
                    </i>
                  </>
                </li>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=542323329434"
                target="_blank"
                rel="noreferrer"
              >
                <li className="icon Whatsapp">
                  {" "}
                  <a className="tooltip">Whatsapp</a>
                  <>
                    <i className="icon-bsWhatsapp">
                      <BsWhatsapp />
                    </i>
                  </>
                </li>
              </a>
            </ul>
          </div>
          <div className="carta" style={{ transform: rotate }}>
            <div className="card-inner" style={{ transform: rotate }}>
              <div className="card-front">
                <div className="title-card">
                  <h1>Full stack developer</h1>
                </div>
                <div className="skills">
                  <h5>Skills favoritas :</h5>
                  <p>React JS</p>
                  <p>Javas Script</p>
                  <p>HTML y CSS</p>
                  <div className="softSkills">
                    <h5>SoftSkills :</h5>
                    <p>Actitud positiva</p>
                    <p>Curiosidad</p>
                    <p>Logro de objetivos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="infoB">
        <div className="title">
          <p>
            En el verano de 2022 con mi pareja tomamos la decisión de no
            depender de un lugar físico para trabajar, fue así que nos metimos
            en el maravilloso mundo de la programación, actualmente ya por
            terminar el año 2022 nos encontramos a un paso de cumplir lo que
            dijimos ese verano
          </p>
        </div>
        <div className="image-adn-carta">
          <div className="divA"></div>
          <div className="carta">
            <div className="card-back">
              <p>Back</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeIzq;
