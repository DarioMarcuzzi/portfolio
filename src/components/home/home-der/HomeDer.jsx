import React, { useEffect, useState } from "react";
import cvDaiana from "../../CV/Luz_Olivares_CV.pdf";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import "./homeDer.css";

const HomeDer = ({
  scrollY,
  timing,
  screenHeight,
  medidasHeight,
  dataUserDO,
}) => {
  const [transform, setTransform] = useState("");

  useEffect(() => {
    switch (medidasHeight) {
      case "1300-1000":
        if (scrollY > 1600) {
          setTransform("translateX(-50%)");
        } else {
          setTransform("translateX(0%)");
        }
        break;
      case "1000-600":
        if (scrollY > 1000) {
          setTransform("translateX(-50%)");
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
      className="contenedor-info-der"
      style={{ transform: transform, transition: timing }}
    >
      <div className="infoA-der">
        <div className="image-adn-carta-derA">
          <div className="divA"></div>
        </div>
      </div>
      <div className="infoB-der">
        <div className="image-adn-carta-derB">
          <div className="carta-der">
            <div className="card-inner-der">
              <div className="card-front">
                <div className="skills">
                  <h5>Skills favoritas :</h5>
                  <div className="iconos-carta-contenedor">
                    {dataUserDO.skill.map((skill) => {
                      if (
                        skill.nombre === "JavaScript" ||
                        skill.nombre === "Express" ||
                        skill.nombre === "React"
                      ) {
                        return (
                          <div class="social-carta" key={skill.id}>
                            <div className="knowledge">
                              <p>{skill.nombre}</p>
                              <img src={skill.icono} alt={skill.nombre} />
                            </div>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
                <div className="softSkills">
                  <h5>SoftSkills :</h5>
                  <div className="iconos-carta-contenedor">
                    {dataUserDO.skillsoft.map((skillsoft) => {
                      if (
                        skillsoft.nombre === "Resiliencia" ||
                        skillsoft.nombre === "Adaptabilidad" ||
                        skillsoft.nombre === "Trabajo en equipo"
                      ) {
                        return (
                          <div class="social-carta" key={skillsoft.id}>
                            <div className="knowledge">
                              <p>{skillsoft.nombre}</p>
                              <img
                                src={skillsoft.icono}
                                alt={skillsoft.nombre}
                              />
                            </div>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
                {/* <div className="title-card">
                  <h1>Full stack developer</h1>
                </div> */}
                {/* <div className="skills">
                  <h5>Skills favoritas :</h5>
                  <div className="iconos-carta-contenedor">
                    {dataUserDO.skill.map((skill) => {
                      if (
                        skill.nombre === "JavaScript" ||
                        skill.nombre === "Express" ||
                        skill.nombre === "React"
                      ) {
                        return (
                          <div class="social-carta" key={skill.id}>
                            <div className="knowledge">
                              <p>{skill.nombre}</p>
                              <img src={skill.icono} alt={skill.nombre} />
                            </div>
                          </div>
                        );
                      }
                    })}
                  </div>

                  <div className="softSkills">
                    <h5>SoftSkills :</h5>
                    <div className="iconos-carta-contenedor">
                      {dataUserDO.skillsoft.map((skillsoft) => {
                        if (
                          skillsoft.nombre === "Resiliencia" ||
                          skillsoft.nombre === "Adaptabilidad" ||
                          skillsoft.nombre === "Trabajo en equipo"
                        ) {
                          return (
                            <div class="social-carta" key={skillsoft.id}>
                              <div className="knowledge">
                                <p>{skillsoft.nombre}</p>
                                <img
                                  src={skillsoft.icono}
                                  alt={skillsoft.nombre}
                                />
                              </div>
                            </div>
                          );
                        }
                      })}
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="div1-der">
            <div className="contenedor-imagen-perfil">
              <div className="imagen-der"></div>
            </div>
            <h1>
              {dataUserDO.nombre} {dataUserDO.apellido}
            </h1>
            <div className="description">
              <p>{dataUserDO.comentario}</p>
            </div>
            <div className="btn-info">
              <a className="btns-info" href={"/perfil/" + dataUserDO.id}>
                Conoceme
              </a>
              <a className="btns-info" href={"mailto:" + dataUserDO.email}>
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
              <a href={dataUserDO.linkedin} target="_blank" rel="noreferrer">
                <li className="icon LinkedIn">
                  <a className="tooltip">Linkedin</a>
                  <>
                    <i className="icon-faLinkedinIn">
                      <FaLinkedinIn />
                    </i>
                  </>
                </li>
              </a>
              <a href={dataUserDO.github} target="_blank" rel="noreferrer">
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
