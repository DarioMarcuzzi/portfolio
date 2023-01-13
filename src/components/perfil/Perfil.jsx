import React from "react";
import { useParams } from "react-router-dom";
import db from "../../db.json";
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';
import "./perfil.css";

const Perfil = () => {
  const { id } = useParams();
  const data = db.users?.find((user) => user.id === id);

  const hacerZoom = (e) => {
    e.target.style.transform = "scale(3)";
    e.target.style.zIndex = "1";
    e.target.style.transition = "all 0.5s";
  };

  const volverZoom = (e) => {
    e.target.style.transform = "scale(1)";
    e.target.style.zIndex = "0";
  };

  const volverArriba = () => {
    window.scrollTo(0, 0);
  };


  return (
    <div className="contenedor-perfil">
      <div className="btn-volver-arriba-contenedor">
        <button className="btn-volver" onClick={() => window.history.back()}>
          Volver
        </button>
      </div>
      <div className="perfil" key={id}>
        <div className="perfil__foto">
          <h2>{data.nombre + " " + data.apellido}</h2>
          <p>{data.profesion}</p>
          <img src={data.imagen} alt="foto de perfil" />
        </div>
        <div className="perfil__info">
          <h5>Sobre mi:</h5>
          <p>{data.descripcion}</p>
          <h5>Fecha de Nacimiento:</h5>
          <p>{data.fechaNacimiento}</p>
          <h5>Pais:</h5>
          <p>{data.origen}</p>
          <h5>Redes Sociales:</h5>
          <div className="perfil__redes">
            <a href={data.linkedin} target="_blank">
              <FaLinkedin className="icono-red" title="Linkedin" />
            </a>
            <a href={data.github} target="_blank">
              <FaGithub className="icono-red" title="Github" />
            </a>
            <a href={data.email} target="_blank">
              <AiOutlineMail className="icono-red" title="Email" />
            </a>
          </div>
        </div>
      </div>
      <div className="perfil__mas">
        <h3>Skills</h3>
        <div className="perfil__skills">
          {data.skill.map((skill) => {
            return (
              <div className="social-media">
                <p>
                  <span class="tooltip-social">
                    {skill.nombre + " " + skill.porcentaje + "%"}
                  </span>
                  <img className="icono" src={skill.icono} alt="icono" />
                </p>
              </div>
            );
          })}
          {data.skillsoft?.map((skillsoft) => {
            return (
              <div className="social-media">
                <p>
                  <span class="tooltip-social">
                    {skillsoft.nombre + " " + skillsoft.porcentaje + "%"}
                  </span>
                  <img className="icono" src={skillsoft.icono} alt="icono" />
                </p>
              </div>
            );
          })}
        </div>
        <h3>Proyectos</h3>
        <div className="perfil__proyectos">
          {data.proyectos.map((proyecto) => {
            return (
              <div className="proyecto">
                <h3>{proyecto.nombre}</h3>
                <p>{proyecto.descripcion}</p>
                <div className="proyecto__imagenes">
                  {proyecto.imagen.map((imagen) => {
                    return <img src={imagen} alt="imagen" onMouseOver={hacerZoom} onMouseOut={volverZoom}/>;
                  })}
                </div>
                <div className="proyecto__links">
                  <a href={proyecto.link} target="_blank">
                    Github
                  </a>
                  <a href={proyecto.link2} target="_blank">
                    Deploy
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <h3>Experiencia</h3>
        <div className="perfil__experiencia">
          {data.experiencia?.map((experiencia) => {
            return (
              <div className="experiencia">
                <h3>{experiencia.nombre}</h3>
                <p>{experiencia.descripcion}</p>
                <img src={experiencia.imagen} alt="imagen" />
                <a href={experiencia.link} target="_blank">
                  Link
                </a>
              </div>
            );
          })}
        </div>
        <h3>Formacion</h3>
        <div className="perfil__formacion">
          {data.formacion?.map((formacion) => {
            return (
              <div className="formacion">
                <li>{formacion.nombre}</li>
                <p>{formacion.descripcion}</p>
                <img src={formacion.imagen} alt="imagen" />
                <a href={formacion.link} target="_blank">
                  Link
                </a>
              </div>
            );
          })}
        </div>
        <div className="btn-volver-arriba-contenedor">
          <button
            className="btn-volver-arriba"
            onClick={() => volverArriba()}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
