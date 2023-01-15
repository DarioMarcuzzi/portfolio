import React, { useContext } from "react";
import "./About.css";
import data from "../../db.json";
import { DarkModeContext } from "../context/contex";

const About = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  const { skills } = data;
  return (
    <div className="contenedor-about" id="about">
      <div className="contenedor-info-about">
        <div className="description-about-title">
          <p
            className={
              isDarkMode === "darkMode"
                ? "description-about-dark-mode"
                : "description-about"
            }
          >
            Actualmente diseñamos, rediseñamos y programamos nuevos proyectos y
            aplicaciones web, ya sea del lado del cliente (Front-end, UX / UI)
            como del lado del servidor (Back-end). Continuamente aprendiendo y
            adquiriendo nuevas habilidades en función a las actuales y futuras
            demandas y tendencias tecnológicas en el campo del diseño y
            desarrollo de aplicaciones web en general. Apasionados con el
            trabajo que realizamos, ofreciendo y aportando n nuestros
            conocimientos, habilidades y experiencias, así como nuevas ideas,
            soluciones, personalización y seguimiento de calidad al cliente y su
            objetivo en cada proyecto.
          </p>
        </div>
        <div className="contenedor-info-tec">
          <div
            className={
              isDarkMode === "darkMode"
                ? "contenedor-tecnologias-darkMode"
                : "contenedor-tecnologias"
            }
          >
            <h1>Tecnologias </h1>
            <div
              className={isDarkMode === "darkMode" ? "tech-dark-mode" : "tech"}
            >
              {skills.map((skill) => (
                <div className="social-media" key={skill.id}>
                  <label>
                    <p className="tooltip-social">{skill.nombre}</p>
                    <img src={skill.icono} alt={skill.nombre} />
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
