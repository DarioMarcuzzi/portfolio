import React from "react";
import "./About.css";
import Nav from "../nav/Navbar";
import { GrHtml5, GrCss3, GrReactjs } from "react-icons/gr";
import { TbBrandJavascript } from "react-icons/tb";
import { FaBootstrap, FaNodeJs } from "react-icons/fa";
import {
  SiGithub,
  SiHeroku,
  SiIcloud,
  SiMysql,
  SiPostgresql,
  SiSequelize,
  SiVercel,
  SiVisualstudio,
} from "react-icons/si";
import { VscJson } from "react-icons/vsc";

const About = () => {
  return (
    <div class="background">
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>

    <div class="container-fluid">
      <div class="row">
        <Nav />
        <div class="col-md-12">
          <h1>Sobre Nosotros</h1>
          <p className="description">
            Actualmente diseñamos, rediseñamos y programamos nuevos proyectos y
            sitios de aplicaciones web, ya sea del lado del cliente (Front-end,
            UX / UI) como del lado del servidor (Back-end). Continuamente
            aprendiendo y adquiriendo nuevas habilidades en función a las
            actuales y futuras demandas y tendencias tecnológicas en el campo
            del diseño y desarrollo de aplicaciones web en general. Apasionados
            con el trabajo que realizamos, ofreciendo y aportando n nuestros
            conocimientos, habilidades y experiencias, así como nuevas ideas,
            soluciones, personalización y seguimiento de calidad al cliente y su
            objetivo en cada proyecto.
          </p>
        </div>
        <div class="row">
          <div class="col">
            <h1>Desarrollo FrontEnd </h1>
            <div className="tech">
              <div class="social-media">
                <a href="#">
                  <span class="tooltip-social">HTML</span>
                  <GrHtml5 />
                </a>
                <a href="#">
                  <GrCss3 />
                  <span class="tooltip-social">CSS</span>
                </a>
                <a href="#">
                  <TbBrandJavascript />
                  <span class="tooltip-social">JavaScript</span>
                </a>
                <a href="#">
                  <GrReactjs />
                  <span class="tooltip-social">React</span>
                </a>
                <a href="#">
                  <SiVercel />
                  <span class="tooltip-social">Vercel</span>
                </a>
                <a href="#">
                  <FaBootstrap />
                  <span class="tooltip-social">Bootstrap</span>
                </a>
                <a href="#">
                  <SiVisualstudio />
                  <span class="tooltip-social">Visual Studio</span>
                </a>
                <a href="#">
                  <SiGithub />
                  <span class="tooltip-social">Github</span>
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <h1>Desarrollo BackEnd </h1>
            <div className="tech">
              <div class="social-media">
                <a href="#">
                  <span class="tooltip-social">Mysql</span>
                  <SiMysql />
                </a>
                <a href="#">
                  <span class="tooltip-social">Postgresql</span>
                  <SiPostgresql />
                </a>
                <a href="#">
                  <span class="tooltip-social">Sequelize</span>
                  <SiSequelize />
                </a>
                <a href="#">
                  <span class="tooltip-social">NodeJs</span>
                  <FaNodeJs />
                </a>
                <a href="#">
                  <span class="tooltip-social">Json</span>
                  <VscJson />
                </a>
                <a href="#">
                  <span class="tooltip-social">Heroku</span>
                  <SiHeroku />
                </a>
                <a href="#">
                  <span class="tooltip-social">Coudinary</span>
                  <SiIcloud />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
