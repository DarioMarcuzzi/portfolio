import React, { useContext, useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import { DarkModeContext } from "../context/contex";
import { darkMode } from "../configJS/config";
import DarkMode from "../darkMode/DarkMode";

const Navbar = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div
      className={
        isDarkMode === "darkMode"
          ? "contenedor-nav-principal-dark-mode"
          : "contenedor-nav-principal"
      }
    >
      <div className="logo-nav">
        <Link to="landing" smooth={true} duration={500}>
          <img
            src="https://res.cloudinary.com/dcpcja2qg/image/upload/v1672409846/logoDD_logj6a.png"
            alt="Logo"
          />
        </Link>
      </div>
      <DarkMode />
      <div className="btn-links-nav">
        <Link to="about" smooth={true} duration={500}>
          <button>Sobre nosotros</button>
        </Link>
        <Link to="home" smooth={true} duration={500}>
          <button>Menu</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
