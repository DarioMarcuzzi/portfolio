import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { FaUser, FaTools, FaProjectDiagram, FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import DarkMode from "../darkMode/DarkMode";

const NavbarPerfil = () => {
  const [active, setActive] = useState("informacion");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para manejar el menú móvil
  const handleActive = (section) => {
    setActive(section);
  };

  const logo = "https://res.cloudinary.com/dcpcja2qg/image/upload/v1672409846/logoDD_logj6a.png";

  return (
    <>
      {/* Navbar Principal */}
      <nav className="fixed z-10 w-full flex items-center justify-between p-4 sm:h-16 bg-slate-50/40 backdrop-blur-xl dark:bg-slate-950/50">
        <div className="flex items-center flex-shrink-0 mr-6 h-10">
          <RouterLink to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-10 invert dark:filter-none bg-gradient-to-r from-gray-800 to-gray-900 rounded-full shadow-lg"
            />
          </RouterLink>
        </div>

        {/* Menú para pantallas grandes */}
        <div className="hidden sm:flex items-center space-x-4 bg-gray-200/50 rounded-full shadow-lg">
          {["informacion", "proyectos", "tecnologias", "experiencia", "habilidades", "educacion"].map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className={`${
                active === section ? "dark:bg-white dark:text-gray-900 bg-dark text-white" : ""
              } px-4 py-2 rounded-full font-semibold`}
              onClick={() => handleActive(section)}
              onSetActive={() => handleActive(section)}
            >
              <button className="capitalize">{section}</button>
            </ScrollLink>
          ))}
        </div>

        {/* Botón para abrir el menú en pantallas móviles */}
        <button
          className="sm:hidden text-dark dark:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        {/* DarkMode para pantallas grandes */}
        <DarkMode className="hidden sm:block" />
      </nav>

      {/* Menú Inferior para móviles */}
      {isMenuOpen && (
        <div className="fixed z-10 bottom-0 left-0 right-0 bg-gray-200 dark:bg-gradient-to-r from-gray-800 to-gray-900 p-4 flex flex-wrap justify-around items-center shadow-lg rounded-t-3xl sm:hidden">
          {["informacion", "proyectos", "tecnologias", "experiencia", "habilidades", "educacion"].map((section, index) => {
            const icons = [
              <FaUser />,
              <FaProjectDiagram />,
              <FaTools />,
              <FaLaptopCode />,
              <GiSkills />,
              <FaGraduationCap />
            ];
            return (
              <ScrollLink key={section} to={section} smooth={true} duration={500}>
                <button
                  onClick={() => handleActive(section)}
                  className={`flex flex-col items-center ${
                    active === section ? "text-dark dark:text-white" : "text-gray-500 dark:text-gray-500"
                  }`}
                >
                  {icons[index]}
                  <span className="capitalize text-xs">{section}</span>
                </button>
              </ScrollLink>
            );
          })}
        </div>
      )}

      {/* DarkMode para pantallas móviles */}
      <DarkMode className="sm:hidden" />
    </>
  );
};

export default NavbarPerfil;
