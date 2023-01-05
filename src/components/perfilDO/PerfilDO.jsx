import React from "react";
import db from "../../db.json";
import Navbar from "../nav/Navbar";
// import "./perfilDO.css";

const PerfilDO = () => {
  const data = db.users[1];
  console.log(data);
  return (
    <div className="contenedor-perfilDM">
    <Navbar/>
      <div className="perfilDM">
        <div className="perfilDM__foto">
          <h2>{data.nombre + " " + data.apellido}</h2>
          <p>{data.profesion}</p>
          <img src={data.imagen} alt="foto de perfil" />
        </div>
        <div className="perfilDM__info">
          <h5>Sobre mi:</h5>
          <p>{data.descripcion}</p>
          <h5>Email:</h5>
          <p>{data.email}</p>
          <h5>Fecha de Nacimiento:</h5>
          <p>{data.fechaNacimiento}</p>
          <h5>Pais:</h5>
          <p>{data.origen}</p>
        </div>
      </div>
      <div className="perfilDM__mas">
        <h3>Skills</h3>
        <div className="perfilDM__skills">
          {data.skill.map((skill) => {
            return (
              <div className="social-media">
                <a href="#">
                  <span class="tooltip-social">
                    {skill.nombre + " " + skill.porcentaje + "%"}
                  </span>
                  <img className="icono" src={skill.icono} alt="icono" />
                </a>
              </div>
            );
          })}
          {data.skillsoft?.map((skillsoft) => {
                return (
                    <div className="social-media">
                    <a href="#">
                        <span class="tooltip-social">
                        {skillsoft.nombre + " " + skillsoft.porcentaje + "%"}
                        </span>
                        <img className="icono" src={skillsoft.icono} alt="icono" />
                    </a>
                    </div>
                );
                })
          }
        </div>
        <h3>Proyectos</h3>
        <div className="perfilDM__proyectos">
            {data.proyectos.map((proyecto) => {
                return (
                    <div className="proyecto">
                        <h5>{proyecto.nombre}</h5>
                        <div className="proyecto__imagenes">
                            {proyecto.imagen.map((imagen) => {
                                return (
                                    <img src={imagen} alt="imagen" />
                                )
                            })}
                        </div>
                        <div className="proyecto__links">
                        <a href={proyecto.link}> Git
                        </a>Deploy
                        <a href={proyecto.link}>
                        </a>
                        </div>
                    </div>
                )
            })}
        </div>
        <h3>Experiencia</h3>
        <div className="perfilDM__experiencia">
          {data.experiencia?.map((experiencia) => {
            return (
              <div className="experiencia">
                <h5>{experiencia.nombre}</h5>
                <p>{experiencia.descripcion}</p>
              </div>
            );
          })}
        </div>
        <h3>Formacion</h3>
        <div className="perfilDM__formacion">
          {data.formacion?.map((formacion) => {
            return (
              <div className="formacion">
                <h5>{formacion.nombre}</h5>
                <p>{formacion.descripcion}</p>
                <img src={formacion.imagen} alt="imagen" />
              </div>
            );
          })}
        </div>
        <h3>Otros datos</h3>
      </div>
    </div>
  );
};
export default PerfilDO;
