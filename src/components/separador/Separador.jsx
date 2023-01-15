import React, { useContext } from "react";
import { DarkModeContext } from "../context/contex";
import "./separador.css";

const Separador = ({ text }) => {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <div
      className={
        isDarkMode ? "contenedor-separador-dark-mode" : "contenedor-separador"
      }
    >
      <div className="contenedor-separador-texto">
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default Separador;
