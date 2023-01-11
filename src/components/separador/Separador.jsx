import React from "react";
import "./separador.css";

const Separador = ({ text }) => {
  return (
    <div className="contenedor-separador">
      <div className="contenedor-separador-texto">
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default Separador;
