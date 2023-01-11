import React from "react";
import "./About.css";
import data from "../../db.json";

const About = () => {
  const { skills } = data;
  return (
    <div class="contenedor-about" id="about">
      <div class="contenedor-info-about">
        <div class="description-about-title">
          <h1>Sobre Nosotros</h1>
          <p className="description-about">
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
        <div class="contenedor-info-tec">
          <div class="contenedor-tecnologias">
            <h1>Tecnologias </h1>
            <div className="tech">
              {skills.map((skill) => (
                <div class="social-media" key={skill.id}>
                  <a href="#">
                    <p class="tooltip-social">{skill.nombre}</p>
                    <img src={skill.icono} alt={skill.nombre} />
                  </a>
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
