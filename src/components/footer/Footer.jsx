import React, { useContext } from "react";
import { DarkModeContext } from "../context/contex";
import "./footer.css";
const Footer = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <div
      className={
        isDarkMode === "darkMode"
          ? "contenedor__footer-dark-mode"
          : "contenedor__footer"
      }
    >
      <footer>&copy; Copyright 2023 Daiana Olivares y Dario Marcuzzi</footer>
      <img
        src="https://res.cloudinary.com/dcpcja2qg/image/upload/v1672409846/logoDD_logj6a.png"
        alt="Logo-1"
        border="0"
        className="logo__footer"
      ></img>
    </div>
  );
};

export default Footer;
