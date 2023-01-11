import React from "react";
import db from "../../db.json";

const PerfilDO = () => {
  const data = db.users[1];
  return (
    <div className="contenedor-perfilDM">
      <button className="btn-volver" onClick={() => window.history.back()}>
        Volver
      </button>
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
          })}
        </div>
        <h3>Proyectos</h3>
        <div className="perfilDM__proyectos">
          {data.proyectos.map((proyecto) => {
            return (
              <div className="proyecto">
                <h3>{proyecto.nombre}</h3>
                <p>{proyecto.descripcion}</p>
                <div className="proyecto__imagenes">
                  {proyecto.imagen.map((imagen) => {
                    return <img src={imagen} alt="imagen" />;
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
        <div className="perfilDM__experiencia">
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
        <div className="perfilDM__formacion">
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
      </div>
      <div className="btn-volver-arriba-contenedor">
        <button
          className="btn-volver-arriba"
          onClick={() => window.scrollTo(0, 0)}
        ></button>
      </div>
    </div>
  );
};
export default PerfilDO;
