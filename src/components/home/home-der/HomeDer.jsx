import React from "react";
import cvDaiana from "../../CV/Luz_Olivares_CV.pdf";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import "./homeDer.css";

const HomeDer = () => {
  return (
    <div className="contenedor-info-der">
      <div className="infoA-der">
        <div className="title-der">
          <p>
            En el verano de 2022 con mi pareja tomamos la decisión de no
            depender de un lugar físico para trabajar, fue así que nos metimos
            en el maravilloso mundo de la programación, actualmente ya por
            terminar el año 2022 nos encontramos a un paso de cumplir lo que
            dijimos ese verano
          </p>
        </div>
        <div className="image-adn-carta-derA">
          <div className="divA"></div>
          <div className="carta-der">
            <div className="card-back">
              <p>Back</p>
            </div>
          </div>
        </div>
      </div>
      <div className="infoB-der">
        <div className="image-adn-carta-derB">
          <div className="carta-der">
            <div className="card-inner-der">
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
          <div className="div1-der">
            <div className="contenedor-imagen-perfil">
              <div className="imagen-der"></div>
            </div>

            <h1>Luz Daiana Olivares </h1>
            <div className="description">
              <p>
                Hola me llamo Luz! Estudio contabilidad y soy desarrolladora web
                full stack,
              </p>
            </div>

            <div className="btn-info">
              <a className="btns-info" href="/perfilDO">
                Conoceme
              </a>
              <a
                className="btns-info"
                href="mailto:luzdaianaolivaresolivares@gmail.com"
              >
                Mandame un email
              </a>

              <a
                className="btns-info"
                href={cvDaiana}
                target="_blank"
                rel="noopener noreferrer"
                download="CV-DaianaOlivares"
              >
                Descargar CV
              </a>
              <hr />
            </div>
            <ul className="wrapper">
              <a
                href="https://www.linkedin.com/in/luz-daiana-olivares-/"
                target="_blank"
                rel="noreferrer"
              >
                <li className="icon LinkedIn">
                  <a className="tooltip">Linkedin</a>
                  <>
                    <i className="icon-faLinkedinIn">
                      <FaLinkedinIn />
                    </i>
                  </>
                </li>
              </a>
              <a
                href="https://github.com/DaianaOli"
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
                href="https://api.whatsapp.com/send?phone=542974578565"
                target="_blank"
                rel="noreferrer"
              >
                <li className="icon Whatsapp">
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
        </div>
      </div>
    </div>
  );
};

export default HomeDer;
