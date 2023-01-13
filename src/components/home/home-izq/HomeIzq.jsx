import React, { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import cvDario from "../../CV/CVDarioMarcuzzi1.pdf";
import "./homeizq.css";

const HomeIzq = ({
  scrollY,
  timing,
  screenHeight,
  medidasHeight,
  dataUserDM,
}) => {
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
      case "1000-600":
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

  console.log(dataUserDM);
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
            <h1>
              {dataUserDM.nombre} {dataUserDM.apellido}
            </h1>
            <div className="description">
              <p>{dataUserDM.comentario}</p>
            </div>
            <div className="btn-info">
              <a className="btns-info" href={"/perfil/" + dataUserDM.id}>
                Conoceme
              </a>
              <a className="btns-info" href={"mailto:" + dataUserDM.email}>
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
              <a href={dataUserDM.linkedin} target="_blank" rel="noreferrer">
                <li className="icon LinkedIn">
                  <a className="tooltip">LinkedIn</a>
                  <>
                    <i className="icon-faLinkedinIn">
                      <FaLinkedinIn />
                    </i>
                  </>
                </li>
              </a>
              <a href={dataUserDM.github} target="_blank" rel="noreferrer">
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
                  <div className="iconos-carta-contenedor">
                    {dataUserDM.skill.map((skill) => {
                      if (
                        skill.nombre === "React" ||
                        skill.nombre === "CSS" ||
                        skill.nombre === "HTML"
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
                      {dataUserDM.skillsoft.map((skillsoft) => {
                        if (
                          skillsoft.nombre === "Comunicación" ||
                          skillsoft.nombre === "Resolución de problemas" ||
                          skillsoft.nombre === "Creatividad"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="infoB"></div>
    </div>
  );
};

export default HomeIzq;
