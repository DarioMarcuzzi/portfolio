import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import "./homeizq.css";

const HomeIzq = () => {
  return (
    <div className="contenedor-info">
      <div className="infoA">
        <div className="image-adn-carta">
          <div className="div1">
            <div className="contenedor-imagen-perfil">
              <div className="imagen"></div>
            </div>

            <h1>Dario Marcuzzi</h1>
            <div className="description">
              <p>
                Hola mi nombre es Dario Marcuzzi y mi expecialidad es el
                desarrollo Web. Mas de un año en esta disiplina en busqueda de
                un trabajo
              </p>
            </div>

            <div className="btn-info">
              <button className="btns-info">Conoceme</button>

              <a className="btns-info" href="mailto:dariomarcuzzi2@gmail.com">
                Mandame un email
              </a>

              <button className="btns-info">Proyectos</button>
              <hr />
            </div>

            <ul className="wrapper">
              <li className="icon facebook">
                <span className="tooltip">LinkedIn</span>
                <span>
                  <i className="fab fa-facebook-f">
                    <FaLinkedinIn />
                  </i>
                </span>
              </li>
              <li className="icon twitter">
                <span className="tooltip">GitHub</span>
                <span>
                  <i className="fab fa-twitter">
                    <FiGithub />
                  </i>
                </span>
              </li>
              <a
                href="https://api.whatsapp.com/send?phone=542323329434"
                target="_blank"
                rel="noreferrer"
              >
                <li className="icon instagram">
                  {" "}
                  <span className="tooltip">Whatsapp</span>
                  <span>
                    <i className="fab fa-instagram">
                      <BsWhatsapp />
                    </i>
                  </span>
                </li>
              </a>
            </ul>
            {/* </div> */}
          </div>
          <div className="carta">
            <div className="card-inner">
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
